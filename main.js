/* ===== Header Functionality ===== */
document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    const scrollHeader = () => {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    };
    window.addEventListener('scroll', scrollHeader);

    // Mobile menu functionality
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    // Toggle menu
    const toggleMenu = () => {
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('active');
    };

    navToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', scrollActive);
});

// DOM Elements
const header = document.querySelector('.header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const copyableItems = document.querySelectorAll('.contact__item.copyable');

// Skills Data
const skillsData = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Design', level: 85 }
];

// Services Data
const servicesData = [
    {
        icon: 'fas fa-code',
        title: 'Web Development',
        description: 'Creating responsive and dynamic web applications using modern technologies.'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Development',
        description: 'Building cross-platform mobile applications with React Native.'
    },
    {
        icon: 'fas fa-paint-brush',
        title: 'Design',
        description: 'Designing intuitive and engaging user interfaces with a focus on user experience.'
    },
    {
        icon: 'fas fa-server',
        title: 'Backend Development',
        description: 'Developing robust and scalable server-side applications and APIs.'
    }
];

// Portfolio Data
const portfolioData = [
    {
        title: 'ONLINE RECIPE SYSTEM PLATFORM',
        category: 'web',
        description: 'Online Recipe System is a digital platform that allows users to explore, share, and manage a wide variety of recipes. It enables users to create accounts, upload their own vegetarian or non-vegetarian recipes, browse by category, rate and comment on others\' dishes, and save favorites for later. The system enhances the cooking experience by offering an interactive, user-friendly interface that connects food enthusiasts and promotes culinary creativity.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
        demo: '#',
        github: '#'
    },
    {
        title: 'Potato Leaf Disease Prediction',
        category: 'mobile',
        description: 'This project focuses on detecting and predicting diseases in potato leaves using machine learning algorithms integrated into a mobile application built with Flutter. By analyzing images of potato leaves, the app identifies potential diseases and provides early warnings and suggestions for treatment. The goal is to assist farmers and agriculturists in making timely decisions to improve crop health and yield.',
        technologies: ['Flutter', 'Python', 'Machine Learning'],
        demo: '#',
        github: '#'
    }
];

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: ['#00d4ff', '#8b5cf6'] },
                shape: { 
                    type: ['circle', 'triangle'],
                    stroke: { width: 0, color: '#000000' },
                    polygon: { nb_sides: 5 }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00d4ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Initialize Scroll Animations
    initializeScrollAnimations();
    
    // Initialize Typewriter Effect
    initializeTypewriter();
    
    // Initialize Mouse Trail Effect
    initializeMouseTrail();

    // Initialize Copy to Clipboard
    initializeCopyToClipboard();
});

// Scroll Animations
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// Typewriter Effect
function initializeTypewriter() {
    const heroTitle = document.querySelector('.hero__title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect when element is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(heroTitle);
}

// Mouse Trail Effect
function initializeMouseTrail() {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    document.body.appendChild(trail);

    let trailElements = [];
    const trailLength = 20;

    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
        const element = document.createElement('div');
        element.className = 'trail-element';
        trail.appendChild(element);
        trailElements.push({
            element,
            x: 0,
            y: 0
        });
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        // Update trail positions
        trailElements.forEach((trail, index) => {
            const nextTrail = trailElements[index + 1] || trailElements[0];
            trail.x = mouseX;
            trail.y = mouseY;
            
            const x = trail.x;
            const y = trail.y;
            
            trail.element.style.transform = `translate(${x}px, ${y}px)`;
            trail.element.style.opacity = 1 - (index / trailLength);
        });

        requestAnimationFrame(animateTrail);
    }

    animateTrail();
}

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.querySelector('i').classList.toggle('fa-sun');
    themeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize Skills
