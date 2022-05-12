console.log('Ready to Go!');

let bodyVar = document.querySelector('body');

let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');

//Event Handler Function
//This Function runs once WHEN the switcher is clicked
function nightModeHandler(){

  bodyVar.classList.toggle('body-day');
  bodyVar.classList.toggle('body-night');

  box1.classList.toggle('box-day');
  box1.classList.toggle('box-night');

  box2.classList.toggle('box-day');
  box2.classList.toggle('box-night');

  box3.classList.toggle('box-day');
  box3.classList.toggle('box-night');
}

//Night Mode Event Handler
let switcher = document.getElementById('switcher');
//listen for when the switcher's input is changed
switcher.addEventListener('change', nightModeHandler);
