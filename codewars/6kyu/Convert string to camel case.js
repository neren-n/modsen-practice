/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"*/


function toCamelCase(str){
    if(!str) return "";

    const word = str.split(/[-_]/);//разбиваем на массив
    let word2=word.map(upperFirst);//применяем upperFirst к каждом уэлементу массива
    word2=word2.join('');//соеденяем массив в стоку
    return word2;
}
function upperFirst(word){
    if(!word) return"";
    return word.at(0).toUpperCase() + word.slice(1);//первую букву слова приводит к верхнему регистру
}
console.log(toCamelCase("to-Camel_case-"));