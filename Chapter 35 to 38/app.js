// Chapter 35 - 37 (Functions)


// 1. Code the first line of a function displayAlert.

// function greet(){
//     alert('Hello World ');
// }

// greet();



/*
2. Code a function named askName that prompts the user to "Enter 
name" and assigns the answer to userName, which hasn't been 
declared beforehand.
\*/

// function hello(name){
//     alert(`Hello ${name} How are You`)
// }

// hello(prompt('Enter Your Name','Noman khan'));



/*3. Code a function that calls 2 other functions.*/


// function calcHyp(base,perp){
//     function squarecalc(x){
//         return x*x;
//     }
//     function sqRoot(y){
//         return Math.sqrt(y);
//     }
//     var hyp=squarecalc(base) + squarecalc(perp);
//     return sqRoot(hyp);
// }

// var result=calcHyp(3,4);
// console.log(result);


/*
4. Code a function that displays a prompt, "Enter name" and then 
displays the name in an alert. Call the function.
*/

// function name_(InputName){
//    alert(`Hello ${InputName}`);
// }


// name_(prompt('Enter Your Name','Noman Khan'));



/*
5. Code the first line of a function named concat that has 3 
parameters, the first three letters of the alphabet. Call that takes 
a variable, a string, and a number as arguments.
*/
//  var name_='Noman Khan';

//  function call(char,str,VAr){
//        alert(`${char}  ${str}   ${VAr}`);
//  }


//  call('Hello','123',name_);


/*
6. Code a function that has 2 parameters. Concatenate them and 
assign the result to a variable that hasn't been declared 
beforehand.*/


// function greet(firstName,LastName){
//     var fullName=`${firstName} ${LastName} Hello`;
//     return fullName;

// }

// var result=greet('Faizan',' Abid');
// console.log(result);


/*
7. Code a function that has three parameters. Multiply them and 
assign them to a variable that hasn't been declared yet.
*/


// function mul(a,b,c){
//     var Multiply=a*b*c;
//     console.log(Multiply);

// }

// mul(5,5,5);



/* 8. Write a JavaScript function that takes an array of numbers as 
input and returns the average of those numbers.
*/

// var arr=[5,5,5,5,5,5];

// function averageArray(){
    
  
// }

/*
9. Write a JavaScript function that takes two parameters and returns 
their sum
*/

// function sum(a,b){
//     return a+b;
// }

// var result=sum(5,4);
// console.log(result);


/*
10. Write a JavaScript function that takes an array of numbers as 
input and returns the average of those numbers
*/

// same as question 8

/*
11. You have to capture the returned value from a function and 
store it in a variable?
*/

// function re(a){
//     return a;

// }

// var result=(5);
// console.log(result);


// function WordCount(word){
//     return word.length;
// }

// var result=WordCount('Pakistan');
// console.log(result);

// word counter 
// function words(w){
//    var count=w.split(' ');
//    return count.length;
// }

// var result=words('Pakistan is an Islamic Country');
// console.log(result)


/*
13. Write a function to set (year) in date object.

*/

// function year(inputYear){
//     var nowdate=new Date();
//     nowdate.setFullYear(inputYear);
//     console.log(nowdate);
// }

// year(2020)


// function ageCalc(InputDateOfBirth){
//     var nowDate=new Date();
//     var nowDateMilli=nowDate.getTime();
//     var DOB=new Date(InputDateOfBirth);
//     var DOBMill=DOB.getTime();
//     var age=Math.floor((nowDateMilli-DOBMill)/(1000*60*60*24*365.2));
//     return age;
// }

// var result=ageCalc('Feb 18, 2004');
// console.log(result)

/*
15. Write a function which tells the presense of (word) in an 
array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
result should be in true or false
*/
// arr = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];

// function check(InputName){
//   if(arr.indexOf(InputName)!=-1){
//     console.log('Found');
//   }
//   else{
//     console.log('Not Found')
//   }
// }
// check('zaid')



/*
16. Write a function which repeat (letter) 10 times.
Hint: "abcde" str.repeat(10)
*/

// function reapeatWord(InputWord){
//     reapeatWord(InputWord,10);
   
// }

// reapeatWord('Pakistan ')

/*
17. write a function which reverse array = ['a','b','c','d','e']
Hint: arr.reverse()
*/

// function reverse_(){
//     var array = ['a','b','c','d','e'];
//     array.reverse();
//     console.log(array);
// }

// reverse_()

// Chapter 38 (Local vs. Global 
//     Variables)


// 1. Write a JavaScript function that demonstrates the usage of a local 
// variable.

// function local(){
//     var a=5;
//     console.log(a);// a is only used in the scope of this perticular function;

// }

// local();

/*
2. How can you access a global variable inside a function in 
JavaScript?
*/

// var a=5;
// function fl(){
//     a=7;
// }
// fl();
// console.log(a);



