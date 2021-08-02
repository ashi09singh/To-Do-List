// Creating a delete button and appending that at the end of li element
var workList = document.getElementsByTagName("LI");

for (var i = 0; i < workList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  workList[i].appendChild(span);
}

// Delete
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var xyz = this.parentElement; // why
    xyz.style.display = "none";
  }
}

// checking the done work by clicking
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//  Adding a tsk as li element in the existing list
function addTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addWork").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myWork").appendChild(li);
  }
  document.getElementById("addWork").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}