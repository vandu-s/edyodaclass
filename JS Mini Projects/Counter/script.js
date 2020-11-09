var counter = document.getElementById('value');
var increaseCounterBtn = document.querySelector('.increase');
var resetCounterBtn = document.querySelector('.reset');
var decreaseCounterBtn = document.querySelector('.decrease');
var btn = document.querySelectorAll(".btn");

function counterValues(value) {
    for (i = 0; i <= 3; i++) {

        btn[i].addEventListener('click', function(e) {
            if (e.target.id === 'increasebtn') {
                value++;
                //counter.innerHTML = value;
                counter.style.color = 'green'
            } else if (e.target.id === 'resetbtn') {
                value = 0;
                //counter.innerHTML = value;
                counter.style.color = 'black'


            } else if (e.target.id === 'decreasebtn') {
                value--;
                //  counter.innerHTML = value;
                counter.style.color = 'red'


            }
            counter.innerHTML = value;

        })
    }
}
counterValues(0)
    // function counterIncrease(counterValue) {
    //     increaseCounterBtn.onclick = function() {
    //         counterValue++;
    //         counter.innerHTML = counterValue;
    //         console.log(this.className)


//     }

// }
// counterIncrease(0);


// function counterReset(counterValue) {
//     resetCounterBtn.onclick = function() {

//         console.log(counterValue)
//         counter.innerHTML = counterValue;


//     }
// }
// counterReset(0);

// function counterDecrease(counterValue) {
//     decreaseCounterBtn.onclick = function() {
//         counterValue--;
//         console.log(counterValue);
//         counter.innerHTML = counterValue;


//     }
// }
// counterDecrease(0);