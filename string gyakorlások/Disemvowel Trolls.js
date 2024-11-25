function disemvowel(str) {
    let characters = /[aeuio]/ig
    str = str.replaceAll(characters, "")
    return str;
  }