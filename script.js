const mainSection = document.createElement('section');
const sectionChangeGame = document.createElement('section');

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



