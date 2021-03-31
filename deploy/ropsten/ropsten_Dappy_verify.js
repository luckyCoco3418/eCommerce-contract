const { ethers, run } = require("hardhat");
const { ropsten: network_ } = require("../../addresses");

module.exports = async () => {
  const gridZoneStakingBot = await ethers.getContract("GridZoneStakingBot");
  try {
    await run("verify:verify", {
      address: gridZoneStakingBot.address,
      constructorArguments: [
        network_.ZONE.tokenAddress,
        network_.ZONE.vaultAddress,
      ],
      contract: "contracts/Staking/GridZoneStakingBot.sol:GridZoneStakingBot",
    });
  } catch(e) {
  }
};
module.exports.tags = ["ropsten_GridZoneStakingBot_verify"];
