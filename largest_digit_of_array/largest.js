const x = [3,5,2,8,6,9,1];

function abc(x){
    let a = -Infinity;
    for(let i = 0;i<x.length;i++){
        if(x[i]>a){
            a = x[i];
        }
    }
    return a;
}
console.log(abc(x));