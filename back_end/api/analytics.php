<?php
/**
 * Analytics API Endpoint
 * Athanase Portfolio - Backend
 */

require_once __DIR__ . '/../config/config.php';

header('Content-Type: application/json');

function jsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit;
}

/**
 * Track page view
 */
function trackPageView($data, $ip, $userAgent) {
    try {
        $db = getDB();
        
        $stmt = $db->prepare("
            INSERT INTO page_views (page, referrer, ip_address, user_agent, created_at)
            VALUES (:page, :referrer, :ip, :user_agent, NOW())
        ");
        
        $stmt->execute([
            ':page' => $data['page'] ?? '/',
            ':referrer' => $data['referrer'] ?? null,
            ':ip' => $ip,
            ':user_agent' => $userAgent
        ]);
        
        return true;
    } catch (Exception $e) {
        error_log("Failed to track page view: " . $e->getMessage());
        return false;
    }
}

/**
 * Track event
 */
function trackEvent($data, $ip) {
    try {
        $db = getDB();
        
        $stmt = $db->prepare("
            INSERT INTO analytics_events (event_name, event_data, ip_address, created_at)
            VALUES (:name, :data, :ip, NOW())
        ");
        
        $stmt->execute([
            ':name' => $data['event'] ?? 'unknown',
            ':data' => json_encode($data['data'] ?? []),
            ':ip' => $ip
        ]);
        
        return true;
    } catch (Exception $e) {
        error_log("Failed to track event: " . $e->getMessage());
        return false;
    }
}

/**
 * Get analytics summary (admin only)
 */
function getAnalyticsSummary($days = 30) {
    try {
        $db = getDB();
        
        // Total page views
        $stmt = $db->prepare("
            SELECT COUNT(*) as total_views,
                   COUNT(DISTINCT ip_address) as unique_visitors
            FROM page_views
            WHERE created_at >= DATE_SUB(NOW(), INTERVAL :days DAY)
        ");
        $stmt->execute([':days' => $days]);
        $overview = $stmt->fetch();
        
        // Page views by page
        $stmt = $db->prepare("
            SELECT page, COUNT(*) as views
            FROM page_views
            WHERE created_at >= DATE_SUB(NOW(), INTERVAL :days DAY)
            GROUP BY page
            ORDER BY views DESC
            LIMIT 10
        ");
        $stmt->execute([':days' => $days]);
        $topPages = $stmt->fetchAll();
        
        // Daily views
        $stmt = $db->prepare("
            SELECT DATE(created_at) as date, COUNT(*) as views
            FROM page_views
            WHERE created_at >= DATE_SUB(NOW(), INTERVAL :days DAY)
            GROUP BY DATE(created_at)
            ORDER BY date ASC
        ");
        $stmt->execute([':days' => $days]);
        $dailyViews = $stmt->fetchAll();
        
        // Contact form submissions
        $stmt = $db->prepare("
            SELECT COUNT(*) as total_messages
            FROM contact_messages
            WHERE created_at >= DATE_SUB(NOW(), INTERVAL :days DAY)
        ");
        $stmt->execute([':days' => $days]);
        $messages = $stmt->fetch();
        
        return [
            'overview' => $overview,
            'top_pages' => $topPages,
            'daily_views' => $dailyViews,
            'messages' => $messages['total_messages']
        ];
    } catch (Exception $e) {
        error_log("Failed to get analytics: " . $e->getMessage());
        return null;
    }
}

// Main handler
try {
    $method = $_SERVER['REQUEST_METHOD'];
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    
    switch ($method) {
        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (!$input) {
                jsonResponse(['success' => false, 'message' => 'Invalid data'], 400);
            }
            
            $type = $input['type'] ?? 'pageview';
            
            if ($type === 'pageview') {
                trackPageView($input, $ip, $userAgent);
            } else if ($type === 'event') {
                trackEvent($input, $ip);
            }
            
            jsonResponse(['success' => true]);
            break;
            
        case 'GET':
            // Admin endpoint - should be protected
            $days = intval($_GET['days'] ?? 30);
            $summary = getAnalyticsSummary($days);
            
            if ($summary) {
                jsonResponse(['success' => true, 'data' => $summary]);
            } else {
                jsonResponse(['success' => false, 'message' => 'Failed to get analytics'], 500);
            }
            break;
            
        default:
            jsonResponse(['success' => false, 'message' => 'Method not allowed'], 405);
    }
    
} catch (Exception $e) {
    error_log("Analytics API error: " . $e->getMessage());
    jsonResponse(['success' => false, 'message' => 'An error occurred'], 500);
}