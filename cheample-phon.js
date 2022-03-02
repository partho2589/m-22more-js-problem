const phons = [
    {name:'samsung', price:30000, model: 'A21', stroag:32, ram:4},
    {name:'oppo', price:40000, model: 'A12', stroag:64, ram:5},
    {name:'mi', price:20000, model: 'A21', stroag:32, ram:4},
    {name:'nokia', price:1500, model: 'n12', stroag:32, ram:4},
    {name:'iphon', price:100000, model: '12', stroag:64, ram:6},
    {name:'vivo', price:20000, model: 'v21', stroag:16, ram:4},
    {name:'walton', price:3000, model: 'w1', stroag:8, ram:2}
];
 let smallPrice = phons[0];
for(const phon of phons){
    if( phon.price > smallPrice.price)
    smallPrice = phon
}
console.log( smallPrice);