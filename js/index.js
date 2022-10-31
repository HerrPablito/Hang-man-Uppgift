

let hangmanNumber = 0;
hangmanNumber = hangmanNumber++
let bodyArr;


let guessLetter = 'b';
let finalWord = 'a'

function arrangeBody(){
  
 bodyArr = [
 document.querySelector('figure').classList.add('scaffold'),
 document.querySelector('figure').classList.add('head'),
 document.querySelector('figure').classList.add('body'),
 document.querySelector('figure').classList.add('arms'),
 document.querySelector('figure').classList.add('legs')
]
}

function showBody(let, ord){
  if (let != ord){
    arrangeBody()
    
   }
  if (let == ord){
    console.log(guessLetter);
  } }  
 


showBody(guessLetter, finalWord)