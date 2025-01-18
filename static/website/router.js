import About from './components/about/about.js';
import Contact from './components/contact/contact.js';
import Home from './components/home/home.js';
import NotFound from './components/notfound/notfound.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/notfund': NotFound,
};

async function Router() {
  window.addEventListener('hashchange', async () => {
    const path = window.location.hash.slice(1);
    if (path === '')
        path = '/';
    const component = routes[path] || NotFound;

    await component();

  });

  const path = window.location.hash.slice(1) || '/';
  const component = routes[path] || NotFound;

  await component();
}

export default Router;
