// Paso 1 

const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');

// Paso 2

async function fetchPokemon(numero) {
  const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
  const response = await axios.get(url);
  return response.data;
}

// Paso 3

async function getPokemonData() {
  try {
    const pokemonNumber = 25;
    if (pokemonNumber < 1 || pokemonNumber > 898) {
      throw new Error("Número de Pokémon inválido");
    }
    const pokemonData = await fetchPokemon(pokemonNumber);
    const { name, types } = pokemonData;
    console.log(chalk.yellow(`El Pokémon ${name} es de tipo ${types[0].type.name}`));
    if (types.length > 1) {
      console.log(chalk.yellow(`y ${types[1].type.name}`));
    }
  } catch (error) {
    console.log(error.message);
  }
}

getPokemonData();

// Paso 4

function formatPokemon(name, types) {
  if (!name || !types) {
    throw new Error("Datos de Pokémon incompletos");
  }

  let formattedString = chalk.yellow(`El Pokémon ${name} es de tipo ${types[0]}`);

  if (types.length > 1) {
    formattedString += ` y ${types[1]}`;
  }

  return formattedString;
}

// Paso 5

try {
  const pokemonName = "Snorlax";
  const pokemonTypes = ["normal"];
  const formattedResult = formatPokemon(pokemonName, pokemonTypes);
  console.log(formattedResult);
} catch (error) {
  console.log(error.message);
}

// Paso 6

try {
  const fileContent = fs.readFileSync('datos.txt', 'utf-8');
  console.log(fileContent);
} catch (error) {
  console.log("El archivo 'datos.txt' no existe");
}

// Paso 7

function writeToFile(message) {
  try {
    fs.writeFileSync('resultados.txt', message);
  } catch (error) {
    throw new Error("Error al escribir en el archivo 'resultados.txt'");
  }
}

// Paso 8

try {
  writeToFile("Examen finalizado");
} catch (error) {
  console.log(error.message);
}
