function calculate()
{
    let fullScoredPoints = parseInt(document.getElementById("fullScoredPoints").value)
    let actualPoints = parseInt(document.getElementById("actualPoints").value)
   let scorePercentage = (actualPoints/fullScoredPoints)*100

   var result = ""
if( scorePercentage >=85)
{
    result = "A"
} 
else if( scorePercentage >=70)
{
    result = "B"
} 
else if( scorePercentage >=50)
{
    result = "C"
} 
else if( scorePercentage >=35)
{
    result = "D"
} 
else
{
    result = "F"
}

    document.getElementById("result").innerHTML = `Result: ${result} `
}