let dot = new Audio("../sound/dot.ogg");
let dash = new Audio("../sound/dash.ogg");

//let lumiere = document.getElementById("backgroundMorse");

const DOT_TIMER = 375;
const DASH_TIMER = 750;
const SPACE_TIMER = 200;


export default class ConvertMorseToAudio{
    constructor(){
        this.indice = 0;
        this.stringMorseCode = "";
        this.morseCodeLength = 0;
    }


    convertToAudio(stringMorseCode, morseCodeLength){
            this.indice = 0;
            this.stringMorseCode = stringMorseCode;
            this.morseCodeLength = morseCodeLength;
            this.convertToSound();
    }

    convertToSound(){
        if(this.indice < this.morseCodeLength){
            switch(this.stringMorseCode[this.indice]){
                case '.':
                    this.playDot();
                    break;
                case '-':
                    this.playDash();
                    break;
                case ' ':
                    this.playSpace();
                    break;
            }
        }
    }

    playDot(){
        //lumiere.style.backgroundColor = "black";
        dot.play();
        this.indice++;

        /*setTimeout(() => {
            lumiere.style.backgroundColor = "bisque";
        }, DOT_TIMER-100);*/
        setTimeout(() => {
            this.convertToSound();
        }, DOT_TIMER);
    }

    playDash(){
        //lumiere.style.backgroundColor = "black";
        dash.play();
        this.indice++;

        /*setTimeout(() => {
            lumiere.style.backgroundColor = "bisque";
        }, DASH_TIMER-100);*/
        setTimeout(() => {
            this.convertToSound();
        }, DASH_TIMER);
    }

    playSpace(){
        this.indice++;
        setTimeout(() => {
            this.convertToSound();
        }, SPACE_TIMER);
    }
}
