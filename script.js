<html>
<style>
#result{
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
    align-content: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
   color:blue;
    }
</style>
<body>

<p id="result"></p>

<script>
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

</script>

</body>
</html>
