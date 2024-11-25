function dateCorrect(datestring) {
    if(datestring == null || datestring == "")
        {
          return datestring;
        }
      let correctForm = /\d{2}[.]\d{2}[.]\d{4}/g
      if(!datestring.match(correctForm))
        {
          return null
        }
        let ideiglenes = datestring.split(".")
        datestring = `${ideiglenes[2]}.${ideiglenes[1]}.${ideiglenes[0]}`
        console.log(datestring)
      let date = Date.parse(datestring)
      console.log(date)
      let finalDate = new Date(date)
      console.log(finalDate)
      let final 
      if(finalDate.getMonth()+1 <10 &&finalDate.getDate()<10 )
        {
          final = `0${finalDate.getDate()}.0${finalDate.getMonth()+1}.${finalDate.getFullYear()}`
        }
    else if(finalDate.getMonth()+1 <10)
      {
          final = `${finalDate.getDate()}.0${finalDate.getMonth()+1}.${finalDate.getFullYear()}`
        }
    else if(finalDate.getDate()<10)
      {
          final = `0${finalDate.getDate()}.${finalDate.getMonth()+1}.${finalDate.getFullYear()}`
        }
      else
        {
          final = `${finalDate.getDate()}.${finalDate.getMonth()+1}.${finalDate.getFullYear()}`
        }
      return final
  }