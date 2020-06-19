const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const controller = {};

// CREATES A NEW ACCOUNT
controller.register = async (request, reply) => {
  const result = await prisma.user
    .create({
      data: {
        ...request.body,
      },
    })
    .catch((e) => {
      throw e;
    });
  reply.send(result);
};

// SIGNSIN TO AN ACTUAL ACCOUNT
controller.login = async (request, reply) => {
  const { email, password } = request.body;

  const Val = await prisma.user.findOne({
    where: {
      email: email,
    },
  });
  if (!Val) {
    reply.code(403).send({ error: "An error occurred" });
  }

  const isPasswordValid = password === Val.password;
  if (!isPasswordValid) {
    reply.code(403).send({ error: "An error occurred" });
  }

  const result = { user: request.body };

  reply.send(result);
};

module.exports = controller;
