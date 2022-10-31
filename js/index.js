


// let bodyArr;
 let guessLetter = 'a';
 let finalWord = 'b'
 let numberOfGuesses = 5;  


// function showBody(hej, ord){
//   let youDead = arrangeBody();
//   let hangmanNumber = 0;
//   hangmanNumber = hangmanNumber++;

//   if (hej != ord){
//     youDead[4]
//    }
//   else if (hej == ord){
//     console.log(hej);
//   } 
//   }  

//document.querySelector('figure').classList.add('scaffold');
//let head = document.querySelector('figure').classList.add('head');
//let bod = document.querySelector('figure').classList.add('body');
//let arm = document.querySelector('figure').classList.add('arms');
//let leg =document.querySelector('figure').classList.add('legs');
//  bodyArr = [sca, head, bod, arm, leg ]
//  console.log(bodyArr); 
// function arrangeBody(){
// }
// arrangeBody()

//showBody(guessLetter, finalWord)

function test (guessLetter, finalWord){
  if (guessLetter =! finalWord){
    numberOfGuesses = numberOfGuesses++
    if (numberOfGuesses == 1)
    document.querySelector('figure').classList.add('scaffold');
    else if (numberOfGuesses == 2){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
    }

    else if (numberOfGuesses == 3){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      document.querySelector('figure').classList.add('body');
    }

    else if (numberOfGuesses == 4){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      document.querySelector('figure').classList.add('body');
      document.querySelector('figure').classList.add('arms');
    }

    else if (numberOfGuesses == 5){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      document.querySelector('figure').classList.add('body');
      document.querySelector('figure').classList.add('arms');
      document.querySelector('figure').classList.add('legs');
      console.log("du förlorade");
    }

    else {
     console.log("spela igen?");
    }
};
}
test();

<<<<<<< HEAD
=======
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
>>>>>>> cb8f8303e9fe3c7e607b889e91f3b080ba73ef07
