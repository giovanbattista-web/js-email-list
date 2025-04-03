const primaEmail = document.getElementById('mail1');
const secondaEmail = document.getElementById('mail2');
const terzaEmail = document.getElementById('mail3');
const quartaEmail = document.getElementById('mail4');
const quintaEmail = document.getElementById('mail5');
const sestaEmail = document.getElementById('mail6');
const settimaEmail = document.getElementById('mail7');
const ottavaEmail = document.getElementById('mail8');
const nonaEmail = document.getElementById('mail9');
const decimaEmail = document.getElementById('mail10');



axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((elemento)=>{
  numero = elemento.data.response;
  mostrareAVideo.innerHTML = numero;
  
})
