// Ques 2. In how many ways can we loop in an array describe each with an example ?

// Ans_2 : There are 6 different ways to loop in an array describe each with an examples :-

// 1.) for loop : it iterates the elements for the fixed number of times. it should be used if number of iteration is known.


// syntax :
            //    for (initialization; condition; update statement) {
            //       // code block to be executed
            //    }

//The for loop statement basically uses three expressions--

//(i)  Initialization — to initialize loop variable with a starting value and it will only be executed once
//(ii)   Condition — defines when the loop will stop looping
//(iii)  Update Statement — is executed every time after the code block within the loop has been executed. Normally it’s being used to increment the loop variable.

// Example :-
let myintro = ['Ankush','savita','agra',22]

for(let i = 0; i < myintro.length; i++){
console.log(myintro[i]);
}

// 2.) While loop : it iterates the elements for the infinite number of times.

// syntax :  
//   while (condition) {
//     // code block to be executed
// }

// condition — defines when the loop will stop looping

// Example :
let myDetails = ['Ankush' , 'Agra' , '282006' ,'uttar pradesh' , 'india']

let i = 0;
while(i < myDetails.length) {
console.log(myDetails[i]);
i++
}

// 3.) do while loop :- it iterates the elements for the infinite number of times like while loop. But, code is Executed at least once whether condition is true or false.

// syntax : 
   //   do {
   //      // code block to be executed
   // } while (condition)

// condition — defines when the loop will stop looping

// Example :  
 let fruitbasket = ['Apple','Banana','coconut','date']

   let p = 0;
 
       do {
       console.log(fruitbasket[p]);
       p++
      } while(p < fruitbasket.length);

// 4.) for of loop : The for/of loop has the following syntax:

//   for (variable of iterator) {
//      // code block to be executed
// }

//Iterator —refers to the array to be iterated
//Variable — The value of the next iteration (if any) will be assigned to the variable. Variable has to be declared with either const, let, or var to hold the value.

// Example : 
let myBooks = ['physics','chemistry','mathematics']

for (let profile of myBooks) {
console.log(profile)
}

// 5.)  for Each() loop : forEach() will execute the provided callback function once for each array element.

// syntax : 
 //array.forEach(callback(currentValue [, index [, array]])[, thisArg]);

//   callback           — refers to the callback function that takes up 3 arguments:
//   1. currentValue    — the data/value of the current element
//   2. index (optional)—the array index of the current element
//   3. array (optional)—the entire array object

//   thisArg (optional) — Value to be passed to the callback function which will be used as its this value.

//   Return             — undefined

// Example :  
 let myCourse = ['HTML','CSS','Bootstrap','Javascript']

 myCourse.forEach(function(profile, index, myCourse) {
   console.log(`Index: ${index}, Name: ${profile}`);
});

// 6.)  map () : map() method is in fact very similar to forEach() method as it will also execute the provided callback function once for each array element. The only major difference is that map() method will create and return a new set of arrays based on the result of the callback function.

// syntax :  
//  let new_array = array.map(function callback(currentValue[, index[, array]]) {
//           // Return element for new_array
// }[, thisArg])

// callback — refers to the callback function that takes up 3 arguments:
// 1. currentValue — the data/value of the current element
// 2. index (optional) — the array index of the current element
// 3. array (optional) — the entire array object

//    thisArg (optional) — Value to be passed to the callback function which will be used as its this value.

//    Return — a new set of array based on the return result of the callback function

// Example : 
 let myArray = [
             {id: 1, firstName: 'Ankush', lastName: 'Savita', age: 21},
             {id: 2, firstName: 'Sachin', lastName: 'sharma', age: 23},
             {id: 3, firstName: 'Ankush', lastName: 'verma', age: 22},
           ];

let newArray = myArray.map(function(profile, index, myArr) {
let newProfile = {
 'id': index + 1,
 'fullName': profile.firstName + ' ' + profile.lastName,
 'age': profile.age
 }

 return newProfile
})

newArray.forEach(function(profile, index, myArr) {
console.log(profile.fullName)
});
