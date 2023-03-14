const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { updateUser } = require("../../services");

const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatarController = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;

  const extention = originalname.split(".").pop();

  const filename = `${id}.${extention}`;

  const resultUpload = await Jimp.read(tempUpload);
  resultUpload.resize(250, 250).write(path.join(avatarsDir, filename));

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);

  await updateUser(id, { avatarURL });

  fs.unlink(tempUpload);

  return res.status(200).json(avatarURL);
};

module.exports = updateAvatarController;
