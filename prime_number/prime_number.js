// 1 to 50 prime number

// create a varibale you want to check is prime or not and
// create a loop start from 2 and end with the varible you created
// create a condition  if var is diveded on loop and reminder is === 0 then it is not prime else it is prime



for (var j=0; j<=50; j++){
  var isPrime = true;

  for (var i = 2; i < j; i++) {
    if (j % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime === true) {
    console.log(`${j} is a prime number`);
  } else {
    console.log(`${j} is not a prime number`);
  }
}


