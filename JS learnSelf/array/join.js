//สร้าง Array ที่เป็น object ชื่อ cryptocurrency
//เรียกใช้ method join จะเชื่อม elements ใน array และคั่นด้วย comma(,) ซึ่ง
//เป็น separator default
let cryptocurrency = new Array['BTC','BNB','ETH','ALICE'];
console.log(cryptocurrency.join());

//สร้างตัวแปรที่เป็น อาร์เรย์ในชื่อ numbers โดยให้แสดงผลลัพธ์โดยใช้ .join()
//และตั้ง separator โดยให้เเสดงผลระหว่าง element ด้วยเครื่องหมาย /
let numbers = [120, 127, 138, 148, 161];
console.log(numbers.join(' / ')); 

//สร้าง Array ที่เป็น object ชื่อ people
//เรียกใช้ method join() เพื่อเชื่อม elements ใน array โดยตั้ง separator ให้
//แสดงผลระหว่าง elements ด้วย " and " 
let people = ['John','Jane' ,'Max' ,'Doe' ,'Noon']
console.log(people.join(" and "));


