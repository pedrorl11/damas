<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Cliente</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <div class="container p-5">
        <h1>Cadastro de cliente</h1>
        <form action="cadclienteself.php" method="post">
            <label for="nome">Nome:</label> <br>
            <input type="text" name="nome" placeholder="Digite seu nome: " id="nome" class="form-control"> <br>

            <label for="email">Email:</label> <br>
            <input type="text" name="email" placeholder="Digite seu email: " id="email" class="form-control"> <br>

            <label for="cpf">CPF:</label> <br>
            <input type="text" name="cpf" placeholder="Digite seu CPF: " id="cpf" class="form-control"> <br>

            <br>
            <input type="submit" value="Cadastrar" class="btn btn-primary"> 
        </form>
    </div>

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