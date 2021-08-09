//Appends an x the end of all items in the list present from start 
const myList = document.getElementsByTagName("LI");
for (let i = 0; i < myList.length; i++) {
    appendX(myList[i]);
}

//Adds the submited text to the list and appends an remove "x" at the end
document.querySelector('#inputToDoList')
    .addEventListener('submit', e => {
        e.preventDefault();

        let li = document.createElement("li");
        let inputValue = document.getElementById("addToList").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue == '') {
            alert("You must write something!");
        }
        else {
            document.getElementById("theToDoList").appendChild(li);
        }
        document.getElementById("addToList").value = "";

        appendX(li);

    })

function appendX(List) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close border";
    span.appendChild(txt);
    List.appendChild(span);

    //Makes clicks on the x remove the item from the list
    const close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
            this.parentElement.remove();
        })
    }
}


//toggles the "checked" status for the line the curser clicks on
document.querySelector('ul')
    .addEventListener('click', e => {
        if (e.target.tagName == 'LI') {
            e.target.classList.toggle('checked');
        }
    });



//Toggles the "checked" status for all lines in the list
document.getElementById('markUnmarkAllBtn').addEventListener('click', function () {
    let markBtm = document.getElementById("markUnmarkAllBtn");
    let listItems = document.querySelectorAll('#nav>ul>li');
    if (markBtm.innerHTML == "Markera alla") {
        for (let index = 0; index < listItems.length; index++) {
            listItems[index].classList.add('checked');
        }
    }
    else {
        for (let index = 0; index < listItems.length; index++) {
            listItems[index].classList.remove('checked');
        }
    }
    btnChange();
})

//Change the button that marks and unmarks everything in the list
function btnChange() {
    let markBtm = document.getElementById("markUnmarkAllBtn");
    if (markBtm.innerHTML == "Markera alla") markBtm.innerHTML = "Avmarkera alla";
    else markBtm.innerHTML = "Markera alla";
}

document.getElementById('removeAllBtn').addEventListener('click', function () {
    let listItems = document.querySelectorAll('#nav>ul>li');
    if (listItems.length > 0) {
        let remove = confirm('Är du säker på att du vill töma listan?')
        if (remove == true) {
            for (let index = 0; index < listItems.length; index++) {
                listItems[index].remove()
            }
            document.getElementById("markUnmarkAllBtn").innerHTML = "Markera alla"
        }
    }
})
