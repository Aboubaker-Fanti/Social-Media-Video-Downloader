import { loadHTML, loadCSS } from '../../utils.js';

async function Donat() {
  const html = await loadHTML('./components/donate/donat.html');
  loadCSS('./components/donate/donat.css');

  const app = document.getElementById('app');
  app.innerHTML = html;

 
}

export default Donat;
