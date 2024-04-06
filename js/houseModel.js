const onefloor001 = {
  name: "One Floor 001",
  description_th:
    "บ้านชั้นเดียวสไตล์โฮมมี่ น่ารักๆ ดูอบอุ่น โดดเด่น ดีไซต์บ้านเป็นตัวยู ภายในบ้าน กว้างขวาง มีครัวไทย มีห้องซักล้าง รายละเอียด 3 ห้องนอน 2 ห้องน้ำ 2 จอดรถ พื้นที่ใช้สอยตัวบ้าน 142 ตารางเมตร โรงจอดรถ 22.5 ตารางเมตร งบประมาณก่อสร้าง 2.2 ล้านบาท",
  description_en:
    "One-storey home style house. Cute. Looks warm and outstanding. The house design is U-shaped. The inside of the house is spacious. There is a Thai kitchen and a laundry room. Details: 3 bedrooms, 2 bathrooms, 2 parking spaces. House usable area 142 square meters. Garage 22.5. square meters, construction budget 2.2 million baht",
  image1: "../image/one-floor1_1.jpg",
  image2: "../image/one-floor1_2.jpg",
  image3: "../image/one-floor1_3.jpg",
};
const onefloor002 = {
  name: "One Floor 002",
  description_th:
    "สำหรับรายละเอียดของตัวบ้าน 3 ห้องนอน 2 ห้องน้ำ 1 ห้องครัว 1 ห้องโถงกลาง 1 ห้องสำหรับพักผ่อนและรับแขก พื้นที่ใช้สอย 105 ตรม. งบประมาณก่อสร้างประมาณ 1 ล้านบาท",
  description_en:
    "For details of the house: 3 bedrooms, 2 bathrooms, 1 kitchen, 1 central hall, 1 room for relaxing and receiving guests. Usable area 105 sq m. Construction budget approximately 1 million baht.",
  image1: "../image/one-floor2_1.jpg",
  image2: "../image/one-floor2_2.jpg",
  image3: "../image/one-floor2_3.jpg",
};
const twofloor001 = {
  name: "Two Floor 001",
  description_th:
    "แบบบ้านสไตล์ฟาร์มเฮ้าส์ ขนาด 184 ตร.ม.  4 ห้องนอน  3 ห้องน้ำ  1 ห้องรับแขก  ห้องรับประทานอาหาร  ห้องครัว  ที่จอดรถ 2 คัน ตอบโจทย์การเชื่อมต่อความสัมพันธ์ ของทุกครอบครัว ด้วยการออกแบบ Together Space บริเวณห้องนั่งเล่นและมุมกินข้าว พร้อมด้วยพื้นที่พักผ่อนส่วนตัวบริเวณชั้น 2 ให้สมาชิกทุกคนในครอบครัวได้ทำกิจกรรมร่วมกัน",
  description_en:
    "Farmhouse style house plan, size 184 sq m, 4 bedrooms, 3 bathrooms, 1 living room, dining room, kitchen, 2 car parking spaces, answering the need for connecting relationships. of every family With the design of Together Space in the living room and dining area With a private resting area on the 2nd floor for all family members to do activities together.",
  image1: "../image/two-floor1_1.jpg",
  image2: "../image/two-floor1_2.jpg",
  image3: "../image/two-floor1_3.jpg",
};
const twofloor002 = {
  name: "Two Floor 002",
  description_th:
    "แบบบ้าน ทาวน์โฮมสไตล์ลอฟท์ ขนาด 99 ตร.ม. โดดเด่นด้วยดีไซน์ New York Loft สะดุดตาตั้งแต่ Façade โทนสีอบอุ่น และหน้าต่าง บานประตูที่ดูสูงโปร่ง โดดเด่นด้วยการดีไซน์ Master Bedroom 2 ห้องนอน 3 ห้องน้ำ  ห้องอเนกประสงค์  1 ห้องรับแขก  ส่วนรับประทานอาหาร  ที่จอดรถ 1 คัน ตอบโจทย์การใช้ชีวิตกลุ่มคนรุ่นใหม่ และกลุ่มครอบครัวได้อย่างลงตัว",
  description_en:
    "House type: Loft-style townhome, size 99 sq m., outstanding with New York Loft design, eye-catching from the warm-colored façade and tall, airy windows and doors. Outstanding design: Master Bedroom, 2 bedrooms, 3 bathrooms, multi-purpose room, 1 living room, dining area, 1 parking space, meeting the lifestyle needs of the new generation. and family groups seamlessly",
  image1: "../image/two-floor2_1.jpg",
  image2: "../image/two-floor2_2.jpg",
  image3: "../image/two-floor2_3.jpg",
};

function houseModelData() {
  const myData = localStorage.getItem("myData");
  if (myData) {
    // ตรวจสอบว่ามีข้อมูลใน myData หรือไม่
    const lang = localStorage.getItem("lang");
    const houseData = setdata(myData);
    console.log(localStorage);
    // เลือกข้อความเพื่อแสดงขึ้นอยู่กับภาษาที่เลือก
    let descriptionText;
    if (lang === "th") {
      descriptionText = houseData.description_th;
    } else {
      descriptionText = houseData.description_en;
    }

    $(".houseName").text(houseData.name);
    $(".houseDescription").text(descriptionText);
    $(".houseImage1").attr("src", houseData.image1);
    $(".houseImage2").attr("src", houseData.image2);
    $(".houseImage3").attr("src", houseData.image3);
  } else {
    console.error("No data found in localStorage."); // พิมพ์ข้อความแจ้งเตือนในกรณีที่ไม่พบข้อมูลใน localStorage
  }
}

$("#lang-th").click(() => {
  localStorage.setItem("lang", "th");
  houseModelData();
});

$("#lang-en").click(() => {
  localStorage.setItem("lang", "en");
  houseModelData();
});

$(document).ready(() => {
  houseModelData();
});

function setdata(dataKey) {
  switch (dataKey) {
    case "onefloor001":
      return onefloor001;
    case "onefloor002":
      return onefloor002;
    case "twofloor001":
      return twofloor001;
    case "twofloor002":
      return twofloor002;
    default:
      return null;
  }
}

// ฟังก์ชันสำหรับการกำหนดค่า localStorage และเรียกใช้ houseModelData()
function setLocalStorageAndCallHouseModelData(dataValue) {
  localStorage.setItem("myData", dataValue);
  houseModelData();
}

// กำหนดค่า click event สำหรับปุ่มที่มี id เหมือนกัน
$("#one-floor-001s, #one-floor-001").click(() => {
  setLocalStorageAndCallHouseModelData("onefloor001");
});

$("#one-floor-002s, #one-floor-002").click(() => {
  setLocalStorageAndCallHouseModelData("onefloor002");
});

$("#two-floor-001s, #two-floor-001").click(() => {
  setLocalStorageAndCallHouseModelData("twofloor001");
});

$("#two-floor-002s, #two-floor-002").click(() => {
  setLocalStorageAndCallHouseModelData("twofloor002");
});
