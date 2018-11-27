const BytesSignatureLibrary = artifacts.require('BytesSignatureLibrary');
const SharedAccountLibrary = artifacts.require('SharedAccountLibrary');

module.exports = async (deployer) => {
  await deployer.deploy(BytesSignatureLibrary);

  deployer.link(BytesSignatureLibrary, SharedAccountLibrary);

  await deployer.deploy(SharedAccountLibrary);
};
