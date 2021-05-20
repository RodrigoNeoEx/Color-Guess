const mainSection = document.createElement('section');

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