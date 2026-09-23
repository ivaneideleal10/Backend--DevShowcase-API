function createProfileOutputDTO(profile) {
  return {
    id: profile.id,
    name: profile.name,
    email: profile.email,
    bio: profile.bio,
    projects: profile.projects || []
  };
}

module.exports = {
  createProfileOutputDTO
};