import fs from 'fs'
import { yarg } from './config/plugins/yargs.plugin'

//grabar en el archivo de salida
//path: outputs/tabla-5.txt

/*

Asi lo hice yo (XHIU)


console.log('======================')
fs.writeFileSync('outputs/tabla-5.txt','======================\n')
console.log('     Tabla del 5   ')
fs.appendFileSync('outputs/tabla-5.txt','     Tabla del 5   \n')
console.log('======================')
fs.appendFileSync('outputs/tabla-5.txt','======================\n')

for (let index = 1; index <= 10; index++) {
  let result = index * 5
  console.log(`     5 x ${index} = ${result}`)
  fs.appendFileSync('outputs/tabla-5.txt',`     5 x ${index} = ${result}\n`)
}
*/


let outputMessage = ''
const { b:base, l:limit, s:showTable } = yarg
const headerMessage =`
======================
     Tabla del ${ base }
======================

`

for( let i = 1; i <= limit; i++){
  outputMessage += `      ${ base } x ${ i } = ${ base * i }\n`
}

outputMessage = headerMessage + outputMessage

if( showTable ) console.log(outputMessage)

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,outputMessage)
console.log('File created!')





