const info = document.getElementById("end");
const downloadButton = document.createElement("button");
const text = document.createTextNode("test");

downloadButton.appendChild(text);

info.parentElement.appendChild(downloadButton);

downloadButton.addEventListener("click", () => {
  // console.log(window.location);
  window.location.href= `http://localhost:4000/download?URL=${window.location.href}`
  // console.log(window.ytInitialData.currentVideoEndpoint.watchEndpoint.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig.commonConfig.url);
});

let data;

// const intervalId = setInterval(()=> {
//   console.log('triggered');
//   console.log(window.ytInitialData);
//   if (window["ytInitialData"]) {
//     console.log('horray');
//     clearInterval(intervalId);
//   }
// }, 500);
console.log(document.querySelectorAll('script'))

window.addEventListener('load', () => console.log(window?.ytInitialData));