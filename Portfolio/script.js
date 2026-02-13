// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== DYNAMIC CONTENT LOADING ==========
    
    // Skills data
    const skills = [
        'HTML5', 'CSS3', 'Responsive Design', 'Flexbox Layout',
        'CSS Grid', 'Basic UI Design', 'Web Page Structure', 'JavaScript'
    ];
    
    // Projects data
    const projects = [
        {
            name: 'Restaurant Landing Page',
            description: 'Responsive landing page using HTML & CSS with modern layout.',
            technologies: ['HTML5', 'CSS3', 'Flexbox']
        },
        {
            name: 'Personal Portfolio',
            description: 'Portfolio website to showcase my skills and projects.',
            technologies: ['HTML5', 'CSS3', 'JavaScript']
        },
        {
            name: 'E-commerce UI',
            description: 'Product listing page with responsive design.',
            technologies: ['HTML5', 'CSS3', 'Grid']
        }
    ];
    
    // Load skills dynamically
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillBox = document.createElement('div');
            skillBox.className = 'skill-box';
            skillBox.textContent = skill;
            skillsContainer.appendChild(skillBox);
        });
    }
    
    // Load projects dynamically
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projects.forEach(project => {
            const projectBox = document.createElement('div');
            projectBox.className = 'project-box';
            
            projectBox.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            `;
            
            projectsContainer.appendChild(projectBox);
        });
    }
    
    // ========== MODAL FUNCTIONALITY ==========
    
    const modal = document.getElementById('contact-modal');
    const contactBtn = document.getElementById('contact-btn');
    const closeBtn = document.querySelector('.close');
    
    // Open modal
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ========== CONTACT FORM HANDLING ==========
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('modal-name').value;
            const email = document.getElementById('modal-email').value;
            const message = document.getElementById('modal-message').value;
            
            // Validate form
            if (validateContactForm(name, email, message)) {
                // Show success message
                alert(`Thank you ${name}! Your message has been sent successfully.`);
                
                // Clear form
                contactForm.reset();
                
                // Close modal
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Contact form validation
    function validateContactForm(name, email, message) {
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return false;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        if (message.length < 10) {
            alert('Message must be at least 10 characters long.');
            return false;
        }
        
        return true;
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ========== RESUME DOWNLOAD ==========
    
    const downloadBtn = document.getElementById('download-resume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Create a sample resume content
            const resumeContent = `
                NAYAN VIJAY KURHADE
                ===================
                
                Contact Information:
                Email: nayan.kurhade@example.com
                Phone: +91 98765 43210
                Location: Pune, India
                
                Skills:
                - HTML5, CSS3, JavaScript
                - Responsive Design
                - Flexbox & Grid Layouts
                - UI Design Basics
                
                Projects:
                1. Restaurant Landing Page
                   Responsive landing page using HTML & CSS
                
                2. Personal Portfolio
                   Portfolio website showcasing skills and projects
                
                3. E-commerce UI
                   Product listing page with responsive design
                
                Education:
                - Web Development Internship (Current)
                - Bachelor's in Computer Science
            `;
            
            // Create blob and download
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Nayan_Kurhade_Resume.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            // Show success message
            alert('Resume downloaded successfully!');
        });
    }
    
    // ========== SCROLL ANIMATIONS ==========
    
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    
    // ========== SOCIAL LINKS ==========
    
    // Update social media links
    const githubLink = document.querySelector('.github');
    const linkedinLink = document.querySelector('.linkedin');
    const instagramLink = document.querySelector('.instagram');
    
    if (githubLink) {
        githubLink.href = 'https://github.com/nayankurhade';
    }
    
    if (linkedinLink) {
        linkedinLink.href = 'https://linkedin.com/in/nayan-kurhade';
    }
    
    if (instagramLink) {
        instagramLink.href = 'https://instagram.com/nayan.kurhade';
    }
    
    // ========== TYPING EFFECT ==========
    
    const roleElement = document.getElementById('role');
    if (roleElement) {
        const roles = [
            'Web Development Intern',
            'HTML & CSS Enthusiast',
            'Frontend Developer',
            'UI Designer'
        ];
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                roleElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                roleElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? 50 : 100);
            }
        }
        
        // Start typing effect
        typeEffect();
    }
    
    // ========== CURRENT YEAR ==========
    
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Nayan Vijay Kurhade | Personal Portfolio`;
    }
    
    // ========== SMOOTH SCROLLING ==========
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
});