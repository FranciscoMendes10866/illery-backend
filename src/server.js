// ENV VARS
require('dotenv').config()

// DEPENDENCIES IMPORTS
const fastify = require('fastify')()
const formbody = require('fastify-formbody')
const routes = require('fastify-routes')
const cors = require('fastify-cors')
const helmet = require('fastify-helmet')
const logger = require('fastify-log')


// ROUTES MIDDLEWARE
fastify.register(routes)
require('./routes')(fastify)


// JSON
fastify.register(formbody)


// SERVER PROTECTION
fastify.register(cors, {})


// HEADERS PROTECTION
fastify.register(helmet, {})


// CUSTOM LOGGER
fastify.register(logger)


// START SERVER
fastify.listen(
    process.env.PORT || 3003,
    (err) => {
        if (err) {
            fastify.warn(err)
        } else {
            fastify.info(`🐱‍💻 Up and runin\' on localhost:${process.env.PORT || 3003} 🐱‍👤`)
        }
    }
);
