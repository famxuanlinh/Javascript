// function as a parameter (callback)
// dùng funtion như một tham số
// let coffeeMachine = {
//     makeCoffee: function (onFInish){
//         console.log (" Make coffee ...")
//         onFInish();
//     }
// }
// function Beep() {
//     console.log (" Bip Bip")
// }
// console.log (coffeeMachine.makeCoffee(Beep));

// Chuyển phần tử này thành phần tử khác
// var numbers = [1, 2, 3, 4];
// var squaredNumbers = numbers.map(function (x) {
//     return x*x;
    
// });
// console.log (squaredNumbers);


//Lọc phần tử
// var numbers = [1, -2, 3, 4];
// var evenNubers = numbers.filter(function (x) {
//     return x / 1 < 0;
    
// });
// console.log (evenNubers);


// TÌm phần tử
// var numbers = [1, 2, 3, 4];
// var evenNubers = numbers.find(function (x) {
//     console.log (x);
//     return x % 2 === 0;
    
// });
// console.log (evenNubers);


// Ruduce - cộng gộp vào sau
// var numbers = [1, 2, 3, 5];
// var evenNubers = numbers.reduce(function (a, b) {
//     console.log (a, b);
//     return a + b;
    
// });
// console.log (evenNubers);

//Sử dụng reduce để làm bài tập
var orders = [
    {name: "a", quantity: 2, unitPrice: 100},
    {name: "b", quantity: 1, unitPrice: 400},
    {name: "c", quantity: 5, unitPrice: 20},
];
var ordersPrice = orders.reduce (function(sum, order){
    console.log (order);
    console.log (sum);
    return sum + (order.quantity * order.unitPrice);
}, 0);
orders[0].quantity

console.log (ordersPrice);