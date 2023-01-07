const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')
const cidade = document.querySelector('.localidade')
const bairro = document.querySelector('.bairro')
const rua = document.querySelector('.rua')


btnCep.addEventListener('click', handleClick)

function handleClick(event){
  event.preventDefault()
  const cep = inputCep.value;
  buscaCep(cep)
}

function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(body=> {
    cidade.innerText = `Cidade: ${body.localidade}`
    bairro.innerText = `Bairro: ${body.bairro}`
    rua.innerText = `Rua: ${body.logradouro}`;
  })
}

buscaCep()