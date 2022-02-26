document.getElementById("btnSwitch").addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
  document.getElementById("darkTheme").innerText = document.body.classList;
});

// Theme Change
function themeChange() {
  var element = document.body;
  // var sidebar = document.getElementById("sidebar");
  var homesection = document.getElementById("home");
  // var cr = document.getElementById("cr");

  var head = document.getElementById("head");
  // var smcards1 = document.getElementById("smcards1");
  // var smcards2 = document.getElementById("smcards2");
  // var smcards3 = document.getElementById("smcards3");
  // var smcards4 = document.getElementById("smcards4");

  // var mecards1 = document.getElementById("mecards1");
  // var mecards2 = document.getElementById("mecards2");
  // var mecards3 = document.getElementById("mecards3");
  // var mecards4 = document.getElementById("mecards4");

  // var lgcard1 = document.getElementById("lgcard1");
  // var lgcard2 = document.getElementById("lgcard2");

  var search = document.getElementById("search");

  var breadcrumb = document.getElementById("breadcrumb");

  // var rightsec = document.getElementById("right-sec");

  var imgchng = document.getElementById("sunmoon");

  element.classList.toggle("light-mode");
  // sidebar.classList.toggle("light-mode");
  homesection.classList.toggle("light-mode");
  // cr.classList.toggle("light-mode");
  head.classList.toggle("light-mode");
  // smcards1.classList.toggle("light-mode");
  // smcards2.classList.toggle("light-mode");
  // smcards3.classList.toggle("light-mode");
  // smcards4.classList.toggle("light-mode");

  // mecards1.classList.toggle("light-mode");
  // mecards2.classList.toggle("light-mode");
  // mecards3.classList.toggle("light-mode");
  // mecards4.classList.toggle("light-mode");

  // lgcard1.classList.toggle("light-mode");
  // lgcard2.classList.toggle("light-mode");

  search.classList.toggle("light-mode");

  breadcrumb.classList.toggle("light-mode");

  // rightsec.classList.toggle("light-mode");

  //   document.getElementById("sunmoon").src = "img/moon.png";



  // notification
  var noti1 = "img/notification.svg",
  noti2 = "/img/notification-black.svg";
  var imgElement = document.getElementById('noti');

imgElement.src = (imgElement.src === noti1)? noti1 : noti2;


// bug

var bug1 = "img/bug.svg",
bug2 = "/img/bug-black.svg";
var imgElement = document.getElementById('bug');

imgElement.src = (imgElement.src === bug1)? bug1 : bug2;

// help
var help1 = "img/help.svg",
help2 = "img/help-black.svg";
var imgElement = document.getElementById('help');

imgElement.src = (imgElement.src === help1)? help1 : help2;
}
