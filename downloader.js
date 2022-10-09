const info = document.getElementById("end");
const downloadButton = document.createElement("button");
const text = document.createTextNode("test");

downloadButton.appendChild(text);

info.parentElement.appendChild(downloadButton);

downloadButton.addEventListener("click", () => {
  window.location.href= `http://localhost:4000/download?URL=${window.location.href}`
});

let data;

console.log(document.querySelectorAll('script'))

window.addEventListener('load', () => console.log(window?.ytInitialData));