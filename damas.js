const tamanhoCelula = 40;
document.body.append(criaTabuleiro());
function criaTabuleiro() {
    const tamanho = 8;
    numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        linha.setAttribute("id", `${numeros[i]}`);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
            linha.append(celula);
            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
            celula.setAttribute("id", `${numeros[i]}${numeros[j]}`);
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
                celula.setAttribute("class", "black");
                if (i * 8 + j <= 24) {
                    peca = criaPeca("black");
                    peca.setAttribute("class", "preto");
                    celula.append(peca);
                } else if (i * 8 + j >= 40) {
                    peca = criaPeca("red");
                    peca.setAttribute("class", "vermelho");
                    celula.append(peca);
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}
function criaPeca(cor) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `img/${cor}.png`);
    imagem.setAttribute('width', `${tamanhoCelula-4}px`);
    imagem.setAttribute('height', `${tamanhoCelula-4}px`);
    imagem.setAttribute("draggable", "true");
    imagem.addEventListener("dragstart", function(evento){
        dragged = evento.target;
        evento.target.style.opacity = .5;
    }, false);
    imagem.addEventListener("dragend", function(evento){
        evento.target.style.opacity = "";
    }, false);
    return imagem;
}

celulasPretas = document.querySelectorAll(".black", ".cheio");
celulasPretas.forEach(casaPreta => {
    if (casaPreta.className != "cheio"){
        casaPreta.addEventListener("dragover", function(evento){
            evento.preventDefault();
        });
        casaPreta.addEventListener("drop", function(evento){
            evento.preventDefault();
            if (evento.target.className == "black"){
                if (dragged.className == "preto"){
                    if (evento.target.id == parseInt(dragged.parentNode.id) + 11 || evento.target.id == parseInt(dragged.parentNode.id) + 9){
                        dragged.parentNode.className = "black";
                        dragged.parentNode.removeChild( dragged );
                        evento.target.appendChild( dragged );
                        evento.target.className = "cheio";
                    };
                } else if (dragged.className == "vermelho"){
                    if (evento.target.id == dragged.parentNode.id - 11 || evento.target.id == dragged.parentNode.id - 9){
                        dragged.parentNode.className = "black";
                        dragged.parentNode.removeChild( dragged );
                        evento.target.appendChild( dragged );
                        evento.target.className = "cheio";
                    };
                }
            }
        }, false);
    }
});
