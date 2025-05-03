// RECUPERIAMO GLI ELEMENTI DEL DOM CHE CI SERVONO
const list = document.getElementById('emails-list');

// DICHIARAZIONE DELLE VARIABILI CHE CI SERVONO
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

for (let i=0; i<10; i++){
    axios.get(endpoint).then((res) => {
      let li = `<li>${res.data.response}</li>`;
      list.innerHTML += li;
    });
  };

