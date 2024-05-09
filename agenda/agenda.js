
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let data = document.querySelector('#data')
let labeldata = document.querySelector('#labelData')
let validData = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

function validarData(data) {
  console.log(data);
  return;
  // Expressão regular para verificar o formato "dd/mm/yyyy"
  var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  // Testa se a string da data corresponde ao formato esperado
  if (!regex.test(data)) {
    return false; // Se não corresponder, retorna falso
  }

  // Divide a string da data em dia, mês e ano
  var partes = data.split('/');
  var dia = parseInt(partes[0], 10);
  var mes = parseInt(partes[1], 10);
  var ano = parseInt(partes[2], 10);

  // Valida a data usando o objeto Date
  var dataObj = new Date(ano, mes - 1, dia); // Note que o mês é indexado de 0 a 11

  // Verifica se os valores de dia, mês e ano são válidos e se a data criada é igual à data fornecida
  return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes - 1 &&
    dataObj.getDate() === dia
  );
}




function cadastroAniversariante() {


  return;

  if (validNome && data) {

    let listaUserAniversario = JSON.parse(localStorage.getItem('listaUserAniversario') || '[]')

    listaUserAniversario.push(
      {
        nomeCad: nome.value,
        userCad: data.value,
      }
    )

    localStorage.setItem('listaUserAniversario', JSON.stringify(listaUserAniversario))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando data aniversariante...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(() => {
      window.location.href = '../agenda/agendaLista.html'
    }, 2)

  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar o aniversariante</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
