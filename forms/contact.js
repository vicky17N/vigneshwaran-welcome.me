const receivingEmailAddress = 'vicky6369ece@gmail.com';

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  // Perform validation on the input data
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please fill all required fields.');
    return;
  }

  // Sanitize the input data to prevent attacks
  const name = sanitizeInput(nameInput.value);
  const email = sanitizeInput(emailInput.value);
  const subject = sanitizeInput(subjectInput.value);
  const message = sanitizeInput(messageInput.value);

  // Construct the email message body
  const emailBody = `From: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Send the email
  window.location.href = `mailto:${receivingEmailAddress}?subject=${subject}&body=${emailBody}`;

  alert('Your message has been sent.');
});

function sanitizeInput(input) {
  return input.replace(/[<>"'&]/g, '');
}
