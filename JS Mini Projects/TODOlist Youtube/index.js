const input = document.querySelector('input');
const btn = document.querySelector('.addTask>button');

btn.addEventListener('click', addList);


function addList(e) {
    const notcompleted = document.querySelector('.notcompleted');
    const completed = document.querySelector('.completed');

    const newli = document.createElement('li');
    const checkbtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !== '') {
        newli.innerText = input.value;
        input.value = '';
        notcompleted.appendChild(newli);
        newli.appendChild(checkbtn);
        newli.appendChild(delBtn);

    }
    checkbtn.addEventListener('click', function() {
        const parent = this.parentNode;
        console.log(parent)
            // parent.remove();
            // completed.appendChild(parent);
            // checkbtn.style.display = 'none';
    })
    delBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    })

}