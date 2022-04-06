<?php
    session_start();
    if(!isset($_SESSION['usuario'])){
        header('location: login.php?a=2');
    }
    $nome = $_COOKIE['login'];   
    date_default_timezone_set("Brazil/East"); //Definindo timezone padrão
    $ext = strtolower(explode(".",$_FILES['arquivo']['name'])[1]);
    $name = $nome.".".date("Y-m-d-H-i-s").".".$ext; //Definindo um novo nome para o arquivo
    $dir = 'C:\Users\guiam\Documents\info\php\arquivos\up/'; //Diretório para uploads
    move_uploaded_file($_FILES['arquivo']['tmp_name'], $dir.$name); //Fazer upload do arquivo
    header('location: form.php');
?>