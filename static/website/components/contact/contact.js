import { loadHTML, loadCSS } from '../../utils.js';

async function Contact() {
  const html = await loadHTML('./components/contact/contact.html');
  loadCSS('./components/contact/contact.css');

  const app = document.getElementById('app');
  app.innerHTML = html;

    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      const formData = {
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
      };

      console.log('Form Data you can use it as you want if you wanna use this repo :', formData);

    });

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        if (this.validity.valid) {
          this.style.borderColor = 'rgb(25, 174, 35)';
        } else {
          this.style.borderColor = ' #ef4444';
        }
      });
    });

    // for valid email i'm not goin use it right now 
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

}

export default Contact;
