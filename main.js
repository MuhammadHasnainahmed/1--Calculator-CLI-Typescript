import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner('The calculator', 'This is a calculator');
})();
async function calculator() {
    let num1 = await inquirer.prompt({
        name: "numfirst",
        type: "number",
        message: "enter your number",
    });
    let operater = await inquirer.prompt({
        name: "operater",
        type: "input",
        message: "enter your operater",
    });
    let num2 = await inquirer.prompt({
        name: "secondnum",
        type: "number",
        message: "enter your secondnum",
    });
    if (operater.operater === "+") {
        console.log(chalk.blue.bgCyan.bold(num1.numfirst + num2.secondnum));
    }
    else if (operater.operater === "-") {
        console.log(num1.numfirst - num2.secondnum);
    }
    else if (operater.operater === "/") {
        ;
        console.log(num1.numfirst / num2.secondnum);
    }
    else if (operater.operater === "*") {
        console.log(num1.numfirst * num2.secondnum);
    }
    else if (operater.operater === "%") {
        console.log(num1.numfirst % num2.secondnum);
    }
    else {
        console.log("invalid number");
    }
}
calculator();
