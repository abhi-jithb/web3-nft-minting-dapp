// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("MyNFT", "MNFT") {}

    // Mint function to create an NFT with a specific tokenURI
    function mint(address to, string memory tokenURI) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);               // Mint the token to the given address
        _setTokenURI(tokenId, tokenURI);       // Set the token URI (metadata URL)
        _tokenIdCounter.increment();           // Increment the token counter for the next mint
    }
}
