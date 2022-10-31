



// let bodyArr = [
//  ,
//  document.querySelector('figure').classList.add('head'),
//  document.querySelector('figure').classList.add('body'),
//  document.querySelector('figure').classList.add('arms'),
//  document.querySelector('figure').classList.add('legs')

// ]


let guessLetter = 'a';
let finalWord = 'a'


function showBody(let, ord){
  if (let != ord){
    document.querySelector('figure').classList.add('scaffold')
  //  for (let i = 0; i < bodyArr.length; i++) {
  // let getbBodyParts = bodyArr[3];
  // return getbBodyParts;
   }
  if (let == ord){
    console.log(guessLetter);
  } }  
 

showBody(guessLetter, finalWord)