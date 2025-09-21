// const firstId=12;

//  prefer not to use var 
//  because of issue in block scope and functional scope 
//    "use strict";  //treat all JS code as newer version

//    let name="ravina";
//    let age=20;
    // number => 2 to power 53
    //    bigint 
    //    string => ""
    //     boolean => true/false
    //     null => standalone value
    //     undefined => 
    //     symbol => unique
    //     object 
        // console.log(typeof age);
        // console.table([name,age]);
        // console.log(typeof null); //object
        // console.log(typeof undefined); //undefined;
        
        //  "33"=> 33
        //  "33abc"=>NaN
        //  true =>1; false=>0


// let isLoggedIn = "jhbb "
// let bolleanIsLoggedIn =Boolean(isLoggedIn)
// console.log(bolleanIsLoggedIn);
// 1=>true; 0=>false 
// " "=>false; 
// "ravina"=>true
// 

// let name = 99
// let stringName=String(name)
// console.log(typeof stringName);


//**********************OPERATIONS*************** */
// +, -, *, /, %, **
//  let str1="ravina"
// let str2="beniwal"
// console.log(str1+ " "+str2);

// console.log("3"+3+3); //333
// console.log(3+3+"3"); //63

// console.log((3+4)*5%6);
// console.log(true+1);
// let game=101
// ++game
// game--
// game--
// console.log(game);


// console.log("2">1); // avoid use of this type of comparision
// console.log(null==0);
// console.log(null>=0);
// console.log(null<=0);// it take null value as 0
// console.log(undefined==0);// give always false value

// primitive data typr
// 7 type : String,number,bollearn,null,undefined, symbol,BigInt 
// const score=false;

//  Reference (Non primitive )
// array,objects,function

// loops in string 
// for of loop is used for  string and array
// let str="ravina"
// for (let i of str ){
//     console.log(i);
// }
// for in loop is used for object and array 
// let object = {
// name : "ravina",
//  roll : 12,

// };
// for (let key in object) {
//     console.log("key"="","value=",student["key"]);
// }
// let str="ravina"
// str=str.toUpperCase()
// console.log(str);
// let marks=["ravina","beniwal","hisar"]
// marks[2]="ghazibad"
// console.log(marks);

// let marks=[56,78,90,45]
// let sum=0
// for (let val in marks){
//     sum+=val
// }
// let avg=sum/marks.length
// console.log(`Average of marks =${avg}`) // templete string
 
// 
// pop is uded to remove element from array
// push is used to add element in array
// let marks=[56,78,90,45]
// marks.pop()
// marks.push(99)
// console.log(marks);
 // toString method is used to convert array into string
   

//  let firstName=["ravina","beniwal","hisar"]
// // let lastName=["ghazibad","delhi"]
// // let fullName=firstName.concat(lastName)
// // console.log(fullName);
// let val=firstName.unshift("ravina") // remove first element from array;
// console.log(val);

// function are used to repeat the number
// arrow function(=>)
// function sum(a,b){
//     return a+b;
//     }
// const arrowSum = (a,b) => {
//      console.log(a+b);
//      };

// for each loop in array
// function can perform as a perameter
// let arr=[1,4,6,34,67];
// arr.forEach((val) =>{
//     console.log(val);
// })



// let arr=[1,4,6,34,67];
// arr.forEach(function printVal(val){
//     console.log(val);
// });


// for each loop in array is higher order function/methods
// function parqametere 
// return




//Starter  code


// Dom = Document object model
// let myElement= document.getElementById("myld");
// let myObject=document.getElementsByClassName("myClass");
// document.body.childNodes[3].innerText="abcd";
// let  heading=document.getElementById("heading");
// console.log(heading)
// let btn1=document.querySelector("#btn1");
// btn1.onclick = (evt) =>{
//     // console.log("btn1 is clicked");
//     // let a=25;
//     // a++;
//     // console.log(a);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

//  classes and object

const student={
    fullName:'Ravina',
    rollNo: 900,
    marks:98,
    printMarks: function(){
        console.log("marks=",this.marks);
    },
};

// we can set a proto type using name.__proto__