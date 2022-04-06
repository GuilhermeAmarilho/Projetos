<?php
    session_start();
    if(isset($_SESSION['usuario'])){
        header('location: arquivos/form.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cadastro de arquivos</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="link">
        <div class="espaco"></div>
        <div>
        <a href="sessao/login.php">Logar-se</a>
        </div>
        <div>
        <a href="sessao/cadastro.php" class="a">Cadastrar-se</a>
        </div>
    </div>
</body>
</html>