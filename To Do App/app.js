function saveNote() {
  if (document.getElementById("note") != null) {
    note = document.getElementById("note").value;
  }
  if (note) {
    var node = document.createElement("LI");
    var buttonDelete = document.createElement("BUTTON");
    buttonDelete.setAttribute("onclick", "clearMe(this)");
    buttonDelete.innerHTML = "delete?";
    var buttonDone = document.createElement("BUTTON");
    buttonDone.setAttribute("onclick", "doneTask(this)");
    buttonDone.innerHTML = "done?";
    var textnode = document.createTextNode(note);
    node.appendChild(textnode);
    node.appendChild(buttonDelete);
    node.appendChild(buttonDone);
    document.getElementById("noteList").appendChild(node);
  }
}

function clearNote(id) {
  document.getElementById(id).value = "";
}

function clearNotes(name) {
  var parent = document.getElementById(name);
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function clearMe(me) {
  if (me) {
    me.parentNode.parentNode.removeChild(me.parentNode);
  }
}

function doneTask(me) {
  if (me) {
    var note = me.parentNode.firstChild;
    console.log(note);
    var node = document.createElement("LI");
    console.log(node);
    var textnode = document.createTextNode(note);
    node.appendChild(note);
    document.getElementById("done").appendChild(node);
    clearMe(me);
  }
}
