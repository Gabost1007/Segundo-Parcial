<?php

if(isset($_POST[‘Enviar’]) && !empty($_FILES[‘file’][‘name’])){

if(move_uploaded_file($_FILES[‘file’][‘tmp_name’],”uploads/”.$_FILES[‘file’][‘name’])){

echo Archivo subido correctamente.’;

}else{

echo Ocurrió algunos problemas. Inténtelo más tarde.’;

}

}
