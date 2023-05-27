// Chapter 21 (Changing Case) 

/*
1. Type the characters that are missing from this code.
var allLower = userInput.toLowerCase;
Note: Correct this statement by yourself.
*/

// var userInput=prompt('Enter Your UserName','Nomankhani42');
// userInput=userInput.toLowerCase();
// console.log(userInput);


/*
2. Convert the string represented by x to lower-case and assign the 
result to the same variable.
*/

// var x='String';
// x=x.toLowerCase();
// console.log(x);

/*
3. Convert the string represented by y to upper-case and assign the 
result to the same variable.
*/

// var uppercasele='noman Khan';
// uppercasele=uppercasele.toUpperCase();
// console.log(uppercasele)

/*
4. Convert the string represented by a variable to lower-case and 
assign the result to a second variable that hasn't been declared 
beforehand.
*/
// var low='Noman Khan';
// var newWord=low.toLowerCase();
// console.log(newWord)

/*
5. Convert the string represented by an array element to lower-case 
and assign it to a variable that hasn't been declared beforehand.
*/

// var arr=['Noman','Faizan'];
// var ele=arr[1].toLowerCase();
// console.log(ele);

/*
6. Display in an alert the upper-case version of the string 
represented by a variable.
*/
// var word='Noman Khan';
// alert(word.toUpperCase());

/*
7. var cityName = kaRacHi;
Convert the string represented by a cityName in Capitalisation is 
the writing of a word with its first letter in uppercase and the 
remaining letters in lowercase
*/

// var userInput=prompt('Enter Your Full Name','Noman Khan');
// var userNameArray=userInput.split(' ');
// for(var i=0;i<userNameArray.length;i++){
//     userNameArray[i]=userNameArray[i].slice(0,1).toUpperCase() + userNameArray[i].slice(1).toLowerCase();
// }
// userInput=userNameArray.join(' ');
// console.log(userInput);


// Chapter 22 - 25 (Strings)

/*
1. "captain" has been assigned to variable “sameWords”. You want 
to slice "ap" out of it.
*/
// var sameWord='captain';
// console.log(sameWord.slice(1,3)

/*
2. The number of characters in the string will be assigned to the 
variable.
*/
// var char='Character';
// console.log(char.length);

/*
3. The string "elephant" has been assigned to the variable animal. 
Slice the four middle characters out of the string and assign it to 
the variable seg, which hasn't been declared beforehand.
*/
// var animal='Elephant';
// var copy=animal.slice(2,6);
// console.log(copy);


/*
4. Find the number of characters in the string represented by a 
variable and assign the number to a second variable
 */

// var char='String';
// var num=char.length;
// console.log(num)

/*
5. In a first statement measure how many characters there are in a 
string represented by a variable. In a second statement slice all 
but the first character and last 3 characters of the string and 
assign it to a second variable that hasn't been declared 
beforehand.
*/

// var char='Character';
// var newChar=char.slice(0,1) + char.slice(6);
// console.log(newChar);
/*
6. var text = "To be or not to be.";
var indx = text.indexOf("be");
What is the value of indx?
*/

// var text = "To be or not to be.";
// var indx=text.indexOf('be');
// console.log(indx)

/*
7. var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
What is the value of indx?
*/

// var text = "To be or not to be.";
// var indx=text.lastIndexOf('be');
// console.log(indx)

/*
8. Find the index of the first character of the last instance of "go" in 
the string represented by the variable text and assign the number 
to the variable indx, which hasn't been declared beforehand.
*/

// var text='I go to School . I go to Market';
// var indx=text.lastIndexOf('go');
// console.log(indx)


/*
9. Code the first line of an if statement that tests whether a segment 
with an index represented by indexNum exists in a string.
*/

// var Names=['Noman','Faizan','Huzaifa'];
// var userInput=prompt('Enter Your Name','Noman');
// userInput=userInput.slice(0,1).toUpperCase() + userInput.slice(1);

//     if(Names.indexOf(userInput)!=-1){
//           console.log('Found');
//     }
// else{
//     console.log('Not Found');
// }

/*
10. In this string "abcde", what character is at index 2? (Use 
charAt)
*/
// var string='abcde';
// var indx=string.charAt(2)
// console.log(indx);
/*
11. Find the 10th character in the string represented by text and 
assign it to the variable cha, which hasn't been declared 
beforehand.

*/
// var sent='I am Going To School';
// var indx=sent.charAt(10);
// console.log(indx)




