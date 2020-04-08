// para verificar se eh constante numerica ou alfabetica
const isNumeric = value => /^\d+(?:\.\d+)?$/.test(value);
const isAlfabetica = value => value.split('')[1] === '%' && value.split('')[value.length - 2] === '%'

const isConst = arg => isNumeric(arg) || isAlfabetica(arg)

module.exports = { isConst }
