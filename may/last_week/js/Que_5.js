// Question 5. Using SWITCH statement, get the day of the week based on day number, means if the day is 1, the day of week is Sunday. If the day is 2 , it's Monday and so on.

let num=1;
switch (num) {
  case 1:
    day = "Sunday";
    console.log(day);
    break;
  case 2:
    day = "Monday";
    console.log(day);
    break;
  case 3:
     day = "Tuesday";
    console.log(day);
    break;
  case 4:
    day = "Wednesday";
    console.log(day);
    break;
  case 5:
    day = "Thursday";
    console.log(day);
    break;
  case 6:
    day = "Friday";
    console.log(day);
    break;
  case 7:
    day = "Saturday";
    console.log(day);
 default:
     console.log('Sorry! we could not found');
     break;
}

//output :- sunday(see in console)