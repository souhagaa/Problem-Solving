function count_and_say(n) {
    // 1, 11, 21, 1211, 111221, ...
    if(n === 1) return 1;
    if(n === 2) return 11;
    
    let count = 0;
    let seq = [1, 11];
    while(count <= n-3){
        let el = seq[seq.length-1] + ''
        let nth = ''
        let countN = 1
        for (let i = 1; i <= el.length; i++) {
            if(el[i] === el[i-1]) {
                countN++
            }
            else {
                nth += countN + el[i-1] 
                countN = 1
            }
        }
        count++;
        seq.push(nth)
    }
    return seq[n-1]
}

console.log(count_and_say(10) ) //9534330