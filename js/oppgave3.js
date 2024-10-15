// Oppgave 3 Middelalder eiendomsmegler

const outputDiv = document.getElementById('output-div');
// array med objects
const buildings = [
  {
    name: "enkel brakke",
    price: 500,
    imageName: "../images/building-1.png",
    category: "brakke",
  },
  {
    name: "enkel brakke med peis",
    price: 650,
    imageName: "../images/building-2.png",
    category: "brakke",
  },
  {
    name: "to-etasjers brakke",
    price: 1250,
    imageName: "../images/building-3.png",
    category: "brakke",
  },
  {
    name: "stor to-manns bolig",
    price: 2500,
    imageName: "../images/building-4.png",
    category: "stor bygning",
  },
  {
    name: "slott",
    price: 5500,
    imageName: "../images/building-5.png",
    category: "stor bygning",
  },
  {
    name: 'vaktårn',
    price: 4500,
    imageName: '../images/building-6.png',
    category: 'stor bygning'
}
];

// funksjonalitet:
// funksjon som lager bygningskort
function addBuilding(building){
    const div = document.createElement('div');
    
    // navn på bygning
    const h2 = document.createElement('h2');
    h2.textContent = building.name;
    // bilde av bygningen
    const img = document.createElement('img');
    img.src = building.imageName;
    img.width = 200;
    // pris til bygning
    const priceP = document.createElement('p');
    priceP.textContent = `Pris: ${building.price} $`;
    // kategori til bygning
    const categoryP = document.createElement('p');
    categoryP.textContent = 'Kategori: ' + building.category;

    //div boks til bygning
    div.style.border = '1px solid #000';
    div.style.width = '300px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.marginBottom = '12px'
    div.append(h2,img,priceP,categoryP);
    outputDiv.append(div);
}

// funksjon som sletter innhold i output div
function removeContentInOutputDiv(){
    outputDiv.innerHTML = '';
}

// funksjon som oppdaterer hvor mange bygninger som vises
function updateBuildingsShown(arrLength){
    const p = document.createElement('p');
    p.textContent = 'Results: ' + arrLength;
    outputDiv.append(p);
}
// 1. Vise alle bygninger
const showAllBtn = document.getElementById('show-all-btn');
function showAllBuildings(){
    removeContentInOutputDiv();
    updateBuildingsShown(buildings.length);
    buildings.forEach(b => {
        addBuilding(b);
    })
}
showAllBtn.onclick = showAllBuildings;

// 2. Vise de bygningene som er innenfir en minimums- og maksimumspris
const showByPriceBtn = document.getElementById('vis-pris-btn');
function showByPrice(){
    removeContentInOutputDiv();
    const minInput = document.getElementById('min-pris-input');
    const maxInput = document.getElementById('maks-pris-input');
    // slik at brukeren må fylle ut begge feltene før søket kan begynne
    if(minInput.value === '' && maxInput.value === '') return alert('Husk å fyll ut alle felt!');

    // gir tilbake en array med bygninger som har en pris mellom min og max input
    const filteredBuildings = buildings.filter(building => building.price >= minInput.value && building.price <= maxInput.value);
    updateBuildingsShown(filteredBuildings.length);
    if(filteredBuildings.length === 0){
        const h1 = document.createElement('h1');
        h1.textContent = 'Ingen resultater funnet!';
        outputDiv.append(h1);
    }
    filteredBuildings.forEach(b => {
        addBuilding(b);
    })
}
showByPriceBtn.onclick = showByPrice;
// 3. Vise bygninger i en kategori (vise antall bygninger som ble funnet i kategorien)
const categoryBtn = document.getElementById('kategori-btn');
const selectCategory = document.getElementById('category-select');

function filterByCategory(){
    console.log(selectCategory.value)
    removeContentInOutputDiv();
    if(selectCategory.value === '--Velg kategori--') return alert('Velg en kategori!');

    // filtrert array med kategori
    const filteredBuildings = buildings.filter(building => building.category === selectCategory.value);
    updateBuildingsShown(filteredBuildings.length);
    filteredBuildings.forEach(b => {
        addBuilding(b);
    });
}

categoryBtn.onclick = filterByCategory;

// funksjon som legger inn de ulike kategoriene i hmtl siden
function addOption(category){
    const option = document.createElement('option');
    option.text = category;
    option.value = category;
    selectCategory.append(option);
}

addOption('brakke');
addOption('stor bygning');