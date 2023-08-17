<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 4</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <h1>Relatório de fregueses:</h1>
    <table class="table">
        <?php
            $array = [
                1 => "Hulk",
                2 => "Saravia",
                3 => "Neymar",
                4 => "vargas",
                5 => "igor",
                6 => "André",
                7 => "Mbappe",
            ];
            echo "<thead>
                <tr>
                    <th scope='col'>Código</th>
                    <th scope='col'>Nome</th>
                </tr>
                </thead>
                <tbody>";
            for($i = 1; $i <= count($array); $i++){
                echo "<tr>
                    <td>$i</td>
                    <td>$array[$i]</td>
                </tr>";
            };
            echo "</tbody>";
        ?>

    </table>
</body>
</html>