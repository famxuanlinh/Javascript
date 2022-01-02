//Phương thức xử lý với text
// 1 lenght - Hiện thị độ dài của chuỗi
// var x = "Dien thoai, iphone, android";


// console.log(x.length);
// x.indexOf('Từ cần tìm kiếm')
// var x = 
// var vitri = x.indexOf ('samsung');
// // Neu ko có thì kết quả là -1
// if (vitri != -1)
// {console.log ("Tim thay");
// Var DTmoi = x.replace("samsung","Bphone");
// console.log (DTmoi);
// }

// else
// { console.log ("Ko tim thay");}


// Dt.split - Khai báo mảng
var Dt = "Iphone, samsung, bphone";
var Chuoi = Dt.split(',');
console.log (Chuoi);
for (let i = 0; i < Dt.length; i++) {
    console.log (Chuoi[i]);
    
}



