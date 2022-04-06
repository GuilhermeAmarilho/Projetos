<?php
    session_start();
    if(!isset($_SESSION['usuario'])){
        header('location: login.php?a=2');
    }
    if(!isset($_COOKIE["login"])){    
        setcookie("login",$_SESSION['usuario'],time()+300,"/");
     }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cadastro de arquivos</title>
    <link rel="stylesheet" href="../sessao/css/style.css">
</head>
<body>
    <a href="../sair.php" class="sair">Finalizar sessão</a>
    <?php
        echo    
        "<div class='texto'>    
            <h3>Você está logado como: ".$_SESSION['usuario']."</h3>
        </div>"; 
    ?>
    <div class="form">
        <h2>Envie seu arquivo!</h2>
        <form action="envio.php" method="post"  enctype="multipart/form-data">
            <input type="file" name="arquivo">
            <br><br>
            <button type="submit">enviar!</button><br>
            <a href="lista.php">Acesse a lista de arquivos enviados por você</a><br><br>
        </form>
    </div>
</body>
</html>

