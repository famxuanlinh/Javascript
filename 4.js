var dongho = {
    hangsx : "Casio",
    mau : "Trang    ",
    Gia : 500,
    Xemngay : function(){console.log("hom nay ngay 13"); }
}
console.log (dongho.mau);
// Doi tuong Object
var hocvien = {
    ten: "Linh",
    Ho : ("Fam"),
    Tuoi: 25,
    Chieucao: 170,
    Tendaydu : function() {return this.Ho + " " + this.ten;},
    Danhgia : function() {
        if (this.Chieucao / this.Tuoi < 3){ return "Dep trai";}
        else{return "Hoi gay";}

    }
}
console.log (hocvien.Tendaydu());
console.log (hocvien.Danhgia());