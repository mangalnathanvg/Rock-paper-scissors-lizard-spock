
const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


const ai_choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

let result = document.querySelector(".result");
let verdict = document.querySelector(".verdict");
let buttons = document.querySelectorAll(".action_button");

function getResult(userChoice, aiChoice){
    const res = [userChoice, aiChoice].sort();

        if (res[0] === "Paper" && res[1] === "Rock")
        {
            return "Paper covers Rock.";
        }

        if(res[0] === "Lizard" && res[1] ===  "Rock"){return "Rock smashes Lizard.";}
        if(res[0] === "Rock" && res[1] === "Scissors"){ return "Rock smashes Scissors.";}
        if(res[0] === "Paper" && res[1] === "Spock"){ return "Paper disproves Spock.";}
        if(res[0] === "Paper" && res[1] === "Scissors"){ return "Scissors cuts Paper.";}
        if(res[0] === "Lizard" && res[1] === "Scissors"){ return "Scissors decapitates Lizard.";}
        if(res[0] === "Lizard" && res[1] === "Paper"){ return "Lizard eats Paper.";}
        if(res[0] === "Lizard" && res[1] === "Spock"){ return "Lizard poisons Spock.";}
        if(res[0] === "Scissors" && res[1] === "Spock"){ return "Spock smashes Scissors.";}
        if(res[0] === "Rock" && res[1] === "Spock"){ return "Spock vaporizes Rock.";}

        return '';
}

function getVerdict(outcome, userChoice){

    if(outcome === ""){
        return 'Tied.';
    }

    const winner = outcome.split(' ')[0];

    if(userChoice === winner){
        return "You win!";
    }else{
        return "The Computer wins!";
    }

}

buttons.forEach((btn) => {
    btn.addEventListener('click', () =>{
       const userChoice = btn.value;
       // console.log(`User Choice: ${userChoice}`);
       const aiChoice = ai_choices[Math.floor(Math.random() * ai_choices.length)];
       // console.log(`AI Choice: ${aiChoice}`);
        const outcome = getResult(userChoice, aiChoice);
        const conclusion = getVerdict(outcome, userChoice, aiChoice);
        result.innerHTML = `You chose ${userChoice}. <br /> The Computer chose ${aiChoice}. <br /> ${outcome} <br />`;
        verdict.innerHTML = `<br /> <b>${conclusion}</b>`;
    });
});