//var
var x = 2;
{
   var x = 51;
   var x1 = 52;
   console.log(x); //51
}
console.log(x); //51 ยังเห็นข้างใน
console.log(x1); //52 ยังเห็นข้างใน
console.log("------");

//let
let y = 50;
let y1 = 75;
{
    let y = 100;
    console.log(y);  //100
    console.log(y1); //75 เห็นข้างนอก (รถติดกระจกฟิมล์)
}
console.log(y); //50 ไม่เห็นข้างใน
console.log("------");

//const
const z = 150;
const z1 = 450;
{
    const z = 300;
    const z2 = 600;
    console.log(z);  //300 
    console.log(z1); //450 เห็นข้างนอก
}
console.log(z); //150 ไม่เห็นข้างใน
//console.log(z2); //ไม่เห็นข้างใน