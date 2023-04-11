//Write a function that takes in a string and returns it when reversed
let food = "eating";
 takeString(food)
function takeString(food) {
let x = new String(food.rever)
console.log(food.replace);
}
//Write a function that takes in the following array 
//and consoles the target if it is found else null
let num = [2,8,0,23,5,45,76];
  

//divide the array into left and right side

// function divideArray() {
//     let left1 = (0,middle);
//     let right1 = (middle);
// console.log(left1);
// console.log(right1);
//     while (left1.length && right1.length) {
//         let middle = Math.floor((left1 + right1) / 2)
//        console.log(middle); 
//     }
// }
//  divideArray(left1,right1)

 //sort the array from the left side. 
 //create a function with parameter num

//  function sortedArray(num) {    
//  }


Target = 3;
function arr(num,Target) {
    let leftIndex = 0;                             //left index is 0
    let rightIndex = num.length -1;                //right index is 6
console.log(leftIndex);
console.log(rightIndex);
    while (leftIndex <= rightIndex) {

    let middleIndex = Math.floor((leftIndex + rightIndex / 2));
    console.log(middleIndex);                      //middle index first itaration is 3
     if (middleIndex == Target) {
       return middleIndex
    }else if (leftIndex < Target) {
        leftIndex = middleIndex +1
        console.log(leftIndex);
    }else {
        rightIndex = middleIndex -1
        console.log(rightIndex);
    }
    return Target
    }
    //return Target;
 }arr(num,Target)

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

let years = (2000,2001,2002,2003);
if (years %2 ==2) {
    console.log("2020 is a leap year");
    }else{
        console.log("2001 is not a leap year");
    }