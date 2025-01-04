const numbers = [2,13,3,7,17,5,11,19,9]
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob']
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry']

//sortByLength() - String tömböt a szavak hossza szerint rendezi és a rendezett tömböz adja vissza
function sortByLength(str)
{
    return str.sort((a, b) => a.length - b.length)
}

//sortByLengthAsc() - String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböz adja vissza
function sortByLengthAsc(str)
{
    return str.sort((a,b) => {
        if(a.length === b.length)
        {
            return a.localeCompare(b)
        }
        else
        {
            return a.length - b.length
        }
    })
}

//sortFrom15() - számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza
function sortFrom15(szamok)
{
       return szamok.sort((a,b) => Math.abs(a-15) - Math.abs(b-15))
}

//addAsterisk() - String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
function addAsterisk(str)
{
    return str.map((item) => `*${item}*`)
}


//between5And15() - számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben

function between5And15(szamok)
{
    return szamok.filter((item) => item >= 5 && item <= 15)
}


//isAllOdd() - számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
function isAllOdd(szamok)
{
    return szamok.every(item => item % 2 !=0)
}


//hasEven() - számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
function hasEven(szamok)
{
    return szamok.some(item => item % 2 == 0)
}

//sigma() -  számokat tartalmazó tömb elemeit összeszorozza és a szorzatot adja vissza 
function sigma(szamok)
{
    return szamok.reduce((total,item) => total * item)
}
