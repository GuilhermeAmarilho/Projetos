<?php    
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $tipo = $_POST['tipo'];
    $filename = "dados.txt";
    $mode = "a+";   
    $arquivo = fopen($filename, $mode); 
    $quebra="\n";
    if ($arquivo == FALSE) {
        die("Arquivo nao criado");
        $arquivo = fopen($filename,"w+"); 
    }
    $a = 0;
    while(!feof($arquivo)){
        $linha = fgets($arquivo, 1024);
        $val = explode(";",$linha);
        $val[1] = trim($val[1]);
        if($val[0]!= NULL and $val[1]!= NULL){
            if (($val[0] == $nome) and ($val[1] == $email)){
                header('location: log.php?nome='.$nome);
                $a= 1;
            }
            if (($val[0] == $nome) and ($val[1] != $email)){
                header('location: login.php?a=1');
                $a= 1;
            }   
        }
    }
    if($a == 0){
        if($nome!= NULL and $email!= NULL){
            if(fwrite($arquivo,($nome.';'.$email).$quebra)){
                header('location: log.php?nome='.$nome);
            }
        }
        else{
            header('location: cadastro.php?a=1');
        }
    }
?>
