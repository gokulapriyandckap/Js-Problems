// removing first and last word
// function removefristandlast(word){
// let result = ''
// for (let i =0;i < word.length;i++) {
// if(i==0){
// result = result+''
// }
// else if(i== word.length-1){
//     result = result+''
// }
// else{
//     result = result+word[i]
// }
// }
// return result
// }
// console.log(removefristandlast("sanjay"))


//array character minimum letters

// function friend(friends){
//     let result = []

//     for(let i=0; i<friends.length; i++){
//       if(friends[i].length<5){
//         // console.log(friends[i]);
//         result.push(friends[i])
//       }
    
//     }
//     return result

//   }
//   console.log(friend(['viky','akas','bala','vignesh','lokesh','yuvaraj']));




// stringrepeat
// function repeatStr (n, s) {
//     let result = " ";
//     for (let i = 0; i <n; i++) {
// result += " "+ s  
//     }
//     return result
// }
// console.log(repeatStr(9,"ha"));

// Remove String Space.
// function noSpace(x){
//     let result = "";
// for (let i = 0; i < x.length; i++) {
//     if(x[i]===" "){
//         result +='';
//     }
//     else{
//         result+=x[i];
//     }
// }
// return result
// }
// console.log(noSpace("gokul                            p e a c e " ));

//findthesmallestintegerinarr

