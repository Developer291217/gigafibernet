let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 10000);
});

// make dot clicks work
window.currentSlide = function(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}