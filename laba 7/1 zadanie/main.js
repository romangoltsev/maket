/*Написать	функцию,	преобразующую	число	в	объект.	Передавая	на	вход	число	от	0	
до	999,	надо	получить	на	выходе	объект,	в	котором	в	соответствующих	свойствах	
описаны	единицы,	десятки	и	сотни.	Например,	для	числа	245	надо	получить	
следующий	объект: {‘единицы’:	5,	‘десятки’:	4,	‘сотни’:	2}.	Если	число	превышает	
999,	необходимо	выдать	соответствующее	сообщение	с	помощью	console.log и	
вернуть	пустой	объект. */


let max = 999;
//let min = 0;

let values = {
    number : +prompt('Введите число от 0 до 999'),     
    units : 0,
    tens : 0,
    thousend : 0
};

if (values.number <=9){
    values.units =  values.number
} else if (values.number <= 999){
    values.units = Math.floor(values.number % 10);
    values.tens = Math.floor(values.number / 10 % 10);
    values.thousend = Math.floor(values.number / 100 % 10);
  } else {
    values.number = 0;
      console.log('Вы ввели число за диапазоном 0 - 999');
  }
  document.write("Единицы: "+values.units);
  document.write("<br>Десятки: " + values.tens);
  document.write("<br>Сотни: " + values.thousend);

