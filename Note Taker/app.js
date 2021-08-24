function addNotes() {
  if (
    document.getElementById("note") != null &&
    document.getElementById("mynotes") != null
  ) {
    var note = document.getElementById("note").value;
    var number = document.getElementById("mynotes").childNodes.length + 1;
    var node = document.createElement("DIV");
    node.setAttribute("class", "noteSection");
    var head = document.createElement("H3");
    head.innerHTML = "Note " + number;
    var paragraph = document.createElement("P");
    paragraph.innerHTML = note;
    paragraph.setAttribute("class", "p");
    var button = document.createElement("BUTTON");
    button.innerHTML = "View Detail";
    button.setAttribute("onclick", "viewDetail(this)");
    node.appendChild(head);
    node.appendChild(paragraph);
    node.appendChild(button);
    document.getElementById("mynotes").appendChild(node);
  }
}

function clearNote() {
  document.getElementById("note").value = "";
}

function viewDetail(me) {
  document.getElementById("modal").classList.add("active");
  document.getElementById("overlay").classList.add("active");
  var node = document.createElement("P");
  var children = me.parentNode.childNodes;
  child = children[1].innerHTML;
  var note = document.createTextNode(child);
  node.appendChild(note);
  document.getElementById("modal").appendChild(node);
}

function closePage() {
  var modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  modal.removeChild(modal.childNodes[3]);
}
