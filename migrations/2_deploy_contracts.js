const Ballots = artifacts.require("Ballot.sol");
const NFT = artifacts.require("NFT");
const Market = artifacts.require("Market");

module.exports = function (deployer) {
  var namesOfProposal = ["Lency", "Poorva", "Manodnya", "NOTA"];
  deployer.deploy(Ballots, namesOfProposal);
  deployer.deploy(NFT);
  deployer.deploy(Market);
};
