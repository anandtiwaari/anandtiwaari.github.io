let kilo=document.querySelector('.kg')
let tprice =document.querySelector('.total-price')
let gram =document.querySelector('.user-gram')
let resul =document.querySelector('.result')
let button =document.querySelector('.btn')
//values of every

button.addEventListener('click',jeene)
function jeene(){
    // let kiloval=kilo.value
    let tpriceval=tprice.value
    let gramval=gram.value
    // console.log(kiloval)
    let onegram=tpriceval/1000;
    let actual=onegram*gramval;
   resul.value=actual
    // console.log(actual)
}