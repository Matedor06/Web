let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."
let regex, result

numberLength2Or3(text)
console.log(result)

startsWithEven (text)
console.log(result)

startsWithNumber (text)
console.log(result)

capitalized (text)
console.log(result)

capitalizedLengthMin3 (text)
console.log(result)

startsWithVowel (text)
console.log(result)

function numberLength2Or3(szov)
{
regex = /\b\d{2,3}\b/g
result = szov.match(regex)
return result
}

function startsWithEven (szov)
{
regex = /\b[2468]\d*\b/g
result = szov.match(regex)
return result
}

function startsWithNumber (szov)
{
regex = /\b\d+[a-zA-Z]+\b/g
result = szov.match(regex)
return result
}

function capitalized (szov)
{
regex = /\b[A-Z][a-z]*\b/g
result = szov.match(regex)
return result
}

function capitalizedLengthMin3 (szov)
{
regex = /\b[A-Z][a-z]{2,}\b/g
result = szov.match(regex)
return result
}

function startsWithVowel (szov)
{
regex = /\b[auioeAUIOE]\w*\b/g
result = szov.match(regex)
return result
}