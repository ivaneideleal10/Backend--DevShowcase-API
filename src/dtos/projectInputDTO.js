function createProjectInputDTO(data) {
  if (!data.title || data.title.trim() === '') {
    throw new Error('Título é obrigatório');
  }

  if (!data.description || data.description.trim() === '') {
    throw new Error('Descrição é obrigatória');
  }

  if (!data.profileId) {
    throw new Error('Profile é obrigatório');
  }

  if (data.githubUrl) {
    try {
      new URL(data.githubUrl);
    } catch {
      throw new Error('URL do GitHub inválida');
    }
  }

  return {
    title: data.title.trim(),
    description: data.description.trim(),
    githubUrl: data.githubUrl || null,
    profileId: Number(data.profileId)
  };
}

module.exports = {
  createProjectInputDTO
};