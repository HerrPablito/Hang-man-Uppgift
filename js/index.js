


let bodyArr;


let guessLetter = 'b';
let finalWord = 'a'



function showBody(let, ord){
  let youDead = arrangeBody();
  let hangmanNumber = 0;
  hangmanNumber = hangmanNumber++;
  if (let != ord){
    youDead[hangmanNumber]
    
   }
  else if (let == ord){
    console.log(guessLetter);
  } 
  }  
 
function arrangeBody(){
  
 bodyArr = [
 document.querySelector('figure').classList.add('scaffold'),
 document.querySelector('figure').classList.add('head'),
 document.querySelector('figure').classList.add('body'),
 document.querySelector('figure').classList.add('arms'),
 document.querySelector('figure').classList.add('legs')
]
}

showBody(guessLetter, finalWord)


/**
 function generateWord() {
    let wordArr = ['summer', 'winter', 'spring', 'fall'];
    const randomPosition = Math.floor(Math.random() * wordArr.length);
    const pickedWord = wordArr.splice(randomPosition, 1);
    console.log(pickedWord);

    return pickedWord;

}

generateWord();



function checkLetter(word, letter) {
    const getLetter = word.includes(letter);

    return getLetter;

}

function showLetter(getLetter) {
    console.log(getLetter);
}

function start() {
    const letterResault = checkLetter(pickedWord, 'e');

    showLetter(letterResault);
}

start();
 */