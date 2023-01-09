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


// Typing text

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
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
