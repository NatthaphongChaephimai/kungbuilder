var alertBox;

// ฟังก์ชัน copy ที่อยู่ติดต่อ
function copyText(text) {
  // สร้าง element textarea ซ่อนไว้
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  // เลือกข้อความใน textarea
  textarea.select();
  // คัดลอกข้อความไปยังคลิปบอร์ด
  document.execCommand("copy");
  // ลบ textarea ทิ้ง
  document.body.removeChild(textarea);
  // แสดงข้อความแจ้งผู้ใช้
  alertBox = document.createElement("div");
  alertBox.innerHTML = "คัดลอกเรียบร้อย: " + text;
  alertBox.classList.add("alert-box");
  document.body.appendChild(alertBox);

  // เพิ่มคลาส 'show' เมื่อแสดง alert box เพื่อให้มันโผล่ออกมา
  setTimeout(function () {
    alertBox.classList.add("show");
  }, 100);

  // เพิ่มคลาส 'hide' เมื่อผ่านไป 2 วินาที เพื่อให้ alert box หายไป
  setTimeout(function () {
    alertBox.classList.add("hide");
  }, 2000);

  // หลังจากผ่านไป 4 วินาที ให้ลบ alert box ทิ้งไป
  setTimeout(function () {
    alertBox.remove();
  }, 3000);
}

// sticky navbar
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let nav = document.querySelector("nav");

    nav.classList.toggle("sticky", window.scrollY > 80);
  });
};

// navbar slide
let navBar = document.querySelector(".navbar");
let menuIcon = document.querySelector(".menu-btn");
let closeIcon = document.querySelector(".close-btn");

menuIcon.onclick = () => {
  navBar.classList.add("active");
  menuIcon.classList.add("active");
};

closeIcon.onclick = () => {
  navBar.classList.remove("active");
  menuIcon.classList.remove("active");
};

// menu active
let menus = document.querySelectorAll(".nav-ul li a");

for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function () {
    // remove "active" class from all menu
    for (let j = 0; j < menus.length; j++) {
      menus[j].classList.remove("active");
    }
    // add "active" class to the clicked menu
    this.classList.add("active");
  });
}

// menu special เพื่อเลื่อนแถบ navber ขึ้น
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 70) {
    navBar.classList.add("special");
  }else {
    navBar.classList.remove("special");
  }
});

// back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 80){
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});