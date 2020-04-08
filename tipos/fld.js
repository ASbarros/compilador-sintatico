// para verificar se eh campo
const isFld = (arg) => {
    if (arg == '*') return 'TODOS'
    if (arg.toString().match(/[r-z]/)) return false
    return true;
}

module.exports = { isFld }