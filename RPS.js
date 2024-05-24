let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msg1=document.querySelector("#msg1");

const userScoreP=document.querySelector("#user-score");
const compScoreP=document.querySelector("#comp-score");

const compGenChoice=()=>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
        {
            userScore++;
            console.log("You Win");
            msg.innerText=`You Win! Your ${userChoice} beat's ${compChoice}`;
            userScoreP.innerText=userScore;
            msg.style.backgroundColor ="green";
            msg.style.color="white";
        }
        else
        {
            comScore++;
            console.log("You Loose");
            msg.innerText=`You Lost! ${compChoice} beat's Your ${userChoice}`;
            compScoreP.innerText=comScore;
            msg.style.backgroundColor="red";
            msg.style.color="white";
        }
    if(userScore===5)
        {
            msg1.style.opacity="100%";
            msg1.innerText=`You Won agains't the computer`;
        }
        else if(comScore===5)
            {
                msg1.style.opacity="100%";
                msg1.innerText=`Computer Won!`;

            }
}

const playGame=(userChoice)=> {
    console.log("User choice was",userChoice);
    //generate computer resonse
    const compChoice=compGenChoice();
    console.log("Computer Choice was",compChoice);
    if(userChoice === compChoice)
        {
            //draw game
            console.log("The game was draw");
            msg.innerText="It's a Draw";
            msg.style.backgroundColor ="chartreuse";
            msg.style.color="purple";
        }
    else{
        let userWin=true;
        if(userChoice==="rock")
            {
                userWin = compChoice ==="paper" ? false:true;
            }
        else if(userChoice==="paper")
            {
                userWin = compChoice ==="scissors" ? false:true;
            }
        else
            {
                userWin = compChoice ==="rock" ? false:true;
            }
        showWinner(userWin,userChoice,compChoice);    
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});