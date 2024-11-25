function calculate()
{
    let szam =parseInt(document.getElementById("number").value)
    let result = ""
    
    
    for (let i = 0; i < szam; i++) 
      {
        if(i == 0 || i == szam-1)
        {
          for (let i = 0; i<szam; i++)
            {
              result += "%"
            }
            result += "<br>"
            continue
        }

       for(let j = 0; j<szam-1; j++)
       {
        if(j == i)
        {
        result += "%"
        }
        else if(j == 0)
          {
            result += "%"
          }
          else
          {
            result += "&nbsp;&ensp;"
          }
       }
       result += "&nbsp;%"
       result += "<br>"
       
      } 
      
       
      
    document.getElementById("result").innerHTML = `${result} `
}