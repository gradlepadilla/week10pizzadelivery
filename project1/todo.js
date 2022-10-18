let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});

    function createDeleteButton(id) {
        let btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.id = id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            console.log(`Deleting row with id: item-${id}`);
            let elementToDelete = document.getElementById(`item-${id}`);
            elementToDelete.parentNode.removeChild(elementToDelete);
        };
        return btn;
    }
    function createNewPizzaButton(pizza){
        let btn = document.createElement('button')
        btn.className = 'btn btn-primary';
        btn.innerHTML = 'Create';
        btn.onclick = () => {
            pizza.action. push(new pizza(getValue(`name-input-${pizza.id}`), getValue(`position-input-${pizza.id}`)));
            drawDOM();
        };
        return btn;
    }
    function CreateTeamTable(team) {
        let table = document.createElement('table');
        table.setAttribute('class', 'table table-dark table-striped');
        let row = table.insertRow(0);
        let nameColumn = document.createElement('th');
        nameColumn.innerHTML = 'Name';
        positionColumn.innerHTML = 'Position'
        row.appendChild(nameColumn);
        row.appendChild(positionColumn);
        let formRow = table.insertRow(1);
        let nameth = document.createElement('th');
        let positionTh = document.createElement('th')
        let createTh = document.createElement('th');
        let positionInput = document.createElement('input');
        positionInput.setAttribute(`id', 'name-input-${pizza-id}`);
        positionInput.setAttribute('type', 'text');
        positionInput.setAttribute('class', 'form-control');
        let newPizzaButton = createNewPizzaButton(pizza);
        nameth.appendChild(nameInput);
        positionTh.appendChild(nameInput);
        createTh.appendChild(newPizzaButton);
        formRow.appendChild(nameTh);
        formRow.appendChild(positionTh);
        formRow.appendChild(createTh);
        return table;

    }