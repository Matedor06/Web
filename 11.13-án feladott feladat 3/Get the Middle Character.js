function getMiddle(s) {
    let sLength = s.length
    let result
    if(sLength % 2 == 0)
      {
        result = `${s[sLength/2-1]}${s[sLength/2]}`
      }
    else
      {
        result = `${s[Math.floor(sLength/2)]}`
      }
      return result;
  }