//selectors
let btn = document.querySelector(".btn");
let input = document.querySelector(".input-vaala");
let image = document.querySelector(".select-image");

let darki = document.querySelector(".ctn");
let contain = document.querySelector(".container");
let range = document.querySelectorAll(".slider");
let file=document.querySelector('#file')
let modeimg=document.querySelector('#dar')
console.log(range.length);
// let body=document.querySelectorAll('body')
//Event-Listeners
input.addEventListener("keyup", sir);
btn.addEventListener("click", enter);
// Grey.addEventListener('click',Blurfil)
// Blur.addEventListener('click',Sepiafil)
// Sepia.addEventListener('click',greyfil)
// Hue.addEventListener('click',Huefil)
darki.addEventListener("click", alag);

for (let i = 0; i <= range.length - 1; i++) {
  range[i].addEventListener("input", filt);
}

//Functions
function filt() {
  let Grey = document.querySelector("#Grey");
  let Blur = document.querySelector("#Blur");
  let Sepia = document.querySelector("#Sepia");
  let Hue = document.querySelector("#Hue");

  let Greyval = Grey.value;
  let Blurval = Blur.value;
  let Sepiaval = Sepia.value;
  let Hueval = Hue.value;
  image.style.filter =
    "grayscale(" +
    Greyval +
    "%) blur(" +
    Blurval +
    "px)  sepia(" +
    Sepiaval +
    "%) hue-rotate(" +
    Hueval +
    "deg)";
}

function sir(s) {
  if (s.keyCode == 13) {
    let inputvalue = input.value; //input ki value variable mei store karayi hai
    image.setAttribute("src", inputvalue);
    // let imagesrc=image.src //image ki src lene ke ke liye variable mei store katrayaa hai
    // image.src=inputvalue //idhar jo image ki src hai uska replace karaya jobhi input mai hai usse
    // console.log(imagesrc);
    inputvalue = "";
  }
}

function enter() {
  // input.value=""
  let inputvalue = input.value; //input ki value variable mei store karayi hai
  image.setAttribute("src", inputvalue);
  // let imagesrc=image.src //image ki src lene ke ke liye variable mei store katrayaa hai
  // image.src=inputvalue //idhar jo image ki src hai uska replace karaya jobhi input mai hai usse
  console.log(imagesrc);
  inputvalue = "";

  // image.src=inputvalue;
}

// let defaultbtn=document.querySelector('.defbtn')
// let custombtn=document.querySelector('.custombtn')

// custombtn.addEventListener('click',main)
// function main(){
//   defaultbtn.click();
// }


// custombtn.addEventListener('change',output)
// function output(event){
//   image.src=URL.createObjectURL(event.target)
// }

file.addEventListener('change',loadfile)
 function loadfile(event) {
	var vmage = document.getElementById('output');
  vmage.src = URL.createObjectURL(event.target.files[0]);
  image.setAttribute("src", vmage.src);
  
};




function alag() {
  // input.value="";
  document.body.style.backgroundColor = "black";
  contain.style.backgroundColor = "black";
  // darki.style.backgroundColor="black";
  if (darki.style.backgroundColor == "black") {
    modeimg.style.backgroundColor=""
    document.body.style.backgroundColor = "#fff";
    contain.style.backgroundColor = "#fff";
    darki.style.backgroundColor = "#fff";
  } else {

    modeimg.style.filter="invert(1)"
    // document.headth.style.backgroundcolor="white"
    document.body.style.backgroundColor = "black";
    contain.style.backgroundColor = "black";
    darki.style.backgroundColor = "black";
  }
  // console.log("miss tujhe")
}


let dtn = document.querySelector('.dtn');
// let img = document.querySelector('img');
 
 
// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
dtn.addEventListener('click', () => {
    let imagePath = image.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
 
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}