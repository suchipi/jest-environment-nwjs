const NodeEnv = require("jest-environment-node");

// NW.js exits if you close the last window, so we keep one "dummy"
// window open just to avoid that
const dummyWindowPromise = new Promise((resolve) => {
  nw.Window.open("", { show: false }, (dummyWindow) => {
    resolve();
  });
});

class NWEnv extends NodeEnv {
  constructor(...args) {
    super(...args);

    this.global.nw = nw;
  }

  async setup() {
    await super.setup();
    await dummyWindowPromise;

    const global = this.global;

    return new Promise((resolve) => {
      nw.Window.open("", { show: false }, (win) => {
        this.window = win;
        global.window = win.window;
        global.document = win.window.document;

        win.window.document.innerHTML = "";

        resolve();

        win.on("close", () => {});
      });
    });
  }

  async teardown() {
    await super.teardown();

    if (this.window) {
      this.window.close();
    }
  }
}

module.exports = NWEnv;
