// Simple Form Validation and Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  console.log('Form Submitted:', { name, email, message });
  document.getElementById('contact-form').reset();
  alert('Thank you for reaching out! We will get back to you soon.');
});
