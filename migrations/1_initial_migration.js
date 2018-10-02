var Migrations = artifacts.require("./ToDo.sol");

module.exports = function(deployer) {
  deployer.deploy(ToDo);
};
