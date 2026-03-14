// ============================================
// TQP Landing Page - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }
    
    // Close mobile menu when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    
    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for links that don't have a valid target
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = 80; // Account for fixed header
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ============================================
    // Header Scroll Effect
    // ============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 100) {
            header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ============================================
    // FAQ Accordion
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    
    // ============================================
    // Scroll to Top Button
    // ============================================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    
    // ============================================
    // Scroll Reveal Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(`
        .section-header,
        .problem-card,
        .method-text,
        .method-visual,
        .module-card,
        .benefit-item,
        .transformation-before,
        .transformation-after,
        .faq-item,
        .mentor-image,
        .mentor-text,
        .cta-box
    `);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    
    // ============================================
    // Stats Counter Animation
    // ============================================
    const statsNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        const heroSection = document.querySelector('.hero');
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        if (heroBottom > 0 && window.pageYOffset > 100) {
            statsAnimated = true;
            
            statsNumbers.forEach(stat => {
                const text = stat.textContent;
                const hasPercent = text.includes('%');
                const hasPlus = text.includes('+');
                
                // Extract number
                let number = parseInt(text.replace(/\D/g, ''));
                if (isNaN(number)) return;
                
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    
                    let display = Math.floor(current).toString();
                    if (hasPlus) display = '+' + display;
                    if (hasPercent) display = display + '%';
                    if (text.includes('Anos')) display = display + ' Anos';
                    
                    stat.textContent = display;
                }, 30);
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
    
    
    // ============================================
    // Video Placeholder Click Handler
    // ============================================
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            alert('Por favor, substitua este placeholder pelo seu vídeo de vendas.\n\nVocê pode usar:\n- Link do YouTube/Vimeo\n- Arquivo MP4 próprio\n- Ou qualquer plataforma de hospedagem de vídeos');
        });
        
        // Add pointer cursor
        videoPlaceholder.style.cursor = 'pointer';
    }
    
    
    // ============================================
    // CTA Button Click Handler (Customize Here)
    // ============================================
    const ctaButton = document.getElementById('ctaButton');
    const whatsappLink = document.getElementById('whatsappLink');
    
    // CUSTOMIZE: Add your WhatsApp number here
    const whatsappNumber = '5500000000000'; // Format: 55 + DDD + Number (no spaces or special chars)
    const whatsappMessage = 'Olá! Tenho interesse no Método TQP e gostaria de saber mais informações sobre o curso.';
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Option 1: WhatsApp
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
            
            // Option 2: Or redirect to a checkout page
            // window.location.href = 'https://your-checkout-page.com';
            
            // Option 3: Or open a contact form modal
            // openContactModal();
        });
    }
    
    if (whatsappLink) {
        whatsappLink.href = `https://wa.me/${whatsappNumber}`;
        whatsappLink.target = '_blank';
    }
    
    
    // ============================================
    // Dynamic Year in Footer
    // ============================================
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear && footerYear.textContent.includes('2026')) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
    }
    
    
    // ============================================
    // Parallax Effect for Hero Section
    // ============================================
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
    
    
    // ============================================
    // Add Active State to Nav Links on Scroll
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    function updateActiveNav() {
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    
    // ============================================
    // Prevent Form Resubmission on Page Refresh
    // ============================================
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
    
    
    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%c🔥 TQP - Tendências Quebram Padrões', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
    console.log('%cLanding Page desenvolvida com design premium', 'color: #B0B0B0; font-size: 12px;');
    console.log('%c\nPara personalizar:', 'color: #D4AF37; font-weight: bold;');
    console.log('1. Adicione seu vídeo de vendas no local indicado');
    console.log('2. Configure seu número do WhatsApp na linha 194 do main.js');
    console.log('3. Adicione suas fotos e prints de resultados');
    console.log('4. Personalize textos e valores conforme necessário');
    
    
    // ============================================
    // Performance Optimization: Lazy Load Images
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    
    // ============================================
    // Add Entrance Animation to Hero
    // ============================================
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 200);
    
    
    // ============================================
    // Tracking Events (Customize for Analytics)
    // ============================================
    function trackEvent(category, action, label) {
        // Add your analytics tracking code here
        // Example for Google Analytics:
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', action, {
        //         'event_category': category,
        //         'event_label': label
        //     });
        // }
        
        console.log(`Track Event: ${category} - ${action} - ${label}`);
    }
    
    // Track CTA clicks
    const allCTAButtons = document.querySelectorAll('.btn-primary, .btn-header');
    allCTAButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('CTA', 'Click', buttonText);
        });
    });
    
    // Track video engagement
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            trackEvent('Video', 'Click', 'Video Placeholder');
        });
    }
    
    // Track FAQ interactions
    faqItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const question = item.querySelector('h4').textContent;
            trackEvent('FAQ', 'Open', question);
        });
    });
    
    
    // ============================================
    // Add Loading State
    // ============================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Hide any loading spinner if you add one
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    });
    
});

// ============================================
// Utility Functions
// ============================================

// Format currency (if needed)
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Copy to clipboard (if needed for promo codes)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Validate email (if you add a form)
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate phone (Brazilian format)
function isValidPhone(phone) {
    const re = /^(\+55|55)?[\s-]?\(?[1-9]{2}\)?[\s-]?9?[0-9]{4}[\s-]?[0-9]{4}$/;
    return re.test(phone);
}