document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    
    document.getElementById('confirmation').innerText = `Thank you for registering, ${name}!`;
});