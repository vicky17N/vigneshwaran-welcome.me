<?php

$receiving_email_address = 'vicky6369ece@gmail.com';

if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
} else {
    die('Unable to load the "PHP Email Form" Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $receiving_email_address;
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];

// Perform validation on the input data
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
    echo json_encode(array('success' => false, 'message' => 'Please fill all required fields.'));
    exit;
}

// Sanitize the input data to prevent attacks
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

// Add the sanitized data to the email message body
$contact->add_message($name, 'From');
$contact->add_message($email, 'Email');
$contact->add_message($message, 'Message', 10);

// Send the email and provide feedback to the user
if ($contact->send()) {
    echo json_encode(array('success' => true, 'message' => 'Your message has been sent.'));
} else {
    echo json_encode(array('success' => false, 'message' => 'An error occurred while sending your message. Please try again later.'));
}
?>
