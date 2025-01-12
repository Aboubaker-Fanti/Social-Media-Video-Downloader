import { loadHTML, loadCSS } from '../../utils.js';

async function Twitter() {
  const html = await loadHTML('./components/twitter/index.html');
  loadCSS('./components/twitter/style.css');

  const app = document.getElementById('app');
  app.innerHTML = html;


}

export default Twitter;
