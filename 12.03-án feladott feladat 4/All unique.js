function hasUniqueChars(str){
    let usedCharacters = [];
    for(let i = 0; i < str.length; i++)
      {
        if(usedCharacters.includes(str[i]))
          {
            return false;
          }
        else
          {
            usedCharacters.push(str[i]);
          }
      }
      let valamai = "s"
      valamai = valamai.toLowerCase
    return true;

  }