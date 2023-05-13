const numeros = [1, 2, 3, 4, 5];
var quadra = numeros.map(function(num){
    return num ** 2;
});   
document.getElementById("quadrados").innerHTML = quadra;