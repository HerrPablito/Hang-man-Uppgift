
//Här Deklarerar vi variablerna utanför funtionerna så de blir globala. 
//let guessLetter 
let finalWord = '';
let numberOfWrongGuesses = 0;

let pickedWord = ''
let showRightLetterElement = document.querySelector('.correctLetter');
let guessLetter = '';
let newElement = '';


      

//Tar emot data
      document.addEventListener ('keyup', (event)=> {
       if(event.key) {
        //starta if-sats
         guessLetter = event.key.toUpperCase()    
         addBodyParts(guessLetter, finalWord);
    }
  }); 



    //Denna funktion randomiserar orden i wordArr som används som ordbank att
    //gissa på. en funktion i en funktion.
    function generateWord() {
        let wordArr = ['summer', 'winter', 'spring', 'fall'];
        const randomPosition = Math.floor(Math.random() * wordArr.length);
        finalWord = wordArr[randomPosition].toUpperCase().split(''); 
        return finalWord;
    }
  

    //Här lägger vi in bokstäverna i en UL och skapar en funktion
    function getWordIntoLetterInUl(){
        console.log(finalWord);
        for (let letter of finalWord) {
        newElement = document.createElement('li');
        newElement.innerHTML = letter;
        showRightLetterElement.append(newElement);
        console.log(letter);
        newElement.style.visibility = 'hidden';

     }
  }



//Här är funktionen som kontrollerar om gubben hängs eller ej
function addBodyParts (guessLetter, finalWord){
  console.log(guessLetter);
  //Denna IF-sats kollar om bokstav som gissas på inkluderas i 
  //det randomiserade ordet. Om det inte finns i ordet, så går vi vidare i denna if-sats.
    if (finalWord.includes(guessLetter) == false){

        numberOfWrongGuesses++
        console.log(numberOfWrongGuesses);
        //i IF-satsen ligger denna IF-sats. Det vill säga:
        //beroende på hur många gånger som gissats fel går vi ner i IF-satsen.
        if (numberOfWrongGuesses == 1){
          document.querySelector('figure').classList.add('scaffold');
          let showWrongLetterElement = document.querySelector('.wrongNumberOne');
          showWrongLetterElement.innerHTML = guessLetter;     
          console.log('Du hade fel! ' + numberOfWrongGuesses);   
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
          let gameOver = confirm('Du dog! Vill du spela igen?')
          if (gameOver){
            window.location.reload()
          }
          else{
            alert('Skit i det då tråkmåns!')
          }

          // Här ska vi använda onkey-event för att starta om typ. 
       
      }
      }
    //Om Bokstaven som gissats finns i ordet, så går vi vidare till denna IF-sats-  
    else if (finalWord.includes(guessLetter) == true){
      console.log("Du hade rätt: " + guessLetter)    
      console.log(newElement);  
      newElement.style.visibility = 'visible';
      }
    else {
      console.log('du tryckte fel tangent.')
    }
  }
//Här startar vi funktionen
generateWord()
getWordIntoLetterInUl()







