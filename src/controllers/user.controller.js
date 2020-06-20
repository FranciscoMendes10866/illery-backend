import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const Controller = {};

// CREATES A NEW ACCOUNT
Controller.register = async (request, reply) => {
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
Controller.login = async (request, reply) => {
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

export default Controller;
