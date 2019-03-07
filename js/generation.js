

function generatePassword(){

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
    if(passLenght !== ''){
        for(let i = 0; i < passLenght.value; i++){
            //randomiza um caracter e adiciona a variavel text
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        results.innerHTML = text;
    }
}