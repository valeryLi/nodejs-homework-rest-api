const { RequestError } = require("../../helpers");
const { updateUser } = require("../../services");

const SUB_TYPES = ["starter", "pro", "business"];

const subscriptionController = async (req, res) => {
  const { id } = req.user;
  const { subscription } = req.body;

  if (!SUB_TYPES.includes(subscription)) {
    throw RequestError(400, "Wrong subscription type");
  }

  const updateSubscription = await updateUser(id, { subscription });

  if (!updateSubscription) {
    throw RequestError(404, "Not found");
  }

  return res.status(200).json(updateSubscription);
};

module.exports = subscriptionController;
