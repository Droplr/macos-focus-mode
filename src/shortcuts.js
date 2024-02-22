const { execSync } = require("child_process");

function getInstalledShortcuts() {
    const result = execSync("shortcuts list", { encoding: 'utf8' });

    return result.split("\n").filter(Boolean);
}

/**
 * @param {string} shortcutName
 * @returns {string}
 */
function runShortcut(shortcutName) {
    return execSync(`shortcuts run ${shortcutName}`, { encoding: 'utf8' });
}

module.exports = {
    getInstalledShortcuts,
    runShortcut
};
