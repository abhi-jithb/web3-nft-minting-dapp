const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();

    console.log("Deploying MyNFT contract...");
    const deployTx = await myNFT.deployTransaction;
    console.log("Contract deployment transaction hash:", deployTx.hash);

    // Wait for the deployment transaction to be mined
    await deployTx.wait();

    console.log("MyNFT contract deployed to:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
