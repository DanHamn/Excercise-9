//Appends an x the end of all items in the list present from start 
const myList = document.getElementsByTagName("LI");
for (let i = 0; i < myList.length; i++) {
    appendX(myList[i]);
}
//Makes clicks on the x remove the item from the list
const close = document.getElementsByClassName("close");
makeXWork()

//Adds the submited text to the list and appends an remove "x" at the end
const submit = document.querySelector('#inputToDoList');
submit.addEventListener('submit', e => {
    e.preventDefault();
    
    let li = document.createElement("li");
    let inputValue = document.getElementById("addToList").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("theToDoList").appendChild(li);
    document.getElementById("addToList").value = "";

    appendX(li);

    makeXWork()

})

function appendX(List) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close border";
    span.appendChild(txt);
    List.appendChild(span);
}

function makeXWork() {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.parentNode.removeChild(div);
        }
    }
}

//toggles the "checked" status for the line the curser clicks on
const list = document.querySelector('ul');
list.addEventListener('click', e => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
});

//Toggles the "checked" status for all lines in the list
const toggle = document.getElementById('markUnmarkAllBtn').addEventListener('click', function () {
    let elem = document.getElementById("markUnmarkAllBtn");
    if (elem.innerHTML == "Markera alla") {
        let element = document.querySelectorAll('#nav>ul>li');
        for (let index = 0; index < element.length; index++) {
            element[index].classList.add('checked');
        }
    }
    else {
        let element = document.querySelectorAll('#nav>ul>li');
        for (let index = 0; index < element.length; index++) {
            element[index].classList.remove('checked');
        }
    }
    btnChange();
})
//Change the button that marks and unmarks everything in the list
function btnChange() {
    let elem = document.getElementById("markUnmarkAllBtn");
    if (elem.innerHTML == "Markera alla") elem.innerHTML = "Avmarkera alla";
    else elem.innerHTML = "Markera alla";
}

