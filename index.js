#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n Welcome to codewithmaaz -currency converter\n"));
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "GBP": 110,
    "JPY": 13,
    "AUD": 1.65,
    "CAD": 19,
    "CHF": 2.0,
    "CNY": 280,
    "HKD": 8,
    "NZD": 5,
    "SGD": 88,
    "pak": 289,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "From Currency",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "NZD", "SGD", "pak"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "To Currency",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "NZD", "SGD", "pak"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter amount",
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted_amount= ${converted_amount}`);
