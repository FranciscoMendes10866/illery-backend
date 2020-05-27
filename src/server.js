// ENV VARS
require('dotenv').config()

// DEPENDENCIES IMPORTS
const fastify = require('fastify')()
const formbody = require('fastify-formbody')
const routes = require('fastify-routes')
const cors = require('fastify-cors')
const helmet = require('fastify-helmet')
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


// START SERVER
fastify.listen(
    process.env.PORT || 3003,
    (err) => {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        } else {
            console.log(`🐱‍💻 Up and runin\' on localhost:${process.env.PORT || 3003} 🐱‍👤`)
        }
    }
);
