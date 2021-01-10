function playGame(playerInput){
    clearMessages();

    function getMoveName(argMoveId){
        if (argMoveId == 1) {
        return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

//Computer move

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';3
}

printMessage('Mój ruch to: ' + argComputerMove);
*/


//Player move

   /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + argPlayerMove);
*/

//Score

    console.log('moves:', argComputerMove, argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem: ' + argComputerMove + ', Ty zagrałeś: ' + argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Mamy remis! Może kolejna rundka?');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Mamy remis! Może kolejna rundka?');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Mamy remis! Może kolejna rundka?');
        } else {
            printMessage('Wybrałeś złą liczbę. Dozwolone to: 1, 2 lub 3');
        }
    }

    displayResult(argComputerMove, argPlayerMove);

/*
if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
} else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Mamy remis! Może kolejna rundka?');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
} else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Mamy remis! Może kolejna rundka?');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy remis! Może kolejna rundka?');
} else {
    printMessage('Wybrałeś złą liczbę. Dozwolone to: 1, 2 lub 3');
}
*/
}

document.getElementById('button play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('button play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('button play-scissors').addEventListener('click', function(){
    playGame(3);
});
