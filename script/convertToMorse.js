export default class ConvertToAlphabetMorse{
    constructor(){
        //
    }
    
    convertToAlphabetMorse(stringTexte, stringTexteLength){
        let texteConvertiMorse = "";
        let i = 0;
        for(i = 0; i < stringTexteLength; i++){
            switch(stringTexte[i]){
                case 'a':
                    texteConvertiMorse += ".- ";
                    break;
                case 'b':
                    texteConvertiMorse += "-... ";
                    break;
                case 'c':
                    texteConvertiMorse += "-.-. ";
                    break;
                case 'd':
                    texteConvertiMorse += "-.. ";
                    break;
                case 'e':
                    texteConvertiMorse += ". ";
                    break;
                case 'f':
                    texteConvertiMorse += "..-. ";
                    break;
                case 'g':
                    texteConvertiMorse += "--. ";
                    break;
                case 'h':
                    texteConvertiMorse += ".... ";
                    break;
                case 'i':
                    texteConvertiMorse += ".. ";
                    break;
                case 'j':
                    texteConvertiMorse += ".--- ";
                    break;
                case 'k':
                    texteConvertiMorse += "-.- ";
                    break;
                case 'l':
                    texteConvertiMorse += ".-.. ";
                    break;
                case 'm':
                    texteConvertiMorse += "-- ";
                    break;
                case 'n':
                    texteConvertiMorse += "-. ";
                    break;
                case 'o':
                    texteConvertiMorse += "--- ";
                    break;
                case 'p':
                    texteConvertiMorse += ".--. ";
                    break;
                case 'q':
                    texteConvertiMorse += "--.- ";
                    break;
                case 'r':
                    texteConvertiMorse += ".-. ";
                    break;
                case 's':
                    texteConvertiMorse += "... ";
                    break;
                case 't':
                    texteConvertiMorse += "- ";
                    break;
                case 'u':
                    texteConvertiMorse += "..- ";
                    break;
                case 'v':
                    texteConvertiMorse += "...- ";
                    break;
                case 'w':
                    texteConvertiMorse += ".-- ";
                    break;
                case 'x':
                    texteConvertiMorse += "-..- ";
                    break;
                case 'y':
                    texteConvertiMorse += "-.-- ";
                    break;
                case 'z':
                    texteConvertiMorse += "--.. ";
                    break;
                case ' ':
                    texteConvertiMorse += "  ";
                    break;
            }
        }
        return texteConvertiMorse;
    }
}