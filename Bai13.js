// for (let i = 0; i < 10; i++) {
//     console.log (i);
    
// }


// var employees = [
//     { name: "Linh", age: 25},
//     { name: "Manh", age: 25},
//     { name: "Dung", age: 25},
// ];
// // console.log (employees[0].name);
// // for (let i = 0; i < employees.length; i++) {
// //     console.log (employees[i].name, employees[i].age);
    
// // }

// console.log (employees.length);
 
//method if array
let a = [1, 4, 5, 9, 9 ,0];
let b = [10 , 20];
// console.log(a.concat(b)); // .concat - nối hai mảng lại với nhau
// console.log(a.push(b)); // Độ dài length
// console.log(a.pop()); // Đẩy phần tử cuối ra (Kq nhận : phần tử cuối) = 5
// console.log(a.shift()); // Đẩy phẩn tử đầu ra
// console.log(a.unshift(5)); // Tăng độ dài của mảng vào đầu
// console.log (a);
a.splice(3,0,1); //3 = index, 0(1) = thêm vào(thay thế), 1 = thêm số 1
console.log (a);
