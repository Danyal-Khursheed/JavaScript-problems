const arr = [4, 6, 5, 3, 9, 5];

function abc(arr) {
  if (arr.length < 2) {
    console.log("Array should contain more then two elements");
    return;
  }

  let a = -Infinity;
  let b = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
      b = a;
      a = arr[i];
    } else if (arr[i] > b && arr[i] !== a) {
      b = arr[i];
    }
  }
  return b;
}

console.log(abc(arr));
