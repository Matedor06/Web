import fs  from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'data.json')
let data = [
    {name: 'Abel'}, {name: 'Bob'}, {name: 'Cedric'}
]
function faljIras(data){
try {
    fs.writeFileSync(filePath, JSON.stringify(data))
} catch(err) {
    console.log(err)
}
}

function fajlOlvasas()
{
    let content = ''
let rdata
try {
    content = fs.readFileSync(filePath, 'utf8')
    rdata = JSON.parse(content)
} catch(err) {
    console.log(err)
}
return rdata
}
faljIras(data)

let fajlTartalma = fajlOlvasas();
fajlTartalma.push({name : "Géza"})
fajlTartalma.push({name : "Pisti"})
fajlTartalma.push({name: "Zoli"})

faljIras(fajlTartalma)

let ujtartalom = fajlOlvasas()
console.log(ujtartalom)