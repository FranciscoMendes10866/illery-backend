// ENV VARS
require('dotenv').config()

// DEPENDENCIES IMPORTS
const fastify = require('fastify')()
const formbody = require('fastify-formbody')
const routes = require('fastify-routes')
const cors = require('fastify-cors')
const helmet = require('fastify-helmet')
const logger = require('fastify-log')
const fileUpload = require('fastify-file-upload')


// ROUTES MIDDLEWARE
fastify.register(routes)
require('./routes')(fastify)


// BODY JSON HANDLER
fastify.register(formbody)


// FILES UPLOAD HANDLER
fastify.register(fileUpload, {
    limits: { fileSize: process.env.FILESIZE },
})


// SERVER PROTECTION HANDLER
fastify.register(cors)


// HEADERS PROTECTION HANDLER
fastify.register(helmet)


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
