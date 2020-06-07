var Rock = document.getElementById('R');
if(Rock){
    
Rock.addEventListener("click",run);
};

var Paper = document.getElementById("P");
if(Paper){
    Paper.addEventListener("click",run);
    };

var Scissors = document.getElementById("S");
if(Scissors){
    Scissors.addEventListener("click",run);
    };

var playerimage = document.getElementById("playerImg");
//if(playerimage){
 //   playerimage.setAttribute("src", "rock.JPG");

 // }


var Computerimage = document.getElementById('computerImg');



   


var computerChoice;
var playerChoice;
var UserScore =document.getElementById("Uscore");
var CpuScore=document.getElementById("Cscore");
var Drawscore=document.getElementById("Dscore");



var player = document.getElementById("player");
var computer = document.getElementById("computer");
var outcome = document.getElementById("outcome");


function run() {


    
    playerChoice = this.innerText;
    computerGamble();
    compare();
}

function computerGamble() {
    var dice = Math.random();
    if (dice <= 0.33) {
        computerChoice = "Rock";
        Computerimage.src="image/rock.JPG";
    } else if (dice > 0.33 && dice <= 0.66) {
        computerChoice = "Paper";
        Computerimage.src="image/paper.JPG";
        
    } else {
        computerChoice = "Scissors";
        Computerimage.src="image/scissors.JPG";

    }
}
 


function updatescore(winner){

    winner.trim();
    if(winner=="user")
    { 
        var num = UserScore.innerHTML;
        num ++;
        UserScore.innerHTML=num.toString();
      }else if(winner=="cpu"){ 
        var num = CpuScore.innerHTML;
        num ++;
        CpuScore.innerHTML=num.toString();
      }
      else{
        var num = DrawScore.innerHTML;
        num ++;
        DrawScore.innerHTML=num.toString();
        }

  }
function compare() {
    
    player.innerHTML = "You have chosen " + playerChoice;
    computer.innerHTML = "Computer chooses " + computerChoice;

    //UserScore("user");

  
    if ((playerChoice.trim()==computerChoice.trim())) {
       outcome.innerHTML = "Draw";
       updatescore("Draw");

    } else if ((playerChoice.trim() == "Rock" && computerChoice.trim()== "Paper")) {
        outcome.innerHTML = "Defeat!";
       updatescore("cpu");
    } else if ((playerChoice.trim() == "Rock" && computerChoice.trim() == "Scissors")) {
        outcome.innerHTML = "Victory!";
        updatescore("user");

    } else if ((playerChoice.trim() == "Paper" && computerChoice.trim() == "Rock")) {
        this.outcome.innerHTML = "Victory!";
        updatescore("user");
        
    } else if ((playerChoice.trim() == "Paper" && computerChoice.trim() == "Scissors")) {
        outcome.innerHTML = "Defeat!";
        updatescore("cpu");


    } else if ((playerChoice.trim() == "Scissors" && computerChoice.trim() =="Rock")) {
        outcome.innerHTML = "Defeat!";
        updatescore("cpu");
    } else if ((playerChoice.trim()== "Scissors" && computerChoice.trim() == "Paper")) {
        this.outcome.innerHTML = "Victory!";
        updatescore("user");
    }

    //CHANGING THEIMAGESOF PLAYER CHOICE.
    var changeimage = playerChoice;
    changeimage = changeimage.toLowerCase()+".JPG";
   

    playerimage.src="image/"+changeimage;

 

}
