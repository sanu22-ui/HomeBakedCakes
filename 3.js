// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cakeType = document.getElementById('cake-type').value;
    const message = document.getElementById('message').value;
    
    // Here you would normally send the data to a server
    // For demo purposes, we'll just show a success message
    alert(`Thank you, ${name}! Your order inquiry has been received. We'll contact you soon at ${email} or ${phone}.`);
    
    // Reset form
    this.reset();
});

// Newsletter form handling
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    // Here you would normally send the email to a server
    // For demo purposes, we'll just show a success message
    alert(`Thank you for subscribing with ${email}! You'll receive our latest updates and special offers.`);
    
    // Reset form
    this.reset();
});