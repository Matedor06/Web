function oddOrEven(array) {
    if(array.length == 0)
      {
        array.push(0)
      }
   if(array.reduce((total, item) => total + item) % 2 == 0)
     {
       return "even"
     }
   else
     {
       return "odd"
     }
 }