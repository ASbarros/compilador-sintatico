const isReserv = (arg) => arg.toUpperCase() === 'SELECT' || arg.toUpperCase() === 'FROM' || arg.toUpperCase() === 'WHERE' || arg.toUpperCase() === 'LIKE'

module.exports = { isReserv }