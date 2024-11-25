window.addEventListener("load",()=>
{
    let result = ""
    let number = 10
    let divider = 2

    
    while(number <= 30)
    {
      result += `${number}: `
      while(divider <= number)
      {
        if(number % divider == 0)
        {
          result += `${divider}, `
        }
        divider++
      }

      number++
      divider = 2
      result += "<br>"

    }

    document.getElementById("result").innerHTML = `${result} `

})