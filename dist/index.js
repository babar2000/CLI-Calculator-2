#! /usr/bin/env node
import inquirer from "inquirer";
inquirer
    .prompt([
    {
        type: "number",
        name: "num1",
        message: "What is the first number?"
    },
    {
        type: "number",
        name: "num2",
        message: "What is the second number?"
    },
    {
        type: "list",
        name: "operations",
        message: "Select operations",
        choices: ["+", "-", "*", "/"]
    },
])
    .then((answers) => {
    if (answers.operations === "+") {
        const result = answers.num1 + answers.num2;
        console.log("Sum", result);
    }
    else if (answers.operations === "-") {
        const result = answers.num1 - answers.num2;
        console.log("Subtract", result);
    }
    else if (answers.operations === "*") {
        const result = answers.num1 * answers.num2;
        console.log("Multiply", result);
    }
    else if (answers.operations === "/") {
        const result = answers.num1 / answers.num2;
        console.log("Divide", result);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
