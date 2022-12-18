
let url = "https://www.ensonhaber.com"
const file = 'https://corsproxy.io/?'+encodeURIComponent(url);
fetch(file)
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const divs = doc.querySelectorAll("div.front > div:nth-child(n+1):nth-child(-n+6)");
    
    for (const div of divs) {
      result.innerHTML += div.outerHTML;
    }
  }) .catch((error) => result.innerHTML = error);
