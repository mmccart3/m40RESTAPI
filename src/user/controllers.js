const User = require("./model");

exports.createUser = async (requestObj, responseObj) => {
    try {
        const newUser = await User.create(requestObj.body);
        console.log(newUser);
        responseObj.send({msg: "This came from createUser"});
    } catch (error) {
        console.log(error);
        responseObj.send({err: error});
    }
}