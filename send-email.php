<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$phone = $_POST['phone'];

require "PHPMailer-master/get_oauth_token.php"

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "sirrevia@gmail.com";
$mail-> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
