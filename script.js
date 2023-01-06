const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.querySelector('#user').value;
  const password = document.querySelector('#pass').value;

  if (username !== '' && password !== '') {
    alert('Login realizado com sucesso!');
  } else {
    alert('Preencha os campos')
  }

});