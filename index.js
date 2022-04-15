#!/usr/bin/env node

//i've just discovered these chalk packages and am having way too much fun with them
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

let userInput;

//just a little timer that can run before running other tasks
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

//function that greets the user
const welcome = async () => {
  const rainbowTitle = chalkAnimation.rainbow(
    "Welcome to my cool little RPN calculator :)"
  );

  await sleep();
  rainbowTitle.stop();
  console.log(`
  ${chalk.bgBlackBright(
    "Enter an equation in Reverse Polish Notation to begin."
  )}
    ${chalk.bgBlackBright("For Example:")}
    > 5 5 5 8 + + -
    ${chalk.yellowBright(-13)}
    > 13 +
    ${chalk.yellowBright(0)}
    
    ${chalk.bgRedBright("enter 'q' to quit")}
  `);
};

const getInput = async () => {
  //grab input from user and store it in userInput
  const answers = await inquirer.prompt({
    name: "equation",
    type: "input",
  });
  userInput = answers.equation;

  //exit process if user sent "q"
  if (userInput.includes("q")) {
    chalkAnimation.pulse("Closing calculator, goodbye!");
    await sleep();
    await process.exit(1);
  } else {
    console.log("you entered: " + userInput);
    await process.exit(1);
  }
};

await welcome();
await getInput();
