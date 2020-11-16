var inputFleid = document.getElementById('input_field');
var NotCompletedTask = document.getElementById('notcompleted_task');

var completedTask = document.getElementById('completed_task');
console.log(NotCompletedTask);
console.log(completedTask);
var completedTaskHeading = document.getElementById('compeleted');







function createCard(msg) {
    //     <div class="left-contain">
    //     <button class="checkbtn btn"><i class="fas fa-check "></i></button>
    //     <h3 class="todo-text ">Make some thing Awesome</h3>
    // </div>

    // <button class="cross_btn btn"> <i class="fas fa-times"></i> </button>


    var todoCard = document.createElement('div');
    todoCard.className = 'card ';
    todoCard.id = new Date().getTime();

    var leftContainer = document.createElement('div');
    leftContainer.className = 'left-contain';
    todoCard.appendChild(leftContainer);

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete_btn btn';
    var deleteButtonIcon = document.createElement('i');
    deleteButtonIcon.className = 'far fa-trash-alt';
    deleteButton.appendChild(deleteButtonIcon);


    var checkButton = document.createElement('button');
    checkButton.className = 'checkbtn btn';
    leftContainer.appendChild(checkButton);
    checkButton.addEventListener('click', function() {
        checkButtonIcon.style.color = '#3FE599';
        // document.getElementById(todoCard.id).todoText.style.color = 'red';
        var parent = this.parentNode;
        console.log(parent)
        completedTaskHeading.style.display = 'block';
        parent.remove();
        crossButton.style.display = 'none';
        todoText.style.color = 'rgb(224, 217, 217)';
        parent.appendChild(deleteButton);
        parent.style.textDecoration = 'line-through';
        parent.style.position = 'relative';
        deleteButton.style.position = 'absolute';
        deleteButton.style.top = '20px';
        deleteButton.style.right = '10px';


        parent.style.color = 'rgb(193, 187, 187)';
        parent.style.borderBottom = '1px solid #E0E0E0'
        deleteButton.onclick = function() {
            parent.remove()
        }

        completedTask.appendChild(parent);
        // checkButtonIcon.style.color = '#3FE599';
        // crossButton.className = 'far fa-trash-alt';

    })

    var checkButtonIcon = document.createElement('i');
    checkButtonIcon.className = 'fas fa-check ';
    checkButton.appendChild(checkButtonIcon);


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

    return todoCard;

}


function handleTodoCreation() {
    if ((inputFleid.value !== null) && (inputFleid.value !== 0) && (inputFleid.value !== undefined) && (inputFleid.value !== '')) {
        NotCompletedTask.appendChild(createCard(inputFleid.value));
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