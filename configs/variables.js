const projectName = "Word-Api";
const totpAdminSecret = process.env.TOTP_SECRET_FOR_ADMIN;
const deltaValues = {
  verified: 0
};
const variables = {
  totpAdminSecret,
  deltaValues,
  projectName
};
module.exports = variables;
