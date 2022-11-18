const previous = document.getElementById("previous");
const next = document.getElementById("next");

activeStep = 1;
maxStep = 3;
minStep = 1;

//會造成pdf.js 無法顯示在網頁上 by D1
checkButtonState();

next.addEventListener('click', onNextClick);
previous.addEventListener('click', onPreviousClick);

function onNextClick() {  
    activeStep = activeStep + 1;
    document.querySelector(`[data-step="${activeStep}"]`).classList.add('active');
    checkButtonState();
}

function onPreviousClick() {  
    document.querySelector(`[data-step="${activeStep}"]`).classList.remove('active');
    activeStep = activeStep - 1;
    checkButtonState();
}

function checkButtonState() {
 //會造成pdf.js 無法顯示在網頁上 by D1
  next.disabled= false;
  previous.disabled= false;
  
  if(activeStep === maxStep) {
       next.disabled = true;  
  }
  
  if(activeStep === minStep) {
      previous.disabled = true;
  }

}