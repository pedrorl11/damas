function abreMenu(){
    if(document.querySelector('.links').style.display == 'block'){
        document.querySelector('.links').style.display = 'none';

    }
    else{
        document.querySelector('.links').style.display = 'block';
    }
}

function verifica(){
    let user = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    
    if(senha.length < 6){
        if(senha == ""){
            document.querySelector('#senha').style.border = "thick solid #FF0000";
            document.querySelector('#svazia').style.display = 'block';
            document.querySelector('#stam').style.display = 'none';
        }
        else{
        document.querySelector('#senha').style.border = "thick solid #FF0000";
        document.querySelector('#stam').style.display = 'block';
        document.querySelector('#svazia').style.display = 'none';
        }

    }
    else{
        if(senha.length > 30){
            document.querySelector('#senha').style.border = "thick solid #FF0000";
            document.querySelector('#svazia').style.display = 'none';
            document.querySelector('#stam').style.display = 'block';

        }
        else{
            document.querySelector('#senha').style.border = "thick solid #008000";
            document.querySelector('#stam').style.display = 'none';
            document.querySelector('#svazia').style.display = 'none';
        } 
    }
    
    if(user == ""){
        document.querySelector('#usuario').style.border = "thick solid #FF0000";
        document.querySelector('#uvazia').style.display = 'block';
    }
    else{
        document.querySelector('#usuario').style.border = "thick solid #008000";;
        document.querySelector('#uvazia').style.display = 'none';
    }

}