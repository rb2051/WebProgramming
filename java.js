//changing text on a button with a click
function demo(){
const button = document.getElementById("btn").innerHTML = "Button Changed";
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
  var dragItems = document.querySelectorAll('.drag-item');

  dragItems.forEach(function(item) {
    item.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
    });
  });


  