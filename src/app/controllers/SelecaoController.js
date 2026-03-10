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

}

export default new SelecaoController()