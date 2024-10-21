<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Validation</title>
</head>

<body>
  <div>
    <form id="contactForm">
      <h2>Contact Form</h2>

      <label for="mobile">Phone Number</label>
      <input type="number" id="mobile" name="mobile" placeholder="Enter your phone number" required>
      <span id="mobileError" class="error-message"></span>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required>
      <span id="emailError" class="error-message"></span>


      <button type="submit">Submit</button>
    </form>
  </div>

  <script src="script.js"></script>
</body>

</html>