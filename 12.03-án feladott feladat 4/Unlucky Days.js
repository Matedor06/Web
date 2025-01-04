function unluckyDays(year){
    let date;
    let counter = 0;
    for(let i = 1; i < 13; i++)
    {
        date = new Date(`${year} ${i} 13`)
        if(date.getDay() == 5)
        {
            counter++;
        }
    }
    return counter;
    
    }