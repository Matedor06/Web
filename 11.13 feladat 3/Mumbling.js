function accum(s) {
    let result = "";
      for(let i = 0; i< s.length ; i++)
        {
          result += `${s[i].toUpperCase()}`;
          for(let j = 0; j < i; j++)
            {
              result += `${s[i].toLowerCase()}`
            }
          result += "-"
        }
      result = result.slice(0, -1);
      return result;
    }