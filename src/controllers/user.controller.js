import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const Controller = {};

// CREATES A NEW ACCOUNT
Controller.register = async (req, res) => {
  const result = await prisma.user
    .create({
      data: {
        ...req.body,
      },
    })
    .catch((e) => {
      throw e;
    });
  res.send(result);
};

// SIGNSIN TO AN ACTUAL ACCOUNT
Controller.login = async (req, res) => {
  const { email, password } = req.body;

  const Val = await prisma.user.findOne({
    where: {
      email: email,
    },
  });
  if (!Val) {
    res.code(403).send({ error: "An error occurred" });
  }

  const isPasswordValid = password === Val.password;
  if (!isPasswordValid) {
    res.code(403).send({ error: "An error occurred" });
  }

  res.send(Val);
};

export default Controller;
