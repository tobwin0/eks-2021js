// Biler
const blueCar = document.getElementById("blue-car");
const greenCar = document.getElementById("green-car");
const redCar = document.getElementById("red-car");

// veien
const road = document.getElementById("road-div");

// output div
const outputDiv = document.getElementById("output-div");

// finish line
const finishLine = document.getElementById("finish-line");

const cars = [
  {
    car: blueCar,
    color: 'blue',
    x: 0
  },
  {
    car: greenCar,
    color: 'green',
    x: 0
  },
  {
    car: redCar,
    color: 'red',
    x: 0
  }
];
const generateRandomNum = () => Math.floor(Math.random() * 201);
let winner = false;
let raceStarted = false;
function startRace() {
  raceStarted = true;
  const interval = setInterval(() => {
    cars.forEach(car => {
      if(car.x < 700){
          car.x += generateRandomNum();
          updateXOnScreen(car);
      }
      if(car.x >= 700 && !winner){
        winner = car;
        clearInterval(interval);
        showWinner(winner.color);
        console.log(winner.color);
      }
    })
  },1000)

}

function updateXOnScreen(car){
  car.car.style.left = car.x + 'px';
}
// Vis vinner
function showWinner(winner){
  const h1 = document.createElement('h1');
  h1.innerHTML = `Vinneren er: ${winner}!`;
  outputDiv.append(h1);
}

const startBtn = document.getElementById("start-btn");
startBtn.style.position = "absolute";
startBtn.style.top = "70%";
startBtn.onclick = startRace;
