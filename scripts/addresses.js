const { deployments } = require("hardhat");

async function main() {
  const dappy = await deployments.get("Dappy");

  console.log("Dappy address: ", dappy.address);
  console.log("");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
