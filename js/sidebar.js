let sidebar = document.querySelector(".sidebar");
let sidebarRgt = document.querySelector(".sidebarRgt");
let sidebar2 = document.querySelector(".sidebar2");

let closeBtn = document.querySelector("#btn");
let closeBtn2 = document.querySelector("#btn2");
let closeBtn3 = document.querySelector("#btn3");
let cusbody = document.querySelector("#cus-body");
let dashboardBtn = document.querySelector("#dashboardbtn");
let searchBtn = document.querySelector(".bx-search");
let gridBtn = document.querySelector(".bx-grid-alt");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

closeBtn2.addEventListener("click", () => {
  sidebarRgt.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

closeBtn3.addEventListener("click", () => {
  sidebar2.classList.toggle("open");
  customizeBody();
});

dashboardBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

gridBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

function openclose() {
  sidebar.classList.toggle("open");

  // if (sidebar.classList.contains("open")) {
  //   closeBtn.classList.replace("collapse", "show"); //replacing the iocns class
  // } else {
  //   closeBtn.classList.replace("collapse", ""); //replacing the iocns class
  // }
}

function customizeBody() {
  if (sidebar2.classList.contains("open")) {
    cusbody.classList.replace("customize-body1", "customize-body2"); //replacing the iocns class
  } else {
    cusbody.classList.replace("customize-body2", "customize-body1"); //replacing the iocns class
  }
}
