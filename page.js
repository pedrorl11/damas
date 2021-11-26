let tamanho = 2;
let h = document.querySelector("h1");
if (h == null){
    h = document.querySelector("h2");
    if (h == null){
        h = document.querySelector("h3");
        if (h == null){
            h = document.querySelector("h4");
            if (h == null){
                h = document.querySelector("h5");
                if (h == null){
                    h = document.querySelector("h6");
                }
            }
        }
    }
}
if (h != null){
    criaBotao();
}
function atualiza() {
    h.style.fontSize = `${tamanho}em`
}
function aumenta() {
    if (tamanho < 7){
    tamanho += 0.25;
    atualiza();
}}

function diminui() {
    if (tamanho > 1) {
        tamanho -= 0.25;
    atualiza();
}}
function criaBotao(){
btmais = document.createElement("button") ;
btmais.setAttribute("onclick","aumenta()")
btmenos = document.createElement("button");
btmenos.setAttribute("onclick","diminui()")
btmais.textContent = "+";
btmenos.textContent = "-";
document.body.prepend(btmais);
document.body.append(btmenos);
}