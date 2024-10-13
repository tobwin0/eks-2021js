// inputs
const widthInput = document.getElementById("width-txt");
const heightInput = document.getElementById("height-txt");
const backgroundColorInput = document.getElementById("background-color-txt");
const leftInput = document.getElementById("left-txt");
const topInput = document.getElementById("topInput");
// buttons
const addBoxBtn = document.getElementById("add-box-btn");
const restartBtn = document.getElementById("restart-btn");
// antall bokser tekst
const statusP = document.getElementById("status-p");
// Output div
const outputDiv = document.getElementById("output-div");

// Funksjon som legger til boksen i output div
const addBox = () => {
  const width = document.getElementById("width-txt");
  const height = document.getElementById("height-txt");
  const backgroundColor = document.getElementById("background-color-txt");
  const left = document.getElementById("left-txt");
  const top = document.getElementById("top-txt");
  
  // slik at brukeren må fylle ut alle input felt for at funksjonen skal gå videre
  if (
    width.value === "" ||
    height.value === "" ||
    backgroundColor.value === "" ||
    left.value === "" ||
    top.value === ""
  )
    return alert("Fyll ut alle felt");

  // +1 antall bokser
  boxCounter += 1;
  updateBoxCounter();
  // lager div boksen
  const newDivBox = makeDiv(width.value, height.value, backgroundColor.value, left.value, top.value);
  // output div legger til new div box
  outputDiv.append(newDivBox);

  // resetter input value så det blir tomme felt
  width.value = '';
  height.value = '';
  backgroundColor.value = '';
  left.value = '';
  top.value = '';
};

addBoxBtn.addEventListener("click", addBox);

// funksjon som lager div boksen
const makeDiv = (widht, height, backgroundColor, left, top) => {
  const newDiv = document.createElement("div");
  newDiv.style.width = `${widht}px`;
  newDiv.style.height = `${height}px`;
  newDiv.style.backgroundColor = `${backgroundColor}`;
  newDiv.style.left = `${left}px`;
  newDiv.style.top = `${top}px`;
  //newDiv.id = boxCounter;
  console.log(newDiv);
  return newDiv;
};

// funksjon som teller bokser og oppdaterer boks antall
let boxCounter = 0;
const updateBoxCounter = () => {
  statusP.innerHTML = `Antall bokser lagt til: ${boxCounter}`;
};

// funksjon som sletter alle div bokser og oppdaterer antall bokser teksten
const handleRestart = () => {
    // fjerner alle elementer i output div
    boxCounter = 0;
    updateBoxCounter();
    outputDiv.remove();
};

restartBtn.addEventListener("click", handleRestart);
