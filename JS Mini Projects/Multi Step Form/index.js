var stepOneForm = document.getElementById('step1_form');
var stepTwoForm = document.getElementById('step2_form');
var stepThreeForm = document.getElementById('step3_form');
var formSubmitedMsgContainer = document.getElementById('form_submit_msg');

var nextBtnFormOne = document.getElementById('next_btn_form1');
nextBtnFormOne.addEventListener('click', function(e) {
    e.preventDefault();
    stepOneForm.style.display = 'none';
    stepTwoForm.style.display = 'block';
    validateForm();
});

var previousBtnFormTwo = document.getElementById('previous_btn_form2');
previousBtnFormTwo.addEventListener('click', function(e) {
    e.preventDefault();
    stepTwoForm.style.display = 'none';
    stepOneForm.style.display = 'block';
});

var nextBtnFormTwo = document.getElementById('next_btn_form2');
nextBtnFormTwo.addEventListener('click', function(e) {
    e.preventDefault();
    stepTwoForm.style.display = 'none';
    stepThreeForm.style.display = 'block';
});

var previousBtnFormThree = document.getElementById('previous_btn_form3');
previousBtnFormThree.addEventListener('click', function(e) {
    e.preventDefault();
    stepThreeForm.style.display = 'none';
    stepTwoForm.style.display = 'block';

});

var nextBtnFormThree = document.getElementById('next_btn_form3');
nextBtnFormThree.addEventListener('click', function(e) {
    e.preventDefault();
    stepThreeForm.style.display = 'none';
    formSubmitedMsgContainer.style.display = 'flex';
});


// function vailidateFirstForm() {
//     firstName = fname.value;
// }