// para verificar se eh campo
const reserv = require('./reserv.js')
const comp = require('./comp.js')
const constante = require('./const.js')

const isFld = (arg) => {
    if (arg == '*') return 'TODOS'
    if (reserv.isReserv(arg) || comp.isComp(arg) || constante.isConst(arg)) return false
    if (arg.match(/[r-z]/g)) return false
    return true;
}

module.exports = { isFld }