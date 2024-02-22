const { execSync } = require("child_process");
const { getInstalledShortcuts, runShortcut } = require("./shortcuts.js");
const { resolvePath } = require("../root.js");

const FOCUS_MODE_SHORTCUT_NAME = 'macos-focus-mode';
const PATH_TO_FOCUS_MODE_SHORTCUT = resolvePath(`resources/${FOCUS_MODE_SHORTCUT_NAME}.shortcut`);

function isFocusModeShortcutInstalled() {
    const installedShortcuts = getInstalledShortcuts();
    return installedShortcuts.includes(FOCUS_MODE_SHORTCUT_NAME);
}

function installFocusModeShortcut() {
    if (isFocusModeShortcutInstalled()) {
        return;
    }

    execSync(`open ${PATH_TO_FOCUS_MODE_SHORTCUT}`);
}

function runFocusModeShortcut(args) {
    return runShortcut(`${FOCUS_MODE_SHORTCUT_NAME} <<< ${args}`);
}

function ensureShortcutIsInstalled() {
    if (isFocusModeShortcutInstalled()) {
        return;
    }

    throw new Error(`${FOCUS_MODE_SHORTCUT_NAME} shortcut is not installed. Please, reinstall the package or install the shortcut manually`);
}

/**
 * @param {number} durationInMinutes
 * @returns {string}
 */
function enableFocusMode(durationInMinutes) {
    ensureShortcutIsInstalled();

    if (durationInMinutes) {
        return runFocusModeShortcut(durationInMinutes);
    }

    return runFocusModeShortcut('on');
}

function disableFocusMode() {
    ensureShortcutIsInstalled();

    return runFocusModeShortcut('off');
}

module.exports = {
    isFocusModeShortcutInstalled,
    installFocusModeShortcut,
    enableFocusMode,
    disableFocusMode
};
