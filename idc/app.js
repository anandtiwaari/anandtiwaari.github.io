//selectors
let menu = document.querySelector(".menu");
let dikha = document.querySelector(".dikha");
let cancel = document.querySelector(".fist5");
let fist = document.querySelector(".fist");
let fist1 = document.querySelector(".fist1");
let fist2 = document.querySelector(".fist2");
let fist3 = document.querySelector(".fist3");
let fist4 = document.querySelector(".fist4");
//moving image
let backimg = document.querySelector(".back");

//event listeners
menu.addEventListener("click", show);
cancel.addEventListener("click", hide);

//functions

function show() {
  // console.log("kaam chall raha hai")
  menu.style.display = "block";
  dikha.style.display = "block";
  dikha.style.transition = "all 1s";
  dikha.style.width = "200px";
  fist.style.transition = "all 1s";
  fist1.style.display = "block";
  fist2.style.display = "block";
  fist3.style.display = "block";
  fist4.style.display = "block";
}
function hide() {
  // console.log("kaam chall raha hai")
  menu.style.display = "block";
  dikha.style.display = "none";
  dikha.style.width = "0px";
  fist1.style.display = "none";
  fist2.style.display = "none";
  fist3.style.display = "none";
  fist4.style.display = "none";
}
let i = 0;
let gam = [
  "one.jpg",
  "two.jpg",
  "three.jpg",
  "four.jpg",
  "five.jpg",
  "six.jpg",
  "seven.jpg",
  "eighth.jpg",
];
function run(){
    backimg.src = gam[i];
    backimg.style.transition='all 0.3s'
    if (i < gam.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout('run()',1300)
}
onload=run()
