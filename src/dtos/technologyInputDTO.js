function createTechnologyInputDTO(data) {
  if (!data.name || data.name.trim() === '') {
    throw new Error('Nome da tecnologia é obrigatório');
  }

  return {
    name: data.name.trim()
  };
}

module.exports = {
  createTechnologyInputDTO
};