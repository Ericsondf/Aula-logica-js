var n1 = 30 
var n2 = 55
var n3 = 4
var media = (n1 = n2 + n3)/3
 
console.log ('numero1= ',n1);
console.log ('numero2= ',n2);
console.log ('numero3= ',n3);

if((n1>100 || n1<0) || (n2>100 || n2<0) || (n3>100 ||  n3<0))
{
    console.log (' A operaçao esta errada pois necessita de numero acima ou igual a 0 ou abaixo ou igual a 100')
}

else{
    console.log(`a soma de ${n1} + ${n2} + ${n3} dividido por 3 media é`,media)
}