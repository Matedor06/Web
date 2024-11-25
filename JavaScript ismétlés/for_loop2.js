function calculate()
{
    let szam =parseInt(document.getElementById("number").value)
    let result = 1

    
    for (let i = 1; i < szam+1; i++) {
        result *= i;
      }


    document.getElementById("result").innerHTML = `${szam} factorial is ${result} `
}