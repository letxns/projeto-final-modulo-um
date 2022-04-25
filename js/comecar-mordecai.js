var comecarJogoMordecai = document.querySelector("#comecar-mordecai");
comecarJogoMordecai.addEventListener("click", function(event){
    var comecar = prompt("Você tem certeza que deseja prosseguir com Mordecai? \n Digite o número correspondente à opção:\n 1- Sim \n 2- Não");
    while(true){
        if(comecar == 1){
            alert("Beleza! Vamos prosseguir com Mordecai.");
            window.location="comecar-mordecai.html"; 
        }else if(comecar == 2){
            alert("Poxa! Vamos escolher outro personagem, então.");
            window.location="../personagens.html"; 
        }else{
            alert("Digite uma resposta válida");
        }
        break;
    }
    event.preventDefault()
});
