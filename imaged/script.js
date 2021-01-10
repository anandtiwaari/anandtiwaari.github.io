//selectors
let btn=document.querySelector('.btn');
let input=document.querySelector('.input-vaala');
let image=document.querySelector('.select-image');
let Grey=document.querySelector('#Grey');
let Blur=document.querySelector('#Blur');
let Sepia=document.querySelector('#Sepia');
let Hue=document.querySelector('#Hue');
let darki=document.querySelector('.ctn');
let contain=document.querySelector('.container')
// let body=document.querySelectorAll('body')
//Event-Listeners
btn.addEventListener('click',enter);
Grey.addEventListener('click',Blurfil)
Blur.addEventListener('click',Sepiafil)
Sepia.addEventListener('click',greyfil)
Hue.addEventListener('click',Huefil)
darki.addEventListener('click',alag)



//Functions
function enter(){
    let inputvalue=input.value //input ki value variable mei store karayi hai
    let imagesrc=image.src //image ki src lene ke ke liye variable mei store katrayaa hai
    image.src=inputvalue //idhar jo image ki src hai uska replace karaya jobhi input mai hai usse
    console.log(imagesrc);
}

function greyfil(){
    image=image.style.filter="grayscale(50%)"
}
function Blurfil(){
    image=image.style.filter="sepia(150%)"
}
function Sepiafil(){
    image=image.style.filter="blur(3px)"
}
function Huefil(){
    image=image.style.filter="hue-rotate(182deg)"
}

function alag(){
    document.body.style.backgroundColor="black";
    contain.style.backgroundColor="black";
    // darki.style.backgroundColor="black";
    if(darki.style.backgroundColor=='black')
    {
        document.body.style.backgroundColor="#fff";
        contain.style.backgroundColor="#fff";
        darki.style.backgroundColor="#fff";
    }
    else
    {
        document.body.style.backgroundColor="black";
        contain.style.backgroundColor="black";
        darki.style.backgroundColor="black";
    }
    // console.log("miss tujhe")
}
