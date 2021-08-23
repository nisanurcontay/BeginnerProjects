function addTable() {
  if (
    document.getElementById("name") != null &&
    document.getElementById("date") != null &&
    document.getElementById("amount") != null
  ) {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    if (name && date && amount) {
      var nameField = document.createElement("TD");
      var dateField = document.createElement("TD");
      var amountField = document.createElement("TD");
      var button = document.createElement("BUTTON");
      var buttonField = document.createElement("TD");
      buttonField.appendChild(button);
      button.setAttribute("onclick", "deleteMe(this)");
      button.setAttribute("class", "tableButtons");
      button.innerHTML = "X";
      nameField.innerHTML = name;
      dateField.innerHTML = date;
      amountField.innerHTML = amount;
      var tableRow = document.createElement("TR");
      tableRow.appendChild(nameField);
      tableRow.appendChild(dateField);
      tableRow.appendChild(amountField);
      tableRow.appendChild(button);
      document.getElementById("tbody").appendChild(tableRow);
    }
  }
  if (
    document.getElementById("buffer") &&
    document.getElementById("tbody").childNodes.length > 1
  ) {
    var buffer = document.getElementById("buffer");
    buffer.parentNode.removeChild(buffer);
  }
}

function clearAll() {
  var name = document.getElementById("name");
  var date = document.getElementById("date");
  var amount = document.getElementById("amount");
  name.value = "";
  date.value = "";
  amount.value = "";
}

function deleteMe(me) {
  var node = me.parentNode;
  node.parentNode.removeChild(node);
}