// function findSmallestInt(array){
    // var min = Math.min.apply(Math, array)
    // console.log(min)
    // let result = array[0];
    // console.log(array[0]);
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<result){
//             result = array[i]
//         }
//     }
//     console.log(result);
// }
// (findSmallestInt([4,5,6,-17,1,9]))



// Return Negative.
// function makeNegative(num){
// if(num<=0){
//     return num
// }
// else{
//     return num * -1
// }
// }
// console.log(makeNegative(97097987))


//Grasshopper SUmmation.
// function summation(num) {
//     let result = 0;
//     for (let i = 0; i <=num; i++) {
//         // console.log(i);
//         result+=i
//     }
//     return result
// }
// console.log(summation(8));


//count of sheeps.
// function countSheeps(arrayOfSheep) {
//     let sum = 0
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i]){
//             sum++
//         }
//         // else{
//         //     sum+=0
//         // }    
//     }
//     return sum;   
// }
// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]));

//Is n divisible by x and y?
// function isDivisible(n, x, y) {
// if(n %x == 0 && n%y == 0){
// return "true"
// }
// else{
//     return "false";
// }
// }
// console.log(isDivisible(12,7,3))


//century from the year;
// function century(year) {
// let result = Math.ceil(year / 100 );
// return result  
// }
// console.log(century(1765));

//basic arithmetic operator;
// function basicOp(operation, value1, value2){
//   if (operation == "+") {
//     return value1 + value2
//   }
//   else if (operation == "-") {
//     return value1 - value2
//   }
//   else if (operation == "*") {
//     return value1 * value2
//   }
//   else if (operation == "/") {
//     return value1 / value2
//   }
// }

// console.log(basicOp("/",6,8));

//Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]
// function maps(arr){
//     let result=[];
// for (let i = 0; i < arr.length; i++) {
//     result.push(2*arr[i])
// }
// return result
// }
// console.log(maps([3,4,5]));

// function arrofobjs(arr,searchStr) {
    
// let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].product_name !== searchStr) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(arrofobjs([
//     {product_id:1,product_name:"soap", category: "home"},
//     {product_id:2,product_name:"screwdriver", category: "industry"},
//     {product_id:3,product_name:"jeans", category: "clothers"},
//     {product_id:4,product_name:"mouse", category: "laptop"}
//   ],"mouse"))
 

// function greet(name){
//     if(name == "Johnny"){
//       return "Hello, my love!";
//   }
//   else{
//     return "Hello, " + name + "!";
//   }
// }
//   console.log(greet("Johnny"));


// function getAverage(marks){
// let sum =0;
//     for (let i = 0; i <marks.length; i++) {
//         sum+=marks[i]        
//     }
//     return  Math.floor(sum / marks.length);
// }
//   console.log(getAverage([1,2,3,4,5]))



// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// function points(teams){
//     let sum=0
//  for (let i = 0; i < teams.length; i++) {
//      // console.log(teams[i][2]);
//      if(teams[i][0] > teams[i][2]){
//        sum+=3
//      }
//      else if(teams[i][0] < teams[i][2]){
//         sum+=0
//      }
//      else{
//  sum+=1
//      }
//  }
//  return sum
//  }
//  console.log(points(["1:1","0:0","3:3","0:0","2:2","3:3","1:1","3:3","2:2","3:3"]))


//sum of two array

// function arrayPlusArray(arr1, arr2) {
//    let total = 0;
//    for (let i = 0; i < arr1.length; i++) {
//     total+=arr1[i]
//    }
//    for (let j = 0; j < arr2.length; j++) {
//     total+=arr2[j]
//    }
//    return total
//   }

//   console.log(arrayPlusArray([1,2,3],[4,5,6]));





//count vowels
// function getCount(str) {
//     let result =0
//     for (let i = 0; i < str.length; i++) {
//     if (str[i] == "a" || str[i] == "e"  || str[i] == "i"  || str[i] == "o" ||str[i] == "u"  )  {
//         result++
//     }       
//     }
//     return result
//   }

//   console.log(getCount('gokul'))



//sum of array

// function positiveSum(arr) {
//     let result=0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>0) {
//         result+=arr[i]
//     }
//   }
//   return result
// }
// console.log(positiveSum([1,4,-7,5]))


// planet by id

// function getPlanetName(id){
//     if (id ==1) {
//         return 'Mercury'
//     }
//     else if (id ==2) {
//         return 'Venus'
//     }
//     else if (id ==3) {
//         return 'Earth'
//     }
//     else if (id ==4) {
//         return 'Mars'
//     }
//     else if (id ==5) {
//         return 'Jupiter'
//     }
//     else if (id ==6) {
//         return 'Saturn'
//     }
//     else if (id ==7) {
//         return 'Uranus'
//     }
//    else {
//         return 'Neptune'
//     }
//   }
//   console.log(getPlanetName(3))


 //catdogyears
//  var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0;
//     let dogYears = 0;
    
//     for(let i = 0; i <=humanYears; i++){
//         if (i === 0) {
//             catYears +=0;
//             dogYears +=0;
//           }  
//       else if (i === 1) {
//         catYears +=15;
//         dogYears +=15;
//       } else if (i === 2) {
//         catYears += 9;
//         dogYears += 9;
//       } else if (i ===3) {
//         catYears +=4
//         dogYears +=5
//       }
//       else {
//         catYears +=4
//         dogYears +=5
//       }
//     }
//     return [humanYears, catYears, dogYears];
//   }
//   console.log(humanYearsCatYearsDogYears(10))
  

// string to array

// function stringToArray(string){
//     for (let i = 0; i < string.length; i++) {
//        if(i == " "){
//         return string.split(' ')
//        }
//     }
// }
// console.log(stringToArray("Robin Singh"))


// dragons and bullets
// function hero(bullets, dragons){
//         if (bullets/2 >= dragons) {
//           return true;
//         }
//         else {
//           return false;
//         }
//   }

//   console.log(hero(10,5))

//stone paper scissor
// const rps = (p1, p2) => {
//     if (p1 == p2)
//       return 'Draw!';
      
//      else if (p1 == 'rock' && p2 == 'scissors') 
//        return 'Player 1 won!'
//      else if (p1 == 'scissors' && p2 == 'paper') 
//        return 'Player 1 won!'
//      else if (p1 == 'paper' && p2 == 'rock') 
//        return 'Player 1 won!'
//      else
//        return 'Player 2 won!';
//   };
//   console.log(rps("scissors","scissors"))