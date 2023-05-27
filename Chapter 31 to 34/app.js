// Chapter 31 - 34 (Date & Time)

/*
1. Code a statement that creates a new Date object and assigns it to 
dObj, which hasn't been declared beforehand.
*/
// var d=new Date();
// console.log(d);

/*
2. Code a statement that creates a new Date object, converts it to a 
string, and assigns the string to dStr, which hasn't been declared 
beforehand.
*/
// var d=new Date();
// console.log(typeof d);
// var dString=toString(d);
// console.log(typeof dString);


/*
3. Code a statement that extracts the day of the week from a Date 
object represented by d and assigns it to day, which hasn't been 
declared beforehand.
*/
// var date_=new Date();
// var day=date_.getDay();
// console.log(day);

/*
4. The day has been extracted from the Date object and assigned to 
d. The names of the days of the week have been assigned to the 
array dayNames. Alert the current day with array index.
*/
// var arr=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// var date_=new Date();
// var day=date_.getDay();
// alert(`Today is ${arr[day]}`);


/*
5. Extract all parts of the Date and Time and assign it to the variable 
which has not been declared beforehand.
*/

// var date_=new Date();
// console.log(date_.getDay());
// console.log(date_.getDate());
// console.log(date_.getFullYear());
// console.log(date_.getHours());
// console.log(date_.getMonth());
// console.log(date_.getTime());

// 6. Code a statement that creates a Date object for the last day of the 
// last month of 2020 and assigns it to later, which hasn't been 
// declared beforehand.


// var date_=new Date();
// date_.setDate(31);
// date_.setFullYear(2020);
// date_.setMonth(11);
// console.log(date_);

// 7. Create a Date object for the second day of the second month of 
// 1992 and assign it to a variable that hasn't been declared 
// beforehand.

// var date_=new Date();
// date_.setFullYear(1992);
// date_.setMonth(1);
// date_.setDate(2);
// console.log(date_)

/*
8. Code a single statement that displays in an alert the milliseconds 
that elapsed between the reference date and the beginning of 
1980.

*/
// var date1980 = new Date('Jan 01, 1980');
// var referencedate = new Date('Jan 01, 2000');

// var def = referencedate.getTime() - date1980.getTime();
// console.log(def)

/*
9. How do you change the year of a date in JavaScript?
*/

// var date_=new Date();
// date_.setFullYear(2004);
// console.log(date_);


/*
10. Write a JavaScript function to change the month of a given 
date to January
*/

//  var date_=new Date();
//  date_.setMonth(0);
//  console.log(date_);


// 11. What is the method to change the day of the week for a 
// specific date in JavaScript?

// Day changes with respect to date there no way to change day without changing date

/*
12. Write a JavaScript function to change the minutes of a given 
time to a specific value. (Value by prompt)
*/

// var date=new Date(prompt('Enter a date ','Feb 18, 2004'));
// var min=(date.getTime())/(1000*60)
// console.log(min)

// /*
// 13. Write a JavaScript function to add a specific number of 
// hours to a given time.*/

// var date=new Date(prompt('Enter a date ','Feb 18, 2004'));
// var hours=(date.getTime())/(1000*60*60)
// console.log(hours);

/*
14. You have to create a age calculator in JavaScript.
*/

// var date=new Date();
// var dateMill=date.getTime();
// var DateOfBirth=new Date(prompt('Enter Your Date of Birth','Feb 18, 2004'));
// var DateOfBirthMilli=DateOfBirth.getTime();
// var diff=dateMill-DateOfBirthMilli;
// var age=diff/(1000*60*60*24*365.25);
// console.log(Math.floor(age));

// Chapter 35 - 37 (Functions)  


function greet(){
    alert('Hello EveryOne');
}
greet();


