const fs = require("fs")

const reserv = require('./tipos/reserv.js')
const tab = require('./tipos/tab.js')
const fld = require('./tipos/fld.js')
const comp = require('./tipos/comp.js')
const constante = require('./tipos/const.js')
const tabela = require('./tabela.js')

const valor = (arg) => {
    if (constante.isConst(arg)) return arg
    else return 0
}

let valoresTabela = Math.max(...Object.values(tabela))
let saida = ''
let numLinha = 1

fs.readFile('./comando.sql', "utf8", function (err, data) {
    const comando = data
    const linhas = comando.split('\n')
    if (err) {
        return console.log("Erro ao ler arquivo");
    }
    linhas.forEach(palavras => {
        palavras.split(' ').forEach(e => {
            e = e.split('\r')[0]
            if (e != '') {
                if (!tabela[e]) {
                    valoresTabela++
                    tabela[e] = valoresTabela
                }
                if (reserv.isReserv(e)) saida = saida + '[reserv;' + e.toUpperCase() + ';' + numLinha + ';' + (palavras.indexOf(e) + 1) + ';' + valor(e) + ';' + tabela[e] + ']'
                else if (tab.isTab(e)) saida = saida + '[tab;' + e + ';' + numLinha + ';' + (palavras.indexOf(e) + 1) + ';' + valor(e) + ';' + tabela[e] + ']'
                else if (fld.isFld(e)) saida = saida + '[fld;' + (e == '*' ? 'TODOS' : e) + ';' + numLinha + ';' + (palavras.indexOf(e) + 1) + ';' + valor(e) + ';' + tabela[e] + ']'
                else if (comp.isComp(e)) saida = saida + '[comp;' + e + ';' + numLinha + ';' + (palavras.indexOf(e) + 1) + ';' + valor(e) + ';' + tabela[e] + ']'
                else if (constante.isConst(e)) saida = saida + '[const;' + (constante.isNumeric(e) ? 'NUM' : e) + ';' + numLinha + ';' + (palavras.indexOf(e) + 1) + ';' + valor(e) + ';' + tabela[e] + ']'
            }
        })
        numLinha++
    })
    console.log(saida)
})