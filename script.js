document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out to AiO. We will contact you shortly.');
    this.reset();
});