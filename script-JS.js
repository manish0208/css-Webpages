/* document.write(10);                  
console.log("hello Everyone");
window.alert("hii");  */

var x=15;
var y=22;
/*const z=20;
a=10;
console.log(x+y);
console.log(a);           //shortcut to open console(ctrl + shift + j) in live server    
console.log(x&y);          // ans. is 6
console.log(x|y);           // ans. is 31
*/


var w=5;
/*if(w==1){
    console.log("monday");
}
else if(w==2){
    console.log("tuesday");
}
else if(w==3){
    console.log("wednesday");
}
else if(w==4){
    console.log("thursday");
}
else if(w==5){
    console.log("friday");
}
else if(w==6){
    console.log("saturday");
}
else if(w==7) {
    console.log("sunday");
}
else{
    console.log("invalid input");
}*/


/*switch(w){
    case 1: console.log("monday"); break;
    case 2: console.log("tuesday"); break;
    case 3: console.log("wednesday"); break;
    case 4: console.log("thursday"); break;
    case 5: console.log("friday"); break;
    case 6: console.log("saturday"); break;
    case 7: console.log("sunday"); break;
    default: console.log("invalid");
}

if(x>y){
    console.log("x is greater");
}
else{
    console.log("y is greater");
}
great = x>y ? "grater output" : "lesser output";  // ternary operator ?:
console.log(great);
*/

//let num=55;
/*while(num<=50){
    console.log(num);
    num+=2;
}*/

/*do{
    console.log(num);
}while(num<50)*/

/*const min = 1;
const max = 25;
let num = Math.floor(Math.random()*(max-min+1))+min;
let guess=0;
let hint='';
let n=0;
do{
    let input = prompt('please enter a no. between 1 to 25' + hint);
    n=parseInt(input);
    guess++;
    if(guess>=5){
        console.log("you loose the game");
        break;}
    else{
        continue;
    }
    if(n>num){
        hint ="no. is greater than the ans. please choose lesser value"
    
    }
    else if(n<num){
        hint="no. is lesser than the ans. please choose greater value"
    }
    else if(n==num){
        alert("you gussed it right");
    }
}while(n!=num)
console.log(num);
*/

//let num=prompt("enter the number:-");
//let power= prompt("enter the power:- ");
//var result=1;
/*var i=0;
while(i<power)
{
    result= result*num;
    i++;
}
*/
/*for(var i=0;i<power;i++){
    result=result*num;
}*/
/*var fact=1;
for(var i=1;i<=num;i++){
    fact=fact*i;
}
*/
//if(num%1==0)
//window.alert("integer");
//console.log(fact);


/*for(var i=1;i<=100;i++){
if(i%4==0 && i%6==0)
{
    console.log("fizzbuzz");
}
 else if(i%4==0){
 console.log("fizz");
}
else if(i%6==0){
    console.log("buzz");
}
else{
    console.log(i);
}
}
*/


/*
// using ternary operator----
for(var i=1;i<=100;i++){
console.log(i%4==0 ? (i%6==0 ? 'fizzbuzz' : 'fizz') : i%6==0 ? 'buzz' : i);
}
*/

/*
var year = prompt("please input a year to find out the next 20 years");
var counter = 20;
var result=true;


    while (counter >= 0) {

        if ((year % 4 == 0) && (year % 100 != 0)||(year % 400 == 0)) {
            result = true;
            console.log(year);
            year++;
            counter--;
        } 
        else {
        year++;
        }    
    }
*/

/*
function hello(name){
    console.log("hi " + name);
}

hello("manish");
hello("manish");
hello("manish");
hello("manish");
*/

function add(a,b){
    return a+b;
}

let n1= parseFloat(prompt("enter the 1st no. :- "));
let n2= parseFloat( prompt("enter the 2nd no. :- "));
let ans=add(n1,n2);
document.writeln("ans. is :- " + ans);


function cube(c){
    return c*c*c;
}
//let n1= parseFloat(prompt("enter the no. :- "));
 let result=cube(n1);
 //alert("ans is :- \n"+result);
 document.writeln(result);