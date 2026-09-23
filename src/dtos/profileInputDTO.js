function createProfileInputDTO(data) {
  if (!data.name || data.name.trim() === '') {
    throw new Error('Nome é obrigatório');
  }

  if (!data.email || data.email.trim() === '') {
    throw new Error('E-mail é obrigatório');
  }

  return {
    name: data.name.trim(),
    email: data.email.trim(),
    bio: data.bio ? data.bio.trim() : null
  };
}

module.exports = {
  createProfileInputDTO
}