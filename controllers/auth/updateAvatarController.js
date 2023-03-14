const fs = require("fs/promises");
const path = require("path");

const { updateUser } = require("../../services");

const avatarDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatarController = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;

  const filename = `${id}_${originalname}`;

  const resultUpload = path.join(avatarDir, filename);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);
  await updateUser(id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatarController;
