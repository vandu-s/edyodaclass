var notCompleted = document.getElementById("not-completed");
var inputField = document.getElementById("text-area");
var form = document.getElementById("to-do-task");
var addButton = document.getElementById("btn-add-todo");
var completed = document.getElementById("completed");
var overflowWrapper = document.getElementById("overflow-wrapper");

function createCard(task) {
    var card = document.createElement("div");
    card.className = "card";
    var checkBox = document.createElement("div");
    checkBox.className = "check-box";
    var checkIcon = document.createElement("input");
    checkIcon.type = "checkbox";
    checkIcon.className = "check-icon";
    checkBox.appendChild(checkIcon);
    var cardText = document.createElement("div");
    cardText.className = "card-text";
    var text = document.createElement("h3");
    text.className = "text";
    text.innerText = task;
    var crossIcon = document.createElement("i");
    crossIcon.className = "fas fa-times delete-icon";
    cardText.appendChild(text);
    card.appendChild(checkBox);
    card.appendChild(cardText);
    card.appendChild(crossIcon);
    crossIcon.onclick = function(e) {
        card.remove();
        if (
            notCompleted.childNodes.length === 0 &&
            completed.childNodes.length === 0
        ) {
            overflowWrapper.className = "none";
        }
    };

    checkIcon.onclick = completedTasks;

    return card;
}

function AddTask() {
    var card = createCard(inputField.value);
    notCompleted.appendChild(card);
    inputField.value = null;
    if (notCompleted.childNodes.length === 0) {
        overflowWrapper.className = "none";
    } else {
        overflowWrapper.className = "for-shadow";
    }
}

inputField.onkeyup = function(e) {
    if (e.key === "Enter" && e.target.value.length !== 0) {
        AddTask();
    } else if (e.target.value.length == 0) {
        errorHandler();
    }
};

addButton.onclick = function(e) {
    if (inputField.value.length !== 0) {
        AddTask();
    } else {
        errorHandler();
    }
};

function errorHandler() {
    errorPopup();
    errorBulb();
}
var check = document.getElementsByClassName("check-icon");

function completedTasks(e) {
    if (e.target.checked === true) {
        var card = e.target.parentElement.parentElement;
        var newDeleteIcon = document.createElement("i");
        newDeleteIcon.className = "far fa-trash-alt delete-icon";

        newDeleteIcon.onclick = function() {
            card.remove();
            if (
                notCompleted.childNodes.length === 0 &&
                completed.childNodes.length === 0
            ) {
                overflowWrapper.className = "none";
            }
        };
        card.replaceChild(newDeleteIcon, card.childNodes[2]);
        card.childNodes[0].childNodes[0] = true;
        // card.childNodes[0].childNodes[0].removeEventListener(onclick,  completedTasks)

        notCompleted.removeChild(card);

        completed.appendChild(card);

        e.target.disabled = true;
    }
}

var wrapper = document.createElement("i");
wrapper.className = "far fa-comment-alt pop-up";
var text = document.createElement("div");
text.id = "popup-text";
text.innerText = "Enter a task to add";
var exclamation = document.createElement("div");
exclamation.id = "error-icon";
var divWrapper = document.createElement("div");
divWrapper.id = "div-wrapper";
divWrapper.appendChild(wrapper);
divWrapper.appendChild(text);
form.appendChild(divWrapper);
form.appendChild(exclamation);
divWrapper.style.display = "none";
exclamation.style.display = "none";

function errorPopup() {
    // var exclamation = document.getElementById("error-icon")
    // var divwrapper = document.getElementById("div-wrapper")
    var bulbGlow = setInterval(errorBulb, 2000);
    divWrapper.style.display = "block";
    inputField.onkeydown = function(e) {
        clearInterval(bulbGlow);
        divWrapper.style.display = "none";
        if (e.key === "Enter") {
            exclamation.style.display = "none";
        }
    };
    addButton.onclick = function(e) {
        if (inputField.value.length !== 0) {
            exclamation.style.display = "none";
            AddTask();
        } else {
            errorHandler();
        }
    };
    exclamation.style.display = "block";
}

function errorBulb() {
    exclamation.className = "far fa-lightbulb";
    setTimeout(function() {
        exclamation.className = "fas fa-lightbulb";
    }, 1000);
}