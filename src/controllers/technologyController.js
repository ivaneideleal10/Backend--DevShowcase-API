const technologyRepository = require('../repositories/technologyRepository');
const { createTechnologyInputDTO } = require('../dtos/technologyInputDTO');
const { createTechnologyOutputDTO } = require('../dtos/technologyOutputDTO');

async function createTechnology(req, res) {
  try {
    const data = createTechnologyInputDTO(req.body);
    const technology = await technologyRepository.createTechnology(data);

    res.status(201).json(createTechnologyOutputDTO(technology));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getTechnologies(req, res) {
  try {
    const technologies = await technologyRepository.findAllTechnologies();

    res.json(technologies.map(createTechnologyOutputDTO));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createTechnology,
  getTechnologies
};