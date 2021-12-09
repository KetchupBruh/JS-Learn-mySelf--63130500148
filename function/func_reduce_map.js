//examples of reduce and map functions
let products = [
    { prodId: 1, price: 10, amount: 2 }, 
    { prodId: 2, price: 5, amount: 10 } 
  ]; 

let priceIncludeVat = products.map(  //.map เรียกใช้ฟังก์ชันเรียกกลับที่กำหนดไว้ในแต่ละองค์ประกอบของอาร์เรย์ และส่งกลับอาร์เรย์ที่มีผลลัพธ์
    (product) => product.price + product.price * 0.07
  );
  console.log(priceIncludeVat);
  
let totalAmt = products.reduce(  //reduce คือการลดค่าของ element ลงให้เหลือ 1 element
    (total, curProd) => (total += curProd.amount),0     
    //ค่า total เริ่มต้นที่ 0
  ); 
  console.log(totalAmt);