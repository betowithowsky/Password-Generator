

function generatePassword() {

    //guarda o elemento passLenght na variavel
    var passLenght = document.getElementById('passLenght');
    //tira qualquer caracter que não seja um numero de 0 a 9
    var userInput = passLenght.value.replace(/[^0-9.]/g, "");

    document.getElementById('senhaGerada').setAttribute("style", 'text-align: center; display: block');

    //atualiza o campo de entrada
    passLenght.value = userInput;
    //guarda o elemento resulta na variavel para adicionar o password gerado mais tarde
    var results = document.getElementById('results');
    //variavel do password gerado
    var text = "";
    //caracters que serão utilizados para gerar a senha
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()";
    //se o campo de entrada não estiver vaziu
    if (passLenght !== '') {
        for (let i = 0; i < passLenght.value; i++) {
            //randomiza um caracter e adiciona a variavel text
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        results.innerHTML = text;
        check();
    }
}

function check() {
    const isStrong = ["Muito Facil", "Facil", "Boa", "Forte", "Muito Forte"];
    let score = 0;

    let pswd = document.getElementById('results').innerHTML;

    score = hasLatter(pswd) + hasNumbers(pswd) + hasSymbols(pswd) + hasLenght(pswd);

    console.log(pswd);
    console.log(score);

    if (score > 8) {
        document.getElementById("scorePass").innerHTML = isStrong[4];
    }
    else if (score > 6) {
        document.getElementById("scorePass").innerHTML = isStrong[3];
    }
    else if (score > 4) {
        document.getElementById("scorePass").innerHTML = isStrong[2];
    }
    else if (score > 2) {
        document.getElementById("scorePass").innerHTML = isStrong[1];
    }
    else {
        document.getElementById("scorePass").innerHTML = isStrong[0];
    }


    //6 4 2

    function hasLenght(pswd) {

        if(pswd.length > 11){
            return 3;
        }
        else if(pswd.length > 7){
            return 2;
        }
        else if(pswd.length > 4){
            return 0;
        }
        else
        return -10;

    }

    function hasLatter(pswd) {

        let nonCap = /[a-z]/;
        let cap = /[A-Z]/g;
        let matchesCap = pswd.match(cap);
        let matchesNonCap = pswd.match(nonCap);

        if (matchesCap && matchesNonCap) {
            if (matchesCap.length > 2)
                return 3;
            else
                return 2;
        } else if (matchesCap || matchesNonCap)
            return 1;
        else
            return 0;

    }

    function hasNumbers(pswd) {

        let numbers = /[\d]/;
        let matchesNumbers = pswd.match(numbers);

        if (matchesNumbers) {
            if (matchesNumbers.length > 2)
                return 3;
            else
                return 2;
        } else
            return 0;

    }

    function hasSymbols(pswd) {

        let symbols = /[\W]/g;
        let matchesSymbols = pswd.match(symbols);

        if (matchesSymbols) {
            if (matchesSymbols.length > 2)
                return 2;
            else
                return 1;
        } else
            return 0;

    }
}