const core = require('@actions/core');
const findForgeVersion = require("./version");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const minecraftVersion = core.getInput('minecraftVersion');
    const channel = core.getInput('channel');
    core.info(`Finding Forge version for ${minecraftVersion}-${channel} ...`);

    await findForgeVersion(minecraftVersion, channel);
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
