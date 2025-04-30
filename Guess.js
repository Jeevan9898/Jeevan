let secretNumber=Math.floor(Math.random()*10)+1;
let attempts=0;
const maxAttempts=5;


const guessInput=document.getElementById("guessInput");
const submitGuess=document.getElementById("submitGuess");
const restartGame=document.getElementById("restartGame");
const message=document.getElementById("message");

submitGuess.addEventListener('click',()=>{
    const userGuess=Number(guessInput.value);

    attempts++;
    let remainingAttempts=maxAttempts-attempts;

    if(userGuess===secretNumber){
        message.textContent=`🥳 Congratulations! You guessed the number in ${attempts} attempts`;
        message.style.color="green";
        submitGuess.disabled=true;
    }else if(userGuess<secretNumber){
        message.textContent=`📉 Too low! You have ${remainingAttempts} attempts left`;
        message.style.color="blue";
    }else if(userGuess>secretNumber){
        message.textContent=`📈 Too high! You have ${remainingAttempts} attempts left`;
        message.style.color="red";
    }else{
        message.textContent=`❌ Invalid Input! Enter a number:`;
        message.style.color="black";
    }

    if(attempts>=maxAttempts && userGuess!=secretNumber){
        message.textContent=`💔Game Over! The number was ${secretNumber}`;
        message.style.color="red";
        submitGuess.disabled=true;
    }

    guessInput.value="";
});

restartGame.addEventListener("click",()=>{
    secretNumber=Math.floor(Math.random()*10)+1;
    attempts=0;
    message.textContent="";
    guessInput.value="";
    submitGuess.disabled=false;
});