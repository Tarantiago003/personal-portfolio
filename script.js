// Portfolio JavaScript - Complete Functionality

// Animated particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particlesContainer.appendChild(particle);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Project data with images
const projectData = {
    weather: {
        title: 'Weather Monitoring System',
        tech: 'FLASK/PYTHON + IoT',
        year: '2024',
        images: [
            'weather-monitoring.png',
            'weather-monitoring-1.png',
            'weather-monitoring-2.png'
        ],
        description: 'Full-stack IoT weather station using Raspberry Pi, DHT22 and BMP180 sensors. Python scripts collect sensor data, store in Google Sheets, and Flask web app displays real-time visualizations. Automated alerts and historical analytics included.',
        features: ['Raspberry Pi + Sensors', 'Python Data Pipeline', 'Flask Dashboard', 'Google Sheets Storage', 'Real-time Visualization', 'Automated Alerts']
    },
    certificate: {
        title: 'Certificate Generator',
        tech: 'PYTHON/FLASK + PDF',
        year: '2025',
        images: [
            'certificate-generator-1.png',
            'certificate-generator-2.png',
        ],
        description: 'Automated certificate generation system for events, trainings, and workshops. Batch process multiple recipients, customize templates, and generate professional certificates with QR codes for verification.',
        features: ['Batch Processing', 'Custom Templates', 'QR Code Verification', 'Google Sheets Integration', 'PDF Export', 'Email Distribution']
    },
    chat: {
        title: 'Chat System',
        tech: 'LIGHTWEIGHT REAL-TIME',
        year: '2025',
        images: [
            'chat-system-1.png',
            'chat-system-2.png',
            'chat-system-3.png'
        ],
        description: 'Lightweight real-time messaging system optimized for low-bandwidth environments. Built with HTML, CSS, and JavaScript with minimal dependencies for fast loading on slow connections.',
        features: ['Real-time Messaging', 'File Sharing', 'Group Chats', 'Low-Bandwidth Optimized', 'Lightweight UI', 'Fast Performance']
    },
    radiis: {
        title: 'RADIIS System',
        tech: 'WEB APPLICATION',
        year: '2024',
        images: [
            'radiis-1.png',
            'radiis-2.png',
            'radiis-3.png'
        ],
        description: 'Comprehensive web-based management system with advanced features for data processing and visualization.',
        features: ['Web Interface', 'Data Management', 'Real-time Updates', 'User Authentication', 'Report Generation', 'Analytics Dashboard']
    },
    crm: {
        title: 'CRM Analytics Dashboard',
        tech: 'FLASK + EXCEL/SHEETS',
        year: '2025',
        images: [
            'CRM-analytics-dashboard-1.png',
            'CRM-analytics-dashboard-1.png',
            'CRM-analytics-dashboard-1.png'
        ],
        description: 'Customer Relationship Management analytics dashboard with real-time metrics, customer insights, and sales performance tracking.',
        features: ['Customer Analytics', 'Sales Metrics', 'Performance Tracking', 'Data Visualization', 'Excel Integration', 'Real-time Updates']
    },
    careertalk: {
        title: 'CareerTalk Survey',
        tech: 'GOOGLE FORMS + FLASK',
        year: '2026',
        images: [
            'careertalk-survey-1.png',
            'careertalk-survey-2.png',
            'careertalk-survey-3.png'
        ],
        description: 'Career guidance survey system for student feedback and career path analysis with Google Forms integration.',
        features: ['Google Forms Integration', 'Flask Dashboard', 'Career Analytics', 'Student Feedback', 'Data Visualization', 'PDF Reports']
    },
    events: {
        title: 'Events Survey',
        tech: 'GOOGLE FORMS + FLASK',
        year: '2026',
        images: [
            'events-survey-1.png',
            'events-survey-2.png',
            'events-survey-2.png'
        ],
        description: 'Event feedback and registration system with real-time analytics for event management.',
        features: ['Event Registration', 'Feedback Collection', 'Real-time Analytics', 'Participant Tracking', 'Report Generation', 'Mobile Responsive']
    },
    leadership: {
        title: 'Leadership Survey',
        tech: 'GOOGLE FORMS + FLASK',
        year: '2026',
        images: [
            'leadership-survey-1.png',
            'leadership-survey-2.png',
            'leadership-survey-3.png'
        ],
        description: 'Leadership assessment and evaluation system for organizational development and training programs.',
        features: ['Leadership Assessment', 'Performance Metrics', 'Team Analytics', 'Development Tracking', 'Custom Reports', 'Dashboard Insights']
    },
    satisfaction: {
        title: 'Satisfaction Survey',
        tech: 'GOOGLE FORMS + FLASK',
        year: '2026',
        images: [
            'satisfaction-survey-1.png',
            'satisfaction-survey-2.png',
            'satisfaction-survey-2.png'
        ],
        description: 'Customer and employee satisfaction measurement system with comprehensive analytics.',
        features: ['Satisfaction Metrics', 'Sentiment Analysis', 'Trend Tracking', 'Custom Surveys', 'Automated Reports', 'Real-time Dashboard']
    }
};

