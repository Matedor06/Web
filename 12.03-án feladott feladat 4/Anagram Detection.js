var isAnagram = function(test, original) {
    test = test.toLowerCase();
    original = original.toLowerCase();
  if(test.length != original.length)
    {
      return false;
    }
let testCharacters = []
for(let i = 0; i < test.length;i++)
  {
    if(!testCharacters.includes(test[i]))
      {
        testCharacters.push(test[i])
      }
  }
  
    let character = "";
    for(let i = 0; i < original.length; i++)
      {
        character = original[i];
        const re = new RegExp(`${character}`, 'g');
        if(!testCharacters.includes(character))
          {
            return false
          }
        if(test.match(re).length != original.match(re).length)
          {
            return false
          }
      }
    return true;
  };
  