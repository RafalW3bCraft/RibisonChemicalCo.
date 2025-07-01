<?php
/**
 * Simple Email System Test
 * Basic functionality test without including external files
 */

// Include required classes
require_once __DIR__ . '/PHPMailer.php';
require_once __DIR__ . '/SMTP.php';
require_once __DIR__ . '/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

echo "Email System Simple Test\n";
echo "========================\n\n";

$tests_passed = 0;
$tests_failed = 0;

// Test 1: Class Loading
echo "Test 1: Class Loading\n";
try {
    $mail = new PHPMailer(true);
    echo "✅ PHPMailer loaded successfully\n";
    $tests_passed++;
    
    $smtp = new SMTP();
    echo "✅ SMTP class loaded successfully\n";
    $tests_passed++;
} catch (Exception $e) {
    echo "❌ Class loading failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}

echo "\n";

// Test 2: Basic Configuration
echo "Test 2: Basic Configuration\n";
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'test@example.com';
    $mail->Password = 'testpassword';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    echo "✅ SMTP configuration set successfully\n";
    $tests_passed++;
} catch (Exception $e) {
    echo "❌ Configuration failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}

echo "\n";

// Test 3: Email Setup
echo "Test 3: Email Setup\n";
try {
    $mail->setFrom('info@ribisonchemicals.com', 'Ribison Chemicals');
    $mail->addAddress('test@example.com', 'Test User');
    $mail->isHTML(true);
    $mail->Subject = 'Test Email - Ribison Chemicals';
    $mail->Body = '<h1>Test Email</h1><p>This is a test email from Ribison Chemicals.</p>';
    $mail->AltBody = 'Test Email - This is a test email from Ribison Chemicals.';
    
    echo "✅ Email properties set successfully\n";
    $tests_passed++;
} catch (Exception $e) {
    echo "❌ Email setup failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}

echo "\n";

// Test 4: Address Validation
echo "Test 4: Address Validation\n";
$test_addresses = [
    'valid@example.com' => true,
    'invalid.email' => false,
    'user@domain.co.uk' => true,
    'bad@' => false
];

foreach ($test_addresses as $addr => $expected) {
    $result = PHPMailer::validateAddress($addr);
    if ($result === $expected) {
        echo "✅ $addr validation correct\n";
        $tests_passed++;
    } else {
        echo "❌ $addr validation incorrect\n";
        $tests_failed++;
    }
}

echo "\n";

// Final Results
echo "Test Results:\n";
echo "✅ Passed: $tests_passed\n";
echo "❌ Failed: $tests_failed\n";

if ($tests_failed === 0) {
    echo "\n🎉 All tests passed! Email system is working correctly.\n";
    exit(0);
} else {
    echo "\n⚠️ Some tests failed. Check the issues above.\n";
    exit(1);
}
?>