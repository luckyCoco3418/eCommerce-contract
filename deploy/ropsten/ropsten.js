const { deployments } = require("hardhat");

module.exports = async () => {
  const dappy = await deployments.get("Dappy");

  console.log("Summary:");
  console.log("Dappy address: ", dappy.address);
  console.log("");
};
module.exports.tags = ["ropsten"];
module.exports.dependencies = [
  "ropsten_Dappy_deploy",
  "ropsten_Dappy_verify",
];
