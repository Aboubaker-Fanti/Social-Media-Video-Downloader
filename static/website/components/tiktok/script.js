import { loadHTML, loadCSS } from '../../utils.js';

async function Tiktok() {
  const html = await loadHTML('./components/tiktok/index.html');
  loadCSS('./components/tiktok/style.css');

  const app = document.getElementById('app');
  app.innerHTML = html;


}

export default Tiktok;
