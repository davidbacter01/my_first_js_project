let age = 31;
let years = 10;
console.log(age);
// console.log(years);
age = 36;
console.log(age);

const piNumber = 3.14;
console.log(piNumber);

let userName = 'David';
console.log('name: ');
console.log(userName);

// Operatori date numerice

// adunare
let firstNumber = 10;
firstNumber = 12;
let secondNumber = 21;
let sum = firstNumber + secondNumber;
console.log(`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}`);

// scadere
let pastAge = age - years;
console.log(`Acum ${years} ani aveam varsta de ${pastAge}`);
console.log(`Acum ${years} ani aveam varsta de ${age - years}`);

// inmultire
let numberA = 5;
let numberB = 10;
let multiplyResult = numberA * numberB;
console.log(`${numberA} inmultit cu ${numberB} da ${multiplyResult}`);

// Impartire
let numberC = 25;
let numberD = 10;
let divisionResult = numberC / numberD;
console.log(`${numberC} impartit la ${numberD} rezulta ${divisionResult}`);

// Restul impartirii
let numberE = 15;
let numberF = 4;
let moduloResult = numberE % numberF;
console.log(`Resutl impartirii lui ${numberE} la ${numberF} este ${moduloResult}`);


// cum aflam cel mai mare numar de tip NUMBER
console.log(Number.MAX_SAFE_INTEGER);

// cum aflam cel mai mic numar de tip NUMBER
console.log(Number.MIN_SAFE_INTEGER);

// numere de tip BigInt
let bigIntNumber = 12491241924819n;
console.log(`BigInt value is ${bigIntNumber}`);


// String operations
const myName = 'David Bacter';

// afisarea unui caracter de la o pozitie
// primul caracter
const firstCharInName = myName[0];
console.log(`Primul caracter din sirul '${myName}' este ${firstCharInName}`);

// lungimea sirului
const myNameLength = myName.length;
console.log(`Lungimea sirului '${myName}' este ${myNameLength}`);

// ultimul caracter din string
let lastCharIndex = myNameLength - 1;
let lastChar = myName[lastCharIndex];
console.log(`Ultimul caracter din sir este ${lastChar}`);

// concatenare de stringuri
let firstName = 'David';
let lastName = 'Bacter';
let separator = ' ';
let fullName = firstName + separator + lastName;
console.log(`Numele meu complet este ${fullName}`);

// verificare numar par/impar

let checkedNumber = 21;

let remainder = checkedNumber % 2;

let isEven = remainder === 0;
console.log(`Number ${checkedNumber} is even: ${isEven}`);

// Date booleene (true/false)

let isAdult = true;
console.log(`isAdult = ${isAdult}`);
let isOld = false;
console.log(`isOld = ${isOld}`);

// date null sau undefined
let nullValue = null;
console.log(`nullValue = ${nullValue}`);

let notInitialized;
console.log(`notInitialized = ${notInitialized}`);


// adaugare +1 la un numar (incrementare)
let x = 10;
console.log('x=', x);

x++;
console.log('x=', x);

// operatii de comparatie

//compararea egalitatii ==
let value1 = 22;
let value2 = 22;
let value3 = 23;
let value4 = '22';

let firstCompareResult = value1 == value2;
console.log(`${value1} == ${value2} => ${firstCompareResult}`);
let secondCompareResult = value1 == value3;
console.log(`${value1} == ${value3} => ${secondCompareResult}`);
let stringAndNumberEquality = value1 == value4;
console.log(`${value1} == ${value4} => ${stringAndNumberEquality}`);

// comparator egalitate stricta ===
let strictEqualCompare = value1 === value4;
console.log(`${value1} === ${value4} => ${strictEqualCompare}`);

let strictEqualCompareNumbers = value1 === value2;
console.log(`${value1} === ${value2} => ${strictEqualCompareNumbers}`);

// comparator mai mic (<) mai mic sau egal(<=)
let num1 = 5;
let num2 = 6;
let num3 = 5
let lessThanComparison = num1 < num2;
console.log(`${num1} < ${num2} => ${lessThanComparison}`);
let lessThanComparison2 = num2 < num1;
console.log(`${num2} < ${num1} => ${lessThanComparison2}`);
let lessOrEqualComparison = num1 <= num2;
console.log(`${num1} <= ${num2} => ${lessOrEqualComparison}`);
let lessOrEqualComparison2 = num1 <= num3;
console.log(`${num1} <= ${num3} => ${lessOrEqualComparison2}`);

// OPERATORI LOGICI
let trueValue = true;
let falseValue = false;

// si logic (&&)
let logicalAndResult = trueValue && falseValue;
console.log(`${trueValue} && ${falseValue} => ${logicalAndResult}`);

logicalAndResult = falseValue && falseValue;
console.log(`${falseValue} && ${falseValue} => ${logicalAndResult}`);

logicalAndResult = trueValue && trueValue;
console.log(`${trueValue} && ${trueValue} => ${logicalAndResult}`);

// sau logic (||)
let logicalOrResult = trueValue || falseValue;
console.log(`${trueValue} || ${falseValue} => ${logicalOrResult}`);

logicalOrResult = falseValue || falseValue;
console.log(`${falseValue} || ${falseValue} => ${logicalOrResult}`);

logicalOrResult = trueValue || trueValue;
console.log(`${trueValue} || ${trueValue} => ${logicalOrResult}`);

// negare logica (!) - not operator
let notTrueValue = !trueValue;
console.log(`!${trueValue} => ${notTrueValue}`);

let notFalseValue = !falseValue;
console.log(`!${falseValue} => ${notFalseValue}`);