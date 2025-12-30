<?php
/**
 * Projects API Endpoint
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
 * Get all projects
 */
function getProjects() {
    try {
        $db = getDB();
        $stmt = $db->query("
            SELECT p.*, 
                   GROUP_CONCAT(DISTINCT t.name) as technologies
            FROM projects p
            LEFT JOIN project_technologies pt ON p.id = pt.project_id
            LEFT JOIN technologies t ON pt.technology_id = t.id
            WHERE p.is_active = 1
            GROUP BY p.id
            ORDER BY p.display_order ASC, p.created_at DESC
        ");
        
        $projects = $stmt->fetchAll();
        
        // Format technologies as array
        foreach ($projects as &$project) {
            $project['stack'] = $project['technologies'] 
                ? explode(',', $project['technologies']) 
                : [];
            unset($project['technologies']);
        }
        
        return $projects;
    } catch (Exception $e) {
        error_log("Failed to get projects: " . $e->getMessage());
        return [];
    }
}

/**
 * Get single project by ID or slug
 */
function getProject($identifier) {
    try {
        $db = getDB();
        
        $field = is_numeric($identifier) ? 'id' : 'slug';
        $stmt = $db->prepare("
            SELECT p.*, 
                   GROUP_CONCAT(DISTINCT t.name) as technologies
            FROM projects p
            LEFT JOIN project_technologies pt ON p.id = pt.project_id
            LEFT JOIN technologies t ON pt.technology_id = t.id
            WHERE p.$field = :identifier AND p.is_active = 1
            GROUP BY p.id
        ");
        
        $stmt->execute([':identifier' => $identifier]);
        $project = $stmt->fetch();
        
        if ($project) {
            $project['stack'] = $project['technologies'] 
                ? explode(',', $project['technologies']) 
                : [];
            unset($project['technologies']);
        }
        
        return $project;
    } catch (Exception $e) {
        error_log("Failed to get project: " . $e->getMessage());
        return null;
    }
}

/**
 * Increment project view count
 */
function incrementViewCount($projectId) {
    try {
        $db = getDB();
        $stmt = $db->prepare("UPDATE projects SET view_count = view_count + 1 WHERE id = :id");
        $stmt->execute([':id' => $projectId]);
    } catch (Exception $e) {
        error_log("Failed to increment view count: " . $e->getMessage());
    }
}

// Main handler
try {
    $method = $_SERVER['REQUEST_METHOD'];
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $pathParts = explode('/', trim($path, '/'));
    
    // Get project identifier from URL if present
    $identifier = end($pathParts);
    if ($identifier === 'projects.php' || $identifier === 'projects') {
        $identifier = null;
    }
    
    switch ($method) {
        case 'GET':
            if ($identifier) {
                $project = getProject($identifier);
                if ($project) {
                    incrementViewCount($project['id']);
                    jsonResponse(['success' => true, 'data' => $project]);
                } else {
                    jsonResponse(['success' => false, 'message' => 'Project not found'], 404);
                }
            } else {
                $projects = getProjects();
                jsonResponse(['success' => true, 'data' => $projects]);
            }
            break;
            
        default:
            jsonResponse(['success' => false, 'message' => 'Method not allowed'], 405);
    }
    
} catch (Exception $e) {
    error_log("Projects API error: " . $e->getMessage());
    jsonResponse(['success' => false, 'message' => 'An error occurred'], 500);
}