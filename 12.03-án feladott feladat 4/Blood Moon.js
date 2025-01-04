function bloodMoon(r){
    let AD =Math.sqrt( Math.pow(r,2)+ Math.pow(r,2));
     let FE = AD/2;
     let FA = Math.sqrt( Math.pow(FE,2)+ Math.pow(FE,2));
     let AFDArea = (Math.pow(FE, 2)* Math.PI)/2;
     let AGFArea = (Math.pow(FA/2, 2) * Math.PI)/2;
     let FAEArea = ((Math.sqrt(Math.pow(FE,2) - Math.pow(FA/2, 2))) * FA )/2
     let AHFArea = (AFDArea/2) - FAEArea;
     let AGFHArea = AGFArea -AHFArea;

     return Math.round(AGFHArea*100)/100
   }