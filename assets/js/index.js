if (localStorage.getItem("token")==null){
    alert("Você precisa estar logado para acessar essa página!");
    window.location.href ="../assets/html/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado}`;

function sair(){
    localStorage.removeItem("Token");
    localStorage.removeItem("userLogado");
    window.location.href = "../assets/html/signin.html ";
}

//navegação
function calculadora(){
    window.location.href = "../../Calculadora/calculadora.html";
}

function jogoDaVelha(){
    window.location.href = "../../jogoDaVelha/jogo.html";
}

function clima(){
    window.location.href = "../../clima/clima.html";
}

