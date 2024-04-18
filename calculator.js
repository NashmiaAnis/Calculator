const slot= document.querySelector('#slot');
const buttons=document.querySelectorAll('button');
// console.log(buttons);
let string='';
buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.innerHTML==='='){
      string=eval(string)
      slot.value=string
    }
    else if(e.target.innerHTML==='AC'){
      string=''
      slot.value=string
    }
    else if(e.target.innerHTML==='DEL'){
      string= string.substring(0,string.length-1)
      slot.value=string
    }
    else{
      string+= e.target.innerHTML;
    slot.value=string}
  })  
  })