// Solicita ao usuário que insira uma data de partida no formato DD/MM/YYYY
let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)");

// Converte a data inserida pelo usuário em um objeto Moment.js no formato especificado
let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

// Obtém a data e hora atuais como um objeto Moment.js
let today = moment();

// Calcula a diferença entre a data atual e a data de partida em milissegundos
let dateDiff = today - departureDate;

// Solicita ao usuário que escolha como deseja exibir a diferença de tempo
let chosenOption = prompt("Escolha como gostaria de exibir a data de partida\n1- Segundos\n2- Minutos\n3-Horas\n4- Dias");

// Verifica se o usuário escolheu a opção 1 (exibir diferença em segundos)
if (chosenOption == "1") {
    // Converte a diferença de milissegundos para segundos e arredonda o valor
    let secondsOfDeparture = Math.round(dateDiff / 1000);
    // Exibe a diferença em segundos
    alert("Tempo de voo: " + secondsOfDeparture + " segundos");

// Verifica se o usuário escolheu a opção 2 (exibir diferença em minutos)
} else if (chosenOption == "2") {
    // Converte a diferença de milissegundos para minutos e arredonda o valor
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
    // Exibe a diferença em minutos
    alert("Tempo de voo: " + minutesOfDeparture + " minutos");

// Verifica se o usuário escolheu a opção 3 (exibir diferença em horas)
} else if (chosenOption == "3") {
    // Converte a diferença de milissegundos para horas e arredonda o valor
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
    // Exibe a diferença em horas
    alert("Tempo de voo: " + hoursOfDeparture + " Horas");

// Verifica se o usuário escolheu a opção 4 (exibir diferença em dias)
} else if (chosenOption == "4") {
    // Converte a diferença de milissegundos para dias e arredonda o valor
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
    // Exibe a diferença em dias
    alert("Tempo de voo: " + daysOfDeparture + " Dias");

// Caso o usuário insira uma opção inválida
} else {
    // Exibe uma mensagem de erro informando que a opção é inválida
    alert("Opção inválida");
}
