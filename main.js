/******************
 * YOUR CODE HERE *
 ******************/

 //#1//

 const indexedChars = function(str){
   let result = '';

for (let i = 0; i < str.length; i++){

result = result + i + str[i]
}
   return result;
 }
console.log(indexedChars('hello'))


//#2//

const exclaim = function(str){
let result = '';
//remove ? or . and then replace it with !//
for (let i = 0; i < str.length; i++){
const currentCharacter = str[i];

if (currentCharacter === '?'){
  result = result + '!';
} else if (currentCharacter === '.'){
  result = result + '!';
} else {
  result = result + currentCharacter;
}
}

return result;



}
console.log(exclaim('Hello?'))


//#3//

const repeatIt = function(str, num){
let result = '';
  
for (let i = 0; i < str.length; i++){

 //how to repeat string x amount of times// 
result = str.repeat([num]);
}
return result;
  
}
console.log(repeatIt('Hello', 3))

//#4//
const truncate = function(str){
  let result = '';
  for (let i = 0; i < str.length; i++){
     
result = str.substring(0, 15) + '...'


}
  return result;
    
  }
  console.log(truncate('Hellosfhausfgfjghfjhe'))

//#5//
const ciEmailify = function(str){
let result = '' 
for (let i = 0; i < str.length; i++){
  const currentCharacter = str[i].toLowerCase()
  if (currentCharacter === ' '){
    result = result + '.';  
  } else {
    result = result + currentCharacter;
} 
}
return result + '@codeimmersives.com';
}

console.log(ciEmailify('Colin Jaffe'))

//#6//
 // Looping from the end 
const reverse = function(str){
let result = '';


for(let i = str.length-1; i >= 0; i--) { 


result = str[i];
} 
   
 
return result; 
}
console.log(reverse('Francis'))

//#7//
const onlyVowels = function(str){
let result = '';
    
for (let i = 0; i < str.length; i++){
const currentCharacter = str[i].toLowerCase();
    if (currentCharacter === 'a' || currentCharacter === 'e' || currentCharacter === 'i' || currentCharacter === 'o' || currentCharacter === 'u'){
      result = result + currentCharacter;
    } else {
      result = result;
    
    }
    
  }
return result;
    
  
}
console.log(onlyVowels('francis'))

//#8//

const numberedChars = function(str){
let result = '';
    
for (let i = 0; i < str.length; i++){

  result = result + '(' + (i+1) + ')' + str[i]
}
   return result;

}
console.log(numberedChars('Francis'))

//#9//

const crazyCase = function(str, str2){
  let result = '';
      
  for (let i = 0; i < str.length; i++){
    if (str % 2 === 0)
   
    result = result + str.toUpperCase
  }
     return result;
  
  }
  console.log(crazyCase('Francis'))


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
