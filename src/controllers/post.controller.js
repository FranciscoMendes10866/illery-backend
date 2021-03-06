import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const Controller = {};

// DELETES A POST
Controller.destroy = async (req, res) => {
  const { id } = req.params;
  const convertedId = Number(id);
  const post = await prisma.post.delete({
    where: {
      id: convertedId,
    },
  });
  res.send(post);
};

// CREATES A NEW POST
Controller.create = async (req, res) => {
  const result = await prisma.post.create({
    data: {
      name: req.body.name,
      openClose: req.body.openClose,
      slogan: req.body.slogan,
      content: req.body.content,
      picture: req.file.path,
      phone: req.body.phone,
      website: req.body.website,
      location: req.body.location,
      eventEmail: req.body.eventEmail,
      User: { connect: { email: req.body.authorEmail } },
    },
  });
  res.send(result);
};

// GETS ALL POSTS (FEED)
Controller.getAll = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.send(posts);
};

export default Controller
