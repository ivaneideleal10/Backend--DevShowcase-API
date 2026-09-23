const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createTechnology(data) {
  return await prisma.technology.create({
    data
  });
}

async function findAllTechnologies() {
  return await prisma.technology.findMany({
    include: {
      projects: true
    }
  });
}

module.exports = {
  createTechnology,
  findAllTechnologies
};