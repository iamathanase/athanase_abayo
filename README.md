# Athanase Portfolio - World-Class Developer Portfolio

A stunning, high-performance portfolio website built with vanilla HTML, CSS, JavaScript (frontend), PHP (backend), and MySQL (database).

## 🏗️ Project Structure

```
├── front_end/          # Frontend (HTML, CSS, JS)
│   ├── index.html      # Main HTML file
│   ├── css/            # Stylesheets
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── animations.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   └── responsive.css
│   ├── js/             # JavaScript modules
│   │   └── app.js
│   └── sw.js           # Service Worker (PWA)
│
├── back_end/           # Backend (PHP)
│   ├── config/
│   │   ├── config.php
│   │   └── database.php
│   ├── api/
│   │   ├── contact.php
│   │   ├── projects.php
│   │   └── analytics.php
│   ├── cache/
│   └── logs/
│
└── database/           # Database (MySQL)
    ├── schema.sql      # Database structure
    └── seed.sql        # Sample data
```

## ✨ Features

### Frontend
- 🎨 Stunning dark theme with electric cyan accents
- 🌟 Interactive particle background with mouse tracking
- 📱 Fully responsive (mobile-first design)
- ⚡ Smooth scroll animations & reveal effects
- 🎯 Custom cursor with hover effects
- 📊 Animated skill bars & counters
- 🔄 Dynamic content rendering
- 🌐 PWA support with offline capability
- ♿ Accessibility compliant (WCAG 2.1)
- 🖨️ Print-friendly styles

### Backend
- 🔒 Secure contact form with validation
- 📈 Analytics tracking (page views, events)
- 🛡️ Rate limiting & CSRF protection
- 📧 Email notifications
- 🗄️ RESTful API endpoints
- 🔐 Security headers (CSP, XSS, etc.)

### Database
- 📦 Projects with technologies
- 📊 Analytics & page views
- 💬 Contact messages
- 🎯 Domains & skills
- 📝 Blog posts (future)
- 📰 Newsletter subscribers

## 🚀 Quick Start

### 1. Frontend Only (Static)
Simply open `front_end/index.html` in a browser or serve with any static server:

```bash
# Using Python
cd front_end
python -m http.server 8000

# Using Node.js
npx serve front_end

# Using PHP
cd front_end
php -S localhost:8000
```

### 2. Full Stack Setup

#### Prerequisites
- PHP 7.4+ with PDO MySQL extension
- MySQL 8.0+
- Web server (Apache/Nginx)

#### Database Setup
```bash
# Create database and tables
mysql -u root -p < database/schema.sql

# Insert sample data
mysql -u root -p < database/seed.sql
```

#### Backend Configuration
Edit `back_end/config/database.php`:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'athanase_portfolio');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
```

#### Apache Virtual Host
```apache
<VirtualHost *:80>
    ServerName athanase.local
    DocumentRoot /path/to/front_end
    
    Alias /api /path/to/back_end/api
    
    <Directory /path/to/front_end>
        AllowOverride All
        Require all granted
    </Directory>
    
    <Directory /path/to/back_end>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

## 🎨 Customization

### Colors (CSS Variables)
Edit `front_end/css/variables.css`:
```css
:root {
    --primary: hsl(185, 100%, 50%);      /* Electric cyan */
    --accent: hsl(160, 100%, 45%);        /* Neon green */
    --destructive: hsl(0, 85%, 55%);      /* Infrared red */
    --background: hsl(220, 20%, 4%);      /* Deep space */
}
```

### Content
Edit `front_end/js/app.js` to update:
- Projects
- Skills/Domains
- Mindset principles

## 📱 PWA Support

The site works offline thanks to the Service Worker. To enable:
1. Serve over HTTPS (required for SW)
2. The SW auto-registers on page load
3. Assets are cached for offline use

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- CSRF tokens (for forms)
- Rate limiting
- Input sanitization
- SQL injection prevention (PDO)
- Secure session handling

## 📈 Performance

- Lazy loading images
- Debounced scroll/resize events
- Optimized animations (requestAnimationFrame)
- CSS containment
- Minimal dependencies (vanilla JS)
- Gzip compression ready

## 🌐 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License

MIT License - Feel free to use for your own portfolio!

---

Built with ❤️ by @iamathanase
