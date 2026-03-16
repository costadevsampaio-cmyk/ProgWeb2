import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController {

    async index(req, res) {
        try {
            const resultado = await SelecaoRepository.findAll()
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao buscar seleções" })
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id
            const resultado = await SelecaoRepository.findById(id)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao encontrar seleção" })
        }
    }

    async store(req, res) {
        try {
            const resultado = await SelecaoRepository.create(req.body)
            res.status(201).json(resultado)
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao inserir seleção" })
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id
            const resultado = await SelecaoRepository.update(id, req.body)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao atualizar seleção" })
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            const resultado = await SelecaoRepository.delete(id)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao deletar seleção" })
        }
    }

    // ================================
    // NOVAS FUNCIONALIDADES
    // ================================

    async buscarPorGrupo(req, res) {
        try {
            const grupo = req.params.grupo
            const resultado = await SelecaoRepository.buscarPorGrupo(grupo)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao buscar seleções por grupo" })
        }
    }

    async buscarPorNome(req, res) {
        try {
            const nome = req.params.nome
            const resultado = await SelecaoRepository.buscarPorNome(nome)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao buscar seleção por nome" })
        }
    }

    async estatisticas(req, res) {
        try {
            const resultado = await SelecaoRepository.estatisticas()
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao gerar estatísticas" })
        }
    }

}

export default new SelecaoController()