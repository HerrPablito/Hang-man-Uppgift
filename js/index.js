


 let guessLetter = prompt("insert letter!");
 let finalWord = 'Pablo';
 let numberOfWrongGuesses = 1;
 let pickedWord = 'hej'

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


console.log(guessLetter);

    // let showInsultelement = document.querySelector('.insults');

    // function showInsult (){
            
   
    //         let allInsults = slumpaInsult();
    //         const randomNR = Math.random() *10;
    //         const newNumber = Math.floor(randomNR);
    //         showInsultelement.innerHTML = allInsults[newNumber].insult + '(' + allInsults[newNumber].play + ')'
    // }

function addBodyParts (guessLetter, finalWord){

    function generateWord() {
    let wordArr = ['summer', 'winter', 'spring', 'fall'];
    const randomPosition = Math.floor(Math.random() * wordArr.length);
    pickedWord = wordArr[randomPosition];
    finalWord = pickedWord
    console.log(pickedWord.length);  
    return finalWord;

 

}
generateWord()
console.log(finalWord, guessLetter);


  console.log(guessLetter);
  if (finalWord.includes(guessLetter) == false){
    numberOfWrongGuesses = numberOfWrongGuesses++

    if (numberOfWrongGuesses == 1){
    document.querySelector('figure').classList.add('scaffold');
    console.log('Du hade fel!');   
    let showWrongLetterElement = document.querySelector('.wrongNumberOne')
    showWrongLetterElement.innerHTML = guessLetter;
  }
    else if (numberOfWrongGuesses == 2){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      console.log('Du hade fel!');
    }

    else if (numberOfWrongGuesses == 3){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      document.querySelector('figure').classList.add('body');
      console.log('Du hade fel!');
    }

    else if (numberOfWrongGuesses == 4){
      document.querySelector('figure').classList.add('scaffold');
      document.querySelector('figure').classList.add('head');
      document.querySelector('figure').classList.add('body');
      document.querySelector('figure').classList.add('arms');
      console.log('Du hade fel!');
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
  else if (finalWord.includes(guessLetter) == true){
    console.log("Du hade rätt: " + guessLetter)
    
  }

  else {
      console.log('du tryckte fel tangent.')
    }
  }

addBodyParts(guessLetter, finalWord);
console.log(numberOfWrongGuesses);





