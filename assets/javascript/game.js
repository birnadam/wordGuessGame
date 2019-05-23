//Display instructions
function sp(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('infoPage').style.display = "block";
}

//Create word bank that gets randomly picked
//-word bank (strings in an array):
const words = ["unicorn", "dragon", "mermaid", "fairy", "werewolf", "leprechaun", "sphinx", "griffin", "pegasus", "chimera",
"centaur", "ghoul", "troll", "gnome", "pixie", "phoenix"];

//-Once user begins, the word is shuffled
//-create placement lets to do so:
let rand = 0;
let word = "";

function okay(){
    rand = Math.floor(Math.random()*words.length);
    word = words[rand];
    document.getElementById('infoPage').style.display = "none";
}

//Present blanks for users to guess
//-The letters from the string will be used to cross-reference
//with the user's key entries 

//Following each guess, subtract from amount of guesses given

//Refresh the blank spaces with correct letters

//Display the letters user have already guessed on the side

//If user runs out of guesses, alert loss and reset the game

//If user guesses correctly, play a sound, 
//tally up win, and reset the game



