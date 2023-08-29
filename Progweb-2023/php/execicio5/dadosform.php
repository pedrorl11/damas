<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados do Usuário</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <?php
            $nome = trim($_POST["nome"]);
            $email = trim($_POST["email"]);
            $cpf = trim($_POST["cpf"]);

            if(strlen($nome) == 0 || strlen($email) == 0 || strlen($cpf) == 0){
                echo "<h1 class='display-2'>Todos os dados devem ser informados!</h1>";
            } else {
                if(strlen($cpf) != 11){ 
                echo "<h1 class='display-2'>Informe CPF válido!</h1>";
                } else {
                    echo "<h1 class='display-2'>Dados cadastrados!</h1>
                    <legend  class='w-auto'>Dados do cliente</legend>
                    <fieldset class='border p-2  bg-light'>
                    <p class='display-3'>Nome: $nome</p>
                    <p class='display-3'>Email: $email</p>
                    <p class='display-3'>CPF: $cpf</p>
                    </fieldset>";

                    echo "Horário de cadastro: " . date( 'd/m/Y H:i:s', $_SERVER['REQUEST_TIME']);
                } 
            }
            ?>
    </div>
        
</body>
</html>