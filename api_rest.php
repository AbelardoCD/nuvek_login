<?php

$username = $_POST['username'];
$password =$_POST['password'];


if ($username !="" && $password!="") {
    callUserService($username,$password);
}else{
    echo "campos vacios";
}


function callUserService($username,$password)
{

    
$api = 'https://nvkapitest.herokuapp.com/api/user/';
$url=  $api.$username.'/'.$password;
$json = file_get_contents($url,true);

//$data = json_decode(file_get_contents($url),true);
 
 

#echo $json;
echo $json;
}



