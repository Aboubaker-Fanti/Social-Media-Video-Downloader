import Router from '../router.js';
import { getState, setState, subscribe } from '../store.js';

Router();

subscribe((state) => {
  console.log('State changed:', state);
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    setState({ count: getState().count + 1 });
  }, 3000);
});
