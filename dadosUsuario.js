//Luiz Otavio Miranda tem 30 anos, pesa 84kg
//tem 1.8 de altura e seu IMC é de
//25,9259
//luiz miranda nasceu em 1980

const nome = "Luiz Otavio Miranda";
const sobrenome = "Miranda";
const peso = 80;
let idade = 30;
const altura = 1.80;
const ano_nascimento = 1980;

let IMC = peso / (altura * altura);

console.log(nome + " tem " + idade + " anos, pesa " + peso + " kg;");
console.log("Tem " + altura + " de altura e seu IMC é de " + IMC);
console.log (`${nome.split(" ")[0].toLowerCase()} ${sobrenome.toLowerCase()} nasceu em ${ano_nascimento}`);
