const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hard", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//tempat menampilkan foto-foto
document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
      myModal.show();
  }
})






//nic js
// Start Off

window.addEventListener("load", (e)=>{
  document.onkeydown = function(e){
      if (event.keyCode === 123) {
          return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
          return false;
      }if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0) ) {
          return false;   
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
          return false;
      }



      if (e.ctrlKey  && e.keyCode == 'U'.charCodeAt(0)) {
          return false;
      }
  };

  // document.addEventListener('contextmenu', function(e){
  //     e.preventDefault();
  // }, false);
});

window.addEventListener('DOMContentLoaded', (e)=>{
 
document.onkeydown = function(e){
      if (event.keyCode === 123) {
          return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
          return false;
      }if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0) ) {
          return false;   
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
          return false;
      }



      if (e.ctrlKey  && e.keyCode == 'U'.charCodeAt(0)) {
          return false;
      }
  };
  
  // MENU
  document.addEventListener('contextmenu', function(e){
      e.preventDefault();
  }, false);


AOS.init({
  duration: 1200,
});

});



// End Off


// Start Menu icon & Navbar menu
const menu = document.querySelector('.menu-icon');
const menuIcon = document.querySelector('.menu-icon i');
const navMenu = document.querySelector('nav ul');
const menuItem = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav');

// navbar in area
menu.addEventListener("click", function () {
menuIcon.classList.toggle('active');
navMenu.classList.toggle('active');
console.log(menu)

});

// navbar item out
menuItem.forEach((item) => {
item.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuIcon.classList.toggle('active');

})
})


// navbar sticky
window.addEventListener("scroll", function () {
const scrollFixed = Math.round(this.scrollY)
if (scrollFixed > 20) {
  nav.classList.add('sticky')
} else {
  nav.classList.remove('sticky')
  
}
});

// Start Menu icon & Navbar menu

// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid text-black";
document.body.appendChild(css);

console.log(elements);
};
const year = new Date();
const date = document.querySelector(".date");

date.innerHTML = year.getFullYear();

console.log("ok");