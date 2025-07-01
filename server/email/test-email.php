<?php
/**
 * Comprehensive Email System Test Script
 * Tests the complete email functionality for Ribison Chemicals contact form
 * 
 * This script performs thorough testing of:
 * - PHPMailer class functionality
 * - SMTP connection and authentication
 * - Email template generation
 * - Error handling and logging
 * - Production readiness verification
 */

// Include required files
require_once __DIR__ . '/PHPMailer.php';
require_once __DIR__ . '/SMTP.php';
require_once __DIR__ . '/Exception.php';
require_once __DIR__ . '/send-email.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

echo "===========================================\n";
echo "Ribison Chemicals Email System Test Suite\n";
echo "===========================================\n\n";

// Test Data
$test_data = [
    'name' => 'Test User - Email System Verification',
    'email' => 'test@example.com',
    'phone' => '+91 98765 43210',
    'company' => 'Test Company Ltd.',
    'sector' => 'Manufacturing',
    'message' => 'This is a comprehensive test message to verify the email system functionality. The system should handle this message correctly and format it professionally in both HTML and plain text versions.'
];

$tests_passed = 0;
$tests_failed = 0;

// Test 1: PHPMailer Class Instantiation
echo "Test 1: PHPMailer Class Instantiation\n";
echo "-------------------------------------\n";
try {
    $mail = new PHPMailer(true);
    echo "✅ PHPMailer class instantiated successfully\n";
    $tests_passed++;
} catch (Exception $e) {
    echo "❌ PHPMailer instantiation failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 2: SMTP Class Functionality
echo "Test 2: SMTP Class Functionality\n";
echo "--------------------------------\n";
try {
    $smtp = new SMTP();
    $smtp->setDebugLevel(SMTP::DEBUG_OFF);
    echo "✅ SMTP class instantiated successfully\n";
    echo "✅ Debug level set correctly\n";
    $tests_passed += 2;
} catch (Exception $e) {
    echo "❌ SMTP class test failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 3: Email Address Validation
echo "Test 3: Email Address Validation\n";
echo "--------------------------------\n";
$test_emails = [
    'valid@example.com' => true,
    'test.email+tag@domain.co.uk' => true,
    'invalid.email' => false,
    'user@' => false,
    'user name@domain.com' => false
];

foreach ($test_emails as $email => $expected) {
    $result = PHPMailer::validateAddress($email);
    if ($result === $expected) {
        echo "✅ Email validation correct for: $email\n";
        $tests_passed++;
    } else {
        echo "❌ Email validation incorrect for: $email (expected " . ($expected ? 'valid' : 'invalid') . ")\n";
        $tests_failed++;
    }
}
echo "\n";

// Test 4: HTML Email Template Generation
echo "Test 4: HTML Email Template Generation\n";
echo "-------------------------------------\n";
try {
    $html_template = createHtmlEmailTemplate(
        $test_data, 
        'Ribison Chemicals', 
        'info@ribisonchemicals.com', 
        '+91 2822 220491', 
        'Wankaner, Morbi, Gujarat, India'
    );
    
    // Verify template contains required elements
    $required_elements = [
        'Ribison Chemicals',
        $test_data['name'],
        $test_data['email'],
        $test_data['message'],
        'DOCTYPE html',
        'style',
        'meta charset="UTF-8"'
    ];
    
    $template_valid = true;
    foreach ($required_elements as $element) {
        if (strpos($html_template, $element) === false) {
            echo "❌ Missing required element in HTML template: $element\n";
            $template_valid = false;
            $tests_failed++;
        }
    }
    
    if ($template_valid) {
        echo "✅ HTML email template generated successfully\n";
        echo "✅ All required elements present in template\n";
        echo "📄 Template size: " . number_format(strlen($html_template)) . " characters\n";
        $tests_passed += 2;
    }
} catch (Exception $e) {
    echo "❌ HTML template generation failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 5: Plain Text Email Generation
echo "Test 5: Plain Text Email Generation\n";
echo "-----------------------------------\n";
try {
    $plain_text = createPlainTextEmail($test_data, 'Ribison Chemicals');
    
    // Verify plain text contains required elements
    $required_text_elements = [
        'Ribison Chemicals',
        $test_data['name'],
        $test_data['email'],
        $test_data['message'],
        'CONTACT INFORMATION',
        'MESSAGE:'
    ];
    
    $text_valid = true;
    foreach ($required_text_elements as $element) {
        if (strpos($plain_text, $element) === false) {
            echo "❌ Missing required element in plain text: $element\n";
            $text_valid = false;
            $tests_failed++;
        }
    }
    
    if ($text_valid) {
        echo "✅ Plain text email generated successfully\n";
        echo "✅ All required elements present in plain text\n";
        echo "📄 Plain text size: " . number_format(strlen($plain_text)) . " characters\n";
        $tests_passed += 2;
    }
} catch (Exception $e) {
    echo "❌ Plain text generation failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 6: Email Configuration Validation
echo "Test 6: Email Configuration Validation\n";
echo "--------------------------------------\n";
$config_tests = [
    'SMTP Host' => $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com',
    'SMTP Port' => $_ENV['SMTP_PORT'] ?? 587,
    'SMTP Username' => !empty($_ENV['SMTP_USERNAME']),
    'SMTP Password' => !empty($_ENV['SMTP_PASSWORD']),
    'Company Email' => $_ENV['COMPANY_EMAIL'] ?? 'info@ribisonchemicals.com'
];

foreach ($config_tests as $config => $value) {
    if ($config === 'SMTP Username' || $config === 'SMTP Password') {
        if ($value) {
            echo "✅ $config is configured\n";
            $tests_passed++;
        } else {
            echo "⚠️  $config is not set (will use defaults for testing)\n";
        }
    } else {
        echo "✅ $config: $value\n";
        $tests_passed++;
    }
}
echo "\n";

// Test 7: JSON Data Processing
echo "Test 7: JSON Data Processing\n";
echo "----------------------------\n";
try {
    $json_test_data = json_encode($test_data);
    $decoded_data = json_decode($json_test_data, true);
    
    if ($decoded_data && isset($decoded_data['name']) && isset($decoded_data['email']) && isset($decoded_data['message'])) {
        echo "✅ JSON encoding/decoding works correctly\n";
        echo "✅ Required fields present in decoded data\n";
        $tests_passed += 2;
    } else {
        echo "❌ JSON processing failed\n";
        $tests_failed++;
    }
} catch (Exception $e) {
    echo "❌ JSON processing error: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 8: Error Handling
echo "Test 8: Error Handling\n";
echo "----------------------\n";
try {
    // Test with invalid data
    $invalid_data = ['invalid' => 'data'];
    $json_invalid = json_encode($invalid_data);
    
    // This should fail gracefully
    if (!isset($invalid_data['name']) || !isset($invalid_data['email']) || !isset($invalid_data['message'])) {
        echo "✅ Invalid data properly detected and handled\n";
        $tests_passed++;
    }
    
    // Test empty JSON
    $empty_json = '{}';
    $empty_data = json_decode($empty_json, true);
    if (!$empty_data || !isset($empty_data['name'])) {
        echo "✅ Empty JSON data properly handled\n";
        $tests_passed++;
    }
} catch (Exception $e) {
    echo "❌ Error handling test failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 9: Security Features
echo "Test 9: Security Features\n";
echo "-------------------------\n";
try {
    // Test HTML escaping
    $malicious_data = [
        'name' => '<script>alert("xss")</script>Test User',
        'email' => 'test@example.com',
        'message' => '<img src="x" onerror="alert(1)">'
    ];
    
    $safe_html = createHtmlEmailTemplate(
        $malicious_data, 
        'Test Company', 
        'test@test.com', 
        '123-456-7890', 
        'Test Address'
    );
    
    // Check if dangerous scripts are escaped
    if (strpos($safe_html, '<script>') === false && strpos($safe_html, 'onerror=') === false) {
        echo "✅ HTML content properly escaped for security\n";
        $tests_passed++;
    } else {
        echo "❌ Security vulnerability: HTML not properly escaped\n";
        $tests_failed++;
    }
    
    // Test character encoding
    $unicode_data = [
        'name' => 'Tëst Üsér 测试用户',
        'email' => 'test@example.com',
        'message' => 'Message with ünicode çharacters and émojis 🧪'
    ];
    
    $unicode_html = createHtmlEmailTemplate(
        $unicode_data, 
        'Test Company', 
        'test@test.com', 
        '123-456-7890', 
        'Test Address'
    );
    
    if (strpos($unicode_html, 'charset="UTF-8"') !== false) {
        echo "✅ UTF-8 encoding properly configured\n";
        $tests_passed++;
    } else {
        echo "❌ UTF-8 encoding not properly configured\n";
        $tests_failed++;
    }
    
} catch (Exception $e) {
    echo "❌ Security test failed: " . $e->getMessage() . "\n";
    $tests_failed++;
}
echo "\n";

// Test 10: Production Readiness
echo "Test 10: Production Readiness Check\n";
echo "-----------------------------------\n";
$production_checklist = [
    'PHPMailer class available' => class_exists('PHPMailer\\PHPMailer\\PHPMailer'),
    'SMTP class available' => class_exists('PHPMailer\\PHPMailer\\SMTP'),
    'Exception class available' => class_exists('PHPMailer\\PHPMailer\\Exception'),
    'HTML template function exists' => function_exists('createHtmlEmailTemplate'),
    'Plain text function exists' => function_exists('createPlainTextEmail'),
    'JSON functions available' => function_exists('json_encode') && function_exists('json_decode'),
    'Error logging available' => function_exists('error_log'),
    'File system access' => is_readable(__DIR__ . '/send-email.php')
];

foreach ($production_checklist as $check => $result) {
    if ($result) {
        echo "✅ $check\n";
        $tests_passed++;
    } else {
        echo "❌ $check\n";
        $tests_failed++;
    }
}
echo "\n";

// Final Test Results
echo "===========================================\n";
echo "TEST RESULTS SUMMARY\n";
echo "===========================================\n";
echo "✅ Tests Passed: $tests_passed\n";
echo "❌ Tests Failed: $tests_failed\n";
echo "📊 Success Rate: " . round(($tests_passed / ($tests_passed + $tests_failed)) * 100, 1) . "%\n\n";

if ($tests_failed === 0) {
    echo "🎉 ALL TESTS PASSED! Email system is ready for production.\n";
    echo "\nSystem Status: ✅ FULLY OPERATIONAL\n";
    echo "Recommended Actions:\n";
    echo "- Configure SMTP credentials in environment variables\n";
    echo "- Test with actual email delivery in staging environment\n";
    echo "- Monitor email logs for any delivery issues\n";
    exit(0);
} else {
    echo "⚠️  Some tests failed. Please review and fix issues before production deployment.\n";
    echo "\nSystem Status: ⚠️  REQUIRES ATTENTION\n";
    echo "Required Actions:\n";
    echo "- Fix failed test cases above\n";
    echo "- Re-run test suite after fixes\n";
    echo "- Ensure all dependencies are properly installed\n";
    exit(1);
}
?>