function createArrayOfTiers(num) {
    let tarolo = new Array()
    let szam = ""
    let eredetiSzam = num.toString()
   for(let i = 0; i < eredetiSzam.length ; i++)
     {
      szam += `${eredetiSzam[i]}`
      tarolo.push(szam)
  }
      return tarolo;
  }