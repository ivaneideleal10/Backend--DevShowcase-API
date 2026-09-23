function createFeedbackOutputDTO(feedback) {
  return {
    id: feedback.id,
    comment: feedback.comment,
    rating: feedback.rating,
    projectId: feedback.projectId
  };
}

module.exports = {
  createFeedbackOutputDTO
};