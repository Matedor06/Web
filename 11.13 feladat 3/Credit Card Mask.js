// return masked string
function maskify(cc) {
    let firstHalf = "";
        let lastHalf = "";
        let result = "";
        if(cc.length > 4)
          {
            console.log("sajt1")
            for(let i = 0; i< cc.length-4; i++)
              {
                console.log("sajt2")
                firstHalf += "#";
              }
            for(let i = cc.length-4; i <cc.length; i++)
              {
                console.log("sajt3")
                lastHalf += `${cc[i]}`
              }
            result = `${firstHalf}${lastHalf}`;
          }
        else
          {
            result = cc
          }
        return result
    }
    