var a = Number(prompt('Введіть A'));
var b = Number(prompt('Введіть B'));
var c = Number(prompt('Введіть C'));

var result = quadraticEquation(a, b, c);
document.write(result);

function quadraticEquation (a, b, c)
{
    var result;
    
    if (a === 0) {
        result = 'Помилка, введіть число А,яке не дорівнює 0'
        return result;
    }
    var d = calcDiscriminant(a, b, c);
    
    if (d < 0 ) {
        result = 'Дискримінант відємний, рівняння розвязків не має';
        return result;
    }
    if (d === 0) {
        result = calczero(a,b);
        return result;
    }
    var x1= (-b+(Math.sqrt(d)))/ 2*a;
    var x2= (-b-(Math.sqrt(d)))/ 2*a;
    
    
    return 'x1= ' + x1 + ', x2= ' + x2 ;
}

function calcDiscriminant(a, b, c){
    return b*b-4*a*c;
    
}

function calczero(a, b) {
   return -b/2*a;
}