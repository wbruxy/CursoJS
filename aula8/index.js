//Exercícios Const e Let

/*
Bruna Cristina da Silva tem 18 anos, pesa 80 kg 
tem 1,73 de altura e seu IMC é de 26.729927495071667
Bruna Silva nasceu em 2005
*/

const nome = 'Bruna Cristina';
const sobrenome = 'da Silva';
const idade = '18';
const peso = '80';
const alturaEmM = '1.73';
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
