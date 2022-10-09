const intervalId = setInterval(() => {
  const owner = document.querySelector("div#owner");
  if (owner) {
    clearInterval(intervalId);
    const downloadButton = document.createElement("button");
    const button = document.createTextNode("Download");

    // button.style.backgroundColor = "green";
    // button.style.color = "white";
    // button.style.borderRaius = "50%";

    downloadButton.appendChild(button);

    owner.appendChild(downloadButton);

    downloadButton.addEventListener("click", () => {
      window.location.href = `http://localhost:4000/download?URL=${window.location.href}`
    });
  }
}, 500)