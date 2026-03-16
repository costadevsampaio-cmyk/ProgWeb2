import conexao from "../database/index.js"

class SelecaoRepository {

    async executarQuery(sql, valores = []) {
        try {
            const [rows] = await conexao.query(sql, valores)
            return rows
        } catch (erro) {
            console.error("Erro na query:", erro)
            throw erro
        }
    }

    async findAll() {
        const sql = "SELECT * FROM dbselecao.dbcopa"
        return await this.executarQuery(sql)
    }

    async findById(id) {
        const sql = "SELECT * FROM dbselecao.dbcopa WHERE id=?"
        return await this.executarQuery(sql, [id])
    }

    async create(params) {
        const sql = "INSERT INTO dbselecao.dbcopa SET ?"
        return await this.executarQuery(sql, [params])
    }

    async update(id, params) {
        const sql = "UPDATE dbselecao.dbcopa SET ? WHERE id=?"
        return await this.executarQuery(sql, [params, id])
    }

    async delete(id) {
        const sql = "DELETE FROM dbselecao.dbcopa WHERE id=?"
        return await this.executarQuery(sql, [id])
    }

    // ================================
    // NOVOS MÉTODOS
    // ================================

    async buscarPorGrupo(grupo) {
        const sql = "SELECT * FROM dbselecao.dbcopa WHERE grupo = ?"
        return await this.executarQuery(sql, [grupo])
    }

    async buscarPorNome(nome) {
        const sql = "SELECT * FROM dbselecao.dbcopa WHERE selecao LIKE ?"
        return await this.executarQuery(sql, [`%${nome}%`])
    }

    async estatisticas() {
        const sql = `
            SELECT grupo, COUNT(*) AS total
            FROM dbselecao.dbcopa
            GROUP BY grupo
        `
        return await this.executarQuery(sql)
    }

}

export default new SelecaoRepository()