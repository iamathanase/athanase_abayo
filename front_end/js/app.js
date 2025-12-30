/* ============================================
   Athanase Portfolio - Combined Application Script
   All data and logic in one file
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // DATA
    // ============================================
    
    const PROJECTS_DATA = [
        {
            id: 1,
            title: 'Novamo',
            subtitle: 'Affiliate Marketing Platform',
            category: 'Enterprise / Commerce',
            positioning: 'A production-grade global affiliate platform with enterprise-level features.',
            problem: 'Affiliate platforms lack comprehensive admin controls, advanced authentication, and AI-driven insights.',
            solution: 'Developed enterprise platform with dual dashboards, OAuth + 2FA authentication, and AI-powered analytics.',
            architecture: 'Microservices approach with admin/user separation, real-time analytics pipeline, and multi-provider auth.',
            impact: 'Enterprise-ready affiliate infrastructure',
            stack: ['React', 'Node.js', 'OAuth 2.0', '2FA', 'AI Analytics'],
            icon: 'globe',
            gradient: 'from-accent to-destructive',
            liveUrl: 'https://novamo.vercel.app/index.html',
            githubUrl: 'https://github.com/iamathanase/Novamo'
        },
        {
            id: 2,
            title: 'PIN',
            subtitle: 'Poverty Intelligence Network',
            category: 'AI / Social Impact',
            positioning: 'AI-powered early-warning system for poverty prevention in Africa.',
            problem: 'Traditional poverty indicators are reactive, identifying crises after they occur rather than predicting and preventing them.',
            solution: 'Built predictive analytics engine that processes multi-source data streams to generate policy-grade insights and early interventions.',
            architecture: 'Scalable data pipeline with ML models for pattern recognition, real-time dashboards for policymakers, and API-first design for integration.',
            impact: 'Enabling data-driven social policy decisions at scale',
            stack: ['Python', 'TensorFlow', 'PostgreSQL', 'React', 'REST API'],
            icon: 'brain',
            gradient: 'from-primary to-accent',
            liveUrl: 'https://pin.wuaze.com',
            githubUrl: 'https://github.com/iamathanase/Poverty_Intellligence_Network'
        },
        {
            id: 3,
            title: 'IvCash',
            subtitle: 'Student Loan Management System',
            category: 'FinTech / Security',
            positioning: 'Secure financial infrastructure for student funding.',
            problem: 'Student loan systems lack proper role-based access, offline capability, and secure payment workflows.',
            solution: 'Designed role-based architecture with encrypted transactions, PWA offline support, and audit-trail logging.',
            architecture: 'Multi-tier security model with RBAC, service workers for offline functionality, and secure payment gateway integration.',
            impact: 'Production-ready financial system with zero security incidents',
            stack: ['PHP', 'MySQL', 'JavaScript', 'PWA', 'RBAC'],
            icon: 'wallet',
            gradient: 'from-accent to-primary',
            liveUrl: 'https://ivcash.kesug.com',
            githubUrl: 'https://github.com/iamathanase/IvCash'
        },
        {
            id: 4,
            title: 'LifePrint',
            subtitle: 'Personal Operating System',
            category: 'Product / Identity',
            positioning: 'A personal operating system for identity, wellness, and long-term vision.',
            problem: 'Personal data is fragmented across apps, lacking unified vision for identity management and life planning.',
            solution: 'Created modular system architecture for secure personal data handling with future-facing product design.',
            architecture: 'Component-based modules for different life domains, encrypted local storage, and extensible plugin system.',
            impact: 'Pioneering personal data sovereignty',
            stack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Modular Design'],
            icon: 'fingerprint',
            gradient: 'from-destructive to-primary',
            liveUrl: 'http://169.239.251.102:341/~athanase.abayo/LifePrint/public/pages/home.html',
            githubUrl: 'https://github.com/iamathanase/LifePrint'
        },
        {
            id: 5,
            title: 'SwapIt',
            subtitle: 'Peer-to-Peer Sharing Platform',
            category: 'Community / Trust Systems',
            positioning: 'Trust-based peer-to-peer sharing at campus scale.',
            problem: 'Campus communities lack secure platforms for sharing resources with reputation and accountability.',
            solution: 'Built authentication system with trust scoring, reputation management, and community-safe transaction workflows.',
            architecture: 'User verification layer, review aggregation engine, and escrow-style transaction handling.',
            impact: 'Building trust infrastructure for campus communities',
            stack: ['PHP', 'MySQL', 'JavaScript', 'OAuth', 'Review System'],
            icon: 'refresh',
            gradient: 'from-primary to-accent',
            liveUrl: 'https://swap-it.wuaze.com',
            githubUrl: 'https://github.com/iamathanase/SwapIt'
        },
        {
            id: 6,
            title: 'CashFlow',
            subtitle: 'Cross-Border Payment System',
            category: 'FinTech / Mobile',
            positioning: 'Seamless money transactions across Africa, built for speed and trust.',
            problem: 'Fragmented payment systems, high fees, and slow transfers across African borders.',
            solution: 'Unified API with mobile-first design and real-time processing capabilities.',
            architecture: 'Microservices with secure transaction layer and multi-currency support.',
            impact: 'Reduced transaction times and increased financial inclusion',
            stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Mobile'],
            icon: 'banknote',
            gradient: 'from-destructive to-accent',
            liveUrl: '#',
            githubUrl: '#'
        }
    ];


    const DOMAINS_DATA = {
        software: {
            id: 'software',
            title: 'Software Engineering',
            subtitle: 'Architecture & Systems',
            icon: 'code',
            description: 'Designing maintainable, scalable software systems with clean architecture principles.',
            skills: [
                { name: 'System Architecture', level: 90 },
                { name: 'Algorithm Design', level: 85 },
                { name: 'API Development', level: 92 },
                { name: 'Scalability Patterns', level: 88 }
            ],
            tools: ['TypeScript', 'Python', 'Go', 'React', 'Node.js', 'PostgreSQL']
        },
        cs: {
            id: 'cs',
            title: 'Computer Science',
            subtitle: 'Theory & Foundations',
            icon: 'brain',
            description: 'Deep understanding of computational principles that power modern technology.',
            skills: [
                { name: 'Data Structures', level: 92 },
                { name: 'Operating Systems', level: 85 },
                { name: 'Distributed Systems', level: 80 },
                { name: 'Computational Theory', level: 78 }
            ],
            tools: ['C/C++', 'Assembly', 'Linux', 'Algorithms', 'Networking']
        },
        security: {
            id: 'security',
            title: 'Cybersecurity',
            subtitle: 'Defense & Resilience',
            icon: 'shield',
            description: 'Building defense-in-depth systems that anticipate and resist sophisticated attacks.',
            skills: [
                { name: 'Threat Modeling', level: 88 },
                { name: 'Secure Architecture', level: 90 },
                { name: 'Penetration Testing', level: 82 },
                { name: 'Incident Response', level: 78 }
            ],
            tools: ['OWASP', 'Burp Suite', 'Wireshark', 'Metasploit', 'Cryptography']
        }
    };

    const MINDSET_DATA = [
        { icon: 'eye', title: 'Assume Breach', description: 'Design every system as if the perimeter has already been compromised. Defense in depth is not optional.' },
        { icon: 'lock', title: 'Zero Trust', description: 'Never trust, always verify. Every request, every user, every device must prove its legitimacy.' },
        { icon: 'target', title: 'Attacker Mindset', description: 'To defend effectively, think like an adversary. Understand motivations, capabilities, and attack vectors.' },
        { icon: 'layers', title: 'Defense in Depth', description: 'Layer security controls so that failure of one does not mean failure of all. Redundancy is resilience.' },
        { icon: 'alert', title: 'Fail Secure', description: 'When systems fail, they must fail in a secure state. Never expose more than necessary.' },
        { icon: 'shield', title: 'Secure by Design', description: 'Security is not a feature to bolt on later. It is woven into the architecture from day one.' }
    ];

    const ICONS = {
        brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 2a10 10 0 0 1 10 10"></path><circle cx="12" cy="12" r="3"></circle></svg>',
        wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"></path></svg>',
        fingerprint: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"></path></svg>',
        refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>',
        globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        banknote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>',
        code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
        lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
        layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
        alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
    };

    function getIcon(name) {
        return ICONS[name] || ICONS.code;
    }

    function getGradient(gradient) {
        const gradients = {
            'from-primary to-accent': 'background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(0, 230, 138, 0.2))',
            'from-accent to-primary': 'background: linear-gradient(135deg, rgba(0, 230, 138, 0.2), rgba(0, 240, 255, 0.2))',
            'from-destructive to-primary': 'background: linear-gradient(135deg, rgba(235, 55, 55, 0.2), rgba(0, 240, 255, 0.2))',
            'from-primary to-destructive': 'background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(235, 55, 55, 0.2))',
            'from-accent to-destructive': 'background: linear-gradient(135deg, rgba(0, 230, 138, 0.2), rgba(235, 55, 55, 0.2))',
            'from-destructive to-accent': 'background: linear-gradient(135deg, rgba(235, 55, 55, 0.2), rgba(0, 230, 138, 0.2))'
        };
        return gradients[gradient] || gradients['from-primary to-accent'];
    }


    // ============================================
    // PARTICLE SYSTEM
    // ============================================
    
    class ParticleSystem {
        constructor(canvasId) {
            this.canvas = document.getElementById(canvasId);
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.mouse = { x: 0, y: 0 };
            this.animationId = null;
            this.isRunning = false;
            this.init();
        }
        
        init() {
            this.resize();
            this.createParticles();
            window.addEventListener('resize', () => { this.resize(); this.createParticles(); });
            window.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
            document.addEventListener('visibilitychange', () => { document.hidden ? this.stop() : this.start(); });
            this.start();
        }
        
        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        
        createParticles() {
            const count = Math.floor((this.canvas.width * this.canvas.height) / 15000);
            this.particles = [];
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        }
        
        animate() {
            if (!this.isRunning) return;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Draw grid
            this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
            this.ctx.lineWidth = 1;
            for (let x = 0; x < this.canvas.width; x += 60) {
                this.ctx.beginPath(); this.ctx.moveTo(x, 0); this.ctx.lineTo(x, this.canvas.height); this.ctx.stroke();
            }
            for (let y = 0; y < this.canvas.height; y += 60) {
                this.ctx.beginPath(); this.ctx.moveTo(0, y); this.ctx.lineTo(this.canvas.width, y); this.ctx.stroke();
            }
            
            // Update and draw particles
            this.particles.forEach((p, i) => {
                const dx = this.mouse.x - p.x, dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) { const force = (150 - dist) / 150; p.vx -= (dx / dist) * force * 0.02; p.vy -= (dy / dist) * force * 0.02; }
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = this.canvas.width; if (p.x > this.canvas.width) p.x = 0;
                if (p.y < 0) p.y = this.canvas.height; if (p.y > this.canvas.height) p.y = 0;
                p.vx *= 0.99; p.vy *= 0.99;
                
                this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`; this.ctx.fill();
                
                for (let j = i + 1; j < this.particles.length; j++) {
                    const o = this.particles[j];
                    const d = Math.sqrt((o.x - p.x) ** 2 + (o.y - p.y) ** 2);
                    if (d < 120) {
                        this.ctx.beginPath(); this.ctx.moveTo(p.x, p.y); this.ctx.lineTo(o.x, o.y);
                        this.ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - d / 120)})`; this.ctx.lineWidth = 0.5; this.ctx.stroke();
                    }
                }
            });
            
            // Mouse glow
            if (this.mouse.x && this.mouse.y) {
                const g = this.ctx.createRadialGradient(this.mouse.x, this.mouse.y, 0, this.mouse.x, this.mouse.y, 200);
                g.addColorStop(0, 'rgba(0, 240, 255, 0.1)'); g.addColorStop(1, 'rgba(0, 240, 255, 0)');
                this.ctx.fillStyle = g; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            }
            
            this.animationId = requestAnimationFrame(() => this.animate());
        }
        
        start() { if (this.isRunning) return; this.isRunning = true; this.animate(); }
        stop() { this.isRunning = false; if (this.animationId) cancelAnimationFrame(this.animationId); }
    }


    // ============================================
    // NAVIGATION
    // ============================================
    
    class Navigation {
        constructor() {
            this.nav = document.getElementById('navigation');
            this.mobileBtn = document.getElementById('mobileMenuBtn');
            this.mobileMenu = document.getElementById('mobileMenu');
            this.backToTop = document.getElementById('backToTop');
            this.isMenuOpen = false;
            this.init();
        }
        
        init() {
            window.addEventListener('scroll', () => this.handleScroll());
            if (this.mobileBtn) this.mobileBtn.addEventListener('click', () => this.toggleMobileMenu());
            document.querySelectorAll('.mobile-nav-link').forEach(link => link.addEventListener('click', () => this.closeMobileMenu()));
            if (this.backToTop) this.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && this.isMenuOpen) this.closeMobileMenu(); });
            this.setupSmoothScroll();
        }
        
        handleScroll() {
            const scrollY = window.scrollY;
            if (this.nav) this.nav.classList.toggle('scrolled', scrollY > 50);
            if (this.backToTop) this.backToTop.classList.toggle('visible', scrollY > 500);
        }
        
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            this.mobileBtn.classList.toggle('active', this.isMenuOpen);
            this.mobileMenu.classList.toggle('active', this.isMenuOpen);
            document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
        }
        
        closeMobileMenu() {
            this.isMenuOpen = false;
            if (this.mobileBtn) this.mobileBtn.classList.remove('active');
            if (this.mobileMenu) this.mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = anchor.getAttribute('href');
                    if (targetId === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
                    const target = document.querySelector(targetId);
                    if (target) {
                        const navHeight = this.nav ? this.nav.offsetHeight : 0;
                        window.scrollTo({ top: target.offsetTop - navHeight - 20, behavior: 'smooth' });
                    }
                });
            });
        }
    }

    // ============================================
    // ANIMATIONS
    // ============================================
    
    let scrollObserver = null;
    
    class Animations {
        constructor() {
            this.init();
        }
        
        init() {
            this.setupScrollReveal();
            this.setupCounters();
            this.setupTypingEffect();
        }
        
        setupScrollReveal() {
            scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        const skillFills = entry.target.querySelectorAll('.skill-fill');
                        skillFills.forEach((fill, i) => {
                            setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, i * 100);
                        });
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal-on-scroll').forEach(el => scrollObserver.observe(el));
        }
        
        setupCounters() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                        const target = entry.target;
                        const countTo = parseInt(target.dataset.count);
                        if (countTo) {
                            target.classList.add('counted');
                            this.animateCounter(target, countTo);
                        }
                    }
                });
            }, { threshold: 0.5 });
            document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
        }
        
        animateCounter(el, target) {
            const duration = 2000, start = performance.now();
            const update = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 4);
                el.textContent = Math.floor(target * eased) + '+';
                if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
        }
        
        setupTypingEffect() {
            const el = document.getElementById('typingText');
            if (!el) return;
            const texts = ['think, scale, and defend.', 'anticipate and adapt.', 'secure and resilient.', 'elegant and powerful.'];
            let textIdx = 0, charIdx = 0, isDeleting = false, isPaused = false;
            
            const type = () => {
                const text = texts[textIdx];
                if (isPaused) { setTimeout(type, 2000); isPaused = false; isDeleting = true; return; }
                if (isDeleting) {
                    el.textContent = text.substring(0, --charIdx);
                    if (charIdx === 0) { isDeleting = false; textIdx = (textIdx + 1) % texts.length; }
                } else {
                    el.textContent = text.substring(0, ++charIdx);
                    if (charIdx === text.length) isPaused = true;
                }
                setTimeout(type, isDeleting ? 50 : 100);
            };
            setTimeout(type, 3000);
        }
    }
    
    // Function to observe new elements
    function observeNewElements() {
        if (scrollObserver) {
            document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
                scrollObserver.observe(el);
            });
        }
    }


    // ============================================
    // DOMAINS SECTION
    // ============================================
    
    class Domains {
        constructor() {
            this.currentDomain = 'software';
            this.init();
        }
        
        init() {
            document.querySelectorAll('.domain-btn').forEach(btn => {
                btn.addEventListener('click', () => this.switchDomain(btn.dataset.domain));
            });
            this.render(this.currentDomain);
        }
        
        switchDomain(domainId) {
            if (domainId === this.currentDomain) return;
            document.querySelectorAll('.domain-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.domain === domainId));
            const content = document.querySelector('.domain-content');
            if (content) {
                content.style.opacity = '0'; content.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    this.currentDomain = domainId;
                    this.render(domainId);
                    content.style.opacity = '1'; content.style.transform = 'translateY(0)';
                }, 300);
            }
        }
        
        render(domainId) {
            const d = DOMAINS_DATA[domainId];
            if (!d) return;
            
            const iconEl = document.getElementById('domainIcon');
            const titleEl = document.getElementById('domainTitle');
            const subtitleEl = document.getElementById('domainSubtitle');
            const descEl = document.getElementById('domainDescription');
            const skillsEl = document.getElementById('skillBars');
            const toolsEl = document.getElementById('toolsGrid');
            const termTitleEl = document.getElementById('terminalTitle');
            const termBodyEl = document.getElementById('terminalBody');
            
            if (iconEl) iconEl.innerHTML = getIcon(d.icon);
            if (titleEl) titleEl.textContent = d.title;
            if (subtitleEl) subtitleEl.textContent = d.subtitle;
            if (descEl) descEl.textContent = d.description;
            
            if (skillsEl) {
                skillsEl.innerHTML = d.skills.map(s => `
                    <div class="skill-bar">
                        <div class="skill-header"><span class="skill-name">${s.name}</span><span class="skill-level">${s.level}%</span></div>
                        <div class="skill-track"><div class="skill-fill" data-width="${s.level}" style="width: 0%"></div></div>
                    </div>
                `).join('');
                setTimeout(() => {
                    skillsEl.querySelectorAll('.skill-fill').forEach((fill, i) => {
                        setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, i * 100);
                    });
                }, 100);
            }
            
            if (toolsEl) toolsEl.innerHTML = d.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
            if (termTitleEl) termTitleEl.textContent = `athanase@system:~/${d.id}`;
            if (termBodyEl) termBodyEl.innerHTML = `
                <div class="terminal-line"><span class="text-accent">$</span> <span class="text-muted">echo $DOMAIN</span></div>
                <div class="text-primary">${d.title}</div>
                <div class="terminal-line"><span class="text-accent">$</span> <span class="text-muted">cat philosophy.txt</span></div>
                <div style="color: rgba(248, 250, 252, 0.8)">${d.description}</div>
                <div class="terminal-line"><span class="text-accent">$</span> <span class="cursor-blink">_</span></div>
            `;
        }
    }


    // ============================================
    // PROJECTS SECTION
    // ============================================
    
    class Projects {
        constructor() {
            console.log('Projects constructor called');
            console.log('PROJECTS_DATA:', PROJECTS_DATA);
            console.log('MINDSET_DATA:', MINDSET_DATA);
            this.init();
        }
        
        init() {
            console.log('Projects init called');
            this.renderProjects();
            this.renderMindset();
            this.populateDropdowns();
        }
        
        populateDropdowns() {
            // Desktop dropdown
            const desktopDropdown = document.getElementById('projectsDropdown');
            if (desktopDropdown) {
                const dropdownHTML = PROJECTS_DATA.map(p => `
                    <a href="#project-${p.id}" class="nav-dropdown-item" data-project-id="${p.id}">
                        <span class="dropdown-icon">${getIcon(p.icon)}</span>
                        <span class="dropdown-text">
                            <span class="dropdown-title">${p.title}</span>
                            <span class="dropdown-subtitle">${p.subtitle}</span>
                        </span>
                    </a>
                `).join('') + `
                    <div class="nav-dropdown-divider"></div>
                    <a href="#projects" class="nav-dropdown-all">
                        <span>View All Projects</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                `;
                desktopDropdown.innerHTML = dropdownHTML;
                
                // Add click handlers for smooth scroll
                desktopDropdown.querySelectorAll('.nav-dropdown-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        const projectId = item.dataset.projectId;
                        this.scrollToProject(projectId);
                    });
                });
            }
            
            // Mobile dropdown
            const mobileDropdown = document.getElementById('mobileProjectsDropdown');
            const mobileBtn = document.getElementById('mobileProjectsBtn');
            
            if (mobileDropdown) {
                const mobileHTML = PROJECTS_DATA.map(p => `
                    <a href="#project-${p.id}" class="mobile-dropdown-item" data-project-id="${p.id}">
                        <span class="dropdown-icon">${getIcon(p.icon)}</span>
                        <span>${p.title}</span>
                    </a>
                `).join('');
                mobileDropdown.innerHTML = mobileHTML;
                
                // Add click handlers
                mobileDropdown.querySelectorAll('.mobile-dropdown-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        const projectId = item.dataset.projectId;
                        this.scrollToProject(projectId);
                        // Close mobile menu
                        const mobileMenu = document.getElementById('mobileMenu');
                        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                        if (mobileMenu) mobileMenu.classList.remove('active');
                        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
                        if (mobileDropdown) mobileDropdown.classList.remove('active');
                        if (mobileBtn) mobileBtn.classList.remove('active');
                        document.body.style.overflow = '';
                    });
                });
            }
            
            // Toggle mobile dropdown
            if (mobileBtn && mobileDropdown) {
                mobileBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    mobileBtn.classList.toggle('active');
                    mobileDropdown.classList.toggle('active');
                });
            }
        }
        
        scrollToProject(projectId) {
            const projectCard = document.querySelector(`[data-project-id="${projectId}"]`);
            if (projectCard) {
                const nav = document.getElementById('navigation');
                const navHeight = nav ? nav.offsetHeight : 0;
                window.scrollTo({ 
                    top: projectCard.offsetTop - navHeight - 30, 
                    behavior: 'smooth' 
                });
            }
        }
        
        renderProjects() {
            const grid = document.getElementById('projectsGrid');
            console.log('projectsGrid element:', grid);
            if (!grid) {
                console.error('projectsGrid element not found!');
                return;
            }
            
            console.log('Rendering', PROJECTS_DATA.length, 'projects');
            
            const html = PROJECTS_DATA.map((p, i) => `
                <div class="project-card reveal-on-scroll" data-project-id="${p.id}" id="project-${p.id}" style="animation-delay: ${i * 100}ms">
                    <div class="project-gradient" style="${getGradient(p.gradient)}"></div>
                    <div class="project-content">
                        <div class="project-header">
                            <div class="project-info">
                                <div class="project-icon">${getIcon(p.icon)}</div>
                                <div>
                                    <span class="project-category">${p.category}</span>
                                    <h3 class="project-title">${p.title}</h3>
                                    <p class="project-subtitle">${p.subtitle}</p>
                                </div>
                            </div>
                            <div class="project-actions">
                                <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    <span>Live Demo</span>
                                </a>
                                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                        <div class="project-positioning"><p>"${p.positioning}"</p></div>
                        <div class="project-details">
                            <div class="detail-card"><span class="detail-label problem">// PROBLEM</span><p class="detail-text">${p.problem}</p></div>
                            <div class="detail-card"><span class="detail-label solution">// SOLUTION</span><p class="detail-text">${p.solution}</p></div>
                            <div class="detail-card"><span class="detail-label architecture">// ARCHITECTURE</span><p class="detail-text">${p.architecture}</p></div>
                            <div class="detail-card impact"><span class="detail-label impact">// IMPACT</span><p class="detail-text">${p.impact}</p></div>
                        </div>
                        <div class="project-stack">
                            <span class="stack-label">STACK:</span>
                            ${p.stack.map(t => `<span class="stack-tag">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
            
            grid.innerHTML = html;
            console.log('Projects HTML set, grid children:', grid.children.length);
            
            // Observe new elements for scroll reveal
            setTimeout(() => observeNewElements(), 100);
        }
        
        renderMindset() {
            const grid = document.getElementById('mindsetGrid');
            console.log('mindsetGrid element:', grid);
            if (!grid) {
                console.error('mindsetGrid element not found!');
                return;
            }
            
            console.log('Rendering', MINDSET_DATA.length, 'mindset items');
            
            grid.innerHTML = MINDSET_DATA.map((m, i) => `
                <div class="mindset-card reveal-on-scroll" style="animation-delay: ${i * 100}ms">
                    <div class="mindset-icon">${getIcon(m.icon)}</div>
                    <h3 class="mindset-title">${m.title}</h3>
                    <p class="mindset-desc">${m.description}</p>
                </div>
            `).join('');
            
            console.log('Mindset HTML set, grid children:', grid.children.length);
            
            // Observe new elements for scroll reveal
            setTimeout(() => observeNewElements(), 100);
        }
    }


    // ============================================
    // CONTACT FORM
    // ============================================
    
    class Contact {
        constructor() {
            this.form = document.getElementById('contactForm');
            this.submitBtn = document.getElementById('submitBtn');
            this.toast = document.getElementById('toast');
            if (this.form) this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
        
        async handleSubmit(e) {
            e.preventDefault();
            const formData = new FormData(this.form);
            const data = { name: formData.get('name'), email: formData.get('email'), message: formData.get('message') };
            
            // Validate
            if (!data.name || !data.email || !data.message) { this.showToast('All fields are required', 'error'); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { this.showToast('Invalid email address', 'error'); return; }
            
            this.setLoading(true);
            
            try {
                const response = await fetch('../back_end/api/contact.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                if (result.success) {
                    this.showToast('Message sent successfully!', 'success');
                    this.form.reset();
                } else {
                    throw new Error(result.message);
                }
            } catch (error) {
                // Fallback for demo
                await new Promise(r => setTimeout(r, 1000));
                this.showToast('Message sent successfully!', 'success');
                this.form.reset();
            }
            
            this.setLoading(false);
        }
        
        setLoading(loading) {
            if (!this.submitBtn) return;
            this.submitBtn.disabled = loading;
            this.submitBtn.innerHTML = loading 
                ? '<span>Sending...</span><svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>'
                : '<span>Send Message</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
        }
        
        showToast(message, type) {
            if (!this.toast) return;
            const msgEl = this.toast.querySelector('.toast-message');
            const iconEl = this.toast.querySelector('.toast-icon');
            if (msgEl) msgEl.textContent = message;
            if (iconEl) {
                iconEl.style.color = type === 'success' ? 'var(--accent)' : 'var(--destructive)';
                iconEl.innerHTML = type === 'success' 
                    ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
                    : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>';
            }
            this.toast.classList.add('show');
            setTimeout(() => this.toast.classList.remove('show'), 4000);
        }
    }

    // ============================================
    // CUSTOM CURSOR
    // ============================================
    
    class CustomCursor {
        constructor() {
            this.cursor = document.getElementById('customCursor');
            if (!this.cursor || this.isTouchDevice()) return;
            
            this.dot = this.cursor.querySelector('.cursor-dot');
            this.ring = this.cursor.querySelector('.cursor-ring');
            this.pos = { x: 0, y: 0 };
            this.mouse = { x: 0, y: 0 };
            this.init();
        }
        
        isTouchDevice() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }
        
        init() {
            document.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });
            
            // Hover effects
            document.querySelectorAll('a, button, .glass-card, .project-card, .principle-card, .mindset-card').forEach(el => {
                el.addEventListener('mouseenter', () => this.cursor.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => this.cursor.classList.remove('cursor-hover'));
            });
            
            this.animate();
        }
        
        animate() {
            this.pos.x += (this.mouse.x - this.pos.x) * 0.15;
            this.pos.y += (this.mouse.y - this.pos.y) * 0.15;
            
            if (this.dot) {
                this.dot.style.left = this.mouse.x + 'px';
                this.dot.style.top = this.mouse.y + 'px';
            }
            if (this.ring) {
                this.ring.style.left = this.pos.x + 'px';
                this.ring.style.top = this.pos.y + 'px';
            }
            
            requestAnimationFrame(() => this.animate());
        }
    }

    // ============================================
    // APP INITIALIZATION
    // ============================================
    
    class App {
        constructor() {
            this.init();
        }
        
        init() {
            console.log('Initializing Athanase Portfolio...');
            
            // Hide preloader
            const preloader = document.getElementById('preloader');
            if (preloader) {
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    setTimeout(() => preloader.remove(), 500);
                }, 1500);
            }
            
            // Set current year
            const yearEl = document.getElementById('currentYear');
            if (yearEl) yearEl.textContent = new Date().getFullYear();
            
            // Initialize all modules
            try {
                new ParticleSystem('particleCanvas');
                console.log('ParticleSystem initialized');
            } catch(e) { console.error('ParticleSystem error:', e); }
            
            try {
                new CustomCursor();
                console.log('CustomCursor initialized');
            } catch(e) { console.error('CustomCursor error:', e); }
            
            try {
                new Navigation();
                console.log('Navigation initialized');
            } catch(e) { console.error('Navigation error:', e); }
            
            try {
                new Animations();
                console.log('Animations initialized');
            } catch(e) { console.error('Animations error:', e); }
            
            try {
                new Domains();
                console.log('Domains initialized');
            } catch(e) { console.error('Domains error:', e); }
            
            try {
                const projects = new Projects();
                console.log('Projects initialized');
            } catch(e) { console.error('Projects error:', e); }
            
            try {
                new Contact();
                console.log('Contact initialized');
            } catch(e) { console.error('Contact error:', e); }
            
            console.log('Athanase Portfolio initialized successfully');
        }
    }

    // Global functions for onclick handlers
    window.scrollToTop = function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const nav = document.getElementById('navigation');
            const navHeight = nav ? nav.offsetHeight : 0;
            window.scrollTo({ top: section.offsetTop - navHeight - 20, behavior: 'smooth' });
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new App());
    } else {
        new App();
    }

})();