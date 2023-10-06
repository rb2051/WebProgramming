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


  $(document).on("ready", function () {
  if (document.cookie.indexOf("accepted_cookies=") < 0) {
    $(".cookie-overlay").removeClass("d-none").addClass("d-block");
  }

  $(".accept-cookies").on("click", function () {
    document.cookie = "accepted_cookies=yes;";
    $(".cookie-overlay").removeClass("d-block").addClass("d-none");
  });

  // expand depending on your needs
  $(".close-cookies").on("click", function () {
    $(".cookie-overlay").removeClass("d-block").addClass("d-none");
  });
});