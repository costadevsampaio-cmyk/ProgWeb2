// Importações
import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

// Middleware para ler JSON
app.use(express.json())

// ================================
// ROTA RAIZ
// ================================

app.get('/', (req, res) => {
    res.send('<h1>API Copa do Mundo</h1>')
})

// ================================
// ROTAS DE CONSULTA ESPECÍFICAS
// (devem vir antes da rota :id)
// ================================

// Buscar seleções por grupo
app.get('/selecoes/grupo/:grupo', (req, res) =>
    SelecaoController.buscarPorGrupo(req, res)
)

// Buscar seleções por nome
app.get('/selecoes/busca/:nome', (req, res) =>
    SelecaoController.buscarPorNome(req, res)
)

// Estatísticas da copa
app.get('/estatisticas', (req, res) =>
    SelecaoController.estatisticas(req, res)
)

// ================================
// ROTAS CRUD
// ================================

// Listar todas seleções
app.get('/selecoes', (req, res) =>
    SelecaoController.index(req, res)
)

// Buscar seleção por ID
app.get('/selecoes/:id', (req, res) =>
    SelecaoController.show(req, res)
)

// Criar nova seleção
app.post('/selecoes', (req, res) =>
    SelecaoController.store(req, res)
)

// Atualizar seleção
app.put('/selecoes/:id', (req, res) =>
    SelecaoController.update(req, res)
)

// Deletar seleção
app.delete('/selecoes/:id', (req, res) =>
    SelecaoController.delete(req, res)
)

export default app