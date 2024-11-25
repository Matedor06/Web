function calculate()
{
    let hours =parseInt(document.getElementById("hours").value)
    let minute =parseInt(document.getElementById("minute").value)
    let second =parseInt(document.getElementById("second").value)

    let currentTime = new Date(2024,8,17,hours,minute,second)
    let MaxTime = new Date(2024,8,17,24,0,0)
    let result = (MaxTime - currentTime)/1000
    document.getElementById("result").innerHTML = `${result} s `
}