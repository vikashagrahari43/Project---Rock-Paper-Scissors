let compscore =0;
let playerscore =0;

const choices = document.querySelectorAll(".choice");
const Msg = document.querySelector("#msg");
const humanScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");



choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});
const playgame = (userchoice) =>{

    let compchoice= compgame();


    if(userchoice === compchoice){
        gamedraw();
    }
    else{
        let userwin=true;
        if(userchoice === "rock"){
            if(compchoice === "paper"){
                userwin = false;
            }
            else{
                userwin = true;
            }
        
        }
        else if (userchoice === "paper"){
                if(compchoice === "scissors"){
                    userwin = false;
                }
                else{
                    userwin = true;
                }
            
        }
        else{
            if(compchoice === "rock"){
                userwin = false ;

            }
            else{
                userwin = true;
            }

        }
        showwinner (userwin , userchoice, compchoice);
    }

};


const compgame = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randomgenerate = Math.floor(Math.random()* 3);

    return options[randomgenerate];
}

const gamedraw = () => {
    Msg.innerText = "The game is Draw..Play Again !!" ;
    Msg.style.backgroundColor = "grey" ;
}

const showwinner = (userwin , userchoice , compchoice ) =>{

    if (userwin){
        playerscore++ ;
     humanScore.innerText = (playerscore) ;
     Msg.innerText = `Congratulation !! Your ${userchoice} beats ${compchoice}` ;
    Msg.style.backgroundColor = "green" ;
    }
    else {
        compscore ++ ;
        computerScore.innerText = (compscore ) ;
        Msg.innerText = `LoL !! Your ${userchoice} beated by ${compchoice}` ;
       Msg.style.backgroundColor = "red" ;
       }
}