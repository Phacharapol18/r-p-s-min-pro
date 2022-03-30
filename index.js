 //store user choice of R, P, or S
   //alert user what did they used
//computer choice of R, P, or S
// if computer win
  // alert you lose!
// if user win
  // you win//.  
  

 const userChoice = function () {
   let userPick =  prompt('input R for Rock or P for Paper or S for Scissors');
   let userPickCap = userPick.toUpperCase();
   
   
   if ( userPickCap === 'R') {
       alert('You Pick Rock');
   } else if (userPickCap === 'P'){
        alert('You Pick Paper');
   }else if (userPickCap === 'S'){
       alert('You Pick Scissors');
   } else {
       alert('Please pick the following R, P or S.');
   } 
   return userPickCap;
}

const computerChoice = function (){
    const randomNum = Math.floor(Math.random() * 3);
 switch (randomNum) {
    case 0 :
        alert('UI Rock');
        return 'R';  
    case 1 : 
        alert('UI Paper');
        return 'P';
    case 2 : 
        alert('UI Scissors');
        return 'S';

 }
}

  let win = 0;
  let loose = 0;
  let tie = 0;
 
 const matchStart = function () {
  
    let user = userChoice()
    let computer = computerChoice()
    if ( user === computer){
        tie++;
        return alert('WE TIE!!!');
    }
    if (user === 'R'){
      if ( computer === 'P') {
        loose++;
        return alert('You LOSE!!!');
 } else {
          win++;
       return alert ('You WIN!!');
 }
}
if (user === 'P'){
    if ( computer === 'S') {
       loose++;
      return alert('You LOSE!!!');
} else {
        win++;
     return alert ('You WIN!!');
}
}
if (user === 'S'){
    if ( computer === 'R') {
        loose++;
      return alert('You LOSE!!!');
} else {
        win++;
     return alert ('You WIN!!');
}
  
}

}

function playAgain() {
    var replay = confirm('Would you like to play again?');
    if (replay) {
        matchStart();
    } else {
        return;
    }

    alert('Wins: ' + win + 'Losses: ' + loose + 'Ties: ' + tie );
}












