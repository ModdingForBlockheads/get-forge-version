const fetch = require('cross-fetch')

let findForgeVersion = async function (minecraftVersion, channel) {
    if (typeof minecraftVersion !== 'string') {
        throw new Error('minecraftVersion not a string');
    }
    if (channel !== 'latest' && channel !== 'recommended') {
        throw new Error("channel must be either 'latest' or 'recommended'");
    }

    const response = await fetch('https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json');
    const json = await response.json();
    const version = json['promos'][minecraftVersion + '-' + channel];
    if (version) {
        return version;
    } else {
        throw new Error(`No version found for ${minecraftVersion} on channel ${channel}`);
    }
};

module.exports = findForgeVersion;
