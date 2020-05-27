module.exports = class Controller {
    static async getAllRecords(req, res) {
        res.send({ 'home': 'mendes' })
    }
}
