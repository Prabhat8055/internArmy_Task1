const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");

shortBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
  var originalUrl = document.getElementById("originalUrl").value;
  var apiUrl =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
  shortenedUrlTextarea = document.getElementById("shortenedUrl");

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      shortenedUrlTextarea.value = data;
    })
    .catch((error) => {
      shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
    });
}

reloadBtn.addEventListener("click", () => {
  location.reload();
});

// let p = fetch("https://goweather.herokuapp.com/weather/kdasjfhasdj")
// p.then((responce)=>{
//     console.log(responce.ok);
//     return responce.json()

// }).then((responce2)=>{
//     console.log(responce2);
// })

// main.js dark mode

let change = document.querySelector(".mode-toggle");
function toggleMode() {
  const body = document.body;
  const button = document.getElementById('mode-toggle');
  body.classList.toggle("dark-mode");
  if (button.innerText === "Dark Mode") {
    button.innerText = "Light Mode";
  } else {
    button.innerText = "Dark Mode";
  }
}

const modeToggleBtn = document.getElementById("mode-toggle");
modeToggleBtn.addEventListener("click", toggleMode);
