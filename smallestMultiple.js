function smallestMultiple(num) {
    let smallestNumber = num + 1;
    let naturalNumber = 1;
    while (naturalNumber <= num) {
        if (smallestNumber % naturalNumber  === 0) {
            naturalNumber++;
        }
        else {
            naturalNumber = 1;
            smallestNumber++;
        }
    }
    return smallestNumber;
}
console.log(smallestMultiple(20));