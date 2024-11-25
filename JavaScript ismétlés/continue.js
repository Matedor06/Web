window.addEventListener("load",()=>
{
    let ruleCounter = 1
    let counter = 1
    let result = ""
    
    for (let i = 1; i <= 100; i++) 
      {
        if(i % 3 == 0 )
        {
          if(ruleCounter == 1)
          {
            ruleCounter = 2
            continue
          }


          else if(ruleCounter == 2 && counter == 2)
          {
            counter = 1
            ruleCounter = 3
            continue
          }


          else if(ruleCounter == 3 && counter == 3)
            {
              counter = 1
              ruleCounter = 1
              continue
            }
            else
            {
              counter++
              result += `${i}, `
            }
        }

        
        else
        {
          result += `${i}, `
        }
      }
    
      
    document.getElementById("result").innerHTML = `${result} `
})