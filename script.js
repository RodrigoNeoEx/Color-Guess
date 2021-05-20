const mainSection = document.createElement('section');
const sectionChangeGame = document.createElement('section');
let base = 6;
let result = 0;

function createMainSection() {
  const bodyChild = document.querySelector('body');
  mainSection.id = 'mainSection';
  mainSection.className = 'mainSection'
  bodyChild.appendChild(mainSection);
}

function createMainTitle() {
  const mainTitle = document.createElement('h1');
  mainTitle.innerHTML = '🎨 Can you guess the color? 🎨';
  mainTitle.id = 'title';
  mainTitle.className = 'title';
  mainSection.appendChild(mainTitle);
}

function createSubTitle() {
  const rgbText = document.createElement('h3');
  rgbText.id = 'rgb-color';
  rgbText.className = 'rgb-color'
  mainSection.appendChild(rgbText);
}

function createScoreContainer() {
  const placar = document.createElement('p');
  placar.innerHTML = 'Placar: 0';
  placar.id = 'score';
  placar.className = 'score'
  mainSection.appendChild(placar);
}

function createColorBtns() {
  const colorButtons = document.createElement('section');
  colorButtons.id = 'colorsSection';
  colorButtons.className = 'colorSection';
  mainSection.appendChild(colorButtons);
}

function createTextContainer() {
  const dinamicText = document.createElement('p');
  dinamicText.innerHTML = 'Escolha uma cor';
  dinamicText.id = 'answer';
  mainSection.appendChild(dinamicText);
}

function createGameChangerSection() {
  sectionChangeGame.id = 'dificult-reset';
  sectionChangeGame.className = 'dificult-reset';
  mainSection.appendChild(sectionChangeGame);
}

function createGameBtns() {
  const buttonDificult = document.createElement('button');
  const buttonReset = document.createElement('button');
  buttonDificult.id = 'buttonDificult';
  buttonDificult.innerHTML = 'Dificult';
  buttonDificult.className = 'changeGameButtons';
  buttonReset.id = 'reset-game';
  buttonReset.className = 'changeGameButtons'
  buttonReset.innerHTML = 'Reset Game';
  sectionChangeGame.appendChild(buttonReset);
  sectionChangeGame.appendChild(buttonDificult);
}

function createSelectDif() {
  const inputDificult = document.createElement('select');
  inputDificult.id = 'changeDificult';
  inputDificult.className = 'changeDificult';
  sectionChangeGame.appendChild(inputDificult);
}

function callStructure() {
  createMainSection();
  createMainTitle();
  createSubTitle();
  createScoreContainer();
  createColorBtns();
  createTextContainer();
  createGameChangerSection();
  createGameBtns();
}

function createCircle() {
  for(let index = 0; index < base; index += 1) {
    const div = document.createElement('div');
    div.className = 'ball';
    document.getElementById('colorsSection').appendChild(div);
  }
}

function generateRandomRGB() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `(${r}, ${g}, ${b})`;
}

function inputScore() {
  let checkResult = document.getElementById('answer');
  let checkScore = document.getElementById('score');
  if(checkResult.innerText === 'Acertou!') {
    result +=  3;
    checkScore.innerText = `Placar: ${result}`;
  } else if (checkResult.innerText === 'Errou! Tente novamente!') {
    result -=  1;
    checkScore.innerText = `Placar: ${result}`;
  }
}

window.onload = function() {
  callStructure();
};

