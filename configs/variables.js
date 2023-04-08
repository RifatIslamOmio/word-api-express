"use-strict"
const projectName = "Word-Api";
const totpAdminSecret = process.env.TOTP_SECRET_FOR_ADMIN;
const deltaValues = {
  verified: 0
};
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const jwtTokenExpiresIn = 300 //in seconds
const variables = {
  totpAdminSecret,
  deltaValues,
  projectName,
  accessTokenSecret,
  jwtTokenExpiresIn
};
module.exports = variables;
