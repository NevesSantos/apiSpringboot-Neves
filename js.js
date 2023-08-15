const formulario = document.querySelector('form');
const iNome = document.getElementById('nome');
const iEmail = document.getElementById('email');
const iSenha = document.getElementById('senha');
const iTel = document.getElementById('tel');

formulario.addEventListener('submit', function(){
    event.preventDefault();
    console.log(iNome.value);
    console.log(iEmail.value);
    console.log(iSenha.value);
    console.log(iTel.value);
});

function cadastrar() {

    fetch("http://localhost:8080/cadastrar",
    {
        Headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:"POST",
        body: JSON.stringify({
            nome: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itel.value
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })

};

function limpar (){
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = "";
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    cadastrar();
    limpar();
});
