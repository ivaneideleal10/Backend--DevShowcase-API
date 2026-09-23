const projectRepository = require('../repositories/projectRepository');
const { createProjectInputDTO } = require('../dtos/projectInputDTO');
const { createProjectOutputDTO } = require('../dtos/projectOutputDTO');

async function createProject(req, res) {
  try {
    const data = createProjectInputDTO(req.body);
    const project = await projectRepository.createProject(data);

    res.status(201).json(createProjectOutputDTO(project));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getProjects(req, res) {
  try {
    const projects = await projectRepository.findAllProjects();

    res.json(projects.map(createProjectOutputDTO));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createProject,
  getProjects
};