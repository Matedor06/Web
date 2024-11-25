function crap(x, bags, cap){
    let result = "";
    let maxNumberOfCraps = bags * cap;
    let numberOfCraps = 0;
    let oneGarden
      for(let i = 0; i < x.length; i++)
        {
          oneGarden = x[i]
          for(let j = 0; j <x[i].length; j++)
            {
              if(oneGarden[j] == "@")
                {
                  numberOfCraps ++;
                }
              else if(oneGarden[j] == "D")
                {
                  result = "Dog!!";
                  return result
                }
              if(numberOfCraps > maxNumberOfCraps)
                {
                  result = "Cr@p";
                  return result
                }
            }
        }
      result = "Clean"
      return result

    }