const firstMissingPositive = (arr) => {
    let memo = []
    let i;
    for(i=0; i<arr.length; i++){
        if(memo[arr[i]]) memo[arr[i]]++
        else memo[arr[i]] = 1
    }
    for (i = 1; i < memo.length; i++) {
        if(!memo[i]) return i;
    }
    if (i === memo.length) return i
    return 1
    
}

console.log(firstMissingPositive([1,2,0]));
