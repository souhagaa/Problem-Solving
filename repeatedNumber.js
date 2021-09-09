const repeatedNumber = (arr) => {
    const sum = arr => arr.reduce((prev, el) => prev + el)
    let len = arr.length
    let sumUnique = sum([...new Set(arr)])
	let repeated = sum(arr) - sumUnique
    
    let missing = (len * (len+1))/2 - sumUnique;
    
    return [repeated, missing];
}

console.log(repeatedNumber([3,1,2,5,3]));
