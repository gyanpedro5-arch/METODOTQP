// ============================================
// VIP PAGE - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Platform Selector
    // ============================================
    const platformButtons = document.querySelectorAll('.platform-btn');
    const betanoPlans = document.getElementById('betano-plans');
    const bet365Plans = document.getElementById('bet365-plans');
    
    platformButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            platformButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected platform
            const platform = this.getAttribute('data-platform');
            
            // Show/hide plans based on platform
            if (platform === 'betano') {
                betanoPlans.style.display = 'grid';
                bet365Plans.style.display = 'none';
            } else if (platform === 'bet365') {
                betanoPlans.style.display = 'none';
                bet365Plans.style.display = 'grid';
            }
            
            // Smooth scroll to plans
            document.getElementById('planos').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Track event (optional - for analytics)
            console.log('Platform selected:', platform);
        });
    });
    
    
    // ============================================
    // Plan Selection Handler
    // ============================================
    const planButtons = document.querySelectorAll('.btn-plan');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planType = this.getAttribute('data-plan');
            
            // WhatsApp configuration
            const whatsappNumber = '5500000000000'; // CUSTOMIZE: Add your WhatsApp number
            
            // Messages for each plan
            const messages = {
                'betano-mensal': 'Olá! Tenho interesse no *Grupo VIP TQP* - Plano *MENSAL* para *BETANO*. Gostaria de mais informações sobre como assinar.',
                'betano-trimestral': 'Olá! Tenho interesse no *Grupo VIP TQP* - Plano *TRIMESTRAL* para *BETANO*. Gostaria de mais informações sobre como assinar.',
                'bet365-mensal': 'Olá! Tenho interesse no *Grupo VIP TQP* - Plano *MENSAL* para *BET365*. Gostaria de mais informações sobre como assinar.',
                'bet365-trimestral': 'Olá! Tenho interesse no *Grupo VIP TQP* - Plano *TRIMESTRAL* para *BET365*. Gostaria de mais informações sobre como assinar.'
            };
            
            const message = messages[planType] || 'Olá! Tenho interesse no Grupo VIP TQP.';
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Track conversion (optional - for analytics)
            console.log('Plan selected:', planType);
            
            // If you have Facebook Pixel or Google Analytics:
            // fbq('track', 'InitiateCheckout', { content_name: planType });
            // gtag('event', 'begin_checkout', { items: [{ id: planType }] });
        });
    });
    
    
    // ============================================
    // FAQ Accordion (reuse from main.js if needed)
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
    
    // Elements to animate
    const animateElements = document.querySelectorAll(`
        .vip-benefit-card,
        .platform-btn,
        .plan-card,
        .testimonial-card,
        .section-header
    `);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    
    // ============================================
    // Highlight Featured Plan
    // ============================================
    function highlightFeaturedPlan() {
        const featuredCards = document.querySelectorAll('.plan-card.featured');
        
        featuredCards.forEach(card => {
            // Add pulse animation periodically
            setInterval(() => {
                card.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 300);
            }, 5000);
        });
    }
    
    // Call after page load
    setTimeout(highlightFeaturedPlan, 1000);
    
    
    // ============================================
    // Smooth Scroll for All Anchor Links
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ============================================
    // Active Navigation Link
    // ============================================
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
    
    
    // ============================================
    // Plan Comparison Helper
    // ============================================
    function calculateSavings() {
        const monthlyPrice = 197;
        const trimestralPrice = 497;
        const threMonthsPrice = monthlyPrice * 3;
        const savings = threMonthsPrice - trimestralPrice;
        
        console.log(`Plano Mensal (3 meses): R$ ${threMonthsPrice}`);
        console.log(`Plano Trimestral: R$ ${trimestralPrice}`);
        console.log(`Economia: R$ ${savings}`);
        
        return savings;
    }
    
    // Display savings info
    console.log('💰 Informações de Economia:');
    calculateSavings();
    
    
    // ============================================
    // Testimonials Rotation (Optional)
    // ============================================
    function rotateTestimonials() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        let currentIndex = 0;
        
        // Add subtle highlight to testimonials in sequence
        setInterval(() => {
            testimonialCards.forEach(card => card.style.borderColor = 'rgba(212, 175, 55, 0.2)');
            
            if (testimonialCards[currentIndex]) {
                testimonialCards[currentIndex].style.borderColor = 'var(--gold)';
                currentIndex = (currentIndex + 1) % testimonialCards.length;
            }
        }, 3000);
    }
    
    // Enable testimonial rotation after page load
    setTimeout(rotateTestimonials, 2000);
    
    
    // ============================================
    // Price Display Animation
    // ============================================
    function animatePrices() {
        const priceValues = document.querySelectorAll('.plan-price .value');
        
        priceValues.forEach(priceElement => {
            const finalPrice = parseInt(priceElement.textContent);
            let currentPrice = 0;
            const increment = Math.ceil(finalPrice / 30);
            
            const timer = setInterval(() => {
                currentPrice += increment;
                if (currentPrice >= finalPrice) {
                    currentPrice = finalPrice;
                    clearInterval(timer);
                }
                priceElement.textContent = currentPrice;
            }, 30);
        });
    }
    
    // Animate prices when plans section is visible
    const plansSection = document.querySelector('.vip-plans-section');
    if (plansSection) {
        const plansObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatePrices();
                    plansObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        plansObserver.observe(plansSection);
    }
    
    
    // ============================================
    // Add Urgency Timer (Optional)
    // ============================================
    function addUrgencyBadge() {
        const planCards = document.querySelectorAll('.plan-card.featured');
        
        planCards.forEach(card => {
            // Create urgency badge
            const urgencyBadge = document.createElement('div');
            urgencyBadge.style.cssText = `
                position: absolute;
                top: 50px;
                right: -10px;
                background: linear-gradient(135deg, #FF3B3B, #FF6B6B);
                color: white;
                padding: 8px 20px;
                border-radius: 50px 0 0 50px;
                font-size: 0.85rem;
                font-weight: 700;
                box-shadow: 0 5px 20px rgba(255, 59, 59, 0.4);
                z-index: 10;
            `;
            urgencyBadge.innerHTML = '<i class="fas fa-fire"></i> ÚLTIMAS VAGAS';
            
            // Uncomment to enable urgency badge
            // card.appendChild(urgencyBadge);
        });
    }
    
    addUrgencyBadge();
    
    
    // ============================================
    // Track User Behavior (Optional Analytics)
    // ============================================
    function trackUserBehavior() {
        // Track time spent on page
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', function() {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            console.log(`Time spent on VIP page: ${timeSpent} seconds`);
            
            // Send to analytics if configured
            // gtag('event', 'timing_complete', {
            //     name: 'vip_page_view',
            //     value: timeSpent
            // });
        });
        
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', function() {
            const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
            if (scrollPercentage > maxScroll) {
                maxScroll = Math.round(scrollPercentage);
                
                // Track milestone scrolls
                if (maxScroll >= 25 && maxScroll < 26) {
                    console.log('Scrolled 25%');
                }
                if (maxScroll >= 50 && maxScroll < 51) {
                    console.log('Scrolled 50%');
                }
                if (maxScroll >= 75 && maxScroll < 76) {
                    console.log('Scrolled 75%');
                }
                if (maxScroll >= 95) {
                    console.log('Scrolled to bottom');
                }
            }
        });
    }
    
    trackUserBehavior();
    
    
    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%c👑 GRUPO VIP TQP', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
    console.log('%cBem-vindo à página do Grupo VIP!', 'color: #B0B0B0; font-size: 14px;');
    console.log('%c\nConfiguração necessária:', 'color: #D4AF37; font-weight: bold; font-size: 12px;');
    console.log('1. Configure seu número do WhatsApp na linha 30');
    console.log('2. Personalize as mensagens dos planos se necessário');
    console.log('3. Adicione pixels de tracking (Facebook, Google)');
    
    
    // ============================================
    // Exit Intent Popup (Optional)
    // ============================================
    let exitIntentShown = false;
    
    document.addEventListener('mouseout', function(e) {
        // Detect if mouse leaves from top of page
        if (e.clientY < 10 && !exitIntentShown) {
            exitIntentShown = true;
            
            // Show exit intent offer
            const showExitOffer = confirm('⚠️ ESPERE! Antes de sair, que tal um desconto especial no primeiro mês do Grupo VIP?');
            
            if (showExitOffer) {
                // Scroll to plans
                document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
            }
            
            // Only show once per session
            console.log('Exit intent triggered');
        }
    });
    
});


// ============================================
// Utility Functions
// ============================================

// Format price in Brazilian Real
function formatPrice(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Calculate discount percentage
function calculateDiscount(original, discounted) {
    return Math.round(((original - discounted) / original) * 100);
}

// Example usage:
// const discount = calculateDiscount(591, 497);
// console.log(`Desconto: ${discount}%`); // Output: Desconto: 16%