//saját
function isSatorSquare(tablet) {
    let words = [];
      let tempWord = "";
      let bools = [];
      let result = false;
      tablet.forEach((row) =>{
        row.forEach((letter) => {
          tempWord += `${letter}`
        })
        if(!words.includes([...tempWord].reverse().join("")))
          {
            words.push(tempWord)
          }
          tempWord = "";
      })
      words.forEach((word) => {
        tablet.forEach((row) =>{
        row.forEach((letter) => {
          tempWord += `${letter}`
        })
        if(word == tempWord)
          {
            bools.push(true)
          }
          else
            {
              bools.push(false)
            }
        if(word == [...tempWord].reverse().join(""))
          {
            bools.push(true)
          }
          else
            {
              bools.push(false)
            }
            tempWord = "";
      })
        for(let i = 0; i < tablet[0].length; i++)
          {
          for(let j = 0; j < tablet.length; j++)
            {
              tempWord += `${tablet[j][i]}`
            }
        if(word == tempWord)
          {
            bools.push(true)
          }
          else
            {
              bools.push(false)
            }
        if(word == [...tempWord].reverse().join(""))
          {
            bools.push(true)
          }
          else
            {
              bools.push(false)
            }
            tempWord = "";
        }
        let boolsCount = 0;
         bools.forEach((item) => {
            if(item)
            {
                boolsCount++;
            }
            }
        )
        if(boolsCount == 4 || bools == 8)
          {
            result = true;
          }
        else
          {
            return false
          }
          boolsCount = 0;
          bools = [];
        })
      return result;
    }
//chat gpt
function isSatorSquare(tablet) {
    const n = tablet.length;

    // Check for palindrome properties
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Ensure all directions are valid:
            // Across (left-to-right), Down (top-to-bottom), Reverse (right-to-left), and Up (bottom-to-top)
            if (
                tablet[i][j] !== tablet[j][i] || // Top-to-bottom should match left-to-right
                tablet[i][j] !== tablet[n - 1 - j][n - 1 - i] || // Bottom-to-top should match reverse
                tablet[i][j] !== tablet[n - 1 - i][n - 1 - j] // Right-to-left should match bottom-to-top
            ) {
                return false;
            }
        }
    }
    return true;
}