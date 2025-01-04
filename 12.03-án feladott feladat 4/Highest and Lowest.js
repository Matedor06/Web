function highAndLow(numbers){
    let convertedNumbers = numbers.split(" ").map(x =>parseInt(x)) 
    let max = Math.max(...convertedNumbers)
    let min = Math.min(...convertedNumbers)
    return `${max} ${min}`
    
  }
