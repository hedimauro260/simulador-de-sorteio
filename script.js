const nameInput = document.getElementById('nameInput');
const addNameButton = document.getElementById('addName');
const nameList = document.getElementById('nameList');
const drawWinnerButton = document.getElementById('drawWinner');
const winnerArea = document.getElementById('winnerArea');
const winnerName = document.getElementById('winnerName');
const clearAllButton = document.getElementById('clearAll');

// Lista de nomes
let names = [];

// Adicionar nome à lista
function addName() {
  const name = nameInput.value.trim();
  if (name) {
    names.push(name);
    updateNameList();
    nameInput.value = '';
  }
}

// Atualizar a lista de nomes exibida
function updateNameList() {
  nameList.innerHTML = '';
  names.forEach((name, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    nameList.appendChild(listItem);
  });
}

// Sortear um ganhador
drawWinnerButton.addEventListener('click', () => {
  if (names.length === 0) {
    alert('Adicione nomes antes de sortear!');
    return;
  }
  const randomIndex = Math.floor(Math.random() * names.length);
  const winner = names[randomIndex];
  winnerName.textContent = winner;
  winnerArea.style.display = 'block';
});

// Limpar a lista
clearAllButton.addEventListener('click', () => {
  names = [];
  updateNameList();
  winnerArea.style.display = 'none';
});

// Evento para o botão "Adicionar"
addNameButton.addEventListener('click', addName);

// Evento para pressionar "Enter" no campo de entrada
nameInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addName();
  }
});
