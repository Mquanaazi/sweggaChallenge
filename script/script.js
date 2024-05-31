let input=document.querySelectorAll('input')[0];
let input1= document.querySelectorAll('input')[1];
let span = document.querySelectorAll('span')[0];
let span1 = document.querySelectorAll('span')[1];
let span2 = document.querySelectorAll('span')[2];
let addTotal=document.getElementById('Total');

function add(value1){
    answer=eval(`${input.value}*150.95`)
    span.innerText ="R"+  answer.toFixed(2)
    
}

function addition(value1) {
    answer=eval(`${input1.value}*180.95`)   
    span1.innerText="R"+answer.toFixed(2)
}

function total(value1) {
    answer=eval(`${input.value}*150.95+${input1.value}*180.95`)
    span2.innerText="R"+answer.toFixed(2)    
    
}


addTotal.addEventListener('click',add)
addTotal.addEventListener('click',addition)
addTotal.addEventListener('click',total)