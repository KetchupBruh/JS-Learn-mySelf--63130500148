function setMyLi() {
    let myLi = document.querySelector("#Section3 > ul > .group10"); 
    let text = "Fail Fast Succeed Faster";
    let className = myLi.getAttribute("class")  //เอาค่า text ของ class ออกมา
    myLi.innerText = `${className} ${text}`;    //มีการจัดรูปแบบให้ดูดี
    //myLi.textContent = `${className} ${text}`; //ข้างในเป็นไงแสดงอย่างงั้น
}
setMyLi();