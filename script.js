// script.js for KJ Land Surveyors website

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    let valid = true;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    // Simple email validation
    if (!email.includes('@')) {
        valid = false;
        errorMessage.textContent += 'Please enter a valid email address.\n';
    }

    // Check if message is empty
    if (message.trim() === '') {
        valid = false;
        errorMessage.textContent += 'Message cannot be empty.\n';
    }

    if (!valid) {
        e.preventDefault();
    }
});

// Dynamic animations
document.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('fade-in');
        }
    });
});