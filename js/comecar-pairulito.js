var comecarJogoPairulito = document.querySelector("#comecar-pairulito");
comecarJogoPairulito.addEventListener("click", function(event){
    var comecar = prompt("Você tem certeza que deseja prosseguir com Pairulito? \n Digite o número correspondente à opção:\n 1- Sim \n 2- Não")
    while(true){
        if(comecar == 1){
            alert("Beleza! Vamos prosseguir com Pairulito.");
            window.location="comecar-pairulito.html"; 
        } else if(comecar == 2){
            alert("Poxa! Vamos escolher outro personagem, então.");
            window.location="../personagens.html"; 
        }else{
            alert("Digite uma opção válida!");
        }break;
    }
    event.preventDefault()
});