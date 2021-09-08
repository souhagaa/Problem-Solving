const plusOne = (arr) => {
    let newArray = [...arr]
    let carry = 1
    let i;

    for (i = newArray.length-1; (i >= 0) && carry; i--) {
        
        if(newArray[i] !== 9) {
            newArray[i] += carry
            carry = 0
        } else {
            newArray[i] = 0
        }

    }
    if(carry === 1) {
        newArray.unshift(1)
        return newArray
    }
    i = 0
    while(i < newArray.length && newArray[i] === 0){
        newArray.splice(i,1)
    }

    return newArray
}

console.log(plusOne([9,9,9,9]));
