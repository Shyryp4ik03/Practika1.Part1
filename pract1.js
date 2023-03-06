function firstPair(str) 
{
var strLen = str.length;
var output = "";
var p = 0, m = 0,i = 0;
	for(; i < strLen ; i++)
	{
		if(treatString(str, i + 1).search(str[i]) != -1)// если символ встречается дальше в строке
		{
		var output = output + str[i];
		if(p == 0){
		m = i;
		alert(m);
		p++;}
		alert(output);
		}
	}
}

function treatString(str, indSt, indEnd = -1)    // обработка значений в строке
{
var output = "";
var strLen = str.length;
	if (indEnd == -1)
	indEnd = strLen;

	if (indSt >= strLen)
	return -1;                          // ограничение

	for (var k = indSt; k < indEnd; k++)
	{
	output += str[k];
	}
	return output;
}

var str_inp = prompt("Введите строку для проверки:");

alert(firstPair(str_inp));

