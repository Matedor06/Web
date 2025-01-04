function filter_list(l) {
    let newList = [];
    for(let i = 0; i < l.length; i++)
      {
        if(Number.isInteger(l[i]))
          {
            newList.push(l[i])
          }
      }
    return newList
  }