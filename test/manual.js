const { disableFocusMode, enableFocusMode } = require("../src/focus-mode.js");

enableFocusMode();
setTimeout(() => {
    disableFocusMode();
}, 3000);
