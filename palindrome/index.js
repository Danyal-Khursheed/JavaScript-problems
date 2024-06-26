const string ="eye";

function palendrome(string){
    let reverse = string.split("").reverse().join("");
    if(reverse === string){
        console.log(`${reverse} It is a palendrome`);
    }
    else{
        console.log(`${reverse} It is a not palendrome`);
    }

    return reverse;
}

console.log(palendrome(string));