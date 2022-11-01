



 let guessLetter = 'a';
 let finalWord = 'bamsa';
 let numberOfWrongGuesses = 3;
 let pickedWord = 'hej'

generateWord();

function generateWord() {
    let wordArr = ['summer', 'winter', 'spring', 'fall'];
    const randomPosition = Math.floor(Math.random() * wordArr.length);
    pickedWord = wordArr.splice(randomPosition, 1);
    console.log(pickedWord);
    pickedWord = finalWord
    return finalWord;
}


// function checkLetter(word, letter) {
    
//     const getLetter = word.includes(letter);

//     return getLetter;

// }

// function showLetter(getLetter) {
//     console.log(getLetter);
// }

// function start(word) {
//     const letterResault = (word, 'e');

//     showLetter(letterResault);
// }

// start();

function addBodyParts (guessLetter, finalWord){




  if (finalWord.includes(guessLetter) == true){
    //numberOfWrongGuesses = numberOfWrongGuesses++
    if (numberOfWrongGuesses == 1)
    document.querySelector('figure').classList.add('scaffold');
    else if (numberOfWrongGuesses == 2){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
    }

    else if (numberOfWrongGuesses == 3){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      document.querySelector('figure').classList.add('body');
    }

    else if (numberOfWrongGuesses == 4){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      document.querySelector('figure').classList.add('body');
      document.querySelector('figure').classList.add('arms');
    }

    else if (numberOfWrongGuesses == 5){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      document.querySelector('figure').classList.add('body');
      document.querySelector('figure').classList.add('arms');
      document.querySelector('figure').classList.add('legs');
      console.log("du förlorade");
      console.log("spela igen?");
      console.log('press any key to restart');
      // Här ska vi använda onkey-event för att starta om typ. 
    }
  }
  else if (finalWord.includes(guessLetter) == false){
    console.log(guessLetter)
    
  }

  else {
      console.log('du tryckte fel tangent.')
    }
  }

addBodyParts(guessLetter, finalWord);






