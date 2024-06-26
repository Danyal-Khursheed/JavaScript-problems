const arr = [1,2,3,53,6];

function abc(arr){
    let min =Infinity;
    
    for(let i =0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
    
}


function max(arr){
    let max = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(abc(arr));