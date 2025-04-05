// RECUPERIAMO GLI ELEMENTI DEL DOM CHE CI SERVONO
const list = document.getElementById('emails-list');
const button = document.getElementById('get-emails')

// DICHIARAZIONE DELLE VARIABILI CHE CI SERVONO
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const getEmails = (domList) => {
  domList.innerHTML = '';

  for (let i = 1; i <= 10; i++){
    axios.get(endpoint).then((res) => {
      let li = `<li>${res.data.response}</li>`;
      domList.innerHTML += li;
    });
  };
}

button.addEventListener('click', () => {
  getEmails(list);
});
getEmails(list);