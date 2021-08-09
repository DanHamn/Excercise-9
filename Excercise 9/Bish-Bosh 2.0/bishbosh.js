const form = document.querySelector('#inputValuesBishBosh');

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("outputScreenText").innerHTML ='';
    let numLine = Bish_Bosh_Func(form['bish'].value, form['bosh'].value, form['endNum'].value)

    document.getElementById("outputScreenInput").innerHTML = 'Bish är ' + form['bish'].value + ', Bosh är ' + form['bosh'].value + ' och sluttalet är ' + form['endNum'].value;

    TableMaker(numLine);

    console.log(numLine);
})




function Bish_Bosh_Func(Bish, Bosh, endNum) {
    let numLine = [];

    for (let index = 0; index < endNum; index++) {
        let num = index + 1;
        if (num % Bish == 0) {
            if (num % Bosh == 0) {
                numLine[index] = 'Bish-Bosh';
            }
            else {
                numLine[index] = 'Bish';
            }
        }
        else if (num % Bosh == 0) {
            numLine[index] = 'Bosh';
        }
        else {
            numLine[index] = num;
        }
    }
    return numLine;
}

function TableMaker(data) {

    let perrow = 10,
        table = document.createElement("table"),
        row = table.insertRow();

    // LOOP THROUGH ARRAY AND ADD TABLE CELLS
    for (let i = 0; i < data.length; i++) {
        let next = i + 1;

        // ADD CELLS
        let cell1 = row.insertCell();
        cell1.innerHTML = next;
        let cell2 = row.insertCell();
        cell2.innerHTML = data[i];

        // BREAK INTO NEXT ROW
        if (next % perrow == 0 && next != data.length) {
            row = table.insertRow();
        }
    }

    // Display in HTML
    document.getElementById("outputScreenText").appendChild(table);

}