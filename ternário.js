//operador ternário

let balance = true 
let isNotBlocked = true
let accountExist = true

let transferOk = balance && isNotBlocked && accountExist ? "Transferencia realizada" : "Transferencia não realizada"

console.log(transferOk)
