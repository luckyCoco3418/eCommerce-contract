const { ethers, run } = require("hardhat");
const { ropsten: network_ } = require("../../addresses");

module.exports = async () => {
  const dappy = await ethers.getContract("Dappy");
  try {
    await run("verify:verify", {
      address: dappy.address,
      constructorArguments: [
        network_.USDT.tokenAddress,
      ],
      contract: "contracts/Dappy.sol:Dappy",
    });
  } catch(e) {
  }
};
module.exports.tags = ["ropsten_Dappy_verify"];
