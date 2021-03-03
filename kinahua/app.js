let kilo=document.querySelector('.kg')
let tprice =document.querySelector('.total-price')
let gram =document.querySelector('.user-gram')
let resul =document.querySelector('.result')
let button =document.querySelector('.btn')
//values of every
// now for price calculation

// for gramm claculate karne ke liye hai

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

// for rupee calculate karne ke liye
let tpricee =document.querySelector('.total-pricee')
let kitna =document.querySelector('.user-gramm')
let resull =document.querySelector('.result1')
let buttonn =document.querySelector('.btn1')

buttonn.addEventListener('click',jeene)
function jeene(){
    // let kiloval=kilo.value
    let tpricevall=tpricee.value
    let kitnaval=kitna.value
    // console.log(kiloval)
    // let onegram=tpriceval/1000;
    let actuall=kitnaval*1000/tpricevall;
    resull.value=actuall
    // console.log(actual)
}