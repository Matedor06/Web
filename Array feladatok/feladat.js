let hetiSzamok = getOtosLotteryNumbers()
let hetiNyertesSzamok = getOtosLotteryNumbers()
console.log(hetiSzamok)

hetiSzamok = getSortedtLotteryNumbers(hetiSzamok)
console.log(hetiSzamok)

let talalatokSzama = getNumberOfHits(hetiNyertesSzamok, hetiSzamok)
console.log(talalatokSzama)

let haviTippek = getMonthlyLotteryArrayNumbers()
console.log(haviTippek)

let haviKihuzottSzamok = getMonthlyLotteryChosenNumbers(haviTippek)
console.log(haviKihuzottSzamok)

let haviStatisztikaiAdatok = monthlyStatistics(haviTippek)
console.log(haviStatisztikaiAdatok)


function getOtosLotteryNumbers()
{
    let szam = 0
    let szamok = new Array()
    do
    {
        szam =Math.round(Math.random()*100)
        if(!szamok.includes(szam))
        {
        szamok.push(szam)
        }
    }
    while(szamok.length <5)
    return szamok
} 

function getSortedtLotteryNumbers(szamok)
{
    szamok = szamok.sort((function(a, b){return b - a}));
    return szamok
}

function getNumberOfHits (nyertesSzamok, szamok)
{
    let talalatok = 0;
    szamok.forEach((szam) => {
        if(nyertesSzamok.includes(szam))
        {
            talalatok++
        }
    });

    return talalatok
}

function getMonthlyLotteryArrayNumbers ()
{
    let haviSzamok = new Array()
    for(let i = 0; i<4;i++)
    {
        haviSzamok.push(getOtosLotteryNumbers())
    }

    return haviSzamok
}

function getMonthlyLotteryChosenNumbers (haviSzamok)
{
    let kihuzottSzamok = new Array()
    haviSzamok.forEach(week =>
    {
        week.forEach(szam =>
        {
            if(!kihuzottSzamok.includes(szam))
            {
                kihuzottSzamok.push(szam)
            }
        }
        )
    }
    )
    return kihuzottSzamok
}

function monthlyStatistics (haviSzamok)
{
    let haviStatisztika = new Array()
    let osszesSzam = new Array()
    let firstIndex = 0;
    let lastIndex = 0;
    let count = 0;
    let kivalasztottSzam = 0;
    haviSzamok.forEach(het => {
        osszesSzam = osszesSzam.concat(het)
    });

    osszesSzam = getSortedtLotteryNumbers(osszesSzam)

    for(let i = 0; i < osszesSzam.length; i++)
    {
        kivalasztottSzam = osszesSzam[i]
        firstIndex =osszesSzam.findIndex(x => x == kivalasztottSzam)
        lastIndex = osszesSzam.findLastIndex(x => x == kivalasztottSzam)
        if(firstIndex == lastIndex)
        {
            count = 1
        }
        else
        {
        count = (lastIndex +1) - (firstIndex+1)
        }
        haviStatisztika.push([kivalasztottSzam, count])

        i = lastIndex
    }
    return haviStatisztika
}