function sum(...nums) {
    let result = 0;
    for (const num of nums){
        result += num;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));