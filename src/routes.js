async function routes(fastify, options) {

    fastify.get('/', async (req,res) => {
        res.send({
            'name': 'mendes'
        })
    })
}

module.exports = routes
