import app from './src/app.js'
import conexao from './infra/conexao.js'
const port = 3000

//Realizando a conexão
conexao.connect((erro) => {
    if (erro) {
        console.log("Erro na conexão")
    } else {
        console.log("Conexão com Sucesso")
        // Escutando a porta
        app.listen(port, () => {
        console.log(`Servidor rodando http://localhost:${port}`)
    }
)}
})

// Escutando a porta
// app.listen(port, () => {
//     console.log(`Servidor rodando http://localhost:${port}`)
// })
