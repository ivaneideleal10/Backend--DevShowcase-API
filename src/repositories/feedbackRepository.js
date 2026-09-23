const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createFeedback(data) {
  return await prisma.feedback.create({
    data
  });
}

module.exports = {
  createFeedback
};