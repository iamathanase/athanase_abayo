-- ============================================
-- Athanase Portfolio Database Seed Data
-- ============================================

USE athanase_portfolio;

-- ============================================
-- Insert Technologies
-- ============================================
INSERT INTO technologies (name, category, icon) VALUES
('Python', 'Language', 'python'),
('TensorFlow', 'AI/ML', 'tensorflow'),
('PostgreSQL', 'Database', 'postgresql'),
('React', 'Frontend', 'react'),
('REST API', 'Backend', 'api'),
('PHP', 'Language', 'php'),
('MySQL', 'Database', 'mysql'),
('JavaScript', 'Language', 'javascript'),
('PWA', 'Technology', 'pwa'),
('RBAC', 'Security', 'shield'),
('HTML5', 'Frontend', 'html'),
('CSS3', 'Frontend', 'css'),
('LocalStorage', 'Technology', 'storage'),
('OAuth', 'Security', 'oauth'),
('Node.js', 'Backend', 'nodejs'),
('OAuth 2.0', 'Security', 'oauth'),
('2FA', 'Security', 'lock'),
('AI Analytics', 'AI/ML', 'brain'),
('Java', 'Language', 'java'),
('Spring Boot', 'Backend', 'spring'),
('TypeScript', 'Language', 'typescript'),
('Go', 'Language', 'go'),
('C/C++', 'Language', 'c'),
('Assembly', 'Language', 'assembly'),
('Linux', 'System', 'linux'),
('OWASP', 'Security', 'owasp'),
('Burp Suite', 'Security', 'burp'),
('Wireshark', 'Security', 'wireshark'),
('Metasploit', 'Security', 'metasploit'),
('Cryptography', 'Security', 'crypto');

-- ============================================
-- Insert Projects
-- ============================================
INSERT INTO projects (slug, title, subtitle, category, positioning, problem, solution, architecture, impact, icon, gradient, live_url, github_url, display_order) VALUES
('pin', 'PIN', 'Poverty Intelligence Network', 'AI / Social Impact', 
 'AI-powered early-warning system for poverty prevention in Africa.',
 'Traditional poverty indicators are reactive, identifying crises after they occur rather than predicting and preventing them.',
 'Built predictive analytics engine that processes multi-source data streams to generate policy-grade insights and early interventions.',
 'Scalable data pipeline with ML models for pattern recognition, real-time dashboards for policymakers, and API-first design for integration.',
 'Enabling data-driven social policy decisions at scale',
 'brain', 'from-primary to-accent', 'https://pin.wuaze.com', 'https://github.com/iamathanase/Poverty_Intellligence_Network', 1),

('ivcash', 'IvCash', 'Student Loan Management System', 'FinTech / Security',
 'Secure financial infrastructure for student funding.',
 'Student loan systems lack proper role-based access, offline capability, and secure payment workflows.',
 'Designed role-based architecture with encrypted transactions, PWA offline support, and audit-trail logging.',
 'Multi-tier security model with RBAC, service workers for offline functionality, and secure payment gateway integration.',
 'Production-ready financial system with zero security incidents',
 'wallet', 'from-accent to-primary', 'https://ivcash.kesug.com', 'https://github.com/iamathanase/IvCash', 2),

('lifeprint', 'LifePrint', 'Personal Operating System', 'Product / Identity',
 'A personal operating system for identity, wellness, and long-term vision.',
 'Personal data is fragmented across apps, lacking unified vision for identity management and life planning.',
 'Created modular system architecture for secure personal data handling with future-facing product design.',
 'Component-based modules for different life domains, encrypted local storage, and extensible plugin system.',
 'Pioneering personal data sovereignty',
 'fingerprint', 'from-destructive to-primary', 'http://169.239.251.102:341/~athanase.abayo/LifePrint/public/pages/home.html', 'https://github.com/iamathanase/LifePrint', 3),

