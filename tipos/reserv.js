const isReserv = (arg) => arg === 'select' || arg === 'from' || arg === 'where' || arg === 'like'

module.exports = { isReserv }