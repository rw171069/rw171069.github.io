const left = document.querySelector(".left"); //Creats a variable called "left" that does not change. document.querySelector returns the first element from inside ".left" from the CSS file
const right = document.querySelector(".right"); //Creats a variable called "right" that does not change. document.querySelector returns the first element from inside ".right" from the CSS file
const container = document.querySelector(".container"); //Creats a variable called "container" that does not change. document.querySelector returns the first element from inside ".container" from the CSS file

left.addEventListener("mouseenter", () => { //This adds an event to the left side of the document. When the mouseenters
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});


$("#button").click(function() {
  $('#myOverlay').show();
  setTimeout(function(){
      $('#myOverlay').hide();
  },3000);
});

