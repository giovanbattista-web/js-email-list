const primaEmail = document.getElementById('mail-1');
const secondaEmail = document.getElementById('mail-2');
const terzaEmail = document.getElementById('mail-3');
const quartaEmail = document.getElementById('mail-4');
const quintaEmail = document.getElementById('mail-5');
const sestaEmail = document.getElementById('mail-6');
const settimaEmail = document.getElementById('mail-7');
const ottavaEmail = document.getElementById('mail-8');
const nonaEmail = document.getElementById('mail-9');
const decimaEmail = document.getElementById('mail-10');
const button = document.getElementById('altre-email');

const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail?`;
let email1;
let email2;
let email3;
let email4;
let email5;
let email6;
let email7;
let email8;
let email9;
let email10;

const fetch = () => {
  axios.get(endpoint).then((elemento) => {
    const email1 = elemento.data.response;
    const email2 = elemento.data.response;
    const email3 = elemento.data.response;
    const email4 = elemento.data.response;
    const email5 = elemento.data.response;
    const email6 = elemento.data.response;
    const email7 = elemento.data.response;
    const email8 = elemento.data.response;
    const email9 = elemento.data.response;
    const email10 = elemento.data.response;


    primaEmail.innerHTML = email1;
    secondaEmail.innerHTML = email2;
    terzaEmail.innerHTML = email3;
    quartaEmail.innerHTML = email4;
    quintaEmail.innerHTML = email5;
    sestaEmail.innerHTML = email6;
    settimaEmail.innerHTML = email7;
    ottavaEmail.innerHTML = email8;
    nonaEmail.innerHTML = email9;
    decimaEmail.innerHTML = email10;
  });
}

button.addEventListener('click', fetch);
fetch();


