console.log('1.1');

let celc = 8;

let forengeit = (9 / 5 )  * celc + 32;

console.log(forengeit);

console.log('1.2');

let name = 'Vasiliy';
let admin = name;

console.log(admin);

console.log('1.3');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(10	+	10	+	"10")	// к интовому результату прибавляем строку
console.log(10	+	"10"	+	10)	// к инту добавляем строку а потом полученное значение прибавляем к инту
console.log(10	+	10	+	+"10")	// сложение двух чисел, после добавляется строка
console.log(10	/	-"")	// из числа вычитается пустая строка
console.log(10	/	+"2,5") // число делим на строку
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log("2.2");

let a = 2;
let x = 1 + (a*=2);

console.log(x);

console.log("2.3");

let value1 = prompt('a: ');
let value2 = prompt('b: ');

if (value1 > 0 || value2 > 0) {
    console.log(value1 - value2);

} else if (value1 < 0 || value2 < 0){
    console.log(value1 * value2)
} else if(value1 > 0 || value2 < 0) {
    console.log (value1 + value2);

}

console.log("2.4");

function sum() {
    
    return  value1- -value2;
}
function mul() {
    return value1 * value2;
}
function del() {
    return value1 / value2;
}
function unsum() {
    return value1 - value2;
}
console.log(
    'summa' +' '+ sum(),
   'multiplicate' + ' '+  mul(),
   'delenit' +' '+ del(),
    'vichitanie' +' '+ unsum()
    );

console.log("2.5");

function mathOperation(value1, value2, operation) {
    switch(operation) {
        case 'summ':
            return value1- -value2
        break;
        case 'unsumm' :
            return value1 - value2
        break;
        case 'mult' :
            return value1 * value2
        break;
        case 'del' :
            return value1 / value2;
        break;

    }
}
mathOperation()


/*
console.log("2.6")

let val = prompt('inp val');
let pow = prompt('input pow');
function power( val, pow ) {
   
    if ( pow === 0 ) {
        return 1;
    }
    else {
        return val * power( val, pow - 1);
    }
}
alert(power())

*/