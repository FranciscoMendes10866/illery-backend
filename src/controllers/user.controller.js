const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = class Controller {
    static async createAdmin(req, res) {
        const result = await prisma.user.create({
            data: {
                ...req.body,
            },
        })
            .catch(e => {
                throw e
            })
            .finally(async () => {
                await prisma.disconnect()
            })
        res.json(result)
    }
}
