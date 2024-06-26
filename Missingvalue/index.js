const arr =[ 1,2,4,5,6,8,9];


function missingValue(arr){
const minValue =Math.min(... arr);
const maxValue =  Math.max(... arr);

    let missing = [];

    for(var i=minValue; i<=maxValue; i++){
        if(arr.indexOf(i)===-1){
            missing.push(i);
        }
    }
    return missing;
}

console.log(missingValue(arr));
