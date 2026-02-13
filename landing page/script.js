// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get form element
    const reservationForm = document.getElementById('reservationForm');
    
    // Add submit event listener
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        
        // Validate form
        if (validateForm(name, email, date, time)) {
            // Show success message
            showMessage('success', `Thank you ${name}! Your table has been booked for ${date} at ${time}.`);
            
            // Clear form
            reservationForm.reset();
        }
    });
    
    // Add input validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        validateEmail(this);
    });
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Form validation function
    function validateForm(name, email, date, time) {
        // Check if all fields are filled
        if (!name || !email || !date || !time) {
            showMessage('error', 'Please fill in all fields.');
            return false;
        }
        
        // Validate email format
        if (!isValidEmail(email)) {
            showMessage('error', 'Please enter a valid email address.');
            return false;
        }
        
        // Validate date (not in past)
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showMessage('error', 'Please select a future date.');
            return false;
        }
        
        // Validate time (between 11 AM and 10 PM)
        const hour = parseInt(time.split(':')[0]);
        if (hour < 11 || hour >= 22) {
            showMessage('error', 'Please select a time between 11:00 AM and 10:00 PM.');
            return false;
        }
        
        return true;
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Email input validation function
    function validateEmail(input) {
        if (!isValidEmail(input.value)) {
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = '#ccc';
        }
    }
    
    // Show message function
    function showMessage(type, text) {
        // Remove existing message
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = text;
        
        // Add to page
        const section = document.querySelector('section:last-of-type');
        section.appendChild(messageDiv);
        
        // Auto hide after 5 seconds
        setTimeout(function() {
            messageDiv.remove();
        }, 5000);
    }
    
    // Add loading state to button
    const submitButton = document.querySelector('button[type="submit"]');
    reservationForm.addEventListener('submit', function() {
        submitButton.disabled = true;
        submitButton.textContent = 'Booking...';
        
        // Re-enable after 2 seconds (simulate processing)
        setTimeout(function() {
            submitButton.disabled = false;
            submitButton.textContent = 'Book Table';
        }, 2000);
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation on scroll
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    
});