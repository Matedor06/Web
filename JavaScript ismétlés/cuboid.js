function calculate()
{
    let a =parseFloat(document.getElementById("side1").value)
    let b =parseFloat(document.getElementById("side2").value)
    let c =parseFloat(document.getElementById("side3").value)
    let surface = 2*(a*b+b*c+c*a)
    let volume = a*b*c
    document.getElementById("result").innerHTML = `surface area: ${surface} <br> volume: ${volume}`
}