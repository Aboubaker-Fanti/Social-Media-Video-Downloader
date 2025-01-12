import About from './components/about/about.js';
import Contact from './components/contact/contact.js';
import Donat from './components/donate/donat.js';
import Home from './components/home/home.js';
import Facebook from './components/facebook/script.js';
import Instagram from './components/instagram/script.js';
import Snapchat from './components/snapchat/script.js';
import Tiktok from './components/tiktok/script.js';
import Twitter from './components/twitter/script.js';
// import Profile from './components/profile/profile.js';
// import Login from './components/Login/script.js';
import NotFound from './components/notfound/notfound.js';
// import { isAuthenticated } from './auth.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/notfund': NotFound,
};

async function Router() {
  window.addEventListener('hashchange', async () => {
    const path = window.location.hash.slice(1);
    console.log('path =--------->>>   ', path);
    if (path === '')
        path = '/';
    const component = routes[path] || NotFound;

    console.log(component);
    await component();

  });

  const path = window.location.hash.slice(1) || '/';
  const component = routes[path] || NotFound;

  await component();
}

export default Router;
