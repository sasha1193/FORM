
    
    const loginForm = document.querySelector('#login');
    const createForm = document.querySelector('#createAccount');

    const username = document.querySelector('#username');
    const password = document.querySelector('#password'); 
    const email = document.querySelector('#email');
    const password2 = document.querySelector('#password2');

    const usernameLogin = document.querySelector('#usernameLogin');
    const passwordLogin = document.querySelector('#passwordLogin');

    const errorMessageUser = document.querySelector('.form__error--username');
    const errorMessagePass = document.querySelector('.form__error--password');
    const errorMessageEmail = document.querySelector('.form__error--email');
    const errorMessagePass2 = document.querySelector('.form__error--password2');

    const errorMesageUserLogin = document.querySelector('.form__error--usernameLogin');
    const errorMessagePassLogin = document.querySelector('.form__error--passwordLogin');

    function changeAddRemove () {
        loginForm.classList.add('form--hidden');
        createForm.classList.remove('form--hidden');
    }

    function changeRemoveAdd () {
        loginForm.classList.remove('form--hidden');
        createForm.classList.add('form--hidden');
    }

    document.querySelector('.linkCreateAccount').addEventListener('click', (e) => {
        e.preventDefault();
        changeAddRemove()
        })
  
    
    document.querySelector('.linkLogin').addEventListener('click', (e) => {
        e.preventDefault();
        changeRemoveAdd();
        })
 
    
        document.querySelector('.linkCreateAccountNav').addEventListener('click', (e) => {
            e.preventDefault();
            changeAddRemove()

        })
    
        document.querySelector('.linkLoginNav').addEventListener('click', (e) => {
            e.preventDefault();
            changeRemoveAdd();
        })
	

    createForm.addEventListener('submit', (e) => {

        let userMessage = "";
        let emailMessage = "";
        let passMessage = '';
        let passMessage2 = "";
        if (username.value === "" || username.value === null){
            e.preventDefault();

            userMessage = 'Name is required';
            errorMessageUser.innerText = userMessage;
        }

        if(email.value === "" || email.value === null) {
            e.preventDefault();

        emailMessage = 'Email is required';
        errorMessageEmail.innerText = emailMessage;
       }
       if (password.value === '' || password.value === null) {
        e.preventDefault();

        passMessage = "Password is required";
        errorMessagePass.innerText = passMessage;
       } else if (password.value.length < 6 || password.value.length > 15) {
        e.preventDefault();

        passMessage = "Password must contain between 6 and 15 charachters";
        errorMessagePass.innerText = passMessage;
       }

       if(password2.value === '' || password2.value === null) {
        e.preventDefault();

        passMessage2 = "Password is required";
        errorMessagePass2.innerText = passMessage2;
       }
        else if(password.value !== password2.value) {
            e.preventDefault();

            passMessage2 = "Password must match";
            errorMessagePass2.innerText = passMessage2;
        }
       
    })
 

    loginForm.addEventListener('submit', (e) => {
        let messageUsername = "";
        let messagePassword = "";


        if(usernameLogin.value === "" || usernameLogin === null) {
            e.preventDefault();
            messageUsername = "Username is required";
            errorMesageUserLogin.innerText = messageUsername;
        }

        if(passwordLogin.value === "" || errorMesageUserLogin === null) {
            e.preventDefault();
            messagePassword = "Password is required";
            errorMessagePassLogin.innerText = messagePassword;
        }
    })
   