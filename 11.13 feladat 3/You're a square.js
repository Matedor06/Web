var isSquare = function(n){
    if(n < 0)
      {
        return false;
      }
    else if((String(Math.sqrt(n,2)).split(".")).length >=2)
      {
        return false;
      }
    else
      {
        return true;
      }
  }