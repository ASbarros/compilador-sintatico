// para verificar se eh palavra reservada
const isReserv = (arg) => arg === 'select' || arg === 'from' || arg === 'where' || arg === 'like'

module.exports = { isReserv }