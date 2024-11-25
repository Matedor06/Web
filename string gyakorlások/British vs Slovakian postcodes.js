function whichPostcode(postcode){
    let britisPostCode = /\b[a-z]{1,2}[0-9]{1,2} [0-9]{1}[a-z]{2}\b/i
    let slovakienPostCode = /\b\d{3} \d{2}\b/
    postcode = postcode.trim()
    
    if(postcode.match(britisPostCode))
      {
        return "GB"
      }
    else if(postcode.match(slovakienPostCode))
      {
        return "SK"
      }
    else{return "Not valid";}
    
  }