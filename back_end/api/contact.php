<?php
/**
 * Contact Form API Endpoint
 * Athanase Portfolio - Backend
 */

require_once __DIR__ . '/../config/config.php';

// Set JSON response header
header('Content-Type: application/json');

/**
 * Send JSON response
 */
function jsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit;
}

/**
 * Validate email address
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Sanitize input
 */
function sanitize($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

/**
 * Rate limiting check
 */
function checkRateLimit($ip) {
    $cacheFile = __DIR__ . '/../cache/rate_limit_' . md5($ip) . '.json';
    
    if (file_exists($cacheFile)) {
        $data = json_decode(file_get_contents($cacheFile), true);
        $now = time();
        
        // Clean old entries
        $data['requests'] = array_filter($data['requests'], function($timestamp) use ($now) {
            return ($now - $timestamp) < RATE_LIMIT_WINDOW;
        });
        
        if (count($data['requests']) >= RATE_LIMIT_REQUESTS) {
            return false;
        }
        
        $data['requests'][] = $now;
    } else {
        $data = ['requests' => [time()]];
    }
    
    // Ensure cache directory exists
    if (!is_dir(__DIR__ . '/../cache')) {
        mkdir(__DIR__ . '/../cache', 0755, true);
    }
    
    file_put_contents($cacheFile, json_encode($data));
    return true;
}

/**
 * Save message to database
 */
function saveMessage($name, $email, $message, $ip) {
    try {
        $db = getDB();
        
        $stmt = $db->prepare("
            INSERT INTO contact_messages (name, email, message, ip_address, created_at)
            VALUES (:name, :email, :message, :ip, NOW())
        ");
        
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':message' => $message,
            ':ip' => $ip
        ]);
        
        return $db->lastInsertId();
    } catch (Exception $e) {
        error_log("Failed to save message: " . $e->getMessage());
        return false;
    }
}

/**
 * Send email notification
 */
function sendEmailNotification($name, $email, $message) {
    $to = ADMIN_EMAIL;
    $subject = "New Contact Form Submission - Athanase Portfolio";
    
    $body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0a0a0f; color: #00f0ff; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f5f5f5; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #666; }
            .value { margin-top: 5px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>New Contact Message</h1>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Name:</div>
                    <div class='value'>" . htmlspecialchars($name) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>" . htmlspecialchars($email) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Message:</div>
                    <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . SMTP_FROM_NAME . ' <' . SMTP_FROM . '>',
        'Reply-To: ' . $email
    ];
    
    return mail($to, $subject, $body, implode("\r\n", $headers));
}

// Main handler
try {
    // Only accept POST requests
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        jsonResponse(['success' => false, 'message' => 'Method not allowed'], 405);
    }
    
    // Get client IP
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    
    // Check rate limit
    if (!checkRateLimit($ip)) {
        jsonResponse(['success' => false, 'message' => 'Too many requests. Please try again later.'], 429);
    }
    
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        jsonResponse(['success' => false, 'message' => 'Invalid request data'], 400);
    }
    
    // Validate required fields
    $name = sanitize($input['name'] ?? '');
    $email = sanitize($input['email'] ?? '');
    $message = sanitize($input['message'] ?? '');
    
    if (empty($name) || empty($email) || empty($message)) {
        jsonResponse(['success' => false, 'message' => 'All fields are required'], 400);
    }
    
    if (strlen($name) < 2 || strlen($name) > 100) {
        jsonResponse(['success' => false, 'message' => 'Name must be between 2 and 100 characters'], 400);
    }
    
    if (!isValidEmail($email)) {
        jsonResponse(['success' => false, 'message' => 'Invalid email address'], 400);
    }
    
    if (strlen($message) < 10 || strlen($message) > 5000) {
        jsonResponse(['success' => false, 'message' => 'Message must be between 10 and 5000 characters'], 400);
    }
    
    // Honeypot check (if implemented in frontend)
    if (!empty($input['website'])) {
        // Bot detected
        jsonResponse(['success' => true, 'message' => 'Message sent successfully']);
    }
    
    // Save to database
    $messageId = saveMessage($name, $email, $message, $ip);
    
    // Send email notification
    sendEmailNotification($name, $email, $message);
    
    // Success response
    jsonResponse([
        'success' => true,
        'message' => 'Message sent successfully. I\'ll respond soon.',
        'id' => $messageId
    ]);
    
} catch (Exception $e) {
    error_log("Contact API error: " . $e->getMessage());
    jsonResponse(['success' => false, 'message' => 'An error occurred. Please try again.'], 500);
}