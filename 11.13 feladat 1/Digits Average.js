function digitsAverage(input) {
    input = String(input)
    let result = []
    for(let i = 0; i < input.length; i++ )
    {
        result.push(Number(input[i]))
    }
    let temp = [];
    let average = 0;
    let iterator = 0;
    while(result.length > 1)
      {

        for(let j = 1; j < result.length; j++)
          {
            average =Math.ceil(((result[iterator] + result[j])/2))
            temp.push(average);
            iterator = j;
          }
        result = temp;
        temp = []
        iterator =0;
      }
    return result[0]
  
  }