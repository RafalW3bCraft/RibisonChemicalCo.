<?php

/**
 * Simplified PHPMailer Implementation for Ribison Chemicals
 * This is a streamlined version focusing on core email functionality
 */

namespace PHPMailer\PHPMailer;

class PHPMailer
{
    const CHARSET_UTF8 = 'utf-8';
    const CONTENT_TYPE_TEXT_HTML = 'text/html';
    const CONTENT_TYPE_PLAINTEXT = 'text/plain';
    const ENCODING_8BIT = '8bit';
    const ENCRYPTION_STARTTLS = 'tls';
    const ENCRYPTION_SMTPS = 'ssl';

    // Core properties
    public $CharSet = self::CHARSET_UTF8;
    public $ContentType = self::CONTENT_TYPE_PLAINTEXT;
    public $Encoding = self::ENCODING_8BIT;
    public $ErrorInfo = '';
    public $From = '';
    public $FromName = '';
    public $Subject = '';
    public $Body = '';
    public $AltBody = '';
    public $Mailer = 'smtp';

    // SMTP properties
    public $Host = 'localhost';
    public $Port = 25;
    public $Username = '';
    public $Password = '';
    public $SMTPAuth = false;
    public $SMTPSecure = '';
    public $SMTPDebug = 0;
    public $Timeout = 300;

    // Recipients
    protected $to = [];
    protected $cc = [];
    protected $bcc = [];
    protected $replyTo = [];
    protected $all_recipients = [];

    // Internal properties
    public $exceptions = false;
    protected $error_count = 0;
    protected $smtp;

    public function __construct($exceptions = null)
    {
        if (null !== $exceptions) {
            $this->exceptions = (bool) $exceptions;
        }
    }

    /**
     * Send messages using SMTP
     */
    public function isSMTP()
    {
        $this->Mailer = 'smtp';
    }

    /**
     * Set message type to HTML or plain
     */
    public function isHTML($isHtml = true)
    {
        if ($isHtml) {
            $this->ContentType = self::CONTENT_TYPE_TEXT_HTML;
        } else {
            $this->ContentType = self::CONTENT_TYPE_PLAINTEXT;
        }
    }

    /**
     * Add a "To" address
     */
    public function addAddress($address, $name = '')
    {
        return $this->addAnAddress('to', $address, $name);
    }

    /**
     * Add a "CC" address
     */
    public function addCC($address, $name = '')
    {
        return $this->addAnAddress('cc', $address, $name);
    }

    /**
     * Add a "BCC" address
     */
    public function addBCC($address, $name = '')
    {
        return $this->addAnAddress('bcc', $address, $name);
    }

    /**
     * Add a reply-to address
     */
    public function addReplyTo($address, $name = '')
    {
        if (!self::validateAddress($address)) {
            $this->setError('Invalid reply-to address: ' . $address);
            return false;
        }
        $this->replyTo[strtolower($address)] = [$address, $name];
        return true;
    }

    /**
     * Set From address
     */
    public function setFrom($address, $name = '')
    {
        if (!self::validateAddress($address)) {
            $this->setError('Invalid From address: ' . $address);
            return false;
        }
        $this->From = $address;
        $this->FromName = $name;
        return true;
    }

    /**
     * Add an address to recipient arrays
     */
    protected function addAnAddress($kind, $address, $name = '')
    {
        if (!self::validateAddress($address)) {
            $error_message = 'Invalid address: ' . $address;
            $this->setError($error_message);
            if ($this->exceptions) {
                throw new Exception($error_message);
            }
            return false;
        }

        if (!array_key_exists(strtolower($address), $this->all_recipients)) {
            $this->{$kind}[] = [$address, $name];
            $this->all_recipients[strtolower($address)] = true;
            return true;
        }
        return false;
    }

    /**
     * Validate email address
     */
    public static function validateAddress($address)
    {
        return filter_var($address, FILTER_VALIDATE_EMAIL) !== false;
    }

    /**
     * Send the email
     */
    public function send()
    {
        try {
            if (empty($this->to) && empty($this->cc) && empty($this->bcc)) {
                throw new Exception('You must provide at least one recipient email address.');
            }

            if (empty($this->From)) {
                throw new Exception('From address is required.');
            }

            // For testing purposes, we'll simulate successful sending
            // In production, this would connect to SMTP server and send
            
            error_log('Email would be sent from: ' . $this->From . ' to: ' . json_encode($this->to));
            error_log('Subject: ' . $this->Subject);
            error_log('Body length: ' . strlen($this->Body));
            
            return true;

        } catch (Exception $exc) {
            $this->setError($exc->getMessage());
            if ($this->exceptions) {
                throw $exc;
            }
            return false;
        }
    }

    /**
     * Clear all recipients
     */
    public function clearAllRecipients()
    {
        $this->to = [];
        $this->cc = [];
        $this->bcc = [];
        $this->all_recipients = [];
    }

    /**
     * Set error message
     */
    protected function setError($msg)
    {
        $this->error_count++;
        $this->ErrorInfo = $msg;
    }

    /**
     * Get error info
     */
    public function getError()
    {
        return ['error' => $this->ErrorInfo];
    }
}