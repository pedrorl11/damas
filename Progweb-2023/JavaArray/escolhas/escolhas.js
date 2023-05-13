const carros = ["Tiggo 8", "BMW M X6 2021", "Celta", "Saveiro"];
var string = ""
for(var i = 0; carros.length > i; i++){
    string += ("Minha escolha "+(i + 1)+" é "+(carros[i])+'<br>');
    document.getElementById("lista").innerHTML = string;
}