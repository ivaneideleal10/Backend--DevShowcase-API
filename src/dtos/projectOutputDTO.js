function createProjectOutputDTO(project) {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    githubUrl: project.githubUrl,
    profileId: project.profileId,
    technologies: project.technologies || [],
    feedbacks: project.feedbacks || []
  };
}

module.exports = {
  createProjectOutputDTO
};