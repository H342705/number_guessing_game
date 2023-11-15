#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import showBanner from "node-banner";
import gradient from "gradient-string";
(async () => {
    await showBanner('NUMBER GUESSING GAME', 'To win the game, you must correct the number','green','cyan');
})();
    let answer = [
    {
        type: "number",
        name: "userNumber",
        message : gradient.rainbow("Enter your number(0-10):"),
        validate: ((input:number)=>{
            if(isNaN(input)){
                console.log("Please enter only valid numbers");
            }else {
                return true;
            }
        })
    }
];
async function game(){
    let i:number = 1;
    let randomNumber = Math.floor(Math.random()*11);
    do{
    let {userNumber} = await inquirer.prompt(answer);
        if(userNumber === randomNumber){
            console.log(gradient.passion("Congratulation, You correct the number"));
            console.log(gradient.summer("You win the game in round "),i);
            break;
        }else if(userNumber > randomNumber){
            console.log(gradient.fruit("Your Number is too high"));
        }else if(userNumber < randomNumber){
            console.log(gradient.fruit("Your Number is too loo"));
        }
        if( i == 3 && userNumber !== randomNumber){
            console.log(gradient.teen("Sorry,You lose the game, Better Luck for the next time"));
        }
        i++;
    }while(i<4)
    second();
}
setTimeout(async()=>{
    console.log(chalk.bold.red("You have 3 rounds to complete the game"));
    game()
},1000);
let answers = [
    {
        type: "confirm",
        name: "play",
        message: gradient.rainbow("Do you want to play again?")
    }
]
async function second(){
    let {play} = await inquirer.prompt(answers);
    if(play){
        game();
    }
}


