<?php
    session_start();
    if(isset($_SESSION['usuario'])){
        header('location: ../arquivos/form.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cadastro de arquivos</title>
    <link rel="stylesheet" href="css/style1.css">
</head>
<body>
    <?php
        $a = $_GET['a'];
        if(isset($a)){
            if ($a == '1'){
                echo '<h3>Preencha os campos corretamente</h3>';
            }
        }
    ?>
    <div class="form">
        <h2>Faça o seu cadastro!</h2>
        <form action="sessao.php" method="post">
            <label for="nome">informe o seu nome</label>
            <input name="nome"><br><br>
            <label for="email">informe o seu email</label>
            <input name="email"><br><br>
            <button type="submit">enviar!</button><br>
            <input name="tipo" id="invi" value="cadastro">
        </form>
    </div>
</body>
</html>