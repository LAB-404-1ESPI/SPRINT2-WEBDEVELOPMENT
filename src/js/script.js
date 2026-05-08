const botao = document.getElementById('entrar');
const input = document.getElementById('nome');

botao.addEventListener('click', function () {
  const nome = input.value.trim();

  if (nome == '') {
    alert('Por favor, digite seu nome antes de entrar!');
  } else {
    alert('Bem-vindo, ' + nome + '!');
    window.location.href = './src/pages/materias.html'; // Redireciona para a página de matérias
  }
});
