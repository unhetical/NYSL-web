//EX2.1 SHOW TEXT

var name = "Starting javascript...";
console.log(name);

var myName = "Rubén";
console.log(myName);


//EX2.2 SHOW MY AGE

var age = 30;
console.log(age);


//EX 2.3 DIFERENCE MY AGE WITH IGNASI

var ignasiAge = 32;
console.log(ignasiAge);

var ageDiff = (age - ignasiAge); //30-32
console.log(ageDiff);


//EX 2.4 COMPARE AGE WITH 21

if (age < 21) {
    console.log("You are older than 21"); //+21
} else {
    console.log("You are not older than 21"); //-21
}


//EX 2.5 COMPARE AGES IF ELSE SHOW TEXT

if (age < ignasiAge) {
    console.log("You are older than ignasiAge") //+32
} else if (age > ignasiAge) {
    console.log("You are younger than ignasiAge") //-32
} else if (age = ignasiAge) {
    console.log("You have the same age as Ignasi") //=32
}

//EX3.1 ORDER NAMES AND SHOW

//VAR
console.log("names")

var names = ["Emy", "Dani", "Joan", "Wendy", "Lin", "Sinisa", "Slavik", "Santiago", "Rubén", "Alex", "Lluís", "Vasil"]; //NAMES CLASS


names.sort(); //ORDER
console.log(names[11]); //PRINT


//VAR

var i = 0;

//FOR LOOP


for (i = 0; i < names.length; i++) { //LESS +1
    console.log(names[i]); //PRINT
}


//EX 3.2 WHILE AGES

//VAR
console.log("ages")

var ages = [27, 31, 26, 28, 32, 31, 20, 29, 30, 35, 24, 33]; //AGES CLASS
console.log(ages); //PRINT

var j = 0

//WHILE LOOP AGES

while (j < ages.length) { //LOOP 0 TO 12, PRINT ,+1 POS LOOP
    console.log(ages[j]);
    j++;
}


//WHILE PAR

console.log("while par")
j = 0;

while (j < ages.length) { //MINOR DAN 12
    if (ages[j] % 2 == 0) { //RESIDUE DIVIDE VALOR POSITION = 0,PAR
        console.log(ages[j]); //PRINT POSITION
    }
    j++; //+1 POSITION LOOP
}

// FOR PAR

console.log("for par")
j = 0;

for (var j = 0; j < ages.length;) {
    if (ages[j] % 2 == 0) {
        console.log(ages[j])
    }
    j++;
}


// EX 3.3.3 FUNCTIONS

console.log("minAges")

j = 0;
ages = [27, 31, 26, 28, 32, 31, 20, 29, 30, 35, 24, 33];



//EX 3.3.3 FUNCTION MINIMUM NUMBER

function minAges(paramin_ages) {
    var min = ages[0]; //position 0
    for (var j = 0; j < paramin_ages.length; j++) { //COUNTER 0 MINOR OF 12POS +1
        if (paramin_ages[j] < min) { //IF POS NUMBER IS MINOR THAN MIN(COMPARE)
            min = paramin_ages[j]; //MIN IS POS NUMBER (X=Y) AND LOOP
        }
    }
    console.log(min); //PRINT MINOR NUMBER OF ALL AGES
}
minAges(ages); //CALL FUNCTION minAges (param_ages)





//EX 3.3.4 FUNCTION HIGHER NUMBER

console.log("maxAges")
j = 0;
ages = [27, 31, 26, 28, 32, 31, 20, 29, 30, 35, 24, 33];



function maxAges(paramax_ages) {
    var max = ages[0] //POSITION 0
    for (var j = 0; j < paramax_ages.length; j++) { //COUNTER 0 MIN OF 12POS +1
        if (paramax_ages[j] > max) { //IF POS NUMBER IS MIN THAN MAX(COMPARE)
            max = paramax_ages[j]; //MAX IS POS NUMBER (X=Y) AND LOOP
        }
    }
    console.log(max); //PRINT HIGHER NUMBER OF ALL AGES
}
maxAges(ages); //CALL FUNCTION maxAges (param_ages)


console.log("arrayPosition")

//EX3.3.5 FUNCTION,2 PARAMETERS,ARRAY,INDEX


