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
const popup = document.querySelector(".popup");

let text = document.getElementById('co').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      popup.classList.add("active");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  let text1 = document.getElementById('di').innerHTML;
  const copyContent1 = async () => {
    try {
      await navigator.clipboard.writeText(text1);
      popup.classList.add("active");
      
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  let text2 = document.getElementById('tw').innerHTML;
  const copyContent2 = async () => {
    try {
      await navigator.clipboard.writeText(text2);
      popup.classList.add("active");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

popup.addEventListener("animationend", () => {
  popup.classList.remove("active");
});