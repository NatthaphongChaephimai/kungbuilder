// carousel ของ hero image
let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-slide");
let dots = document.querySelectorAll(".dots li");
let timeout;

// ฟังก์ชันสำหรับเริ่มการเล่นอัตโนมัติ
function startCarousel() {
  timeout = setTimeout(function () {
    nextSlide(); // เลื่อนไปภาพถัดไป
    startCarousel(); // เริ่มการเล่นอัตโนมัติใหม่หลังจากผ่านไป 8 วินาที
  }, 8000); // หน่วงเวลา 8 วินาที
}

// ฟังก์ชันสำหรับหยุดการเล่นอัตโนมัติ
function stopCarousel() {
  clearTimeout(timeout);
}

// เมื่อคลิกที่ปุ่ม "Previous"
document.getElementById("prevBtn").addEventListener("click", function () {
  prevSlide();
  stopCarousel(); // หยุดการเล่นอัตโนมัติ
});

// เมื่อคลิกที่ปุ่ม "Next"
document.getElementById("nextBtn").addEventListener("click", function () {
  nextSlide();
  stopCarousel(); // หยุดการเล่นอัตโนมัติ
});

// เมื่อคลิกที่ dot
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    goToSlide(index);
    stopCarousel(); // หยุดการเล่นอัตโนมัติ
  });
});

// เริ่มการเล่นอัตโนมัติเมื่อโหลดหน้าเว็บเสร็จ
window.addEventListener("load", function () {
  startCarousel();
});

// ฟังก์ชันสำหรับเลื่อนไปภาพถัดไป
function nextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].classList.add("active");
  updateDotClasses();
}

// ฟังก์ชันสำหรับเลื่อนไปภาพก่อนหน้า
function prevSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].classList.add("active");
  updateDotClasses();
}

// ฟังก์ชันสำหรับเลือกภาพที่กำหนด
function goToSlide(index) {
  slides[slideIndex].classList.remove("active");
  slideIndex = index;
  slides[slideIndex].classList.add("active");
  updateDotClasses();
}

// อัพเดทคลาสของ dots
function updateDotClasses() {
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });
  dots[slideIndex].classList.add("active");
}