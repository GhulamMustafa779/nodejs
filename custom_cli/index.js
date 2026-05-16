#! /usr/bin/env node

import inquirer from 'inquirer';
// import yargs from 'yargs';
// const { argv } = yargs(process.argv);

async function ask(pokemonName) {
    const name = pokemonName.trim().toLowerCase();
    if (!name) {
        console.log("Please enter a pokemon name.");
        return;
    }

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name)}`
    );

    if (!response.ok) {
        console.log(`Pokemon "${pokemonName}" not found.`);
        return;
    }

    const data = await response.json();
    console.log(data);
}

const prompt = inquirer.createPromptModule();

prompt({
    type: 'input',
    name: 'pokemon',
    message: 'Enter the name of the pokemon'
}).then(async (answer) => {
    await ask(answer.pokemon);
});

// ask(argv.pokemon);