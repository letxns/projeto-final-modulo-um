//parte pronta
function caminhoPairulito(){
    var caminhoPairulito = document.querySelector("#caminho-pairulito");
    caminhoPairulito.addEventListener("click", function(event){
    var comida = prompt("Qual comida você deseja levar à festa? \n 1 → Bolo \n 2 → Tiramisu \n 3 → Torta de limão");
    while(true){
        if(comida == 1){
            window.location="pairulito-bolo.html"; //abrir essa página antes de carregar os próximos prompts
            event.preventDefault();
        } else if(comida == 2){
            window.location="pairulito-tiramisu.html";
            event.preventDefault();
        }else if(comida == 3){
            window.location="pairulito-torta-de-limao.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
        }
        break;
    }
});
}
caminhoPairulito()

function caminhoBolo(){
    var bolo = prompt("Você se empenha e decide fazer o melhor bolo do mundo! Para isso, os ingredientes devem ser escolhidos minuciosamente. O que você pega? \n 1 → Não tem nada perfeito neste mercado! Irei ao melhor mercado do estado para produzir o melhor bolo! \n 2- Farinha, açúcar, leite, corante vermelho em gel");
    while(true){
    if(bolo == 1){
            window.location="bolo-um.html"; //abrir essa página antes de carregar os próximos prompts
            event.preventDefault()
        } else if(bolo == 2){
            window.location="bolo-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
        } 
        break;
    }
}

function caminhoBoloUm(){
    var bolo = prompt("Não tem nada perfeito neste mercado! Pairulito entra numa jornada em busca dos ingredientes perfeitos e passa 15 anos viajando ao redor do mundo. \n Após concluir sua busca, você volta para casa? \n 1 → Sim! Ainda desejo participar da competição de melhor comida da festa! \n 2 → Não, quero adentrar o ramo de tortas agora!");
    while(true){
    if(bolo == 1){
            window.location="bolo-um-um.html"; //abrir essa página antes de carregar os próximos prompts
            event.preventDefault()
        } else if(bolo == 2){
            window.location="bolo-um-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
        } 
        break;
    }
}

function caminhoBoloDois(){
    var bolo = prompt("Não tem nada perfeito neste mercado! Pairulito entra numa jornada em busca dos ingredientes perfeitos e passa 15 anos viajando ao redor do mundo. \n Após concluir sua busca, você volta para casa? \n 1 → Sim! Ainda desejo participar da competição de melhor comida da festa! \n 2 → Não, quero adentrar o ramo de tortas agora!");
    while(true){
    if(bolo == 1){
            window.location="bolo-um-um.html"; //abrir essa página antes de carregar os próximos prompts
            event.preventDefault()
        } else if(bolo == 2){
            window.location="bolo-um-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
        } 
        break;
    }
}

function caminhoTiramisu() {
    var tiramisu =  prompt("Hmmm, como é que se faz tiramisu mesmo? \n \n 1 → Vou ao mercado e compro: um líquido estranho no final da prateleira, whiskas sabor carne e sorvete de baunilha \n 2 → Acho que comprar pronto não é trapacear!");
    while(true){
    if(tiramisu == 1){
            window.location="tiramisu-um.html"; //abrir essa página antes de carregar os próximos prompts
            event.preventDefault()
        } else if(tiramisu == 2){
            window.location="tiramisu-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
        } 
        break;
    }
}

function caminhoTorta() {
    var torta =  prompt("1 → No mercadinho perto de casa \n2 → Naquele mercado lindo que fica no centro da cidade!");
    while(true){
    if(torta == 1){
            window.location="pairulito-torta-de-limao-um.html"; //abrir essa página antes de carregar os próximos prompts
            event.preventDefault()
        } else if(torta == 2){
            window.location="pairulito-torta-de-limao-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
        } 
        break;
    }
}

function jogarDeNovo(){
    window.location=("../personagens.html");
    event.preventDefault();
}
