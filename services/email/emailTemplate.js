require("dotenv").config();

// const { BASE_URL } = process.env;

const verifyEmail = (email, token) => {
  return {
    to: email,
    subject: "Email verification",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${token}">Please click here to verify your email address</a>`,
  };
};

module.exports = verifyEmail;