('swapit', 'SwapIt', 'Peer-to-Peer Sharing Platform', 'Community / Trust Systems',
 'Trust-based peer-to-peer sharing at campus scale.',
 'Campus communities lack secure platforms for sharing resources with reputation and accountability.',
 'Built authentication system with trust scoring, reputation management, and community-safe transaction workflows.',
 'User verification layer, review aggregation engine, and escrow-style transaction handling.',
 'Building trust infrastructure for campus communities',
 'refresh', 'from-primary to-accent', 'https://swap-it.wuaze.com', 'https://github.com/iamathanase/SwapIt', 4),

('novamo', 'Novamo', 'Affiliate Marketing Platform', 'Enterprise / Commerce',
 'A production-grade global affiliate platform with enterprise-level features.',
 'Affiliate platforms lack comprehensive admin controls, advanced authentication, and AI-driven insights.',
 'Developed enterprise platform with dual dashboards, OAuth + 2FA authentication, and AI-powered analytics.',
 'Microservices approach with admin/user separation, real-time analytics pipeline, and multi-provider auth.',
 'Enterprise-ready affiliate infrastructure',
 'globe', 'from-accent to-destructive', 'https://novamo.vercel.app/index.html', 'https://github.com/iamathanase/Novamo', 5),

('cashflow', 'CashFlow', 'Cross-Border Payment System', 'FinTech / Mobile',
 'Seamless money transactions across Africa, built for speed and trust.',
 'Fragmented payment systems, high fees, and slow transfers across African borders.',
 'Unified API with mobile-first design and real-time processing capabilities.',
 'Microservices with secure transaction layer and multi-currency support.',
 'Reduced transaction times and increased financial inclusion',
 'banknote', 'from-destructive to-accent', '#', '#', 6);

-- ============================================
-- Link Projects to Technologies
-- ============================================
INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t WHERE p.slug = 'pin' AND t.name IN ('Python', 'TensorFlow', 'PostgreSQL', 'React', 'REST API');

INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t WHERE p.slug = 'ivcash' AND t.name IN ('PHP', 'MySQL', 'JavaScript', 'PWA', 'RBAC');

INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t WHERE p.slug = 'lifeprint' AND t.name IN ('HTML5', 'CSS3', 'JavaScript', 'LocalStorage');

INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t WHERE p.slug = 'swapit' AND t.name IN ('PHP', 'MySQL', 'JavaScript', 'OAuth');

INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t WHERE p.slug = 'novamo' AND t.name IN ('React', 'Node.js', 'OAuth 2.0', '2FA', 'AI Analytics');

INSERT INTO project_technologies (project_id, technology_id)
SELECT p.id, t.id FROM projects p, technologies t WHERE p.slug = 'cashflow' AND t.name IN ('Java', 'Spring Boot', 'PostgreSQL', 'REST API');


-- ============================================
-- Insert Domains
-- ============================================
INSERT INTO domains (slug, title, subtitle, description, icon, display_order) VALUES
('software', 'Software Engineering', 'Architecture & Systems', 
 'Designing maintainable, scalable software systems with clean architecture principles.',
 'code', 1),
('cs', 'Computer Science', 'Theory & Foundations',
 'Deep understanding of computational principles that power modern technology.',
 'brain', 2),
('security', 'Cybersecurity', 'Defense & Resilience',
 'Building defense-in-depth systems that anticipate and resist sophisticated attacks.',
 'shield', 3);

-- ============================================
-- Insert Domain Skills
-- ============================================
INSERT INTO domain_skills (domain_id, name, level, display_order)
SELECT id, 'System Architecture', 90, 1 FROM domains WHERE slug = 'software'
UNION ALL
SELECT id, 'Algorithm Design', 85, 2 FROM domains WHERE slug = 'software'
UNION ALL
SELECT id, 'API Development', 92, 3 FROM domains WHERE slug = 'software'
UNION ALL
SELECT id, 'Scalability Patterns', 88, 4 FROM domains WHERE slug = 'software';

