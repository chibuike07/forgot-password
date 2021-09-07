const { Client } = require("../model/register");

exports.signupClient = async ({ body: { email, password } }, res) => {
  try {
    //   save data to the database
    const newClient = await Client.create({
      email,
      password,
    });

    // send signup data to the client and a message
    return res.status(200).json({
      message: "Signup successful",
      status: "success",
      data: newClient,
    });
  } catch (error) {
    //   catch error and print out err in the console
    console.error(`This error is as a result of ${error}`);
    return res.status(404).json({
      message: `This error is as a result of ${error}`,
      status: "error",
    });
  }
};
