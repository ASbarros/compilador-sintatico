const reserv = require('./tipos/reserv.js')
const comando = process.argv.filter((e, index) => index >= 2).toString()
const palavras = comando.split(' ')
