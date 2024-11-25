function calculate()
{
    let szoveg =document.getElementById("text").value
    let result =""
    for (let i = 0; i < szoveg.length; i++) {
        result += szoveg[i] + "<br>";
      }

    document.getElementById("result").innerHTML = `${result} `
}