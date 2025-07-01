<?php
/**
 * Working Email System Test for Ribison Chemicals
 */

require_once __DIR__ . '/PHPMailer-fixed.php';
require_once __DIR__ . '/SMTP.php';
require_once __DIR__ . '/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

echo "Ribison Chemicals Email System Test\n";
echo "===================================\n\n";

$tests_passed = 0;
$tests_failed = 0;

// Test Data
$test_data = [
    'name' => 'John Smith',
    'email' => 'john.smith@example.com',
    'phone' => '+91 98765 43210',
    'company' => 'ABC Manufacturing Ltd.',
    'sector' => 'Chemical Manufacturing',
    'message' => 'We are interested in your chemical products for our manufacturing process. Please send us detailed information about your product catalog and pricing.'
];

// Test 1: PHPMailer Instance Creation
echo "Test 1: PHPMailer Instance Creation\n";
try {
    $mail = new PHPMailer(true);
    echo "✅ PHPMailer instance created successfully\n";
    $tests_passed++;
} catch (Exception $e) {
    echo "❌ Failed to create PHPMailer instance: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 2: Basic Configuration
echo "Test 2: Basic Configuration\n";
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'test@ribisonchemicals.com';
    $mail->Password = 'test_password';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    
    echo "✅ SMTP configuration completed\n";
    $tests_passed++;
} catch (Exception $e) {
    echo "❌ Configuration failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 3: Email Address Validation
echo "Test 3: Email Address Validation\n";
$email_tests = [
    'valid@example.com' => true,
    'test.email+tag@domain.co.uk' => true,
    'invalid.email' => false,
    'user@' => false,
    'plaintext' => false
];

foreach ($email_tests as $email => $expected) {
    $result = PHPMailer::validateAddress($email);
    if ($result === $expected) {
        echo "✅ $email - " . ($expected ? 'valid' : 'invalid') . " (correct)\n";
        $tests_passed++;
    } else {
        echo "❌ $email - validation failed\n";
        $tests_failed++;
    }
}
echo "\n";

// Test 4: Email Setup and Recipients
echo "Test 4: Email Setup and Recipients\n";
try {
    $mail->setFrom('info@ribisonchemicals.com', 'Ribison Chemicals');
    $mail->addAddress('info@ribisonchemicals.com', 'Ribison Chemicals Team');
    $mail->addAddress($test_data['email'], $test_data['name']);
    
    echo "✅ From address set successfully\n";
    echo "✅ Recipient addresses added successfully\n";
    $tests_passed += 2;
} catch (Exception $e) {
    echo "❌ Email setup failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 5: HTML Email Content
echo "Test 5: HTML Email Content\n";
try {
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission - Ribison Chemicals';
    
    // Create professional HTML email
    $html_body = createTestEmailTemplate($test_data);
    $mail->Body = $html_body;
    
    // Create plain text version
    $plain_body = createTestPlainText($test_data);
    $mail->AltBody = $plain_body;
    
    echo "✅ HTML email content created\n";
    echo "✅ Plain text alternative created\n";
    echo "📧 Subject: " . $mail->Subject . "\n";
    echo "📄 HTML body size: " . number_format(strlen($html_body)) . " characters\n";
    echo "📄 Plain text size: " . number_format(strlen($plain_body)) . " characters\n";
    $tests_passed += 2;
} catch (Exception $e) {
    echo "❌ Content creation failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 6: Email Sending Simulation
echo "Test 6: Email Sending Simulation\n";
try {
    $result = $mail->send();
    if ($result) {
        echo "✅ Email sending simulation successful\n";
        $tests_passed++;
    } else {
        echo "❌ Email sending simulation failed: " . $mail->ErrorInfo . "\n";
        $tests_failed++;
    }
} catch (Exception $e) {
    echo "❌ Email sending error: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 7: Error Handling
echo "Test 7: Error Handling\n";
try {
    $error_mail = new PHPMailer(true);
    
    // Test with invalid email
    $error_mail->addAddress('invalid-email');
    echo "❌ Should have caught invalid email\n";
    $tests_failed++;
} catch (Exception $e) {
    echo "✅ Invalid email properly caught: " . $e->getMessage() . "\n";
    $tests_passed++;
}

try {
    $empty_mail = new PHPMailer(true);
    $empty_mail->send(); // Should fail - no recipients
} catch (Exception $e) {
    echo "✅ Empty recipient list properly caught\n";
    $tests_passed++;
}
echo "\n";

// Test 8: JSON Data Processing
echo "Test 8: JSON Data Processing\n";
try {
    $json_data = json_encode($test_data);
    $decoded_data = json_decode($json_data, true);
    
    if ($decoded_data && 
        isset($decoded_data['name']) && 
        isset($decoded_data['email']) && 
        isset($decoded_data['message'])) {
        echo "✅ JSON encoding/decoding works correctly\n";
        echo "✅ All required fields present\n";
        $tests_passed += 2;
    } else {
        echo "❌ JSON processing failed\n";
        $tests_failed++;
    }
} catch (Exception $e) {
    echo "❌ JSON error: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Final Results
echo "=================================\n";
echo "TEST RESULTS SUMMARY\n";
echo "=================================\n";
echo "✅ Tests Passed: $tests_passed\n";
echo "❌ Tests Failed: $tests_failed\n";
echo "📊 Success Rate: " . round(($tests_passed / ($tests_passed + $tests_failed)) * 100, 1) . "%\n\n";

if ($tests_failed === 0) {
    echo "🎉 ALL TESTS PASSED!\n";
    echo "Email system is ready for production use.\n\n";
    echo "Next Steps:\n";
    echo "1. Configure SMTP credentials in environment variables\n";
    echo "2. Test with actual email delivery\n";
    echo "3. Monitor logs for any issues\n";
} else {
    echo "⚠️ Some tests failed.\n";
    echo "Please review and fix the issues above.\n";
}

/**
 * Create test email template
 */
function createTestEmailTemplate($data) {
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone']);
    $company = htmlspecialchars($data['company']);
    $sector = htmlspecialchars($data['sector']);
    $message = nl2br(htmlspecialchars($data['message']));
    $date = date('F j, Y \a\t g:i A');

    return <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: #ea580c; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-item { margin: 10px 0; padding: 10px; background: #f5f5f5; }
        .label { font-weight: bold; color: #ea580c; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Ribison Chemicals</h1>
            <p>New Contact Form Submission</p>
        </div>
        <div class="content">
            <div class="info-item">
                <span class="label">Name:</span> {$name}
            </div>
            <div class="info-item">
                <span class="label">Email:</span> {$email}
            </div>
            <div class="info-item">
                <span class="label">Phone:</span> {$phone}
            </div>
            <div class="info-item">
                <span class="label">Company:</span> {$company}
            </div>
            <div class="info-item">
                <span class="label">Sector:</span> {$sector}
            </div>
            <div class="info-item">
                <span class="label">Message:</span><br>{$message}
            </div>
            <p><small>Received on {$date}</small></p>
        </div>
    </div>
</body>
</html>
HTML;
}

/**
 * Create test plain text email
 */
function createTestPlainText($data) {
    return "RIBISON CHEMICALS - New Contact Form Submission\n\n" .
           "Name: {$data['name']}\n" .
           "Email: {$data['email']}\n" .
           "Phone: {$data['phone']}\n" .
           "Company: {$data['company']}\n" .
           "Sector: {$data['sector']}\n\n" .
           "Message:\n{$data['message']}\n\n" .
           "Received on " . date('F j, Y \a\t g:i A');
}
?>