let currentCarouselIndex = 0;
let currentProjectImages = [];

function updateCarousel() {
    const carouselImage = document.getElementById('carousel-image');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (carouselImage && currentProjectImages.length > 0) {
        carouselImage.src = currentProjectImages[currentCarouselIndex];
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentCarouselIndex);
        });
    }
}

function nextImage() {
    if (currentCarouselIndex < currentProjectImages.length - 1) {
        currentCarouselIndex++;
        updateCarousel();
    }
}

function prevImage() {
    if (currentCarouselIndex > 0) {
        currentCarouselIndex--;
        updateCarousel();
    }
}

function goToImage(index) {
    currentCarouselIndex = index;
    updateCarousel();
}

function openLightbox(imageSrc, imageIndex) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const imageCounter = document.getElementById('image-counter');
    
    lightboxImage.src = imageSrc;
    imageCounter.textContent = `${imageIndex + 1} / ${currentProjectImages.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectData[projectId];
    
    if (!project) return;
    
    currentProjectImages = project.images || [];
    currentCarouselIndex = 0;

    const carouselHTML = currentProjectImages.length > 0 ? `
        <div class="carousel-container">
            ${currentProjectImages.length > 1 ? `
                <button class="carousel-nav carousel-prev" onclick="prevImage()">‹</button>
                <button class="carousel-nav carousel-next" onclick="nextImage()">›</button>
            ` : ''}
            <img id="carousel-image" src="${currentProjectImages[0]}" alt="${project.title}" class="carousel-image" onclick="openLightbox('${currentProjectImages[0]}', 0)">
            ${currentProjectImages.length > 1 ? `
                <div class="carousel-indicators">
                    ${currentProjectImages.map((img, index) => `
                        <div class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToImage(${index})"></div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    ` : '';

    modalBody.innerHTML = `
        ${carouselHTML}
        <div class="modal-header">
            <div style="flex: 1;">
                <div style="margin-bottom: 0.5rem;">
                    <span style="padding: 0.25rem 0.75rem; background: rgba(168, 85, 247, 0.2); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 9999px; font-size: 0.75rem; text-transform: uppercase; color: #c4b5fd; margin-right: 0.75rem;">${project.tech}</span>
                    <span style="color: #94a3b8; font-size: 0.875rem;">📅 ${project.year}</span>
                </div>
                <h3 class="modal-title">${project.title}</h3>
            </div>
        </div>
        <div class="modal-section">
            <h4>Overview</h4>
            <p style="color: #cbd5e1; line-height: 1.6;">${project.description}</p>
        </div>
        <div class="modal-section">
            <h4>Key Features</h4>
            <div class="features-grid">
                ${project.features.map(f => `
                    <div class="feature-item">
                        <div style="width: 8px; height: 8px; background: #38bdf8; border-radius: 50%; flex-shrink: 0;"></div>
                        <span style="color: #cbd5e1;">${f}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Re-attach click handlers for carousel images
    setTimeout(() => {
        const carouselImage = document.getElementById('carousel-image');
        if (carouselImage) {
            carouselImage.onclick = () => openLightbox(currentProjectImages[currentCarouselIndex], currentCarouselIndex);
        }
    }, 0);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (!event || event.target.id === 'modal') {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    const modal = document.getElementById('modal');
    
    if (e.key === 'Escape') {
        if (lightbox.classList.contains('active')) {
            closeLightbox();
        } else if (modal.classList.contains('active')) {
            closeModal();
        }
    }
    
    // Arrow key navigation for carousel when modal is open
    if (modal.classList.contains('active') && !lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});