document.addEventListener('DOMContentLoaded', function() {
    const submit_button = document.getElementById('button_submit');
    submit_button.addEventListener('click', send_logindata);
  
    function send_logindata() {
        const username_input = document.getElementById('un_in').value;
        const password_input = document.getElementById('pw_in').value;

        const un_error = document.getElementById('un_error');
        const pw_error = document.getElementById('pw_error');

        if (!username_input || !password_input) 
        {
            un_error.style.opacity = 1;
            pw_error.style.opacity = 1;
        }
        else 
        {
            un_error.style.opacity = 0;
            pw_error.style.opacity = 0;
            
            fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username_input, password: password_input})
            })
            .then(response => response.json())
            .then(data => console.log(data));
        }
    }
});