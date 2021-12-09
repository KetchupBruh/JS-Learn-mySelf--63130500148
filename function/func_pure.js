//non-pure function->pure function (sol.1)
const add = function (n1, n2) {
    let result = result+ n1 + n2; 
    return result;  
  };   

  console.log(add(5, 2));  
  result = 10;  
  console.log(add(5, 2));

//non-pure function->pure function (sol.2)
const add = function (n1, n2) {  
    return n1 + n2;
};

