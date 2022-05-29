//this comment is to this document
console.log("Initiating Javascript Learn")


let age = 23;
let nome = 'Júnior'
let maioridade;
function plus_eighteen(age) {
if (age >= 18) {
    maioridade = true
    console.log("maior de idade, Idade: ", age, maioridade)
}
else{
    maioridade = false
    console.log("menor de idade, Idade: ", age, maioridade)
}
};
let nomeCompleto;
plus_eighteen(age);
//      associação dos scripts acima ao html
document.getElementById('p1').innerHTML = 'Ola ' + nome
document.getElementById('p2').innerHTML = 'Tua idade ' + age
document.getElementById('p3').innerHTML = 'É maior de Idade: ' + maioridade

document.getElementById('submitbutton').onclick = function() {
    nomeCompleto = document.getElementById('name-box').value;
    document.getElementById('fullname').innerHTML = nomeCompleto
}
