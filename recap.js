function largestNumber ( number){
    let largest = 0;
    for( let i =0; i < number.length; i++){
        const element = number[i];
        if ( element < largest){
            largest = element
        }
    }
    return largest
}
// console.log( largestNumber( [50, 60, 80, 90, 40, 30, 50]));

function smallestNumber ( numbers){
    let min = numbers [0];
    for( let i= 0; i < numbers.length; i++){
        const element = numbers[i]
        if ( element < min){
            min = element
        }
    }
    return min
}
// console.log( smallestNumber( [30, 20, 10, 45, 5]));
// let sum =0;
// for ( let i=0; i<=3; i++){
//     sum = sum + i;
// }
// console.log( sum);

var number = [20, 30, 40, 50]

number = 6;
console.log(number);