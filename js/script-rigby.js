function caminhoRigby(){
    var caminhoRigby = document.querySelector("#caminho-rigby");
    caminhoRigby.addEventListener("click", function(event){
    var comida = prompt("Qual comida você deseja levar à festa? \n 1 → Mac and Cheese \n 2 → Chimichurri");
    while(true){
        if(comida == 1){
            window.location="rigby-mac-n-cheese.html"; 
            event.preventDefault();
        } else if(comida == 2){
            window.location="rigby-chimichurri.html";
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

function jogarDeNovo(){
    window.location=("../personagens.html");
    event.preventDefault();
}
