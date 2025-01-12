import { loadHTML, loadCSS } from '../../utils.js';

async function Snapchat() {
  const html = await loadHTML('./components/snapchat/index.html');
  loadCSS('./components/snapchat/style.css');

  const app = document.getElementById('app');
  app.innerHTML = html;


}

export default Snapchat;
