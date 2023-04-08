const MFA = require("../models/MFA");
const variables = require("../configs/variables");
const jwt = require("jsonwebtoken");

exports.generateQrCode = async (req, res) => {
  try {
    const { accountName } = req.params;
    if (!accountName) {
      throw Object.assign(Error(), {
        message: "Account name required"
      });
    }
    const newSecret = MFA.generateTotp(accountName);
    res.json({
      status: "success",
      data: newSecret,
      message: "Successfully generated 2fa"
    });
  } catch (error) {
    res.status(400).json({ status: "failed", error });
  }
};

exports.verifyTotp = async (req, res) => {
  try {
    const { totp } = req.body;
    if (!totp) {
      throw Object.assign(Error(), {
        message: "Totp code required"
      });
    }
    const { delta } = MFA.verifyTotp(totp);

    if (delta !== variables.deltaValues.verified) {
      throw Object.assign(Error(), {
        message: "Invalid totp code"
      });
    }
    const token = jwt.sign(
      { name: "RFT", role: "user" },
      variables.accessTokenSecret,
      { expiresIn: variables.jwtTokenExpiresIn }
    );
    res.cookie("jwt", token, { httpOnly: true });
    res.json({
      status: "success",
      data: { authToken: token },
      message: "Successfully verified totp code"
    });
  } catch (error) {
    res.status(400).json({ status: "failed", error });
  }
};
