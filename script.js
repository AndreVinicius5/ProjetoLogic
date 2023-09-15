// Defina a matriz do tabuleiro (0 para apagado, 1 para aceso)
var boardState = [];

// Função para criar um estado inicial aleatório
function createRandomBoard() {
    for (var i = 0; i < 3; i++) {
        boardState[i] = [];
        for (var j = 0; j < 3; j++) {
            boardState[i][j] = Math.round(Math.random()); // Gere 0 ou 1 aleatoriamente
        }
    }
}

// Função para criar o tabuleiro
function createBoard() {
    var table = document.getElementById("gameBoard");
    table.innerHTML = ""; // Limpe o tabuleiro antes de criar um novo

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 3; j++) {
            var cell = document.createElement("td");
            cell.textContent = boardState[i][j] === 1 ? "O" : "X";
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}

// Função para inverter uma linha
function invertRow(row) {
    for (var j = 0; j < 3; j++) {
        boardState[row][j] = 1 - boardState[row][j]; // Inverter o valor da linha
    }
    createBoard(); // Atualizar a exibição do tabuleiro
    checkWin(); // Verificar se o jogador venceu
}

// Função para inverter uma coluna
function invertColumn(col) {
    for (var i = 0; i < 3; i++) {
        boardState[i][col] = 1 - boardState[i][col]; // Inverter o valor da coluna
    }
    createBoard(); // Atualizar a exibição do tabuleiro
    checkWin(); // Verificar se o jogador venceu
}

// Função para verificar se o jogador venceu
function checkWin() {
    var countO = 0;
    var countX = 0;

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (boardState[i][j] === 1) {
                countO++;
            } else {
                countX++;
            }
        }
    }

    if (countO === 1 || countX === 1) {
        document.getElementById("victoryMessage").textContent = "Você venceu!";
    } else {
        document.getElementById("victoryMessage").textContent = "";
    }
}

// Função para reiniciar o jogo
function resetGame() {
    // Crie um novo estado inicial aleatório
    createRandomBoard();

    // Atualize o tabuleiro
    createBoard();
    document.getElementById("victoryMessage").textContent = ""; // Limpe a mensagem de vitória
}

// Chame createRandomBoard() para gerar um estado inicial aleatório
createRandomBoard();

// Chame createBoard() para criar o tabuleiro inicial
createBoard();

// Array de mensagens aleatórias
var messages = [
    "Olá, Mundo!",
    "Esta é uma mensagem aleatória.",
    "Espero que você esteja tendo um ótimo dia!",
    "Lembre-se sempre de sorrir.",
    "A vida é bela.",
    "A sorte favorece os audazes."
];
// Array de mensagens aleatórias
document.addEventListener("DOMContentLoaded", function() {
    var messages = [
        "Olá, Mundo!",
        "Esta é uma mensagem aleatória.",
        "O som mais alto que um pato pode fazer não pode ser ouvido pelo ouvido humano.",
"Em média, você passará seis meses de sua vida esperando por luzes vermelhas do semáforo.",
"As formigas são capazes de sobreviver a uma queda do topo de um arranha-céu.",
"As vacas têm melhores amigos e podem ficar deprimidas quando separadas deles.",
"Os flamingos cor-de-rosa nascem com penas cinzentas e depois mudam de cor devido à dieta.",
"Um grupo de corvos é chamado de 'assombração'.",
"Você pisca os olhos aproximadamente 15-20 vezes por minuto.",
"Apenas 1 em cada 2 bilhões de pessoas viverá até os 116 anos ou mais.",
"Em média, uma pessoa gasta cerca de 6 meses de sua vida esperando por chamadas automáticas em espera.",
"A cada ano, as cabras matam mais pessoas do que os tubarões.",
"As abelhas podem reconhecer rostos humanos.",
"O som de um raio pode aquecer o ar ao redor a uma temperatura mais quente do que a superfície do sol.",
"Apenas 3% da água do mundo é água doce",
"Os flamingos cor-de-rosa obtêm sua cor da dieta rica em carotenoides",
"As abelhas podem voar em altitudes mais elevadas do que o Monte Everest",
"A cada minuto, cerca de 100 bilhões de raios atingem a Terra",
"Um panda pode comer até 40 quilos de bambu por dia",
"O nome completo de Barbie é Barbara Millicent Roberts",
"A voz de Darth Vader é uma combinação de James Earl Jones e uma máquina de respiração",
"Há mais combinações possíveis de um jogo de xadrez do que átomos no universo observável",
"As formigas podem carregar objetos até 50 vezes o seu próprio peso corporal",
"Os olhos das avestruzes são maiores do que seus cérebros"
    ];

    function getRandomMessage() {
        var randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    document.getElementById("randomButton").addEventListener("click", function () {
        var messageArea = document.getElementById("messageArea");
        messageArea.textContent = getRandomMessage();
    });
});
C





