const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createProject(data) {
  return await prisma.project.create({
    data
  });
}

async function findAllProjects() {
  return await prisma.project.findMany({
    include: {
      profile: true,
      technologies: true,
      feedbacks: true
    }
  });
}

module.exports = {
  createProject,
  findAllProjects
};