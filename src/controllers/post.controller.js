const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const Controller = {};

// DELETES A POST
Controller.destroy = async (request, reply) => {
  const { id } = request.params;
  const post = await prisma.post.delete({
    where: {
      id: id,
    },
  });
  reply.send(post);
};

// CREATES A NEW POST
Controller.create = async (request, reply) => {
  const result = await prisma.post.create({
    data: {
      name: request.body.name,
      openClose: request.body.openClose,
      slogan: request.body.slogan,
      content: request.body.content,
      /**
       *  Ainda tenho de fazer com que o que é enviado é o link do CDN da cloudinary storage
       * */
      picture: request.file.filename,
      phone: request.body.phone,
      website: request.body.website,
      location: request.body.location,
      eventEmail: request.body.eventEmail,
      author: { connect: { email: request.body.authorEmail } },
    },
  });
  reply.send(result);
};

// GETS ALL POSTS (FEED)
Controller.getAll = async (request, reply) => {
  const posts = await prisma.post.findMany();
  reply.send(posts);
};

module.exports = Controller
