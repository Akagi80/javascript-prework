//Computer move

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber ==2){
    computerMove = 'papier';
}

else if(randomNumber ==3){
    computerMove = 'nożyce';
}

//Player move

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
  playerMove = 'papier';
}

else if(playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

//Score

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
}

else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Mamy remis! Może kolejna rundka?');
}

else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}

else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
}

else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Mamy remis! Może kolejna rundka?');
}

else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}

else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrywam! Nie łam się, spróbuj ponownie!');
}

else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy remis! Może kolejna rundka?');
}

else if( playerMove = 'nieznany ruch'){
    printMessage('Wybrałeś złą liczbę. Dozwolone to: 1, 2 lub 3');
}
