function largestNumber ( number){
    let largest = 0;
    for ( let i= 0; i< number.length; i++ ){
        const element = number[i];
        // console.log(element)
        if( element > largest ){
         largest = element
        }
    }
    return largest
}

// console.log( largestNumber ([20, 30, 60, 60 ,80]));f\


// const ages = [ 30, 40, 50, 10, 15, 10, 8];
// function smallestAges ( number){
//     let min = 0;
//     for( let i= 0; i< number.length; i++){
//         const element = number[i];
//         // console.log( element)
//         if( element > min){
//             min = element
//         }
//     }
//     return min
// }
// console.log( smallestAges(ages));


function largesrtNumbers (number ){
    let largest = number [0];
    for ( let i=0; i < number.length; i++){
        const element = number [i]
       if ( element > largest ){
           largest = element
       }
    }
    return largest

}
// console.log( largesrtNumbers([20, 32, 50, 60, 60, 50]));

function isThreelargesrt ( a, b, c){
    if ( a>b && a>c){
        return a
    }
    else if ( b>a && b>c){
        return b
    }
    else {return c}
}
console.log ( isThreelargesrt( 10, 20, 30));