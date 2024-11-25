function calculate()
{
    let number =document.getElementById("number").value
    let count = 0
    let result = 0

    for (let i = 0; i < number.length; i++) {
        result += parseInt(number[i]);
        count++
      }
      result = result/count

    document.getElementById("result").innerHTML = `${number} számjegyeinek átlaga ${result} `
}