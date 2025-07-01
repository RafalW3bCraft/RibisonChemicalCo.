<?php
/**
 * Production Email Handler for Ribison Chemicals
 * Handles contact form submissions with professional email templates
 */

require_once __DIR__ . '/PHPMailer-fixed.php';
require_once __DIR__ . '/SMTP.php';
require_once __DIR__ . '/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Get JSON data from command line
$json_data = $argv[1] ?? '{}';
$data = json_decode($json_data, true);

// Validate input data
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    error_log('Email Error: Invalid or missing data - ' . $json_data);
    echo json_encode(['success' => false, 'error' => 'Invalid data']);
    exit(1);
}

// Configuration from environment variables
$config = [
    'smtp_host' => $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com',
    'smtp_port' => (int)($_ENV['SMTP_PORT'] ?? 587),
    'smtp_username' => $_ENV['SMTP_USERNAME'] ?? '',
    'smtp_password' => $_ENV['SMTP_PASSWORD'] ?? '',
    'smtp_encryption' => $_ENV['SMTP_ENCRYPTION'] ?? 'tls',
    'company_email' => $_ENV['COMPANY_EMAIL'] ?? 'info@ribisonchemicals.com',
    'debug_mode' => ($_ENV['NODE_ENV'] ?? 'production') === 'development'
];

// Company information
$company = [
    'name' => 'Ribison Chemicals',
    'email' => $config['company_email'],
    'phone' => '+91 2822 220491',
    'address' => 'Wankaner, Morbi, Gujarat, India',
    'website' => 'https://ribisonchemicals.com'
];

