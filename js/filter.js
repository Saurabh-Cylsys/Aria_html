filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "All") {
      $(".itemBox").show("1000");
    } else {
      $(".itemBox")
        .not("." + value)
        .hide("1000");
      $(".itemBox")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// search filter

function incsearch() {
  let fil = document.querySelector("#flable");
  document.getElementById("serch-w").style.width = "170px";
  document.getElementById("filter1").style.width = "22px";

  if (fil.classList.contains("f-show")) {
    fil.classList.replace("f-show", "f-hide"); //replacing the iocns class
  }
}

// filter

function incfilter() {
  let fil = document.querySelector("#flable");
  document.getElementById("filter1").style.width = "140px";
  document.getElementById("serch-w").style.width = "22px";
  // fil.classList.toggle("f-hide");

  if (fil.classList.contains("f-hide")) {
    fil.classList.replace("f-hide", "f-show"); //replacing the iocns class
  }
  customeFilter();
  // if (sidebar2.classList.contains("open")) {
  //   cusbody.classList.replace("customize-body1", "customize-body2"); //replacing the iocns class
  // } else {
  //   cusbody.classList.replace("customize-body2", "customize-body1"); //replacing the iocns class
  // }
}

let filterli = document.querySelector(".filter-li");

let filterbtn = document.getElementById("collapseExample");

function customeFilter() {
  document.querySelector(".filter-li").toggleClass("active");

  if (filterli.classList.contains("active")) {
    filterbtn.classList.addClass("show"); //replacing the iocns class
  } else {
    filterbtn.classList.remove("show"); //replacing the iocns class
  }
}
