{ 
    function playGame(playerInput) {
        clearMessages();

        function getMoveName(argMoveId) {
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

        function displayResult() {   
            const randomNumber = Math.floor(Math.random() * 3 + 1),
                argComputerMove = getMoveName(randomNumber),
                argPlayerMove = getMoveName(playerInput);

            console.log('Wylosowana liczba to: ' + randomNumber);
            console.log('Gracz wpisał: ' + playerInput);
            console.log('moves:', argComputerMove, argPlayerMove);
            
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

        displayResult();
    }

    document.getElementById('button play-rock').addEventListener('click', function() {
        playGame(1);
    });

    document.getElementById('button play-paper').addEventListener('click', function() {
        playGame(2);
    });

    document.getElementById('button play-scissors').addEventListener('click', function() {
        playGame(3);
    });

}