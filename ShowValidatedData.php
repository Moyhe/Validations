<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mobile = htmlspecialchars(trim($_POST['mobile']));
    $email = htmlspecialchars(trim($_POST['email']));

    $phoneValid = preg_match('/^01[0-2,5]{1}[0-9]{8}$/', $mobile);
    $emailValid = filter_var($email, FILTER_VALIDATE_EMAIL);

    if ($phoneeValid && $emailValid) {
        echo "Phone: " . $mobile . "\n";
        echo "Email: " . $email . "\n";
    } else {
        echo "Invalid Email Or Phone Number!";
    }
}
