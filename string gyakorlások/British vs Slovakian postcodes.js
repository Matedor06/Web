function whichPostcode(postcode){
  let britisPostCode = /\b[a-zA-Z]{1,2}[0-9]{1,2} [0-9]{1}[a-zA-Z]{2}\b/
  let slovakienPostCode = /\b\d{3} \d{2}\b/
  postcode = postcode.trim()
  
  if(postcode.split(" ").length > 2)
    {
      return "Not valid";
    }
  
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