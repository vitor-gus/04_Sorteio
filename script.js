let nome = document.getElementById('nome')
let cad = document.getElementById('cadastro')
let sort = document.getElementById('sortear')
let result = document.getElementById('resultado')
let fundo = document.querySelector('#fundo')
let rtela = document.querySelector('#rtela')
let xis = document.querySelector('#xis')
let list = []

let chamaLocal = JSON.parse(localStorage.getItem('nomes'))
    
onload = function(){
    list == chamaLocal
    }

nome.addEventListener('keypress', (e)=>{
    if(e.keyCode == 13){
        cadastrar()
    }
})


function cadastrar(){
   let ncad = nome.value;
   if(ncad != ''){
   list.push(ncad)
   nome.value=''
   localStorage.setItem('nomes', JSON.stringify(list))
   console.log(list)
}else{
    alert('NOME INVÁLIDO')
}
}

function sortear(){
    let confirmacao = confirm("Após o sorteio a lista cadastrada será excluida, deseja realizar o Sorteio?")
    if(confirmacao = true){
    let res = result
    let np = list.length;
        if(np != '' && np >= 2){
        let ns = Math.floor(Math.random()*np)
        result.innerHTML = list[ns]
         alternarJanelaEdicao()} 
            else{
             alert('PARA REALIZAR O SORTEIO PRECISA DE PELO MENOS 2 CADASTROS')
             }
            }
}

function alternarJanelaEdicao(){
    rtela.classList.toggle('abrir')
    fundo.classList.toggle('abrir')
}

function fechar(){
    rtela.classList.toggle('fechar')
    fundo.classList.toggle('fechar')
    location.reload()
    let list = []
    localStorage.setItem('nomes', JSON.stringify(list))
}