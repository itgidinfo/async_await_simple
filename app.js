document.querySelector('button').addEventListener('click', () => {
    let pass = document.querySelector('.password').value;
    pass = pass.trim();
    // console.log(validatePassword(123));
    console.log(validatePassword(pass));
});
