$(document).ready(function () {
  $("#btn2").click(function () {
    if ($("#sidenav").width() == 78) {
      document.getElementById("sidenav").style.width = "285px";
      document.getElementById("main").style.paddingRight = "280px";
      // document.getElementById("slidebtn").style.paddingRight = "250px";
    } else {
      document.getElementById("sidenav").style.width = "78px";
      document.getElementById("main").style.paddingRight = "74px";
      // document.getElementById("slidebtn").style.paddingRight = "78px";
    }
  });
});

// $(document).ready(function () {
//   $("#btn3").click(function () {
//     if ($("#v-pills-tabContent").width() == 188) {
//       document.getElementById("v-pills-tabContent").style.width = "0px";
//       document.getElementById("main").style.marginLeft = "0";
//       document.getElementById("slidebtn").style.paddingRight = "250px";
//     } else {
//       document.getElementById("v-pills-tabContent").style.width = "118px";
//       document.getElementById("main").style.marginLeft = "-150px";
//       document.getElementById("slidebtn").style.paddingRight = "78px";
//     }
//   });
// });
