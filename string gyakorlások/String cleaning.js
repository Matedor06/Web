function stringClean(s){
    let reg = /\d/g
    s = s.replaceAll(reg, "")
    return s
  }