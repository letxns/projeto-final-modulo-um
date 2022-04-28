function caminhoRigby(){
    var caminhoRigby = document.querySelector("#caminho-rigby");
    caminhoRigby.addEventListener("click", function(event){
    var comida = prompt("Qual comida você deseja levar à festa? \n 1 → Mac and Cheese \n 2 → Chimichurri \n 3 → Estrogonoffe");
    while(true){
        if(comida == 1){
            window.location="rigby-mac-n-cheese.html"; 
            event.preventDefault();
        } else if(comida == 2){
            window.location="rigby-chimichurri.html";
            event.preventDefault();
        } else if(comida == 3){
            window.location="rigby-estrogonoffe.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
        }
        break;
    }
});
}
caminhoRigby()

function caminhoMacNChesse(){
    var macnchesse = prompt("Pra ser a melhor comida da festa você decide comprar seu Mac and Cheese pronto de um restaurante! \n Onde você prefere comprar? \n 1 → No boteco tenebroso \n 2 → No restaurante 5 estrelas que acabou de abrir");
    while(true){
    if(macnchesse == 1){
            window.location="mac-and-cheese-um.html";
            event.preventDefault()
        } else if(macnchesse == 2){
            window.location="mac-and-cheese-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
            caminhoMacNChesse()
        } 
        break;
    }
}


function chimichurri() {
    var chimichurri =  prompt("Quais são os itens que faltam na sua receita? \n \n 1 → Whiskas sabor carne, sorvete de baunilha e um líquido estranho no final da prateleira, onde no rótulo se lê Césio 137 \n 2 → Extrato de tomate, carne moída, dedo-de-moça");
    while(true){
    if(chimichurri == 1){
            window.location="chimichurri-um.html"; 
            event.preventDefault()
        } else if(chimichurri == 2){
            window.location="chimichurri-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
        } 
        break;
    }
}

function estrogonoffe(){
    var estrogonoffe = prompt("Pensando em poupar tempo, qual seria a melhor opção? \n 1 → Preparar seu prato no microondas \n 2 → Procurar um chef auxiliar");
    while(true){
    if(estrogonoffe == 1){
            window.location="estrogonoffe-um.html";
            event.preventDefault()
        } else if(estrogonoffe == 2){
            window.location="estrogonoffe-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
            estrogonoffe()
        } 
        break;
    }
}

function caminhoEstrogonoffe(){
    var estrogonoffe = prompt("Enquanto o prato está no microondas, você deveria aproveitar para cortar alguns temperos? \n 1 → Sim \n 2 → Não, ficarei olhando fixamente para o microondas enquanto o prato não estiver pronto");
    while(true){
    if(estrogonoffe == 1){
            window.location="estrogonoffe-um-um.html";
            event.preventDefault()
        } else if(estrogonoffe == 2){
            window.location="estrogonoffe-um-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
            estrogonoffe()
        } 
        break;
    }
}

function caminhoEstrogonoffeOlhar(){
    var estrogonoffe = prompt("1 → Irei correndo \n2 → Irei de bicicleta");
    while(true){
    if(estrogonoffe == 1){
            window.location="estrogonoffe-um-dois-um.html";
            event.preventDefault()
        } else if(estrogonoffe == 2){
            window.location="estrogonoffe-um-dois-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
            estrogonoffe()
        } 
        break;
    }
}

function jogarDeNovo(){
    window.location=("../personagens.html");
    event.preventDefault();
}
