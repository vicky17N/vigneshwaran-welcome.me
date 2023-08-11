<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "vicky6369ece@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}
?>
