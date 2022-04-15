#!/usr/bin/env node

//i've just discovered these chalk packages and am having way too much fun with them
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

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
  `);
};

await welcome();
