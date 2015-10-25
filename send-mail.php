<?php 

    // clean user input
    $name = strip_tags($_POST['name']);
    $phone = strip_tags($_POST['phone']);
    $email = strip_tags($_POST['email']);

    // multiple recipients
    $to  = 'email@domain.com' . ', ';
    $to .= 'email@domain.com';

    $subject = '';

    $message = '
    <html>
    <head>
    <title>Title</title>
    </head>
    <body></body>
    </html>';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: Title <email@domain.com>';

    // Mail it
    mail($to, $subject, $message, $headers);

?>