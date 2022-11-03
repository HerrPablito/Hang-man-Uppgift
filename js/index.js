
//Här Deklarerar vi variablerna utanför funtionerna så de blir globala. 
//let guessLetter 
let finalWord = '';
let numberOfWrongGuesses = 0;
let pickedWord = ''
let showRightLetterElement = document.querySelector('.correctLetter');
let guessLetter = '';

//Tar emot data
function addLetter(){
      document.addEventListener ('keyup', (event)=> {
      console.log(event.key.toUpperCase());
       if(event.key) {
        //starta if-satserna
     addBodyParts(guessLetter, finalWord);
     guessLetter = event.key
    }
  }); 
}


    //Denna funktion randomiserar orden i wordArr som används som ordbank att
    //gissa på. en funktion i en funktion.
    function generateWord() {
        let wordArr = ['summer', 'winter', 'spring', 'fall'];
        const randomPosition = Math.floor(Math.random() * wordArr.length);
        finalWord = wordArr[randomPosition].toUpperCase().split(''); 
        return finalWord;

    }
    //Här sätter vi igång ovanstående funktion
  

    //Här lägger vi in bokstäverna i en UL och skapar en funktion
    function getWordIntoLetterInUl(){
        console.log(finalWord);
        for (let letter of finalWord) {
        let newElement = document.createElement('li');
        newElement.innerHTML = letter;
        showRightLetterElement.append(newElement);
        console.log(letter);
     }
  }

  function showCorrectLetters() {
      let filter = guessLetter.toUpperCase().trim();
        showRightLetterElement.style.display = filter ? "block" : "none";

      for (const a of document.querySelectorAll('.correctLetter li')) {
        a.style.display =
        a.textContent.toUpperCase().includes(filter) ? "block" : "none"; 
      }
      
  }

//Här är funktionen som kontrollerar om gubben hängs eller ej
function addBodyParts (guessLetter, letter){
  //Denna IF-sats kollar om bokstav som gissas på inkluderas i 
  //det randomiserade ordet. Om det inte finns i ordet, så går vi vidare i denna if-sats.
    if (letter.includes(guessLetter) == false){
      function addNumbertoWrongGuess (){
      numberOfWrongGuesses++
      }
        addNumbertoWrongGuess()
        console.log(numberOfWrongGuesses);
        //i IF-satsen ligger denna IF-sats. Det vill säga:
        //beroende på hur många gånger som gissats fel går vi ner i IF-satsen.
        if (numberOfWrongGuesses == 1){
          document.querySelector('figure').classList.add('scaffold');
          let showWrongLetterElement = document.querySelector('.wrongNumberOne');
          showWrongLetterElement.innerHTML = guessLetter;     
          console.log('Du hade fel!');   
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
          let showWrongLetterElement = document.querySelector('.wrongNumberFive')
          showWrongLetterElement.innerHTML = guessLetter;
          console.log("du förlorade");
          console.log("spela igen?");
          console.log('press any key to restart');
          // Här ska vi använda onkey-event för att starta om typ. 
       
      }
      }
    //Om Bokstaven som gissats finns i ordet, så går vi vidare till denna IF-sats-  
    else if (letter.includes(guessLetter) == true){
      
      console.log("Du hade rätt: " + guessLetter)
    
     showCorrectLetters()
    }

    else {
      console.log('du tryckte fel tangent.')
    }
  }
//Här startar vi funktionen
generateWord()
getWordIntoLetterInUl()
addLetter()








