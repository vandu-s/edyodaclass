var mainContainer = document.getElementById('container');
console.log(mainContainer);
var quizDataArr = [{
        "id": "1",
        "question": "Q1.Which was not one of Voldemort's Horcruxes?",
        "option1": "Harry ",
        "option2": "Nagini ",
        "option3": "Helga's Diadem",
        "option4": "Tom Riddle's Diary"

    },
    {
        "id": "2",
        "question": "Q2.Which of these are not one of Hagrid's many pets?",
        "option1": "Grawp",
        "option2": "Fluffy",
        "option3": "Aragog",
        "option4": "Noberta"

    },
    {
        "id": "1",
        "question": "Q3.Which class did Severus Snape always want to teach?",
        "option1": "Potions",
        "option2": "Charms",
        "option3": "Defense Against Dark Arts",
        "option4": "Transfiguration"

    },
    {
        "id": "1",
        "question": "Q4.Which Hogwarts house did Moaning Myrtle belong in?",
        "option1": "Gryffindor  ",
        "option2": "Slytherin  ",
        "option3": "Ravenclaw  ",
        "option4": "Hufflepuff "

    },
    {
        "id": "1",
        "question": "Q5.What class did Neville end up teaching at Hogwarts?",
        "option1": "Astronomy  ",
        "option2": "Herbology  ",
        "option3": "Charms ",
        "option4": "Muggle Studies"

    },



]

function createCard(data) {
    //     <!-- <div class="card">
    //     <h4>Q1.Which was not one of Voldemort's horcruxes?</h4>
    //     <div class="inputWrapper">
    //         <input type="radio" name="Harry">
    //         <span> Harry
    // </span> </div>
    //     <div class="inputWrapper">
    //         <input type="radio" name="Harry">
    //         <span> Harry
    // </span> </div>
    //     <div class="inputWrapper">
    //         <input type="radio" name="Harry">
    //         <span> Harry
    // </span> </div>
    //     <div class="inputWrapper">
    //         <input type="radio" name="Harry">
    //         <span> Harry
    // </span> </div>

    // </div> -->
    var card = document.createElement('div');
    card.classList = 'card';

    var question = document.createElement('h4');
    question.innerHTML = data.question;
    card.appendChild(question);

    var wrapperForRadioBtn1 = document.createElement('div');
    wrapperForRadioBtn1.className = 'inputWrapper';
    card.appendChild(wrapperForRadioBtn1);

    var radioBtn1 = document.createElement('input');
    radioBtn1.type = 'radio';
    radioBtn1.name = 'radio1';
    wrapperForRadioBtn1.appendChild(radioBtn1);

    var inputText1 = document.createElement('span');
    inputText1.innerHTML = data.option1;
    wrapperForRadioBtn1.appendChild(inputText1);

    var wrapperForRadioBtn2 = document.createElement('div');
    wrapperForRadioBtn2.className = 'inputWrapper';
    card.appendChild(wrapperForRadioBtn2);

    var radioBtn2 = document.createElement('input');
    radioBtn2.type = 'radio';
    radioBtn2.name = 'radio1';
    wrapperForRadioBtn2.appendChild(radioBtn2);

    var inputText2 = document.createElement('span');
    inputText2.innerHTML = data.option2;
    wrapperForRadioBtn2.appendChild(inputText2);

    var wrapperForRadioBtn3 = document.createElement('div');
    wrapperForRadioBtn3.className = 'inputWrapper';
    card.appendChild(wrapperForRadioBtn3);

    var input3 = document.createElement('input');
    input3.type = 'radio';
    input3.name = 'radio1';

    wrapperForRadioBtn3.appendChild(input3);
    var inputText3 = document.createElement('span');
    inputText3.innerHTML = data.option3;
    wrapperForRadioBtn3.appendChild(inputText3);

    var wrapperForRadioBtn4 = document.createElement('div');
    wrapperForRadioBtn4.className = 'inputWrapper';
    card.appendChild(wrapperForRadioBtn4);

    var input4 = document.createElement('input');
    input4.type = 'radio';
    input4.name = 'radio1';

    wrapperForRadioBtn4.appendChild(input4);
    var inputText4 = document.createElement('span');
    inputText4.innerHTML = data.option4;
    wrapperForRadioBtn4.appendChild(inputText4);



    mainContainer.appendChild(card);
    //     <div class="btnwrapper">
    //     <input type="submit" name="Submit" id="submitbtn"> </div>
    // </div>




    console.log(card);
    return card;

}

for (i = 0; i < quizDataArr.length; i++) {
    createCard(quizDataArr[i]);
}

var btnWrapper = document.createElement('div');
btnWrapper.className = 'btnwrapper';
var submitBtn = document.createElement('input');
submitBtn.type = 'submit';
submitBtn.name = 'submit';
submitBtn.id = 'submitbtn';
btnWrapper.appendChild(submitBtn);
mainContainer.appendChild(btnWrapper)


container.addEventListener('submit', function(e) {
    e.preventDefault();
    // alert('hello world');
})