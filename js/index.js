


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