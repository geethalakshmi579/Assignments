let text = document.getElementById('demo');
let text2 = document.getElementById('demo2');
let pScore = document.getElementById('playerScore');
let cScore = document.getElementById('computerScore');
let pShowIcon = document.querySelector('.show i');
let cShowIcon = document.querySelector('.computer i');
let buttons = document.querySelectorAll('.selection button');
let randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
let computerScore = 1;
let playerScore = 1;

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and the player
           let clickedBtn = e.target.className;
           pshowIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           cShowIcon.className = randomClasses[randomNum];
           // Game Score.
           // If it's a Tie .
           if(pshowIcon.className === crShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Tie ! ";
               text.style.color = 'orange';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'orange';
           } 
          // if it's not a Tie.
           else if(pshowIcon.className === randomClasses[0] && cShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(pshowIcon.className === randomClasses[0] && cShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
            }else if(pshowIcon.className === randomClasses[1] && cShowIcon.className === randomClasses[2]){
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loosed ! ";
                text.style.color = 'red';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'red';
            }else if(pshowIcon.className === randomClasses[1] && cShowIcon.className === randomClasses[0]){
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a Win ! ";
                text.style.color = 'rgb(1, 146, 1)';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'rgb(1, 146, 1)';
            }else if(pshowIcon.className === randomClasses[2] && cShowIcon.className === randomClasses[0]){
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loosed ! ";
                text.style.color = 'red';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'red';
            }else if(pshowIcon.className === randomClasses[2] && cShowIcon.className === randomClasses[1]){
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a Win ! ";
                text.style.color = 'rgb(1, 146, 1)';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'rgb(1, 146, 1)';
            }
         });
     });
 }
 // Calling the function.
 game();