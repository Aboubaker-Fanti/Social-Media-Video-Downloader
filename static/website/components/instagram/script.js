import { loadHTML, loadCSS } from '../../utils.js';

async function Instagram() {
  const html = await loadHTML('./components/instagram/index.html');
  loadCSS('./components/instagram/style.css');

  const app = document.getElementById('app');
  app.innerHTML = html;


}

export default Instagram;
