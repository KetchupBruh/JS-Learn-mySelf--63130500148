let arr = [1, 2, 3, 4];
let arr2 = arr;
arr2[1] = 999;
//[ 1, 999, 3, 4 ]
console.log(arr); 

function doSomething(temp) {
  //temp=arr
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i] * 2;
  }
}

doSomething(arr);
console.log(arr); 