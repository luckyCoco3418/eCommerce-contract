const { ethers } = require("hardhat");
const { ropsten: network_ } = require("../../addresses");

module.exports = async ({ deployments }) => {
  const { deploy } = deployments;
  const [deployer] = await ethers.getSigners();

  console.log("Now deploying GridZoneStakingBot...");
  const gridZoneStakingBot = await deploy("GridZoneStakingBot", {
    from: deployer.address,
    args: [
      network_.ZONE.tokenAddress,
      network_.ZONE.vaultAddress,
    ],
  });
  console.log("GridZoneStakingBot contract address: ", gridZoneStakingBot.address);
};
module.exports.tags = ["ropsten_GridZoneStakingBot_deploy"];