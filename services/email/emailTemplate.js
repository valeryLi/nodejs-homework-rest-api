require("dotenv").config();

const { BASE_URL } = process.env;

const verifyEmail = (email, token) => {
  return {
    to: email,
    subject: "Email verification",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${token}>Please click here to verify your email address</>`,
  };
};

module.exports = verifyEmail;