var array1 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function position(array, paramPosition) { //INDEX DEFINE POSITION IN ARRAY1
    console.log(array[paramPosition])
}
position(array1, index)

//EX 3.3.6 FUNCTION VALUES REPEAT

console.log("arrayRepeat")

array1 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];


var array2 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];


function fillArray(array2) {
    var newArray = [];
    var k = j + 1;
    for (var j = 0; j < array2.length; j++) {
        for (var k = j + 1; k < array2.length; k++) {
            if (array2[j] == array2[k]) {
                newArray.push(array2[j])
            }
        }
    }
    console.log(newArray);
}

fillArray(array2);

// EX 3.3.7 FUNCTION ARRAY STRING
console.log("arrayString")

myColor = ["Red", "Green", "White", "Black"]; // COLORS ARRAY
var stringColors = myColor.join('", "'); // VAR(FILL ARRAY)TOGETHER COLORS WITH ", "
stringColors = "\"" + stringColors + "\""; // RESULT VAR = "COLOR"
console.log(stringColors); // PRINT RESULT VAR STRINGCOLORS


function sumText(myColor1) {
    var join = myColor.join("\", \""); {

    }
    console.log(join)
}

sumText(myColor);

function colors() {
    var textempty = "";
    for (var j = 0; j < myColor.length; j++) {
        textempty = textempty + "\"" + myColor[j] + "\"" + ", "
    }

    console.log(textempty)
}
colors(myColor);


//EX 4.1 REVERSE

console.log("String reverse");

function reverse(number) { //function
    number = number + ""; // sum "" to all number
    return number.split("") // return each number separate with ""
        .reverse() // reverse order
        .join(""); // put together the numbers again
}

console.log(reverse(12345)); // print function reverse(numbers to apply)

// EX 4.2 STRING ALPHABETICAL
console.log("Alphabetical");

text1 = "Alphabetical";

function alpha(paramAlpha) { // FUNCTION ORDER ALPHABETICAL
    return paramAlpha.split("") // RETURN RESULT OF SEPARE IN LETTERS
        .sort() // ORDER ALPHABETICAL
        .join("") // PUT TOGETHER ALL THE LETTERS
        .trim(); // ELIMINATE WHITESPACE BOTH SIDES
}

console.log(alpha(text1)); //PRINT FUNCTION ALPHA(INSIDE TEXT WILL APPLY)


// EX 4.3 FIRST LETTER UPPERCASE

text2 = "prince of persia"
console.log(text2);


function Upper(Mayus) { // FUNCTION MAYUS
    var textLow = Mayus.split(" "); //VAR = SEPARATE WORDS
    console.log(textLow);
    var textUpper = []; //NEW EMPTY ARRAY FOR RESULT
    for (var i = 0; i < textLow.length; i++) { //LOOP
        textUpper.push(textLow[i].charAt(0) // PUT IN NEWARRAY FIRST LETTER OF WORDS
            .toUpperCase() // CONVERT TU UPPER THE LETTERS IN NEWARRAY
            +
            textLow[i].slice(1)); // PUT THE WORDS LESS FIRST LETTER(POS 0) NEWARRAY
    }
    return textUpper.join(" "); //RESULT OF TOGETHER TOGETHER WORDS IN NEWARRAY
}
console.log(Upper(text2));      // PRINT APPLY FUNCTION TO TEXT2


// EX 4.4 LONGEST WORD

 text3 = "Web Development Tutorial"
console.log(text3);

function longW(str){
    var arrayW = str.split(" ");    //ADD 3 SEPARATE WORDS IN NEW ARRAY
    var max = arrayW[0] //VAR POSITION 0
    for (var j = 0; j < arrayW.length; j++) { //COUNTER 0 MIN OF LENGTH OF NEWARRAY
        if (arrayW[j].length > max.length) { //IF POS NUMBER IS MIN THAN MAX(COMPARE)
            max = arrayW[j]; //MAX CONVERT TO LONGEST WORD IN NEWARRAY) AND LOOP AGAIN
        }
    }
    console.log(max); 
}
longW(text3); //PRINT FUNCTION WILL APLLY TO TEXT3

