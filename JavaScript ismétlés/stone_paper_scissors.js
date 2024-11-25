function calculate()
{
    let p1 =parseInt(document.getElementById("playerOne").value)
    let p2 =parseInt(document.getElementById("playerTwo").value)
     let result = ""
    if((p1== 1 && p2 == 3)|| (p1== 2 && p2 == 1) || (p1== 3 && p2 == 2))
    {
        result = "Első nyert"
    }

    else if((p2== 1 && p1 == 3)|| (p2== 2 && p1 == 1) || (p2== 3 && p1 == 2))
        {
            result = "Második nyert"
        }
        
    else
    {
        result = "Döntetlen"
    }


    document.getElementById("result").innerHTML = `${result} `
}