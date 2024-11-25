function calculate()
{
    let year = parseInt(document.getElementById("year").value)
    let result = ""



if(year % 4 == 0)
{
     result = "leap year"
}
else
{
    result = "not leap year"
}


    document.getElementById("result").innerHTML = `${result} `
    
}