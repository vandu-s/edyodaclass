var inputFleid = document.getElementById('input_field');
var todoList = document.getElementById('todo-list');
//console.log(inputFleid);

function createTodoCard(msg) {
    // <div id="completed_task" class="card">
    // <div class="left-contain">
    //     <button class="checkbtn btn"><i class="fas fa-check "></i></button>
    //     <h3 class="todo-text">Make some thing Awesome</h3>
    // </div>
    // <button class="cross_btn btn"> <i class="fas fa-times "></i> </button>
    // </div>
    var compeltedTask = document.getElementById('completed_task');
    var todoCard = document.createElement('div');
    todoCard.className = 'card shadowonactivelist';

    //todoCard.id = 'completed_task';
    todoCard.id = new Date().getTime();

    var leftContainer = document.createElement('div');
    leftContainer.className = 'left-contain';
    todoCard.appendChild(leftContainer);

    var checkButton = document.createElement('button');
    checkButton.className = 'checkbtn btn';
    leftContainer.appendChild(checkButton);



    var todoText = document.createElement('h3');
    todoText.className = 'todo-text';
    todoText.innerHTML = msg;
    leftContainer.appendChild(todoText);

    var crossButton = document.createElement('button');
    crossButton.className = 'cross_btn btn';
    todoCard.appendChild(crossButton);
    crossButton.onclick = function() {
            document.getElementById(todoCard.id).remove();

        }
        // <button class="cross_btn btn"> <i class="fas fa-times "></i> </button> -->


    var crossButtonIcon = document.createElement('i');
    crossButtonIcon.className = 'fas fa-times ';
    crossButton.appendChild(crossButtonIcon);

    todoList.appendChild(todoCard);
    console.log(todoCard);

    var checkButtonIcon = document.createElement('i');
    checkButtonIcon.className = 'fas fa-check';
    checkButton.appendChild(checkButtonIcon);
    checkButton.addEventListener('click', function() {
        // checkButtonIcon.style.color = '#3FE599';
        // document.getElementById(todoCard.id).style.textDecoration = 'line-through';
        // document.getElementById(todoCard.id).todoText.style.color = 'red';
        // var parent = this.parentNode;
        // console.log(parent)
        // parent.remove();
        // compeltedTask.appendChild(parent);
        // checkButtonIcon.style.color = '#3FE599';
        // crossButton.style.display = 'none';
        // crossButton.className = 'far fa-trash-alt';

    })


    return todoCard;


}


function handleTodoCreation() {
    if ((inputFleid.value !== null) && (inputFleid.value !== 0) && (inputFleid.value !== undefined) && (inputFleid.value !== '')) {
        todoList.appendChild(createTodoCard(inputFleid.value));
    } else {
        alert('Please Insert Valid Value');

    }
    inputFleid.value = '';

}

var todoInputButton = document.getElementById('todo-insert-btn');
todoInputButton.addEventListener('click', function() {
    handleTodoCreation();
})

inputFleid.onkeydown = function(e) {
    if (e.key === 'Enter') {
        handleTodoCreation();
    }

}