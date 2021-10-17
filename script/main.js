import ConvertToAlphabetMorse from './convertToMorse.js';
import ConvertMorseToAudio from './convertMorseToAudio.js';

let convertToMorse = new ConvertToAlphabetMorse();
let convertToAudio = new ConvertMorseToAudio();

let stringToConvert = "sos sos sos";
let stringMorse = convertToMorse.convertToAlphabetMorse(stringToConvert, stringToConvert.length);

let play = document.getElementById("play");

play.addEventListener("click", () =>{
    convertToAudio.convertToAudio(stringMorse, stringMorse.length);
});

console.log(stringMorse);