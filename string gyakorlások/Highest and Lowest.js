function highAndLow(numbers){
    let number = numbers.split(" ")
    let max =parseInt(number[0])
    let min =parseInt(number[0])
    
    for(let i = 1; i < number.length; i++)
      {
        if(parseInt(number[i]) > max)
          {
            max = parseInt(number[i])
          }
        else if(parseInt(number[i]) < min)
          {
            min = parseInt(number[i])
          }
      }
    let result = `${max} ${min}`
    return result
  }