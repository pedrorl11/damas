function cringe(){
    const arabico = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romano = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var texto = document.getElementById("txt").value;
    if (arabico.includes(parseInt(texto))){
        document.getElementById('resposta').innerHTML = romano[arabico.indexOf(parseInt(texto))];
    }
    else{
        let string = "Este número não está no array para ser convertido"
        document.getElementById('resposta').innerHTML = string
    }
}