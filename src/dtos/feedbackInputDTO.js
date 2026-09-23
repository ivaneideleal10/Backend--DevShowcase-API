function createFeedbackInputDTO(data) {
  if (!data.comment || data.comment.trim() === '') {
    throw new Error('Comentário é obrigatório');
  }

  if (data.rating === undefined || data.rating === null) {
    throw new Error('Nota é obrigatória');
  }

  return {
    comment: data.comment.trim(),
    rating: Number(data.rating),
    projectId: Number(data.projectId)
  };
}

module.exports = {
  createFeedbackInputDTO
};