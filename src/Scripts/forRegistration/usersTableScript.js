const data = [];

function addToDataTable(email, password, surname, firstName, middleName, gender, phone, dateOfBirth, group, file) {
    const table = document.getElementById('data-table')
        .getElementsByTagName('tbody')[0];
    const row = table.insertRow(0);
    const cell0 = row.insertCell(0);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    cell0.appendChild(checkbox);
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = password;
    row.insertCell(3).textContent = surname;
    row.insertCell(4).textContent = firstName;
    row.insertCell(5).textContent = middleName;
    row.insertCell(6).textContent = gender;
    row.insertCell(7).textContent = phone;
    row.insertCell(8).textContent = dateOfBirth;
    row.insertCell(9).textContent = group;
    row.insertCell(10).textContent = file;
    const cellActions = row.insertCell(11);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&#128465;';
    deleteButton.addEventListener('click', function () {
        deleteSelectedRows();
    });
    cellActions.appendChild(deleteButton);
    const duplicateButton = document.createElement('button');
    duplicateButton.innerHTML = '&#8644;';
    duplicateButton.addEventListener('click', function () {
        duplicateSelectedRows();
    });
    cellActions.appendChild(duplicateButton);
    data.push({email, password, surname, firstName, middleName, gender, phone, dateOfBirth, group, file});
}

function deleteRow(row) {
    const table = document.getElementById('data-table')
        .getElementsByTagName('tbody')[0];
    const index = row.rowIndex;
    table.deleteRow(index - 1);
    data.splice(index - 1, 1);
}

function deleteSelectedRows() {
    const table = document.getElementById('data-table')
        .getElementsByTagName('tbody')[0];
    const rows = table.rows;
    for (let i = rows.length - 1; i >= 0; i--) {
        const checkbox = rows[i].cells[0].getElementsByTagName('input')[0];
        if (checkbox && checkbox.type === 'checkbox' && checkbox.checked) {
            deleteRow(rows[i]);
        }
    }
}

function duplicateRow(row) {
    const rowData = [];
    for (let i = 1; i <= 10; i++) {
        rowData.push(row.cells[i].textContent);
    }
    const count = getSelectedRowCount();
    for (let i = 0; i < count; i++) {
        addToDataTable(...rowData);
    }
}

function getSelectedRowCount() {
    const table = document.getElementById('data-table')
        .getElementsByTagName('tbody')[0];
    const rows = table.rows;
    let count = 0;
    for (let i = 0; i < rows.length; i++) {
        const checkbox = rows[i].cells[0].getElementsByTagName('input')[0];
        if (checkbox && checkbox.type === 'checkbox' && checkbox.checked) {
            count++;
        }
    }
    return count;
}

function duplicateSelectedRows() {
    const table = document.getElementById('data-table')
        .getElementsByTagName('tbody')[0];
    const rows = table.rows;
    for (let i = rows.length - 1; i >= 0; i--) {
        const checkbox = rows[i].cells[0].getElementsByTagName('input')[0];
        if (checkbox && checkbox.type === 'checkbox' && checkbox.checked) {
            duplicateRow(rows[i]);
        }
    }
}