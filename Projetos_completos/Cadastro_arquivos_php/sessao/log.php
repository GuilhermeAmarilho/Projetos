<?php
    $nome = $_GET['nome'];
    setcookie("login",$nome,time()+300,"/");
    session_start();
    $_SESSION['usuario'] = $nome;
    header('location: ../arquivos/form.php')
?>