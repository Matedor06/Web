function timeConvert(num) { 
    let hours =0;
     let mins = 0;
   if(num <= 0)
     {return "00:00"}
     else
       {
         hours = Math.floor(num/60)
         mins = num - hours*60
         if(hours < 10 && mins < 10)
           {
             return `0${hours}:0${mins}`
           }
         else if(hours < 10 && mins >= 10)
           {
             return `0${hours}:${mins}`
           }
         else if(hours >= 10 && mins < 10)
           {
             return `${hours}:0${mins}`
           }
         else
           {
             return `${hours}:${mins}`
           }
       }
   }