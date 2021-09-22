<?php
$to = "neonchilkk@gmail.com";
$subject ='Заказ консультации';
$message .= "Заказ звонка с сайта \r\n";
$message .= "Тема: ".$_POST['desc']. "\r\n";
$message .= "Имя: ".$_POST['name']. "\r\n";
$message .= "Номер телефона: ".$_POST['phone']. "\r\n"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
  $headers .= 'Content-type: text/html; charset=utf-8'."\r\n"; 
  if (mail($to,$subject,$message,"from:hi@gm.com")) {
    echo 'good';
    echo $to,$subject,$message ;
  } else {
    echo 'error';
  } 
?>