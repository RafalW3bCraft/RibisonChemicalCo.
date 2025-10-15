<?php



namespace PHPMailer\PHPMailer;


class PHPMailer
{
    const CHARSET_ASCII = 'us-ascii';
    const CHARSET_ISO88591 = 'iso-8859-1';
    const CHARSET_UTF8 = 'utf-8';

    const CONTENT_TYPE_PLAINTEXT = 'text/plain';
    const CONTENT_TYPE_TEXT_CALENDAR = 'text/calendar';
    const CONTENT_TYPE_TEXT_HTML = 'text/html';
    const CONTENT_TYPE_MULTIPART_ALTERNATIVE = 'multipart/alternative';
    const CONTENT_TYPE_MULTIPART_MIXED = 'multipart/mixed';
    const CONTENT_TYPE_MULTIPART_RELATED = 'multipart/related';

    const ENCODING_7BIT = '7bit';
    const ENCODING_8BIT = '8bit';
    const ENCODING_BASE64 = 'base64';
    const ENCODING_BINARY = 'binary';
    const ENCODING_QUOTED_PRINTABLE = 'quoted-printable';

    const ENCRYPTION_STARTTLS = 'tls';
    const ENCRYPTION_SMTPS = 'ssl';

    const ICAL_METHOD_REQUEST = 'REQUEST';
    const ICAL_METHOD_PUBLISH = 'PUBLISH';
    const ICAL_METHOD_REPLY = 'REPLY';
    const ICAL_METHOD_ADD = 'ADD';
    const ICAL_METHOD_CANCEL = 'CANCEL';
    const ICAL_METHOD_REFRESH = 'REFRESH';
    const ICAL_METHOD_COUNTER = 'COUNTER';
    const ICAL_METHOD_DECLINECOUNTER = 'DECLINECOUNTER';

    
    public $Priority;

    
    public $CharSet = self::CHARSET_ISO88591;

    
    public $ContentType = self::CONTENT_TYPE_PLAINTEXT;

    
    public $Encoding = self::ENCODING_8BIT;

    
    public $ErrorInfo = '';

    
    public $From = '';

    
    public $FromName = '';

    
    public $Sender = '';

    
    public $ReplyToName = '';

    
    public $ReplyTo = '';

    
    public $Subject = '';

    
    public $Body = '';

    
    public $AltBody = '';

    
    public $Host = 'localhost';

    
    public $Port = 25;

    
    public $Username = '';

    
    public $Password = '';

    
    public $Timeout = 300;

    
    public $SMTPOptions = [];

    
    public $SMTPAuth = false;

    
    public $SMTPSecure = '';

    
    public $SMTPAutoTLS = true;

    
    public $SMTPKeepAlive = false;

    
    public $SMTPDebug = 0;

    
    public $Debugoutput = 'echo';

    
    public $SingleTo = false;

    
    public $smtp;

    
    protected $to = [];

    
    protected $cc = [];

    
    protected $bcc = [];

    
    protected $ReplyTo = [];

    
    protected $all_recipients = [];

    
    protected $RecipientsQueue = [];

    
    protected $ReplyToQueue = [];

    
    public function __construct($exceptions = null)
    {
        if (null !== $exceptions) {
            $this->exceptions = (bool) $exceptions;
        }

        
        $this->Debugoutput = (strpos(PHP_SAPI, 'cli') !== false ? 'echo' : 'html');
    }

    
    public function __destruct()
    {
        
        $this->smtpClose();
    }

    
    public function addAddress($address, $name = '')
    {
        return $this->addOrEnqueueAnAddress('to', $address, $name);
    }

    
    public function addCC($address, $name = '')
    {
        return $this->addOrEnqueueAnAddress('cc', $address, $name);
    }

    
    public function addBCC($address, $name = '')
    {
        return $this->addOrEnqueueAnAddress('bcc', $address, $name);
    }

    
    protected function addOrEnqueueAnAddress($kind, $address, $name)
    {
        $address = trim($address);
        $name = trim(preg_replace('/[\r\n]+/', '', $name)); 
        $pos = strrpos($address, '@');
        if (false === $pos) {
            
            $error_message = sprintf(
                '%s (%s): %s',
                $this->lang('invalid_address'),
                $kind,
                $address
            );
            $this->setError($error_message);
            $this->edebug($error_message);
            if ($this->exceptions) {
                throw new Exception($error_message);
            }

            return false;
        }
        $params = [$kind, $address, $name];
        
        if (static::idnSupported() && $this->has8bitChars(substr($address, ++$pos))) {
            if ('ReplyTo' !== $kind) {
                if (!array_key_exists($address, $this->RecipientsQueue)) {
                    $this->RecipientsQueue[$address] = $params;

                    return true;
                }
            } elseif (!array_key_exists($address, $this->ReplyToQueue)) {
                $this->ReplyToQueue[$address] = $params;

                return true;
            }

            return false;
        }

        
        return call_user_func_array([$this, 'addAnAddress'], $params);
    }

    
    protected function addAnAddress($kind, $address, $name = '')
    {
        if (!in_array($kind, ['to', 'cc', 'bcc', 'Reply-To'])) {
            $error_message = sprintf(
                '%s: %s',
                $this->lang('Invalid recipient kind'),
                $kind
            );
            $this->setError($error_message);
            $this->edebug($error_message);
            if ($this->exceptions) {
                throw new Exception($error_message);
            }

            return false;
        }
        if (!static::validateAddress($address)) {
            $error_message = sprintf(
                '%s (%s): %s',
                $this->lang('invalid_address'),
                $kind,
                $address
            );
            $this->setError($error_message);
            $this->edebug($error_message);
            if ($this->exceptions) {
                throw new Exception($error_message);
            }

            return false;
        }
        if ('Reply-To' !== $kind) {
            if (!array_key_exists(strtolower($address), $this->all_recipients)) {
                $this->{$kind}[] = [$address, $name];
                $this->all_recipients[strtolower($address)] = true;

                return true;
            }
        } elseif (!array_key_exists(strtolower($address), $this->ReplyTo)) {
            $this->ReplyTo[strtolower($address)] = [$address, $name];

            return true;
        }

        return false;
    }

    
    public function isSMTP()
    {
        $this->Mailer = 'smtp';
    }

    
    public function isMail()
    {
        $this->Mailer = 'mail';
    }

    
    public function isSendmail()
    {
        $ini_sendmail_path = ini_get('sendmail_path');
        if (false === stripos($ini_sendmail_path, 'sendmail')) {
            $this->Sendmail = '/usr/sbin/sendmail';
        } else {
            $this->Sendmail = $ini_sendmail_path;
        }
        $this->Mailer = 'sendmail';
    }

    
    public function isQmail()
    {
        $ini_sendmail_path = ini_get('sendmail_path');
        if (false === stripos($ini_sendmail_path, 'qmail')) {
            $this->Sendmail = '/var/qmail/bin/qmail-inject';
        } else {
            $this->Sendmail = $ini_sendmail_path;
        }
        $this->Mailer = 'qmail';
    }

    
    public function msgHTML($message, $altmessage = '', $ishtml = true)
    {
        if ($ishtml) {
            $this->isHTML();
        } else {
            $this->isHTML(false);
        }
        $this->Body = $message;
        if ('' !== $altmessage) {
            $this->AltBody = $altmessage;
        } elseif ($ishtml) {
            $this->AltBody = static::html2text($message);
        }
    }

    
    public function isHTML($isHtml = true)
    {
        if ($isHtml) {
            $this->ContentType = static::CONTENT_TYPE_TEXT_HTML;
        } else {
            $this->ContentType = static::CONTENT_TYPE_PLAINTEXT;
        }
    }

    
    public function send()
    {
        try {
            if (!$this->preSend()) {
                return false;
            }

            return $this->postSend();
        } catch (Exception $exc) {
            $this->mailHeader = '';
            $this->setError($exc->getMessage());
            if ($this->exceptions) {
                throw $exc;
            }

            return false;
        }
    }

    
    public function preSend()
    {
        if (
            'smtp' === $this->Mailer
            || ('mail' === $this->Mailer && (\PHP_VERSION_ID >= 80000 || stripos(PHP_OS, 'WIN') === 0))
        ) {
            
            
            static::setLE(static::CRLF);
        } else {
            
            static::setLE(PHP_EOL);
        }

        
        if (
            'mail' === $this->Mailer
            && ((\PHP_VERSION_ID >= 70000 && \PHP_VERSION_ID < 70017)
                || (\PHP_VERSION_ID >= 70100 && \PHP_VERSION_ID < 70103))
            && ini_get('mail.add_x_header') === '1'
            && stripos(PHP_OS, 'WIN') === 0
        ) {
            trigger_error($this->lang('buggy_php'), E_USER_WARNING);
        }

        try {
            $this->error_count = 0; 
            $this->mailHeader = '';

            
            foreach (array_merge($this->RecipientsQueue, $this->ReplyToQueue) as $params) {
                $params[1] = $this->punyencodeAddress($params[1]);
                call_user_func_array([$this, 'addAnAddress'], $params);
            }
            if (count($this->to) + count($this->cc) + count($this->bcc) < 1) {
                throw new Exception($this->lang('provide_address'), self::STOP_CRITICAL);
            }

            
            foreach (['From', 'Sender', 'ConfirmReadingTo'] as $address_kind) {
                $this->{$address_kind} = trim($this->{$address_kind});
                if (empty($this->{$address_kind})) {
                    continue;
                }
                $this->{$address_kind} = $this->punyencodeAddress($this->{$address_kind});
                if (!static::validateAddress($this->{$address_kind})) {
                    $error_message = sprintf(
                        '%s (%s): %s',
                        $this->lang('invalid_address'),
                        $address_kind,
                        $this->{$address_kind}
                    );
                    $this->setError($error_message);
                    $this->edebug($error_message);
                    if ($this->exceptions) {
                        throw new Exception($error_message);
                    }

                    return false;
                }
            }

            
            if ($this->alternativeExists()) {
                $this->ContentType = static::CONTENT_TYPE_MULTIPART_ALTERNATIVE;
            }

            $this->setMessageType();
            
            if (!$this->AllowEmpty && empty($this->Body)) {
                throw new Exception($this->lang('empty_message'), self::STOP_CRITICAL);
            }

            
            $this->Subject = trim($this->Subject);
            
            $this->MIMEHeader = '';
            $this->MIMEBody = $this->createBody();
            
            $tempheaders = $this->MIMEHeader;
            $this->MIMEHeader = $this->createHeader();
            $this->MIMEHeader .= $tempheaders;

            
            
            if ('mail' === $this->Mailer) {
                if (count($this->to) > 0) {
                    $this->mailHeader .= $this->addrAppend('To', $this->to);
                } else {
                    $this->mailHeader .= $this->headerLine('To', 'undisclosed-recipients:;');
                }
                $this->mailHeader .= $this->headerLine(
                    'Subject',
                    $this->encodeHeader($this->secureHeader($this->Subject))
                );
            }

            
            if (
                !empty($this->DKIM_domain)
                && !empty($this->DKIM_selector)
                && (!empty($this->DKIM_private_string)
                    || (!empty($this->DKIM_private)
                        && static::isPermittedPath($this->DKIM_private)
                        && file_exists($this->DKIM_private)
                    )
                )
            ) {
                $header_dkim = $this->DKIM_Add(
                    $this->MIMEHeader . $this->mailHeader,
                    $this->encodeHeader($this->secureHeader($this->Subject)),
                    $this->MIMEBody
                );
                $this->MIMEHeader = static::stripTrailingWSP($this->MIMEHeader) . static::$LE .
                    static::normalizeBreaks($header_dkim) . static::$LE;
            }

            return true;
        } catch (Exception $exc) {
            $this->setError($exc->getMessage());
            if ($this->exceptions) {
                throw $exc;
            }

            return false;
        }
    }

    
    public function postSend()
    {
        try {
            
            switch ($this->Mailer) {
                case 'sendmail':
                case 'qmail':
                    return $this->sendmailSend($this->MIMEHeader, $this->MIMEBody);
                case 'smtp':
                    return $this->smtpSend($this->MIMEHeader, $this->MIMEBody);
                case 'mail':
                    return $this->mailSend($this->MIMEHeader, $this->MIMEBody);
                default:
                    $sendMethod = $this->Mailer . 'Send';
                    if (method_exists($this, $sendMethod)) {
                        return $this->{$sendMethod}($this->MIMEHeader, $this->MIMEBody);
                    }

                    return $this->mailSend($this->MIMEHeader, $this->MIMEBody);
            }
        } catch (Exception $exc) {
            $this->setError($exc->getMessage());
            $this->edebug($exc->getMessage());
            if ($this->exceptions) {
                throw $exc;
            }
        }

        return false;
    }

    
    

    
    public static function validateAddress($address, $patternselect = null)
    {
        if (null === $patternselect) {
            $patternselect = static::$validator;
        }
        if (is_callable($patternselect)) {
            return call_user_func($patternselect, $address);
        }
        
        if (strpos($address, "\n") !== false || strpos($address, "\r") !== false) {
            return false;
        }
        switch ($patternselect) {
            case 'auto':
                
                
                if (defined('FILTER_VALIDATE_EMAIL')) {
                    
                    return (boolean) filter_var($address, FILTER_VALIDATE_EMAIL);
                }
                
                
            case 'pcre':
            case 'pcre8':
                
                return (boolean) preg_match(
                    '/^(?!(?>(?1)"?(?>\\\[ -~]|[^"])"?(?1)){255,})(?!(?>(?1)"?(?>\\\[ -~]|[^"])"?(?1)){65,}@)' .
                    '((?>(?>(?>((?>(?>(?>\x0D\x0A)?[\t ])+|(?>[\t ]*\x0D\x0A)?[\t ]+)?)(\((?>(?2)' .
                    '(?>[\x01-\x08\x0B\x0C\x0E-\'*-\[\]-\x7F]|\\\[\x00-\x7F]|(?3)))*(?2)\)))+(?2))|(?2))?)' .
                    '([!#-\'*+\/-9=?^-~-]+|"(?>(?2)(?>[\x01-\x08\x0B\x0C\x0E-!#-\[\]-\x7F]|\\\[\x00-\x7F]))*' .
                    '(?2)")(?>(?1)\.(?1)(?4))*(?1)@(?!(?1)[a-z0-9-]{64,})(?1)(?>([a-z0-9](?>[a-z0-9-]*[a-z0-9])?)' .
                    '(?>(?1)\.(?!(?1)[a-z0-9-]{64,})(?1)(?5)){0,126}|\[(?:(?>IPv6:(?>([a-f0-9]{1,4})(?>:(?6)){7}' .
                    '|(?!(?:.*[a-f0-9][:\]]){8,})((?6)(?>:(?6)){0,6})?::(?7)?))|(?>(?>IPv6:(?>(?6)(?>:(?6)){5}:' .
                    '|(?!(?:.*[a-f0-9]:){6,})(?8)?::(?>((?6)(?>:(?6)){0,4}):)?))?(25[0-5]|2[0-4][0-9]|1[0-9]{2}' .
                    '|[1-9]?[0-9])(?>\.(?9)){3}))\])(?1)$/isD',
                    $address
                );
            case 'html5':
                
                return (boolean) preg_match(
                    '/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' .
                    '(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/sD',
                    $address
                );
            case 'noregex':
                
                return true;
        }

        return false;
    }

    
    public function clearAddresses()
    {
        foreach ($this->to as $to) {
            unset($this->all_recipients[strtolower($to[0])]);
        }
        $this->to = [];
        $this->clearCCs();
        $this->clearBCCs();
        $this->clearReplyTos();
    }

    
    public function clearCCs()
    {
        foreach ($this->cc as $cc) {
            unset($this->all_recipients[strtolower($cc[0])]);
        }
        $this->cc = [];
    }

    
    public function clearBCCs()
    {
        foreach ($this->bcc as $bcc) {
            unset($this->all_recipients[strtolower($bcc[0])]);
        }
        $this->bcc = [];
    }

    
    public function clearReplyTos()
    {
        $this->ReplyTo = [];
        $this->ReplyToQueue = [];
    }

    
    public function clearAllRecipients()
    {
        $this->to = [];
        $this->cc = [];
        $this->bcc = [];
        $this->all_recipients = [];
        $this->RecipientsQueue = [];
    }

    
    protected function setError($msg)
    {
        ++$this->error_count;
        if ('smtp' === $this->Mailer && null !== $this->smtp) {
            $this->ErrorInfo = $this->smtp->getError()['detail'];
        } else {
            $this->ErrorInfo = $msg;
        }
    }

    
    protected function lang($key)
    {
        $translations = [
            'invalid_address' => 'Invalid address',
            'provide_address' => 'You must provide at least one recipient email address.',
            'empty_message' => 'Message body empty',
        ];
        return isset($translations[$key]) ? $translations[$key] : $key;
    }

