/* var player recebe a jogada do jogador feita a partir do html:
  1 -> pedra
  2 -> papel
  3 -> tesoura

  player ia
  1 ganha 3 ou 2 ganha 1 ou 3 ganha 2
  1 perde 2 ou 2 perde 3 ou 3 perde 1
*/

var scorePlayer = 0
var scoreIa = 0

function play(playerChoice){
  
  var iaChoice = 
    Math.floor(Math.random()*3) + 1 //[1,3]
  
  var winner
  
  //ia ganha  
  if( (iaChoice == 1 && playerChoice == 3) 
    ||(iaChoice == 2 && playerChoice == 1)
    ||(iaChoice == 3 && playerChoice == 2)){
  winner = "Lord Monkey" //Ia
  scoreIa++
  }else if( (iaChoice == 1 && playerChoice == 2) 
    ||(iaChoice == 2 && playerChoice == 3)
    ||(iaChoice == 3 && playerChoice == 1)){
  winner = "Human" //Player
  scorePlayer++
  }else{
    winner = "No one"
  }

  //Vencedor
  var w = document.getElementById("winner")
  w.innerHTML = winner + " gets a banana"
  //Placar
  var s = document.getElementById("score")
  s.innerHTML = 
    "Human "+scorePlayer+" X "+scoreIa+" Lord Monkey"
}