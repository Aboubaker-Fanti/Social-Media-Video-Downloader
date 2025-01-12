export function loadHTML(url) {
    return fetch(url).then(response => response.text());
  }
  
export function loadCSS(url) {
    removeAllCSSLinks();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }
  

  function removeAllCSSLinks() {
    const links = document.querySelectorAll('head link[rel="stylesheet"]');
    links.forEach(link => link.remove());
  }
  