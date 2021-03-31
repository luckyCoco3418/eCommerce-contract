const { ethers } = require("hardhat");
const { ropsten: network_ } = require("../../addresses");

module.exports = async ({ deployments }) => {
  const { deploy } = deployments;
  const [deployer] = await ethers.getSigners();

  console.log("Now deploying Dappy...");
  const dappy = await deploy("Dappy", {
    from: deployer.address,
    args: [
      network_.USDT.tokenAddress,
    ],
  });
  console.log("Dappy contract address: ", dappy.address);
};
module.exports.tags = ["ropsten_Dappy_deploy"];
