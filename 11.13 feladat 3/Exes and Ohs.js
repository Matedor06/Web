function XO(str) {
    let numberOfos = 0;
    let numberOfxs = 0; 
 
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++)
    {
      if(str[i] == "o")
        {
          numberOfos++;
        }
      else if(str[i] == "x")
        {
          numberOfxs++;
        }
     
    }
  if(numberOfos + numberOfxs == 0)
    {
      return true;
    }
  else if(numberOfos == 0 ||  numberOfxs == 0)
    {
       return false;
    }
  else if(numberOfos == numberOfxs)
    {
      return true;
    }
  else
    {
      return false;
    }
}