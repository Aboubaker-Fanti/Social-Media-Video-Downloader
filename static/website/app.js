import Router from '../router.js';
import { getState, setState, subscribe } from '../store.js';

console.log('hello maaraft ma9999999l hadchi walakin blan ghadi naaraf')
Router();

subscribe((state) => {
  console.log('State changed:', state);
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello maaraft mal hadchi walakin blan ghadi naaraf')
  setTimeout(() => {
    setState({ count: getState().count + 1 });
  }, 3000);
});
