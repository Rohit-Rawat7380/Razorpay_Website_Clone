const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    
    if (userExists) {
        alert('User already exists! Please login.');
    } else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Now login.');
        window.location.href = 'login.html';
    }
});