try {
    // Create PHPMailer instance
    $mail = new PHPMailer(true);
    
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_encryption'];
    $mail->Port = $config['smtp_port'];
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    
    // Debug settings for development
    if ($config['debug_mode']) {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        error_log('Email Debug: Sending in development mode');
    }

    // Email settings
    $mail->setFrom($company['email'], $company['name']);
    $mail->addAddress($company['email'], $company['name'] . ' Team');
    
    // Add reply-to using customer's email
    if (PHPMailer::validateAddress($data['email'])) {
        $mail->addReplyTo($data['email'], $data['name']);
    }

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission - ' . $company['name'];
    
    // Generate professional email templates
    $mail->Body = generateHtmlEmail($data, $company);
    $mail->AltBody = generatePlainTextEmail($data, $company);

    // Send the email
    $result = $mail->send();
    
    if ($result) {
        error_log('Email Success: Contact form email sent for ' . $data['email']);
        echo json_encode([
            'success' => true,
            'message' => 'Email sent successfully',
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        exit(0);
    } else {
        throw new Exception('Email sending failed: ' . $mail->ErrorInfo);
    }

} catch (Exception $e) {
    $error_msg = 'Email sending failed: ' . $e->getMessage();
    error_log('Email Error: ' . $error_msg);
    echo json_encode([
        'success' => false,
        'error' => $error_msg,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    exit(1);
}

/**
 * Generate professional HTML email template
 */
function generateHtmlEmail($data, $company) {
    $name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($data['email'], ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars($data['phone'] ?? 'Not provided', ENT_QUOTES, 'UTF-8');
    $companyName = htmlspecialchars($data['company'] ?? 'Not provided', ENT_QUOTES, 'UTF-8');
    $sector = htmlspecialchars($data['sector'] ?? 'Not specified', ENT_QUOTES, 'UTF-8');
    $message = nl2br(htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8'));
    $date = date('F j, Y \a\t g:i A T');

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission - {$company['name']}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .header .subtitle {
            margin: 15px 0 0 0;
            font-size: 18px;
            opacity: 0.95;
            font-weight: 300;
        }
        .content {
            padding: 40px 30px;
        }
        .alert-box {
            background: linear-gradient(135deg, #fef3cd 0%, #fde68a 100%);
            border: 1px solid #f59e0b;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
            text-align: center;
        }
        .alert-icon {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .contact-section {
            background-color: #f8fafc;
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 30px;
        }
        .section-title {
            color: #ea580c;
            margin: 0 0 25px 0;
            font-size: 24px;
            font-weight: 600;
            border-bottom: 3px solid #ea580c;
            padding-bottom: 12px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 25px;
        }
        .info-card {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #ea580c;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease;
        }
        .info-card:hover {
            transform: translateY(-2px);
        }
        .info-label {
            font-weight: 600;
            color: #6b7280;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 8px;
        }
        .info-value {
            color: #1f2937;
            font-size: 16px;
            font-weight: 500;
            word-break: break-word;
        }
        .message-section {
            background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            padding: 30px;
            margin-top: 25px;
        }
        .message-title {
            color: #ea580c;
            margin: 0 0 20px 0;
            font-size: 20px;
            font-weight: 600;
            display: flex;
            align-items: center;
        }
        .message-content {
            background-color: #f8fafc;
            padding: 25px;
            border-radius: 10px;
            border-left: 5px solid #ea580c;
            font-size: 16px;
            line-height: 1.8;
            font-style: italic;
        }
        .footer {
            background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .footer h3 {
            margin: 0 0 20px 0;
            color: #ea580c;
            font-size: 24px;
            font-weight: 600;
        }
        .footer-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 25px;
        }
        .footer-item {
            color: #d1d5db;
            font-size: 14px;
        }
        .timestamp {
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            margin-top: 25px;
            padding-top: 25px;
            border-top: 2px solid #e5e7eb;
            font-weight: 500;
        }
        .disclaimer {
            font-size: 12px;
            color: #9ca3af;
            text-align: center;
            margin-top: 20px;
            line-height: 1.5;
        }
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 12px;
            }
            .header, .content, .footer {
                padding: 25px 20px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
            .header h1 {
                font-size: 26px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🧪 {$company['name']}</h1>
            <div class="subtitle">Professional Chemical Solutions</div>
        </div>
        
        <div class="content">
            <div class="alert-box">
                <div class="alert-icon">📧</div>
                <strong>New Customer Inquiry Received!</strong><br>
                A potential client has submitted a contact form through your website.
            </div>
            
            <div class="contact-section">
                <h2 class="section-title">Customer Information</h2>
                <div class="info-grid">
                    <div class="info-card">
                        <div class="info-label">Customer Name</div>
                        <div class="info-value">{$name}</div>
                    </div>
                    <div class="info-card">
                        <div class="info-label">Email Address</div>
                        <div class="info-value">{$email}</div>
                    </div>
                    <div class="info-card">
                        <div class="info-label">Phone Number</div>
                        <div class="info-value">{$phone}</div>
                    </div>
                    <div class="info-card">
                        <div class="info-label">Company Name</div>
                        <div class="info-value">{$companyName}</div>
                    </div>
                </div>
                
                <div class="info-card">
                    <div class="info-label">Industry Sector</div>
                    <div class="info-value">{$sector}</div>
                </div>
            </div>
            
            <div class="message-section">
                <h3 class="message-title">📝 Customer Message</h3>
                <div class="message-content">
                    {$message}
                </div>
            </div>
            
            <div class="timestamp">
                📅 Inquiry received on {$date}
            </div>
        </div>
        
        <div class="footer">
            <h3>{$company['name']}</h3>
            <div class="footer-info">
                <div class="footer-item">📧 {$company['email']}</div>
                <div class="footer-item">📞 {$company['phone']}</div>
                <div class="footer-item">📍 {$company['address']}</div>
                <div class="footer-item">🌐 {$company['website']}</div>
            </div>
            <div class="disclaimer">
                This email was automatically generated from your website's contact form.<br>
                Please respond to the customer using their provided email address.
            </div>
        </div>
    </div>
</body>
</html>
HTML;
}

/**
 * Generate plain text email version
 */
function generatePlainTextEmail($data, $company) {
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'] ?? 'Not provided';
    $companyName = $data['company'] ?? 'Not provided';
    $sector = $data['sector'] ?? 'Not specified';
    $message = $data['message'];
    $date = date('F j, Y \a\t g:i A T');

    return <<<TEXT
{$company['name']} - NEW CUSTOMER INQUIRY

===============================================
CUSTOMER INFORMATION
===============================================

Name: {$name}
Email: {$email}
Phone: {$phone}
Company: {$companyName}
Industry Sector: {$sector}

===============================================
CUSTOMER MESSAGE
===============================================

{$message}

===============================================
INQUIRY DETAILS
===============================================

Received: {$date}
Source: Website Contact Form

---

{$company['name']}
Email: {$company['email']}
Phone: {$company['phone']}
Address: {$company['address']}
Website: {$company['website']}

This email was automatically generated from your website's contact form.
Please respond to the customer using their provided email address.
TEXT;
}
?>