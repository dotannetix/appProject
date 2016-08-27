var person = {
	name : "dotan",
	age : 23
};
var num1 = 7;
var array = [person, 2, 5, num1, 10];

//
// for(key in person)
// {
// console.log(key+":" ,person[key])
// }
//
// for(var i =120; i<=140; i++)
// {
// console.log(i)
// }

// console.log("array",array)
//
// for(var i=0; i<array.length;i++)
// {
// var num=array[i];
// console.log(num)
// }

// for(var i=0;i<5;i++)
// {
// for(var j=0;j<=i;j++)
// {
// document.write("*");
// }
// document.write("<br>");
// }

// for (x="*";x.length<=5;x=x+"*")
// {
// document.write(x+"<br>");
// }
// var star = ' '
// for(var i=0;i<5;i++){
// star += "*";
//
// console.log(star)
// }

var person1 = {
	name : "Safa",
	height : "2.20"
}
var person2 = {
	name : "Diana",
	height : "1.70"
}
var person3 = {
	name : "dotan",
	height : "1.80"
}
var persons = [];
persons.push(person1)
persons.push(person2)
persons.push(person3)
for (var i = 0; i < persons.length; i++) {
	document.write("<div>")
	for (var param in persons[i]) {
		var person = persons[i]
		document.write(person[param])
	}
	document.write("</div>")

};

// console.log(persons);
//
// for (var i = 0; i < persons.length; i++) {
//
// var person = persons[i];
// var name = person.name;
// var height = person.height;
// if (height <= 1.70) {
// document.write(name + " height is " + height + "<br>");
// }
//
// };

// for (var i = 1; i <= 10; i++) {
//
// for (var j = 1; j <= 10; j++) {
// var num = i * j;
// if (num / 10 < 1) {  // חד סיפרתי
// document.write("00" + num + " ");
// } else if (num / 100 < 1) { //  דו ספרתי
// document.write("0" + num + " ");
// } else { // תלת ומעלה
// document.write(num + " ");
// }
//
// };
// document.write("<br>");
// };

