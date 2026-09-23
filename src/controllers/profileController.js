const profileRepository = require('../repositories/profileRepository');
const { createProfileInputDTO } = require('../dtos/profileInputDTO');
const { createProfileOutputDTO } = require('../dtos/profileOutputDTO');

async function createProfile(req, res) {
  try {
    const data = createProfileInputDTO(req.body);
    const profile = await profileRepository.createProfile(data);

    res.status(201).json(createProfileOutputDTO(profile));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getProfileById(req, res) {
  try {
    const profile = await profileRepository.findProfileById(req.params.id);

    if (!profile) {
      return res.status(404).json({ error: 'Perfil não encontrado' });
    }

    res.json(createProfileOutputDTO(profile));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createProfile,
  getProfileById
};