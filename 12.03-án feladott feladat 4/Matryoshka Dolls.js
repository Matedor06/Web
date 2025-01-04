//talán jó talán nem, az isten se tudja
function matryoshka(lst) {
    let activeMin = 0;
    let activeMax = 0;
    let result = false;
    if((Math.max(...lst[0]) - Math.min(...lst[0])) >(Math.max(...lst[lst.length-1]) - Math.min(...lst[lst.length-1])))
       {
         activeMin = Math.min(...lst[0]);
         activeMax = Math.max(...lst[0]);
        for(let i = 1; i < lst.length; i++)
          {
            if(Math.min(...lst[i]) > activeMin && Math.max(...lst[i]) < activeMax)
              {
                result = true;
                activeMin = Math.min(...lst[i]);
                activeMax = Math.max(...lst[i]);
              }
            else
              {
                result = false;
                break;
              }
          }}
    else
      {
         activeMin = Math.min(...lst[lst.length-1]);
         activeMax = Math.max(...lst[lst.length-1]);
        for(let i = lst.length-2; i >=0 ; i--)
          {
            if(Math.min(...lst[i]) > activeMin && Math.max(...lst[i]) < activeMax)
              {
                 result = true;
                activeMin = Math.min(...lst[i]);
                activeMax = Math.max(...lst[i]);
              }
            else
              {
               result = false
                break;
              }
          }}
      
    return  result;
  
  }