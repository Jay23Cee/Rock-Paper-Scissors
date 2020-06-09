var computerChoice;
var playerChoice;
var UserScore =document.getElementById("Uscore");
var CpuScore=document.getElementById("Cscore");
var Drawscore=document.getElementById("Dscore");



var player = document.getElementById("player");
var computer = document.getElementById("computer");
var outcome = document.getElementById("outcome");

var rock_pic = "img/rock-icon.png";
var paper_pic= "img/paper-icon.png";
var scissor_pic = "img/scissors-icon.png"

var rock_pic2 = "img/Rock.png";
var paper_pic2= "img/Paper.png";
var scissor_pic2 = "img/Scissors.png"

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



   



var games = 0;
function run() {

games++;
console.log(games)
  //  img_animation();

    playerChoice = this.innerText;
    computerGamble();
    compare();
}


function img_animation(){
   
    var images = [rock_pic2, paper_pic2, scissor_pic2]
    var currentPos = 0;
    var counter=0;
            function volgendefoto() {
             
               console.log("i have"+counter);
               counter++;
                if (++currentPos >= images.length)
                 currentPos = 0;
                playerimage.src = images[currentPos];
                Computerimage.src = images[currentPos];

  
            }

            setInterval(volgendefoto, 4);

}

function computerGamble() {
    var dice = Math.random();
    if (dice <= 0.33) {
        computerChoice = "Rock";
        Computerimage.src=rock_pic;
    } else if (dice > 0.33 && dice <= 0.66) {
        computerChoice = "Paper";
        Computerimage.src=paper_pic;
        
    } else {
        computerChoice = "Scissors";
        Computerimage.src=scissor_pic ;

    }
}
 


function updatescore(winner){

    winner.trim();
    if(winner=="user")
    { 
     
        var num = UserScore.innerHTML;
        num ++;
           console.log("USER WINNER, ", num)
        UserScore.innerHTML=num.toString();
      }else if(winner=="cpu"){ 
        var num = CpuScore.innerHTML;
        num ++;
        CpuScore.innerHTML=num.toString();
      }
     

  }


  var numcount = 0;
function compare() {
    
    player.innerHTML = playerChoice;
    computer.innerHTML =computerChoice;

    //UserScore("user");

  
    if ((playerChoice.trim()==computerChoice.trim())) {
       outcome.innerHTML = "Draw";
       updatescore("Draw");
  
        numcount++;
       console.log("This is DRAW COUNT YAY:",numcount);

    } else if ((playerChoice.trim() == "Rock" && computerChoice.trim()== "Paper")) {
        outcome.innerHTML = "Paper beats Rock <br> You Lose ";
       updatescore("cpu");
    } else if ((playerChoice.trim() == "Rock" && computerChoice.trim() == "Scissors")) {
        outcome.innerHTML = "Rock beats Scissors <br> You Win";
        updatescore("user");

    } else if ((playerChoice.trim() == "Paper" && computerChoice.trim() == "Rock")) {
        this.outcome.innerHTML = "Paper beats Rock <br> You Win";
        updatescore("user");
        
    } else if ((playerChoice.trim() == "Paper" && computerChoice.trim() == "Scissors")) {
        outcome.innerHTML = "Scissors beats Paper <br> You Lose ";
        updatescore("cpu");


    } else if ((playerChoice.trim() == "Scissors" && computerChoice.trim() =="Rock")) {
        outcome.innerHTML = "Rock beats Scissors <br> You Lose ";
        updatescore("cpu");
    } else if ((playerChoice.trim()== "Scissors" && computerChoice.trim() == "Paper")) {
        this.outcome.innerHTML = "Scissors beats Paper <br> You Win";
        updatescore("user");
    }

    //CHANGING THEIMAGESOF PLAYER CHOICE.
    var changeimage = playerChoice;
    changeimage = changeimage.toLowerCase()+"-icon.png";
   

    playerimage.src="img/"+changeimage;

 

}
