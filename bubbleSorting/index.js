let arr = [12, 1, 3, 7, 5, 2, 4, 9, 6];

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]) {
       arr[j] = arr[j] + arr[j + 1];
       arr[j+1] = arr[j] - arr[j + 1];
       arr[j] = arr[j] - arr[j + 1];
        }
    }
}
console.log(arr)
