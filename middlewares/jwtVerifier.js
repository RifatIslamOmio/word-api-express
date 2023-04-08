const jwt = require("jsonwebtoken");
const variables = require("../configs/variables");

exports.verifyJWTToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    let [token] = authorization.split(" ");
    if (String(authorization).split(" ").length > 1) {
      token = String(authorization).split(" ")[1];
    }
    console.log(token);

    jwt.verify(token, variables.accessTokenSecret, function (err, decoded) {
      if (err) {
        throw Object.assign(Error(), {
          message: "Invalid authorization token"
        });
      } else {
        console.log(decoded);
        // res.headers.user = decoded.name;
        next();
      }
    });
  } catch (error) {
    res.status(403).json({ status: "Unauthorized", error });
  }
};
