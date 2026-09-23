function createTechnologyOutputDTO(technology) {
  return {
    id: technology.id,
    name: technology.name,
    projects: technology.projects || []
  };
}

module.exports = {
  createTechnologyOutputDTO
};