function criaAluno(){
    let  nome = prompt("Nome do aluno")
    let lista = document.createElement("p");
    lista.textContent = nome
    document.getElementById('aluno').append(lista)
}

function criaProf(){
    let  nome = prompt("Nome do professor")
    let lista = document.createElement("p");
    lista.textContent = nome
    document.getElementById('profe').append(lista)

}

function prof(){
    if(document.querySelector('#profe').style.display == 'block'){
        document.querySelector('#profe').style.display = 'none';

    }
    else{

        document.querySelector('#aluno').style.display = 'none';
        document.querySelector('#profe').style.display = 'block';
    }
    
}

function alu(){
    if(document.querySelector('#aluno').style.display == 'block'){
        document.querySelector('#aluno').style.display = 'none';

    }
    else{
        document.querySelector('#aluno').style.display = 'block';
        document.querySelector('#profe').style.display = 'none';
    }
    
}