const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);


let birthDate = dayjs("13/08/2000", 'DD/MM/YYYY')
let dadosData = dayjs()

let anoAtual = dadosData.year()
let age = dadosData.diff(birthDate,'year')
console.log(`A idade atual de Juliana é ${age}`)

let proximaData = birthDate.year(anoAtual+1)
let formattedProximaData = proximaData.format('DD/MM/YYYY')

console.log(`O próximo aniversário será em ${formattedProximaData}`)

let quantosDiasFaltam = proximaData.diff(dadosData,'day')
console.log(`Faltam ${quantosDiasFaltam} dias para o próximo aniversário`)
