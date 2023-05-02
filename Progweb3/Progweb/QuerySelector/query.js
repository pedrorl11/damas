function sec1(){
    if(document.querySelector('#sec1').style.display == 'block'){
        document.querySelector('#sec1').style.display = 'none';
    }
    else{
        document.querySelector('#sec1').style.display = 'block';
        document.querySelector('#sec3').style.display = 'none';
        document.querySelector('#sec2').style.display = 'none';
    }
}

function sec2(){
    if(document.querySelector('#sec2').style.display == 'block'){
        document.querySelector('#sec2').style.display = 'none';
    }
    else{
        document.querySelector('#sec2').style.display = 'block';
        document.querySelector('#sec3').style.display = 'none';
        document.querySelector('#sec1').style.display = 'none';
    }
}

function sec3(){
    if(document.querySelector('#sec3').style.display == 'block'){
        document.querySelector('#sec3').style.display = 'none';
    }
    else{
        document.querySelector('#sec3').style.display = 'block';
        document.querySelector('#sec1').style.display = 'none';
        document.querySelector('#sec2').style.display = 'none';
    }
}