window.onload = function() {
    const header_button = document.getElementById('login');
    const create_button = document.getElementById('create_account');
    const login_button = document.getElementById('login_switch');

    const div_login = document.getElementById('login_field');
    const div_create = document.getElementById('create_account_field');

    const input_un = document.getElementById('un_in');

    const close_login = document.getElementById('close');
    const close_create = document.getElementById('close_create');

    // Login
    if (header_button && div_login) 
    {
      header_button.addEventListener('click', () => {
        div_login.style.opacity = 1;
        close_login.style.opacity = 1;
        close_login.style.pointerEvents = "all";
        create_button.style.opacity = 1;
      });
    }
    else 
    {
        console.error('Could not find button or div element.');
    }

    if (close_login && div_login) 
    {
        close_login.addEventListener('click', () => {
            div_login.style.opacity = 0;
            close_login.style.opacity = 0;
            close_login.style.pointerEvents = "none";
        });
    }
    else 
    {
        console.error('Could not find button or div element.');
    }

    // Create Account
    if (create_button && div_create) 
    {
        create_button.addEventListener('click', () => {
            div_create.style.opacity = 1;
            close_create.style.opacity = 1;
            close_create.style.pointerEvents = "all";
            div_login.style.opacity = 0;
            close_login.style.opacity = 0;
            login_button.style.opacity = 1;
        });
    }
    else 
    {
        console.error('Could not find button or div element.');
    }

    if (close_create && div_create)
    {
        close_create.addEventListener('click', () => {
            div_create.style.opacity = 0;
            close_create.style.opacity = 0;
            close_create.style.pointerEvents = "none";
            login_button.style.opacity = 0;
        });
    }
    else
    {
        console.error('Could not find button or div element.')
    }

    if (login_button && div_login) 
    {
        login_button.addEventListener('click', () => {
            div_login.style.opacity = 1;
            close_login.style.opacity = 1;
            close_login.style.pointerEvents = "all";
            close_create.style.pointerEvents = "none";
            close_create.style.opacity = 0;
            div_create.style.opacity = 0;
            login_button.style.opacity = 0;
            close_login.addEventListener('click', () => {
                div_login.style.opacity = 0;
                close_login.style.opacity = 0;
                close_login.style.pointerEvents = "none";
            });
        });
    }
}