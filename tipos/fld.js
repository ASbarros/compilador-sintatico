// para verificar se eh campo
const reserv = require('./reserv.js')
const comp = require('./comp.js')
const constante = require('./const.js')

const isFld = (arg) => {
    if (arg == '*') return 'TODOS'
    if (reserv.isReserv(arg) || comp.isComp(arg) || constante.isConst(arg) || arg.match(/[r-z]/g) || arg === '') return false
    return true;
}

module.exports = { isFld }