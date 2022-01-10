// var products = [
//     {name: "A", quantity: 2, unitPrice:10},
//     {name: "B", quantity: 4, unitPrice:22},
//     {name: "C", quantity: 6, unitPrice:77}
// ];
// var total = products.reduce(function (currentTotal,product) {
//         return currentTotal + product.quantity * product.unitPrice;
// }, 0);
// console.log (total);
// console.log ("Hello");


var items = ['Tom', 'Bill', 'Kim'];
var results = items.reduce(function(currentResult,item){
    return currentResult + "<" + item + ">";
}, "");
console.log(results);

