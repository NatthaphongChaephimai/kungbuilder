// Open the Model
function openModel() {
  document.getElementById("myModel").style.display = "flex";
}

// Close the Model
function closeModel() {
  document.getElementById("myModel").style.display = "none";
}

var slideModel = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideModel += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideModel = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideModel = 1;
  }
  if (n < 1) {
    slideModel = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideModel - 1].style.display = "block";
}
