const core = require('@actions/core');
const findForgeVersion = require("./version");

async function run() {
  try {
    const minecraftVersion = core.getInput('minecraftVersion');
    const channel = core.getInput('channel');
    core.info(`Finding Forge version for ${minecraftVersion}-${channel} ...`);

    const version = await findForgeVersion(minecraftVersion, channel);

    core.setOutput('version', version);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
