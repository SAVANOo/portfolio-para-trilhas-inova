function calcIdade(data_aniversario) {
    var ano_atual = new Date().getFullYear();
    var ano_informado = data_aniversario.split('/')[2];
    var idade = ano_atual - ano_informado;

    document.getElementById("idade").innerText = idade;

    console.log(idade);
}

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {

        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 75 * i)

    });
}

const titulo = document.querySelector('.Home-Texts-Name');
typeWrite(titulo);
calcIdade("04/01/2004");