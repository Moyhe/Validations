const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  // Clear previous error messages
  const mobileError = document.getElementById("mobileError");
  const emailError = document.getElementById("emailError");
  mobileError.style.display = "none";
  emailError.style.display = "none";

  let valid = true;

  // Mobile Number Validation
  const mobileInput = document.getElementById("mobile").value.trim();
  const mobileRegex = /^01[0-2,5]{1}[0-9]{8}$/;
  if (!mobileRegex.test(mobileInput)) {
    mobileError.textContent = "Please enter a valid phone number";
    mobileError.style.display = "block";
    valid = false;
  }

  // Email Validation
  const emailInput = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    valid = false;
  }

  if (valid) {
    sendFormData(mobileInput, emailInput);
  }
}

function sendFormData(mobile, email) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "ShowValidatedData.php", true);

  const formData = new FormData();

  formData.append("mobile", mobile);
  formData.append("email", email);

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Data:", xhr.responseText);
    }
  };

  xhr.send(formData);
}
