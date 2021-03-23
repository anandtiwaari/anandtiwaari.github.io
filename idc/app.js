//selectors
let menu=document.querySelector('.menu')
let dikha=document.querySelector('.dikha')
let cancel=document.querySelector('.fist5')
let fist1=document.querySelector('.fist1')
let fist2=document.querySelector('.fist2')
let fist3=document.querySelector('.fist3')
let fist4=document.querySelector('.fist4')

//event listeners
menu.addEventListener('click',show)
cancel.addEventListener('click',hide)

//functions

function show(){
    // console.log("kaam chall raha hai")
    menu.style.display="block";
    dikha.style.display="block";
    dikha.style.width="200px";
    fist1.style.display='block'
    fist2.style.display='block'
    fist3.style.display='block'
    fist4.style.display='block'

}
function hide(){
    // console.log("kaam chall raha hai")
    menu.style.display="block";
    dikha.style.display="none";
    dikha.style.width="0px";
    fist1.style.display='none'
    fist2.style.display='none'
    fist3.style.display='none'
    fist4.style.display='none'

}