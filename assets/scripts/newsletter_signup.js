window.onload = function() {
    document.getElementById('newsletter-signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.ident_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_dssf123', 'template_vywdbyb', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById("newsletter-signup-form").reset();
                document.getElementById("newsletter-signup-form").style.display="none";
                document.getElementById("newsletter-signup-form-thank-you").style.display="block";
            }, function(error) {
                console.log('FAILED...', error)
                document.getElementById("newsletter-signup-form-thank-you").style.display="none";
            });
    });
    
}