let x = -Infinity;

function factorial(x){
    let result =1;
for( var i = x; i >=1; i--){
   result*=i
}
return result
}

console.log(factorial(5))