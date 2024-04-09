
function renderToDoList(todos) {
    var tableBody = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    todos.forEach(function(todo) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = todo.title;
        cell2.innerHTML = "Contact Name";
        cell3.innerHTML = "Contact Title";
    });
}

function addRow() {
    var companyname = document.getElementById("firstName").value;
    var contactname = document.getElementById("lastName").value;
    var contacttitle = document.getElementById("contacttitle").value;
    if (companyname === "" || contactname === "" || contacttitle === "") {
        alert("All fields must be filled.");
        return;
    }

    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = companyname;
    cell2.innerHTML = contactname;
    cell3.innerHTML = contacttitle;
    cell4.innerHTML = '<button class="add-remove-btn" onclick="removeRow(this)">Delete</button>';
    cell5.innerHTML = '<button class="add-remove-btn" onclick="updateRow(this)">Update</button>';

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("contacttitle").value = "";
}

function removeRow(button) {
    var confirmation = confirm("Are you sure you want to delete?");
    if (confirmation) {
        var row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}

function updateRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.querySelectorAll("td");
    var companyname = cells[0].innerHTML;
    var contactname = cells[1].innerHTML;
    var contacttitle = cells[2].innerHTML;

    var newCompanyName = prompt("Enter new Company Name", companyname);
    if (newCompanyName === null) return;

    var newContactName = prompt("Enter new Contact Name", contactname);
    if (newContactName === null) return;

    var newContactTitle = prompt("Enter new Contact Title", contacttitle);
    if (newContactTitle === null) return;

    if (newCompanyName.trim() === "" || newContactName.trim() === "" || newContactTitle.trim() === "") {
        alert("All fields must be filled.");
        return;
    }

    cells[0].innerHTML = newCompanyName;
    cells[1].innerHTML = newContactName;
    cells[2].innerHTML = newContactTitle;
}

function search(value) {
    const searchedTodos = todos.filter((x) =>
      x.title.trim().toLowerCase().includes(value.trim().toLowerCase())
    );
    renderToDoList(searchedTodos);
}

function sortByDate(value) {
    if (value == "a-z") {
        let temp = [...todos];
        temp = temp.sort((x, y) => x.title.localeCompare(y.title));
        renderToDoList(temp);
    } else if (value == "z-a") {
        let temp = [...todos];
        temp = temp.sort((x, y) => y.title.localeCompare(x.title));
        renderToDoList(temp);
    }
}
sortByDate(document.getElementById("sortBySelect").value);
