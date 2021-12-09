//Shallow Equality = เปรียบเทียบแค่ property_name * แต่ไม่ได้เปรียบเทียบ address object
function boxEqual(obj1,obj2){
    const keys1 = Object.keys(obj1);    //Object.keys() >> return เป็น String key ของ property  
    const keys2 = Object.keys(obj2);    //Object.keys(box2) => id,color

    if (keys1.length !== keys2.length) {//เช็คจำนวน property ที่มีแต่ละ object มีเท่ากันไหม?
       return false;
    }
    for (let key of keys1) {            //วน loop ตาม Object.key ของ object1
       if (obj1[key] !== obj2[key]) {   //เช็ค value ของแต่ละ key ว่าเท่ากันไหม? **ใช้เป็น ===,!== เพื่อปกป้องการเกิด Implicit Convasion ด้วย***
          return false;
       }
    }
    return true;
 }

 let box1 = {id: 1, color: 'red'};
 let box2 = {id: 1, color: 'red'};
 let box3 = box1
 let box4 = {id: 2, color: 'red'};
 
 console.log(boxEqual(box1,box2));   //true
 console.log(boxEqual(box1,box3));   //true
 console.log(boxEqual(box1,box4));   //false
//--------------------------------------------------------------------------------------------------
 //Shallow Equality
let book1 = {
    isbn : 12345 ,
    title : "JS"  
};
let book2 = {
    isbn : 12345 ,
    title : "JS"
};
function shallowEquality(object1,object2){
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    
    if (keys1.length == keys2.length){
        return true;
    }
    for (let key of keys1){
        if(object1[key] == object2[key]){
            return true;
        }
    }
    return false;
};
console.log("Shallow Equality : " + shallowEquality(book1,book2));