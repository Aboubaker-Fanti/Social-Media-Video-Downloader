import { loadHTML, loadCSS } from '../../utils.js';

async function Facebook() {
  const html = await loadHTML('./components/facebook/index.html');
  loadCSS('./components/facebook/style.css');

  const app = document.getElementById('app');
  app.innerHTML = html;

  

}

export default Facebook;
