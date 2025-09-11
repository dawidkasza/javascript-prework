//let randomNumber = Math.floor(Math.random() * 3 + 1);
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorButton = document.getElementById('scissor');

//let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
   computerMove = 'papier';
}
else if (randomNumber == 3){
   computerMove = 'nożyce';
}*/

//printMessage('Mój ruch to: ' + computerMove);

//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); 

rockButton.addEventListener('click', function(){
   displayResult(getMoveName(Math.floor(Math.random() * 3 + 1)), getMoveName(1));   
});
paperButton.addEventListener('click', function(){
   playerMove = getMoveName(2);
   displayResult(getMoveName(Math.floor(Math.random() * 3 + 1)), getMoveName(2));    
});
scissorButton.addEventListener('click', function(){
   playerMove = getMoveName(3);
   displayResult(getMoveName(Math.floor(Math.random() * 3 + 1)), getMoveName(3));     
});


//let playerMove =  getMoveName(playerInput);;

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
   playerMove = 'papier';
}
else if (playerInput == '3'){
   playerMove = 'nożyce';
} */

/*printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Wygrywasz!');
}
else if (playerMove == 'nieznany ruch'){
   printMessage('Wykonałeś nieznnany ruch. Ponów zagranie');
}
else if (computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'papier'){
   printMessage('Przegrywasz :(');
}
else if (computerMove == playerMove){
   printMessage('Remis, zagrajmy jeszcze raz');
} */