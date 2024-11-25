function calculate()
{
    let text = document.getElementById("text").value
    let result = ""
    let numbers = /[0-9]/
    
    for (let i = 0; i < text.length; i++) 
      {
        if(!numbers.test(text[i]))
        {
          result += `${text[i]} `
        }
        else
        {
          break
        }
      } 
      
       
      
    document.getElementById("result").innerHTML = `${result} `
}