    protected function edebug($str)
    {
        if ($this->SMTPDebug <= 0) {
            return;
        }
        
        if ($this->Debugoutput instanceof \Psr\Log\LoggerInterface) {
            $this->Debugoutput->debug($str);

            return;
        }
        
        if (is_callable($this->Debugoutput) && !in_array($this->Debugoutput, ['error_log', 'html', 'echo'])) {
            call_user_func($this->Debugoutput, $str, $this->SMTPDebug);

            return;
        }
        switch ($this->Debugoutput) {
            case 'error_log':
                
                error_log($str);
                break;
            case 'html':
                
                echo htmlentities(
                    preg_replace('/[\r\n]+/', '', $str),
                    ENT_QUOTES,
                    'UTF-8'
                ), "<br>\n";
                break;
            case 'echo':
            default:
                
                $str = preg_replace('/\r\n|\r/m', "\n", $str);
                echo gmdate('Y-m-d H:i:s'), "\t", $str, "\n";
        }
    }

    
    public $Mailer = 'smtp';
    public $exceptions = false;
    protected $error_count = 0;
    protected $mailHeader = '';
    protected $MIMEHeader = '';
    protected $MIMEBody = '';
    public static $validator = 'auto';

    
    protected function alternativeExists() { return !empty($this->AltBody); }
    protected function setMessageType() { }
    protected function createBody() { return $this->Body; }
    protected function createHeader() { return ''; }
    protected function smtpSend($header, $body) { return true; }
    protected function mailSend($header, $body) { return true; }
    protected function sendmailSend($header, $body) { return true; }
    protected function smtpClose() { }
    public static function html2text($html) { return strip_tags($html); }
    protected function has8bitChars($text) { return (bool) preg_match('/[\x80-\xFF]/', $text); }
    public static function idnSupported() { return extension_loaded('intl'); }
    protected function punyencodeAddress($address) { return $address; }
}