const enableFocusMode = require("./src/focus-mode.js").enableFocusMode;
const disableFocusMode = require("./src/focus-mode.js").disableFocusMode;
const installFocusModeShortcut = require("./src/focus-mode.js").installFocusModeShortcut;
const isFocusModeShortcutInstalled = require("./src/focus-mode.js").isFocusModeShortcutInstalled;


module.exports = {
  enableFocusMode, 
  disableFocusMode, 
  installFocusModeShortcut, 
  isFocusModeShortcutInstalled
};
