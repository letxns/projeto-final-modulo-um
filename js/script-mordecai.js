//parte pronta
function caminhoMordecai(){
    var caminhoMordecai = document.querySelector("#caminho-mordecai");
    caminhoMordecai.addEventListener("click", function(event){
    var comida = prompt("Qual comida você deseja levar à festa? \n 1 → Cachorro quente \n 2 → Ravioli \n 3 → Canjica");
    while(true){
        if(comida == 1){
            window.location="mordecai-hotdog.html"; //abrir essa página antes de carregar os próximos prompts
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
            window.location="mordecai-hotdog-caseiro.html"; //abrir essa página antes de carregar os próximos prompts
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
            window.location="hotdog-caseiro-um.html"; //abrir essa página antes de carregar os próximos prompts
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



    //parte pronta fim
/*
while(true){
    var hotDog = prompt("Você escolheu cachorro quente! você vai… comprar os ingredientes e se arriscar na cozinha (1) ou comprar pronto da barraquinha duvidosa ao lado (2)?");
    if(hotDog == 1){
       var hotDogCaseiro = prompt("você se garante (1) ou decide apelar para a receita secreta secular de sua família(2)?");
        if(hotDogCaseiro == 1){
            alert("Você se atrapalha um pouco no processo, mas pelo menos está comestível. ninguém passa mal dessa vez");
        }else if(hotDogCaseiro == 2){
            alert("Você sumona o espírito do Deus do Cachorro Quente e ele te julga por seus pecados (colocar purê) \nMordecai não consegue ir a festa.");
        }else {
            alert("Resposta inválida.");
        }               
    }else if(hotDog == 2){
        alert("a festa foi um sucesso… dentro da UPA! todos passaram mal");
    }else {
        alert("Resposta inválida.");
    }   break;
}*/
    



/*
            else if(comida == 2){
                prompt("Em busca da massa de ravioli perfeita você acidentalmente abre um buraco no espaço tempo. o mundo talvez acabe, mas sem competição não tem como você perder!");
            }else if (comida == 3){
                alert("Você anda 30 km pra comprar no melhor restaurante de canjica e… ele estava fechado!");
            }else {
                alert("Resposta inválida.");
            }
*/

/*
var caminhoMordecai = document.querySelector("#caminho-mordecai");
caminhoMordecai.addEventListener("click", function(event){
    var comecar = prompt("Você tem certeza que deseja prosseguir com Mordecai? \n Digite o número correspondente à opção:\n 1- Sim \n 2- Não");
    while(true){
        if(comecar == 1){
            var comida = prompt("Qual comida você deseja levar à festa? \n 1 → Cachorro quente \n 2 → Ravioli \n 3 → Canjica");
            if(comida == 1){
                var hotDog = prompt("Você escolheu cachorro quente! você vai… comprar os ingredientes e se arriscar na cozinha (1) ou comprar pronto da barraquinha duvidosa ao lado (2)?");
                if(hotDog == 1){
                   var hotDogCaseiro = prompt("você se garante (1) ou decide apelar para a receita secreta secular de sua família(2)?");
                    if(hotDogCaseiro == 1){
                        alert("Você se atrapalha um pouco no processo, mas pelo menos está comestível. ninguém passa mal dessa vez");
                    }else if(hotDogCaseiro == 2){
                        alert("Você sumona o espírito do Deus do Cachorro Quente e ele te julga por seus pecados (colocar purê) \nMordecai não consegue ir a festa.");
                    }else {
                        alert("Resposta inválida.");
                    }               
                }else if(hotDog == 2){
                    alert("a festa foi um sucesso… dentro da UPA! todos passaram mal");
                }else {
                    alert("Resposta inválida.");
                }
            }else if(comida == 2){
                prompt("Em busca da massa de ravioli perfeita você acidentalmente abre um buraco no espaço tempo. o mundo talvez acabe, mas sem competição não tem como você perder!");
            }else if (comida == 3){
                alert("Você anda 30 km pra comprar no melhor restaurante de canjica e… ele estava fechado!");
            }else {
                alert("Resposta inválida.");
            }
        } else if(comecar == 2){
            event.preventDefault();
            alert("Poxa! Vamos escolher outro personagem, então.");
            window.location="../personagens.html";
        } else {
            alert("Resposta inválida.");
        }
        break;
    }
});
*/


/*

    COMEÇO DA IMPLEMENTAÇÃO DO BREAK

var caminhoMordecai = document.querySelector("#caminho-mordecai");
caminhoMordecai.addEventListener("click", function(event){
    var comida = prompt("Qual comida você deseja levar à festa? \n 1 → Cachorro quente \n 2 → Ravioli \n 3 → Canjica");
    while(true){
        if(comida == 1){
            window.location="mordecai-hotdog.html"; //abrir essa página antes de carregar os próximos prompts
            event.preventDefault();
            break;   
        } else if(comida == 2){
            alert("Em busca da massa de ravioli perfeita você acidentalmente abre um buraco no espaço tempo. o mundo talvez acabe, mas sem competição não tem como você perder!");
        }else if (comida == 3){
            alert("Você anda 30 km pra comprar no melhor restaurante de canjica e… ele estava fechado!");
        }else {
            alert("Resposta inválida.");
        }
        
    }
    while(true){
        
        var hotDog = prompt("Você escolheu cachorro quente! você vai… comprar os ingredientes e se arriscar na cozinha (1) ou comprar pronto da barraquinha duvidosa ao lado (2)?");
        if(hotDog == 1){
           var hotDogCaseiro = prompt("você se garante (1) ou decide apelar para a receita secreta secular de sua família(2)?");
           break;
            if(hotDogCaseiro == 1){
                alert("Você se atrapalha um pouco no processo, mas pelo menos está comestível. ninguém passa mal dessa vez");
            }else if(hotDogCaseiro == 2){
                alert("Você sumona o espírito do Deus do Cachorro Quente e ele te julga por seus pecados (colocar purê) \nMordecai não consegue ir a festa.");
            }else {
                alert("Resposta inválida.");
            }               
        }else if(hotDog == 2){
            alert("a festa foi um sucesso… dentro da UPA! todos passaram mal");
        }else {
            alert("Resposta inválida.");
        }
    }
});
*/