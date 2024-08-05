const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector('.header');

mobile_nav.addEventListener('click', () => {
     nav_header.classList.toggle("active");
});




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}



window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;

  // Check if the scroll position is greater than or equal to 120vh
  if (scrollPosition >= window.innerHeight * 1.2) {
    header.classList.add('show-navbar1');
  } else {
    header.classList.remove('show-navbar1');
  }
});





