const prompt = require('prompt-sync')({sigint: true})
        var n1 = parseFloat(prompt("Digite o primeiro numero: "));
console.log(n1)
        var n2 = prompt("Digite o segundo numero: ");
console.log(n2); 
    n2 = parseFloat(n2);
console.log(n3);
        var n3 = prompt("Digite o terceiro numero: ");
    n3 = parseFloat(n3);
    soma= n1 + n2 + n3;
        var resutado = n1+n2+n3

        var n4 = prompt("Digite o Quarto numero: ");
    n4 = parseFloat(n4);
    soma= n1 + n2 + n3;
    soma= soma/n4;
        var resutado = (n1+n2+n3)/n4


console.log(`Soma dos resutados é igual a ${resutado}`)
