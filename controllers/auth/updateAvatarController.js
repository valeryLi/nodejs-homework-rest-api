const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { updateUser } = require("../../services");

const avatarDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatarController = async (req, res) => {
  const { id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const extention = originalname.split(".").pop();
  const filename = `${id}.${extention}`;

  const resultUpload = await Jimp.read(tempUpload);
  resultUpload.resize(250, 250).write(path.join(avatarDir, filename));

  const avatarURL = path.join("avatars", filename);

  await updateUser(id, { avatarURL });

  fs.unlink(tempUpload);

  return res.status(200).json(avatarURL);
};

module.exports = updateAvatarController;
