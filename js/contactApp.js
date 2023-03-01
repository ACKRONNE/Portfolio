// Back to top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Copy to clickboard
const text = document.querySelector(".content h2");
const popup = document.querySelector(".popup");

text.addEventListener("click", () => {
  popup.classList.add("active");
  copyToClipBoard();
});
popup.addEventListener("animationend", () => {
  popup.classList.remove("active");
});

function copyToClipBoard() {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("readonly", "");
  textarea.value = text.innerText;
  textarea.style.position = "absolute";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}