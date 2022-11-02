
//Här Deklarerar vi variablerna utanför funtionerna så de blir globala. 
let guessLetter = ("r");
let finalWord = '';
let numberOfWrongGuesses = 3;
let pickedWord = '';
let wordStatus = null;
let wrongLetters = [];
let correctLetters = [];
let showRightLetterElement = document.querySelector('.rightLetter');


//Här är funktionen som kontrollerar om gubben hängs eller ej
function addBodyParts (guessLetter, finalWord){
    //Denna funktion randomiserar orden i wordArr som används som ordbank att
    //gissa på. en funktion i en funktion.
    function generateWord() {
    let wordArr = ['summer', 'winter', 'spring', 'fall'];
    const randomPosition = Math.floor(Math.random() * wordArr.length);
    finalWord = wordArr[randomPosition]; 
    return finalWord;
}

let inputField = document.querySelector('.insertLetter');
inputField.addEventListener('keydown',(event)=> {
if(event.key === 'Enter') {
  //Funktion som gör jobbet, eller referera till en  
  (inputHTML.value)
}
} 
)
  //Här startar ovanstående funktion
  generateWord()

  //Denna IF-sats kollar om bokstav som gissas på inkluderas i 
  //det randomiserade ordet. 
  console.log(guessLetter);
    //Om det inte finns i ordet, så går vi vidare i denna if-sats.
    if (finalWord.includes(guessLetter) == false){
      numberOfWrongGuesses = numberOfWrongGuesses++
        //i IF-satsen ligger denna IF-sats. Det vill säga:
        //beroende på hur många gånger som gissats fel går vi ner i IF-satsen.
        if (numberOfWrongGuesses == 1){
          document.querySelector('figure').classList.add('scaffold');
          console.log('Du hade fel!');   
          let showWrongLetterElement = document.querySelector('.wrongNumberOne.')
          showWrongLetterElement.innerHTML = guessLetter;
        }
        else if (numberOfWrongGuesses == 2){
          document.querySelector('figure').classList.add('scaffold');
          document.querySelector('figure').classList.add('head');
          console.log('Du hade fel!');
          let showWrongLetterElement = document.querySelector('.wrongNumberTwo')
          showWrongLetterElement.innerHTML = guessLetter;
        }

        else if (numberOfWrongGuesses == 3){
          document.querySelector('figure').classList.add('scaffold');
          document.querySelector('figure').classList.add('head');
          document.querySelector('figure').classList.add('body');
          console.log('Du hade fel!');
          let showWrongLetterElement = document.querySelector('.wrongNumberThree')
          showWrongLetterElement.innerHTML = guessLetter;
        }

        else if (numberOfWrongGuesses == 4){
          document.querySelector('figure').classList.add('scaffold');
          document.querySelector('figure').classList.add('head');
          document.querySelector('figure').classList.add('body');
          document.querySelector('figure').classList.add('arms');
          console.log('Du hade fel!');
          let showWrongLetterElement = document.querySelector('.wrongNumberFour')
          showWrongLetterElement.innerHTML = guessLetter;
        }

        else if (numberOfWrongGuesses == 5){
          document.querySelector('figure').classList.add('scaffold');
          document.querySelector('figure').classList.add('head');
          document.querySelector('figure').classList.add('body');
          document.querySelector('figure').classList.add('arms');
          document.querySelector('figure').classList.add('legs');
          showWrongLetterElement = document.querySelector('.wrongNumberFive')
          showWrongLetterElement.innerHTML = guessLetter;
          console.log("du förlorade");
          console.log("spela igen?");
          console.log('press any key to restart');
          // Här ska vi använda onkey-event för att starta om typ. 
        }
      }
    //Om Bokstaven som gissats finns i order, så går vi vidare till denna IF-sats-  
    else if (finalWord.includes(guessLetter) == true){
      console.log("Du hade rätt: " + guessLetter)
      //Här hamnar de rätta bokstäverna på rätt plats
      //let showRightLetterElement = document.querySelector('.rightLetter')
      //showRightLetterElement.innerHTML = guessLetter;
      displayWord()
    }

  else {
      console.log('du tryckte fel tangent.')
    }
  }
    


function displayWord (){
      showRightLetterElement.innerHTML = `${finalWord.split('').map(guessLetter => `
      <span class="letter"> 
          ${correctLetters.includes(guessLetter) ? letter : ''} 
      </span>
      `).join('')} `;
      const innerWord = showRightLetterElement.innerText.replace(/\n/g, '');
      console.log(innerWord);
      if (innerWord === finalWord) {
        console.log('You won!');
      }
    }

//Här startar vi funktionen
addBodyParts(guessLetter, finalWord);






