import { loadHTML, loadCSS } from '../../utils.js';

async function About() {
  const html = await loadHTML('./components/about/about.html');
  loadCSS('./components/about/about.css');

  const app = document.getElementById('app');
  app.innerHTML = html;
const to_home = document.querySelector('.contact-bar');
to_home.addEventListener("click", () => {
  console.log("hello we are here");
  window.location.hash = "/";
})
 
}

export default About;
