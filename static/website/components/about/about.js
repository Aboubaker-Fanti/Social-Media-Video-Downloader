import { loadHTML, loadCSS } from '../../utils.js';

async function About() {
  const html = await loadHTML('./components/about/about.html');
  loadCSS('./components/about/about.css');

  const app = document.getElementById('app');
  app.innerHTML = html;

 
}

export default About;
