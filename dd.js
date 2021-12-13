document.querySelector('#ddd').addEventListener("change", Api);
        function Api(evento){
            fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
            .then(resposta => resposta.json())
            .then(dados => {
                AValue('cidades', dados.cities);
            })
        function AValue (id, valor) {
            valor.forEach(municipios=>{
                pontos=document.createElement("li")
                pontos.textContent=municipios
                document.querySelector(`#${id}`).append(pontos)
            })
        }
    }