function initializeSkills() {
    const skillsContainer = document.querySelector('.skills__container');
    if (!skillsContainer) return;

    skillsData.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
            <div class="skill__info">
                <span class="skill__name">${skill.name}</span>
                <span class="skill__percentage">${skill.level}%</span>
            </div>
            <div class="skill__bar">
                <div class="skill__progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Initialize Services
function initializeServices() {
    const servicesContainer = document.querySelector('.services__container');
    if (!servicesContainer) return;

    servicesData.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service__card';
        serviceElement.innerHTML = `
            <i class="${service.icon} service__icon"></i>
            <h3 class="service__title">${service.title}</h3>
            <p class="service__description">${service.description}</p>
        `;
        servicesContainer.appendChild(serviceElement);
    });
}

// Initialize Portfolio (Original Version)
function initializePortfolio() {
    const portfolioContainer = document.querySelector('.portfolio__container');
    const portfolioFilters = document.querySelectorAll('.portfolio__filter');
    if (!portfolioContainer) return;

    function filterProjects(category) {
        const filteredProjects = category === 'all' 
            ? portfolioData 
            : portfolioData.filter(project => project.category === category);

        portfolioContainer.innerHTML = '';
        filteredProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'portfolio__item';
            projectElement.innerHTML = `
                <div class="portfolio__content">
                    <h3 class="portfolio__title">${project.title}</h3>
                    <p class="portfolio__description">${project.description}</p>
                    <div class="portfolio__technologies">
                        ${project.technologies.map(tech => `<span class="portfolio__tech">${tech}</span>`).join('')}
                    </div>
                    <div class="portfolio__links">
                        <a href="${project.demo}" class="portfolio__link" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="${project.github}" class="portfolio__link" target="_blank">
                            <i class="fab fa-github"></i> Source Code
                        </a>
                    </div>
                </div>
            `;
            portfolioContainer.appendChild(projectElement);
        });
    }

    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            portfolioFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            filterProjects(filter.dataset.filter);
        });
    });

    // Initialize with all projects
    filterProjects('all');
}

// Enhanced Form Validation with Real-time Feedback
if (contactForm) {
    const formInputs = contactForm.querySelectorAll('.form__input');
    
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
        });
        
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        const value = input.value.trim();
        const isValid = value.length > 0;
        
        input.classList.toggle('valid', isValid);
        input.classList.toggle('invalid', !isValid && value.length > 0);
        
        // Add floating label effect
        const label = input.nextElementSibling;
        if (label && label.classList.contains('form__label')) {
            label.classList.toggle('active', value.length > 0);
        }
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic form validation
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    initializeServices();
    initializePortfolio();
});

// Update CSS styles to remove portfolio-specific animations
const style = document.createElement('style');
style.textContent = `
    .mouse-trail {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
    }
    
    .trail-element {
        position: absolute;
        width: 8px;
        height: 8px;
        background: linear-gradient(45deg, var(--accent-color-1), var(--accent-color-2));
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
    }
    
    .form__input.valid {
        border-color: var(--accent-color-1);
    }
    
    .form__input.invalid {
        border-color: #ff4d4d;
    }
    
    .form__label.active {
        transform: translateY(-1.5rem) scale(0.8);
        color: var(--accent-color-1);
    }
`;

document.head.appendChild(style);

// Copy to Clipboard Functionality
function initializeCopyToClipboard() {
    copyableItems.forEach(item => {
        item.addEventListener('click', async () => {
            const textToCopy = item.dataset.copy;
            try {
                await navigator.clipboard.writeText(textToCopy);
                item.classList.add('copied');
                setTimeout(() => item.classList.remove('copied'), 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
}

// Toast Notification
function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'toast--error' : 'toast--success'}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast styles
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        padding: 1rem 2rem;
        background: var(--glass-background);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid var(--glass-border);
        border-radius: 0.5rem;
        color: var(--text-color);
        font-size: 0.875rem;
        z-index: var(--z-modal);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    
    .toast--success {
        border-color: #4CAF50;
    }
    
    .toast--error {
        border-color: #f44336;
    }
`;

document.head.appendChild(toastStyles);

// Mobile menu functionality
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle menu
const toggleMenu = () => {
    navMenu.classList.toggle('show');
    navToggle.classList.toggle('active');
};

navToggle.addEventListener('click', toggleMenu);

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    }
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', scrollActive); 