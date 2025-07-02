/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"*/


function toCamelCase(str){
    if(!str) return "";

    const words = str.split(/[-_]/);//разбиваем на массив
   for(let i=0;i<words.length;i++){
     if(i != 0){
        words[i]= upperFirst(words[i]);
     }
   }
    let word=words.join('');//соеденяем массив в стоку
    return word;
}
function upperFirst(word){
    if(!word) return"";
    return word.at(0).toUpperCase() + word.slice(1);//первую букву слова приводит к верхнему регистру
}
console.log(toCamelCase("to-Camel_case-"));