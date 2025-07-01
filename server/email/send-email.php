<?php
/**
 * Ribison Chemicals Contact Form Email Handler
 * Professional email system for contact form submissions
 * 
 * This script handles email notifications when users submit the contact form
 * Features:
 * - Professional HTML email templates
 * - SMTP configuration for reliable delivery
 * - Error handling and logging
 * - Responsive email design
 * - Company branding integration
 */

// Include PHPMailer classes
require_once __DIR__ . '/PHPMailer.php';
require_once __DIR__ . '/SMTP.php';
require_once __DIR__ . '/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Get JSON data from command line argument
$json_data = $argv[1] ?? '{}';
$data = json_decode($json_data, true);

// Validate required data
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    error_log('Invalid email data received: ' . $json_data);
    exit(1);
}

// Email configuration - these should be set as environment variables in production
$smtp_host = $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com';
$smtp_port = $_ENV['SMTP_PORT'] ?? 587;
$smtp_username = $_ENV['SMTP_USERNAME'] ?? '';
$smtp_password = $_ENV['SMTP_PASSWORD'] ?? '';
$smtp_encryption = $_ENV['SMTP_ENCRYPTION'] ?? 'tls';

// Company information
$company_name = 'Ribison Chemicals';
$company_email = $_ENV['COMPANY_EMAIL'] ?? 'info@ribisonchemicals.com';
$company_phone = '+91 2822 220491';
$company_address = 'Wankaner, Morbi, Gujarat, India';

try {
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_username;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = $smtp_encryption;
    $mail->Port = $smtp_port;
    
    // Enable debugging in development
    if (isset($_ENV['NODE_ENV']) && $_ENV['NODE_ENV'] === 'development') {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->Debugoutput = 'error_log';
    }

    // Recipients
    $mail->setFrom($company_email, $company_name);
    $mail->addAddress($company_email, $company_name);
    $mail->addReplyTo($data['email'], $data['name']);

    // Content
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'New Contact Form Submission - ' . $company_name;

    // Create professional HTML email template
    $html_body = createHtmlEmailTemplate($data, $company_name, $company_email, $company_phone, $company_address);
    $mail->Body = $html_body;

    // Create plain text version
    $mail->AltBody = createPlainTextEmail($data, $company_name);

    // Send the email
    $mail->send();
    
    // Log success
    error_log('Email sent successfully for contact form submission from: ' . $data['email']);
    echo 'Email sent successfully';
    exit(0);

} catch (Exception $e) {
    error_log('Email sending failed: ' . $mail->ErrorInfo);
    echo 'Email sending failed: ' . $mail->ErrorInfo;
    exit(1);
}

/**
 * Create professional HTML email template
 */
function createHtmlEmailTemplate($data, $company_name, $company_email, $company_phone, $company_address) {
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone'] ?? 'Not provided');
    $company = htmlspecialchars($data['company'] ?? 'Not provided');
    $sector = htmlspecialchars($data['sector'] ?? 'Not provided');
    $message = nl2br(htmlspecialchars($data['message']));
    $current_date = date('F j, Y \a\t g:i A');

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
        }
        .alert {
            background-color: #fef3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 25px;
            color: #856404;
        }
        .contact-info {
            background-color: #f8f9fa;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 25px;
        }
        .contact-info h2 {
            color: #ea580c;
            margin: 0 0 20px 0;
            font-size: 22px;
            border-bottom: 2px solid #ea580c;
            padding-bottom: 10px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        .info-item {
            background-color: white;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #ea580c;
        }
        .info-label {
            font-weight: 600;
            color: #666666;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .info-value {
            color: #333333;
            font-size: 16px;
            word-break: break-word;
        }
        .message-section {
            background-color: white;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 25px;
            margin-top: 20px;
        }
        .message-section h3 {
            color: #ea580c;
            margin: 0 0 15px 0;
            font-size: 18px;
        }
        .message-content {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #ea580c;
            font-size: 15px;
            line-height: 1.7;
        }
        .footer {
            background-color: #1f2937;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .footer h3 {
            margin: 0 0 15px 0;
            color: #ea580c;
            font-size: 20px;
        }
        .footer p {
            margin: 5px 0;
            color: #d1d5db;
        }
        .timestamp {
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 8px;
            }
            .header, .content, .footer {
                padding: 20px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🧪 {$company_name}</h1>
            <p>New Contact Form Submission</p>
        </div>
        
        <div class="content">
            <div class="alert">
                <strong>📧 New Inquiry Received!</strong> A potential client has submitted a contact form on your website.
            </div>
            
            <div class="contact-info">
                <h2>Contact Information</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Full Name</div>
                        <div class="info-value">{$name}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Email Address</div>
                        <div class="info-value">{$email}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Phone Number</div>
                        <div class="info-value">{$phone}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Company Name</div>
                        <div class="info-value">{$company}</div>
                    </div>
                </div>
                
                <div class="info-item" style="margin-top: 15px;">
                    <div class="info-label">Industry Sector</div>
                    <div class="info-value">{$sector}</div>
                </div>
            </div>
            
            <div class="message-section">
                <h3>📝 Message Content</h3>
                <div class="message-content">
                    {$message}
                </div>
            </div>
            
            <div class="timestamp">
                <p>📅 Received on {$current_date}</p>
            </div>
        </div>
        
        <div class="footer">
            <h3>{$company_name}</h3>
            <p>📧 {$company_email}</p>
            <p>📞 {$company_phone}</p>
            <p>📍 {$company_address}</p>
            <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
                This email was automatically generated from your website contact form.
            </p>
        </div>
    </div>
</body>
</html>
HTML;
}

/**
 * Create plain text email version
 */
function createPlainTextEmail($data, $company_name) {
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'] ?? 'Not provided';
    $company = $data['company'] ?? 'Not provided';
    $sector = $data['sector'] ?? 'Not provided';
    $message = $data['message'];
    $current_date = date('F j, Y \a\t g:i A');

    return <<<TEXT
$company_name - New Contact Form Submission

NEW INQUIRY RECEIVED!
A potential client has submitted a contact form on your website.

CONTACT INFORMATION:
====================
Name: $name
Email: $email
Phone: $phone
Company: $company
Industry Sector: $sector

MESSAGE:
========
$message

---
Received on $current_date

This email was automatically generated from your website contact form.
$company_name
TEXT;
}
?>