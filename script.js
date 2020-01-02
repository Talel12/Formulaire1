// Submit btn
var testAcc = document.getElementById('sub-btn');

testAcc.addEventListener('click', verification);


//les conteneurs de messages d'erreurs
var errFirst = document.getElementById('err-first');
var errLast = document.getElementById('err-last');
var errAdr = document.getElementById('err-adr');
var errMail = document.getElementById('err-mail');
var errPwd = document.getElementById('err-pwd');

//testAcc.addEventListener('click', verification);

function verification(event) {
    //regex value
    var pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    var mailRegex = /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/;
    //les Valeur saisie par clavier(par utilisateur)
    var first = document.getElementById('first');
    var last = document.getElementById('last');
    var adr = document.getElementById('adr');
    var email = document.getElementById('email');
    var pwd = document.getElementById('pwd');

    //verifier les champs  *******
    //-------------First Name---------------

    if (first.validity.valueMissing) {
        event.preventDefault();
        errFirst.innerHTML = 'Whrite your first name <br>';
    } else {
        errFirst.innerHTML = '';
    }

    //----------Last Name----------------

    if (last.validity.valueMissing) {
        event.preventDefault();
        errLast.innerHTML = 'Whrite your last name <br>';
    } else {
        errLast.innerHTML = '';
    }
    //--------------Adresse--------------

    if (adr.validity.valueMissing) {
        event.preventDefault();
        errAdr.innerHTML = 'Your adresse is required <br>';
    } else {
        errAdr.innerHTML = '';
    }
    //--------------Email-----------------

    if (email.validity.valueMissing) {
        event.preventDefault();
        errMail.innerHTML = 'Whrite your E-mail <br>';
    } else if (mailRegex.test(email.value) == false) {
        event.preventDefault();
        errMail.innerHTML = "Doesn't have a valid e-mail adress <br>";
    } else {
        errMail.innerHTML = "";

    }
    //---------------Password---------------

    if (pwd.validity.valueMissing) {
        event.preventDefault();
        errPwd.innerHTML = 'Are you sure !! Whrite a Password <br>';
    } else
    if (pwd.value.length < 8) {
        event.preventDefault();
        errPwd.innerHTML = 'The password has less than 8 characters <br>';
    } else if (pwdRegex.test(pwd.value) == false) {
        event.preventDefault();
        errPwd.innerHTML = 'The password must be a combination of charatacters , numbers and at least a capital letter <br>';

    } else {
        errPwd.innerHTML = '';
    }
    //***********************************

}
