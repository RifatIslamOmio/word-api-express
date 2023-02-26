const twofactor = require("node-2fa");
const variables = require("../configs/variables");

exports.generateTotp = accountName => {
  return twofactor.generateSecret({
    name: variables.projectName,
    account: accountName
  });
};

exports.verifyTotp = totp => {
  return twofactor.verifyToken(variables.totpAdminSecret, totp) || {};
};
