// teardown.js
module.exports = async function(globalConfig) {
  if (globalConfig.watch || globalConfig.watchAll) return;
  process.exit();
};
