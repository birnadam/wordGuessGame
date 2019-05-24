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
    document.getElementById('reset').style.display = "none";
    document.getElementById('gamePage').style.display = "block";
    game();
}

//Create placeholder variables for loops
let numWrong = 0;
let numRight = 0;
let wordLength = 0;
let numChar = 0;

//Keyboard layout for user to pick letters for the game
//Each time a letter is used it disappears from the display
//Refresh the blank spaces with correct letters
function game(){
    let x = word.length;
    let y = x-1;
    let spaces = 0;
    let validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    for(z = 0; z < word.length; z++){
        let letter = word.substring(y,x);
        if(validChar.indexOf(letter) > -1){
            x--;
            y--;
        }
    }
   
    x = word.length;
    y = x-1;
    while (x>0){
        numChar++;
        let letter = word.substring(y,x);
         //Present blanks for users to guess
        if(letter === " "){
            document.getElementById('letter'+x).innerHTML = "&nbsp;";
            document.getElementById('letter'+x).style.visibility = "hidden";
            document.getElementById('letter'+x).style.display = "block";
            document.getElementById('underline'+x).style.display = "block";
            spaces++;
        }
        
        else{
            document.getElementById('letter'+x).innerHTML = letter;
            document.getElementById('letter'+x).style.visibility = "hidden";
            document.getElementById('underline'+x).style.display = "block";            
            document.getElementById('underline'+x).style.borderBottom = "3px solid black";
        }
        x--;
        y--;
    }
    wordLength = word.length - spaces;
    document.getElementById('gamePage').style.display = "block";
}

//-The letters from the string will be used to cross-reference
//with the user's key entries and will count incorrect guesses
function guessLetter(){
    let correct = 0;
    let target = event.target || event.srcElement;
    //The letters user have already guessed will be hidden
    target.style.visibility = "hidden";
    let lower = target.id;
    let upper = document.getElementById(lower).getAttribute('value');
    let results = document.getElementById('results');
    let ul1 = document.getElementById('underline1').offsetWidth;
    for(a = 1; a < 11; a++){
        if(document.getElementById('letter'+a).innerHTML === upper || document.getElementById('letter'+a).innerHTML === lower){
            document.getElementById('letter'+a).style.visibility = "visible";
            correct++;
            numRight++;
        }
    }
    if(correct==0){
        numWrong++;
    }
    // show amount of missed guesses remaining
    if(numWrong==1){
        results.style.visibility = "visible";
        results.style.color = "red";
        results.innerHTML = "4 more misses allowed";
        
    }

    if(numWrong==2){
        results.style.visibility = "visible";
        results.style.color = "red";
        results.innerHTML = "3 more misses allowed";
        
    }

    if(numWrong==3){
        results.style.visibility = "visible";
        results.style.color = "red";
        results.innerHTML = "2 more misses allowed";
        
    }
    if(numWrong==4){
        results.style.visibility = "visible";
        results.style.color = "red";
        results.innerHTML = "Don't miss another letter!";
        
    }//If user runs out of guesses, alert loss
    if(numWrong==5){
        results.innerHTML = "You lose!<br>Don't stop, keep guessing until you've got it.";
        document.getElementById('reset').style.display = "block"; 

    }
    if(numRight==wordLength){
        win();
    }
}

//Create variable to keep track of wins
let winCount = 0;

//Win function removes keyboard from display and shows results
function win(){
    let ul1 = document.getElementById('underline1').offsetWidth;
        results.style.visibility = "visible";
        results.style.color = "#00b100";
    if(numWrong > 5){
        results.innerHTML = "Took you long enough to figure it out...";
        document.getElementById('letterBank').style.display = "none";
    }
    else{
        results.innerHTML = "You win!";
        document.getElementById('letterBank').style.display = "none";
        document.getElementById('reset').style.display = "block"; 

        //If user guesses correctly, play a sound 
        document.getElementById('myTune').play();
        winCount++;
    }
//Display the score beneath the keyboard following the first win
    if(winCount===1){
        score.style.visibility = "visible";
        score.innerHTML = "You have" + " " + winCount + " " + "win";
    }
    if(winCount>1){
        score.style.visibility = "visible";
        score.innerHTML = "You have" + " " + winCount + " " + "wins";
        
    }
}

 //the button to reset the game comes up after 5 failed tries or a win
 function reset(){
    rand = 0;
    word = "";
    numWrong = 0;
    numRight = 0;
    wordLength = 0;
    numChar = 0;

    document.getElementById('letterBank').style.display="block";
    document.getElementById('a').style.visibility="visible";
    document.getElementById('b').style.visibility="visible";
    document.getElementById('c').style.visibility="visible";
    document.getElementById('d').style.visibility="visible";
    document.getElementById('e').style.visibility="visible";
    document.getElementById('f').style.visibility="visible";
    document.getElementById('g').style.visibility="visible";
    document.getElementById('h').style.visibility="visible";
    document.getElementById('i').style.visibility="visible";
    document.getElementById('j').style.visibility="visible";
    document.getElementById('k').style.visibility="visible";
    document.getElementById('l').style.visibility="visible";
    document.getElementById('m').style.visibility="visible";
    document.getElementById('n').style.visibility="visible";
    document.getElementById('o').style.visibility="visible";
    document.getElementById('p').style.visibility="visible";
    document.getElementById('q').style.visibility="visible";
    document.getElementById('r').style.visibility="visible";
    document.getElementById('s').style.visibility="visible";
    document.getElementById('t').style.visibility="visible";
    document.getElementById('u').style.visibility="visible";
    document.getElementById('v').style.visibility="visible";
    document.getElementById('w').style.visibility="visible";
    document.getElementById('x').style.visibility="visible";
    document.getElementById('y').style.visibility="visible";
    document.getElementById('z').style.visibility="visible";

    let ul1 = document.getElementById('underline1').offsetWidth;
    for(a = 1; a < 11; a++){
        document.getElementById('letter'+a).innerHTML = "&nbsp;";
        document.getElementById('underline'+a).style.width = ul1 + "px";
        document.getElementById('underline'+a).style.display = "none";
        document.getElementById('underline'+a).style.borderBottom = "0px";
    }
   
    okay();
}
