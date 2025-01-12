import { loadHTML, loadCSS } from '../../utils.js';

async function Contact() {
  const html = await loadHTML('./components/contact/contact.html');
  loadCSS('./components/contact/contact.css');

  const app = document.getElementById('app');
  app.innerHTML = html;

 
}

export default Contact;