INSERT INTO domain_skills (domain_id, name, level, display_order)
SELECT id, 'Data Structures', 92, 1 FROM domains WHERE slug = 'cs'
UNION ALL
SELECT id, 'Operating Systems', 85, 2 FROM domains WHERE slug = 'cs'
UNION ALL
SELECT id, 'Distributed Systems', 80, 3 FROM domains WHERE slug = 'cs'
UNION ALL
SELECT id, 'Computational Theory', 78, 4 FROM domains WHERE slug = 'cs';

INSERT INTO domain_skills (domain_id, name, level, display_order)
SELECT id, 'Threat Modeling', 88, 1 FROM domains WHERE slug = 'security'
UNION ALL
SELECT id, 'Secure Architecture', 90, 2 FROM domains WHERE slug = 'security'
UNION ALL
SELECT id, 'Penetration Testing', 82, 3 FROM domains WHERE slug = 'security'
UNION ALL
SELECT id, 'Incident Response', 78, 4 FROM domains WHERE slug = 'security';

-- ============================================
-- Insert Domain Tools
-- ============================================
INSERT INTO domain_tools (domain_id, name)
SELECT id, 'TypeScript' FROM domains WHERE slug = 'software'
UNION ALL SELECT id, 'Python' FROM domains WHERE slug = 'software'
UNION ALL SELECT id, 'Go' FROM domains WHERE slug = 'software'
UNION ALL SELECT id, 'React' FROM domains WHERE slug = 'software'
UNION ALL SELECT id, 'Node.js' FROM domains WHERE slug = 'software'
UNION ALL SELECT id, 'PostgreSQL' FROM domains WHERE slug = 'software';

INSERT INTO domain_tools (domain_id, name)
SELECT id, 'C/C++' FROM domains WHERE slug = 'cs'
UNION ALL SELECT id, 'Assembly' FROM domains WHERE slug = 'cs'
UNION ALL SELECT id, 'Linux' FROM domains WHERE slug = 'cs'
UNION ALL SELECT id, 'Algorithms' FROM domains WHERE slug = 'cs'
UNION ALL SELECT id, 'Networking' FROM domains WHERE slug = 'cs';

INSERT INTO domain_tools (domain_id, name)
SELECT id, 'OWASP' FROM domains WHERE slug = 'security'
UNION ALL SELECT id, 'Burp Suite' FROM domains WHERE slug = 'security'
UNION ALL SELECT id, 'Wireshark' FROM domains WHERE slug = 'security'
UNION ALL SELECT id, 'Metasploit' FROM domains WHERE slug = 'security'
UNION ALL SELECT id, 'Cryptography' FROM domains WHERE slug = 'security';

-- ============================================
-- Sample Testimonials
-- ============================================
INSERT INTO testimonials (name, role, company, content, rating, is_featured, is_active) VALUES
('Sarah Chen', 'CTO', 'TechStart Inc', 'Athanase''s approach to system architecture is exceptional. He doesn''t just build features, he builds foundations that scale.', 5, TRUE, TRUE),
('Michael Okonkwo', 'Product Manager', 'FinanceHub', 'Working with Athanase on our security infrastructure was transformative. His security-first mindset caught vulnerabilities we never knew existed.', 5, TRUE, TRUE),
('Dr. Amara Diallo', 'Research Director', 'AI for Africa', 'The PIN project showcases Athanase''s ability to combine technical excellence with social impact. Truly impressive work.', 5, TRUE, TRUE);

-- ============================================
-- Create Admin User (for future admin panel)
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'editor') DEFAULT 'editor',
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_username (username),
    INDEX idx_email (email)
) ENGINE=InnoDB;

-- Default admin (password: change_me_immediately)
-- In production, change this password immediately!
INSERT INTO admin_users (username, email, password_hash, role) VALUES
('admin', 'admin@athanase.dev', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');