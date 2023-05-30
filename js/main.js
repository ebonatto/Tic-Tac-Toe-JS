// <i class="material-icons vazio x">clear</i>
// <i class="material-icons vazio o">panorama_fish_eye</i>

const x = "clear";
const o = "panorama_fish_eye";
const turno = document.querySelector(".turno i");

const celulas = document.querySelectorAll(".celula i");
console.log(celulas);

const celulaPressed = (cel) => {
  let id = cel.target.id;
  console.log(id);
  let selectedCel = document.querySelector("#" + id);
  if (selectedCel.innerText === "vazio") {
    if (turno.innerText == x) {
      selectedCel.innerText = x;
      turno.innerText = o;
    } else {
      selectedCel.innerText = o;
      turno.innerText = x;
    }
  }
};

const buttonPressed = (e) => {
  console.log(e.target.id); // Get ID of Clicked Element
};

for (let celula of celulas) {
  console.log(celula.id);
  celula.addEventListener("click", celulaPressed);
}

// function getID(element) {
//   console.log(element.id);
// }
