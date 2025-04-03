const mostrareAVideo = document.getElementById('emailDaGenerare');
let numero;


axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((elemento)=>{
  numero = elemento.data.response;
  mostrareAVideo.innerHTML = numero;
  
})
