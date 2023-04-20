//Write a function that takes in a string and returns it when reversed
function eats(food) {
    let eat = food.split('').reverse().join('');
    return eat
}
let food = "eating";
console.log( eats(food));

//Write a function that takes in the following array 
//and consoles the target if it is found else null
let num = [2,8,0,23,5,45,76];
let Target = 23;

//sort the array from the left side. 
function mergeSort(left,right) {
  let  emptyArray = [];

    while (left.length && right.length) {
        
        if (right[0] < left[0]) {
            emptyArray.push(right.shift());
        }else{
            emptyArray.push(left.shift());
        }
    }
    return [...emptyArray,...left,...right]
}

//divide the array into left and right side
function divideArray(num) {
    if (num.length <= 1) {
        return num
    }
let middle = Math.floor(num.length / 2)
let left = num.slice(0, middle)
let right = num.slice(middle)
return mergeSort(divideArray(left),divideArray(right));
}
console.log("sorted array",divideArray(num));

//binarysearch
function arr(num,Target) {
    let leftIndex = 0;                             //left index is 0
    let rightIndex = num.length -1;                //right index is 6

    while (leftIndex <= rightIndex) {

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);  //middle index first iteration is 3              
     if (num[middleIndex] === Target) {
       return Target
    }else if (num[middleIndex] < Target) {
        leftIndex = middleIndex +1;
    }else {
        rightIndex = middleIndex -1;
    }
    }
    return null;
 }
 console.log(arr(num,Target)); 

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (years = 2000; years <= 2002; years++){
if (years%4 === 0 && years%100 === 0 || years%400 ===0 ) {
    // if (years%4 ===0) {
    console.log(years + " is a leap year");
    }else{
        console.log(years + " is not a leap year");
    }
}
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for (let numberss = 0; numberss <= 10; numberss++){
    if (numberss%3 === 0 && numberss%5 === 0) {
        console.log("FizzBuzz");
    }else if (numberss%3 === 0) {
        console.log("Fizz");
    }else if (numberss%5 === 0) {
        console.log("Buzz");
    }else{
        console.log(numberss);
    }
}

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.

function array(numArray) {
    //OR
    // let num2 = numArray.map(n => n*4)
    //OR
    let result = []
     numArray.forEach(element => {
        result.push(element*4)
     });
     return result
}
let numArray = [12,87,45,75,23,64,73];
console.log(array(numArray))

//OR

// return num2
    // let empty = [];
    // for(i =0; i < numArray.length; i++ ){
    //     empty.push(numArray[i]*4);
    // }
    // return empty
// }

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
let nums = ["10","24","452","256","67"];
console.log("converted to number",turnNumber(nums));

function turnNumber(nums) {
    let turning = nums.map(Number)
    return turning
}
