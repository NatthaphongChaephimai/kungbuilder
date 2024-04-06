let filters = document.querySelectorAll(".filter-btn button");

filters.forEach(button => {
  button.addEventListener("click",()=>{
    resetFilters();
    button.classList.add("active");
  });
});

function resetFilters() {
  filters.forEach(button => {
    button.classList.remove("active");
  });
};

class FilterManager {
    constructor() {}
  
    filterSelection(c, targetClass) {
      let elements = document.getElementsByClassName(targetClass);
      if (c === "all") c = "";
  
      for (let element of elements) {
        this.removeClass(element, "show");
        if (c === "" || element.classList.contains(c)) this.addClass(element, "show");
      }
    }
  
    addClass(element, name) {
      let classesToAdd = name.split(" ");
      for (let className of classesToAdd) {
        if (!element.classList.contains(className)) {
          element.classList.add(className);
        }
      }
    }
  
    removeClass(element, name) {
      let classesToRemove = name.split(" ");
      for (let className of classesToRemove) {
        if (element.classList.contains(className)) {
          element.classList.remove(className);
        }
      }
    }
  }
  
  // Create instances of FilterManager for both HTML1 and HTML2 sections
  let filterManager1 = new FilterManager();
  let filterManager2 = new FilterManager();
  
  // Example usage with HTML1
  filterManager1.filterSelection("all", "filterService");
  
  // Example usage with HTML2
  filterManager2.filterSelection("all", "filterDiv");
  
  // เมื่อคลิกที่ปุ่มการกรองใน HTML1
  document.getElementById("btn-all-1").addEventListener("click", function () {
    filterManager1.filterSelection("all", "filterService");
  });
  
  document.getElementById("btn-onef-1").addEventListener("click", function () {
    filterManager1.filterSelection("one", "filterService");
  });
  
  document.getElementById("btn-twof-1").addEventListener("click", function () {
    filterManager1.filterSelection("two", "filterService");
  });
  
  // เมื่อคลิกที่ปุ่มการกรองใน HTML2
  document.getElementById("btn-all-2").addEventListener("click", function () {
    filterManager2.filterSelection("all", "filterDiv");
  });
  
  document.getElementById("btn-onef-2").addEventListener("click", function () {
    filterManager2.filterSelection("one", "filterDiv");
  });
  
  document.getElementById("btn-twof-2").addEventListener("click", function () {
    filterManager2.filterSelection("two", "filterDiv");
  });
  