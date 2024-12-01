const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  // Get the deployed contract using the address
  const myNFT = await ethers.getContractAt("MyNFT", "0x5fbdb2315678afecb3675d3e45af81782f389c2c6e1653011fc4d2f1234370b9");

  // Call the mint function (assuming your contract has a mint function)
  const tokenURI = "https://example.com/metadata/1"; // Replace with your metadata URL
  const tx = await myNFT.mint(owner.address, tokenURI);
  
  await tx.wait();
  console.log("NFT Minted! Transaction Hash:", tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
