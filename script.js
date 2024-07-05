document.addEventListener("DOMContentLoaded", () => {
  const inputSection = document.querySelector(".input-section");

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;

      if (value === "DEL") {
        inputSection.value = inputSection.value.slice(0, -1);
      } else if (value === "RESET") {
        inputSection.value = "";
      } else if (value === "=") {
        try {
          inputSection.value = eval(inputSection.value);
        } catch (error) {
          inputSection.value = "ERROR";
        }
      } else if (value === "X") {
        inputSection.value = inputSection.value.slice(0, -2);
      } else {
        inputSection.value += value;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backgroundz = document.querySelector("#main");
  const bottom = document.querySelector("#b-section");
  const top = document.querySelector("#t-section");
  const calcDiv = document.querySelector(".calc");
  const originalText = calcDiv.innerText;
  const newText = "Dark Calc";

  document.querySelector("#checkboxInput").addEventListener("click", () => {
    backgroundz.classList.toggle("main-background");
    bottom.classList.toggle("bottom-section-toggle");
    top.classList.toggle("top-section-toggle");

    if (calcDiv.innerText === originalText) {
      calcDiv.innerText = newText;
    } else {
      calcDiv.innerText = originalText;
    }
  });
});
