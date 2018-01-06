var a = 10;
var b = 120;
var value = (a * a) - (2 * a * b) + (b * b);
if(value < 0) {
	result = "wynik ujemny";
} else if(value == 0) {
	result = "wynik wynosi 0";
} else {
	result = "wynik dodatni";
}
console.log(result);
