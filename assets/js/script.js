// Initialize EmailJS
emailjs.init("faluKiXlMJY6fDVTX");

document.addEventListener('DOMContentLoaded', function() {
    console.log('%c iTech Limited Website Loaded Successfully', 'color: #4B0082; font-weight: bold');

    const form = document.getElementById('contactForm');
    
    if (form) {
        const successToastElement = document.getElementById('successToast');
        const errorToastElement = document.getElementById('errorToast');
        
        const successToast = new bootstrap.Toast(successToastElement);
        const errorToast = new bootstrap.Toast(errorToastElement);

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            emailjs.sendForm('service_kw5i9vf', 'template_z7y6y9i', this)
                .then(() => {
                    form.reset();
                    successToast.show();
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    errorToast.show();
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
