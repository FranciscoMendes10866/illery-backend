const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = class Controller {
    // CREATES A NEW ACCOUNT
    static async register(request, reply) {
        const result = await prisma.user.create({
            data: {
                ...request.body,
            },
        })
            .catch(e => {
                throw e
            })
            .finally(async () => {
                await prisma.disconnect()
            })
        reply.send(result)
    }

    // SIGNSIN TO AN ACTUAL ACCOUNT
    static async login(request, reply) {
        console.log(request.body);

        const { email, password } = request.body

        const Val = await prisma.user.findOne({
            where: {
                email: email
            }
        })
        if (!Val) {
            reply.code(403).send({ error: 'An error occurred' })
        }

        const isPasswordValid = password === Val.password
        if (!isPasswordValid) {
            reply.code(403).send({ error: 'An error occurred' })
        }

        const result = { user: request.body }

        reply.send(result)
    }
}
