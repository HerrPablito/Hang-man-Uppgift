



 
function showBodyParts () {
 let bodyArr = [
 document.querySelector('figure').classList.add('scaffold'),
 document.querySelector('figure').classList.add('head'),
 document.querySelector('figure').classList.add('body'),
 document.querySelector('figure').classList.add('arms'),
 document.querySelector('figure').classList.add('legs')
];
  for (let i = 0; i < bodyArr.length; i++) {
     // const bodyParts = bodyArr[i];
     console.log(bodyArr[i])
  };   
  

};


window.addEventListener('keydown' , (event) =>{
    if (event.code  === "Arrowleft"){
        showBodyParts(bodyArr[i])
    }

});







