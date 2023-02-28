import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
    uniq: true,
  },
  email: {
    type: String,
    required: true,
    uniq: true,
  },
  phone: {
    type: String,
    required: true,
  },
  favorite: Boolean,
  default: false,
});

const Contacts = mongoose.model("Contacts", contactsSchema);

module.exports = Contacts;
