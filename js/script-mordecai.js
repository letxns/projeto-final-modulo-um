//parte pronta
function caminhoMordecai(){
    var caminhoMordecai = document.querySelector("#caminho-mordecai");
    caminhoMordecai.addEventListener("click", function(event){
    var comida = prompt("Qual comida você deseja levar à festa? \n 1 → Cachorro quente \n 2 → Ravioli \n 3 → Canjica");
    while(true){
        if(comida == 1){
            window.location="mordecai-hotdog.html";
            event.preventDefault();
        } else if(comida == 2){
            window.location="mordecai-ravioli.html";
            event.preventDefault();
        }else if (comida == 3){
            window.location="mordecai-canjica.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
            caminhoMordecai();
        }
        break;
    }
});
}

caminhoMordecai()

function caminhoHotDog(){
    var hotdog = prompt("Você prefere: \n 1 → Comprar os ingredientes e se arriscar na cozinha \n 2 → Comprar pronto da barraquinha duvidosa ao lado \n \n Digite o número correspondente à opção");
    while(true){
    if(hotdog == 1){
            window.location="mordecai-hotdog-caseiro.html";
            event.preventDefault()
        } else if(hotdog == 2){
            window.location="mordecai-hotdog-barraquinha.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
            caminhoHotDog()
        } 
        break;
    }
}

function hotDogCaseiro() {
    var hotDogCaseiro =  prompt("Você escolheu se arriscar na cozinha preparando cachorro quente! \n \n 1 → Você se garante em preparar sua própria receita de cachorro quente \n 2 → Você decide utilizar a receita secreta secular de sua família \n \n Digite o número correspondente à opção");
    while(true){
    if(hotDogCaseiro == 1){
            window.location="hotdog-caseiro-um.html";
            event.preventDefault()
        } else if(hotDogCaseiro == 2){
            window.location="hotdog-caseiro-dois.html";
            event.preventDefault();
        }else {
            alert("Resposta inválida.");
            hotDogCaseiro()
        } 
        break;
    }
}

function jogarDeNovo(){
    window.location=("../personagens.html");
    event.preventDefault();
}