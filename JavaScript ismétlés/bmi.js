function calculate()
{
    let weight =parseFloat(document.getElementById("weight").value)
    let height =parseFloat(document.getElementById("height").value)
    let result = weight / (Math.pow(height,2))
    document.getElementById("result").innerHTML = `${result} `
}