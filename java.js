//changing text on a button with a click
function demo(){
const button = document.getElementById("change").innerHTML = "Button Changed";
}

//switching automatically between photos
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

// JavaScript code to handle drag-and-drop functionality
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


//cookie popup
 function cookieClicked()
 {
  document.getElementById("cookiePopup").style.display = "none";
 }

 //page 2

 //local storage
if (localStorage) { // Check if the localStorage object exists
  function savewb() { // Store data
    var txt = document.getElementById('sName').value;
    localStorage.setItem("name", txt);
    alert("Your name is saved.");
  }

  function accesswb() { // Retrieve data
    alert("Hi, " + localStorage.getItem("name"));
  }  
} else {
  alert("Sorry, your browser does not support local storage.");
}










