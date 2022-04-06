<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cadastro de arquivos!</title>
    <link rel="stylesheet" href="../sessao/css/style2.css">
</head>
<body>
    <?php
        echo "<h2>você está logado como: ".$_SESSION['usuario']; 
        $dir = "up/";
        $files = scandir($dir, 1);
        for ($cont=0; $cont < 2; $cont++) { 
            array_pop($files);
        }
        $files = array_reverse($files);
        $size = array();
        for ($cont=0; $cont < count($files); $cont++) { 
            array_push($size, filesize($dir."/".$files[$cont]));
        }
        $i = 0;
        $up = array();
        while($i<count($files)){
            $a = explode(".",$files[$i]);
            if ($_SESSION['usuario']==$a[0]){
                array_push($up,array($a[1].".".$a[2]));
                if($size[$i]/1000000>=1){
                    $a = (($size[$i])/1000000)." mb";
                }
                else if($size[$i]/1000>=1){
                    $a = (($size[$i])/1000)." kb";
                }
                else{
                    $a = (($size[$i]))." b";
                }
                array_push( $up[count($up)-1],$a);
            }
            $i+= 1;
        }    
        echo "<table>
        <tr>
            <td>Nome do arquivo</td>
            <td>Tamanho do arquivo</td>
        </tr>";
        $i=0;
        while($i<count($up)){
            echo "<tr><td>".$up[$i][0]."</td><td>".$up[$i][1]."</td></tr>";
            $i++;
        }
        echo "</table>";
    ?>
    <br>
    <a href="form.php">Acesse o formulario de envio de arquivos</a><br>
    <a href="fpdf.php">Gerar pdf com arquivos enviados!</a>
    <a href="../sair.php" class="sair">Finalizar sessão</a>
</body>
</html>