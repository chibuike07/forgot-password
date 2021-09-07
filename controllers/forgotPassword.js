const { Client } = require("../model/register");
const crypto = require("crypto");

exports.forgotPassword = async ({ body: { email } }, res) => {
  //checking if email exist in the database
  const client = await Client.findOne({ email });

  //  things to do if the user does not exist
  if (!client)
    return res
      .status(404)
      .json({ message: "Email does not exist.", status: "error" });

  //   generate a random token for the client
  const generatedToken = crypto.randomBytes(32);
  l;
  //   check for error
  if (!generatedToken) {
    return res.status(500).json({
      message: "An error occured. Please try again later.",
      status: "error",
    });
  }

  //   converting the token to a hexstring
  const convertTokenToHexString = generatedToken.toString("hex");

  //  set the token and expiring period for the token to the client schema
  client.resetToken = convertTokenToHexString;
  client.expireToken = Date.now() + 1800000;

  try {
    const saveToken = await client.save();
    return res.status(200).json({
      message: "add your client url that handles reset password",
      data: {
        resetToken: saveToken.resetToken,
        expireToken: saveToken.expireToken,
      },
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `An error occured while trying to save the token -> ${error}`,
    });
  }
};
