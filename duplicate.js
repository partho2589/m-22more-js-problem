// const numbers = [50, 60, 50, 30, 61, 60, 80, 50, 60, 50, 30, 20 ];
// function duplicateNumbrs (number ){
//     const uniqe = [];
//     for (const element of number ){
//         // console.log( element)
//         if( uniqe.indexOf(element) == -1){
//             uniqe.push(element)
//         }
//     }
//     return uniqe
// }
// // console.log( duplicateNumbrs( numbers));


// const myFriendName = [ 'Maruf', 'Pranto', 'roni', 'nahar', 'riaj', 'ruble', 'Maruf', 'roni', 'Pranto', 'Maruf', 'ruble'];
// function friendList (nam){
//     const unick = []; 
//     for( let i = 0; i < nam.length; i++){
//         const element = nam [i];
//         if( unick.indexOf( element) == -1){
//             unick.push (element)
//         }
//     }
//     return unick
// }
// console.log(friendList( myFriendName));


const numbers = [50, 50, 60 ,70, 82, 70, 90, 90, 82, 32, 30, 50, 30, 30, 32, 70, 80, 90];
function duplicateN ( num){
    const unick = [];
    for ( let i = 0; i < num.length; i++){
      const element = num [i];
        if ( unick.indexOf(element) == -1){
            unick.push ( element)
        }
    }
    return unick
}
console.log ( duplicateN ( numbers));
