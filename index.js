function getRandomInt(min, max){
var min = Math.ceil(min);
var max = Math.floor(max);
return Math.floor(Math.random() * (max-min+1)) +min;
}

function competitionResult(randomNumber1,randomNumber2) {
  var x = document.getElementsByClassName("container")[0];

  if (randomNumber1>randomNumber2){
     x.querySelector("h1").innerHTML ="🚩Player 1 Wins!";
  }
  else if(randomNumber1<randomNumber2){
     x.querySelector("h1").innerHTML ="Player 2 Wins!🚩";
  }
  else {
     x.querySelector("h1").innerHTML ="Draw!";
  }
}
var randomNumber1 = getRandomInt(1,6);
var randomNumber2 = getRandomInt(1,6);
var diceName1="images/dice"+randomNumber1 +".png";
var diceName2="images/dice"+randomNumber2 +".png";
document.getElementsByClassName("img1")[0].src=diceName1;
document.getElementsByClassName("img2")[0].src=diceName2;

competitionResult(randomNumber1,randomNumber2);
