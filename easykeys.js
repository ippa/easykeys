"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easykeys = void 0;
class Easykeys {
    pressedKeys = {};
    prevPressedKeys = {};
    downCallbacks = {};
    downOnceCallbacks = {};
    upCallbacks = {};
    preventDefaultForKeycodes = [];
    debug = false;
    constructor(args = { debug: false }) {
        if (typeof window !== "undefined") {
            window.addEventListener("keydown", this.onKeyDown);
            window.addEventListener("keyup", this.onKeyUp);
        }
        this.debug = args.debug;
        //@ts-ignore
        globalThis.easykeys = this;
    }
    down = (key, callback) => {
        [].concat(key).forEach((key) => (this.downOnceCallbacks[key] = callback));
    };
    downWithRepeat = (key, callback) => {
        [].concat(key).forEach((key) => (this.downCallbacks[key] = callback));
    };
    up = (key, callback) => {
        [].concat(key).forEach((key) => (this.upCallbacks[key] = callback));
    };
    isDown = (key) => {
        return this.pressedKeys[key];
    };
    isUp = (key) => {
        return !this.pressedKeys[key];
    };
    preventDefaultFor(key) {
        this.preventDefaultForKeycodes = [].concat(key);
    }
    onKeyDown = (e) => {
        // console.log("onKeyDown", e);
        this.handleKey(e, true);
    };
    onKeyUp = (e) => {
        this.handleKey(e, false);
    };
    handleKey = (e, down) => {
        let keyid1 = e.key;
        let keyid2 = e.code;
        if (this.preventDefaultForKeycodes.some((code) => code === e.code)) {
            // console.log("preventDefault() for ", e.code); //
            e.preventDefault();
        }
        const modifierKeys = ["Meta", "Alt", "Control", "Shift", "meta", "alt", "control", "shift"];
        if (!modifierKeys.includes(keyid1)) {
            if (e.metaKey) {
                keyid1 = `Meta+${keyid1}`;
                keyid2 = `Meta+${keyid2}`;
            }
            if (e.shiftKey) {
                keyid1 = `Shift+${keyid1}`;
                keyid2 = `Shift+${keyid2}`;
            }
            if (e.ctrlKey) {
                keyid1 = `Ctrl+${keyid1}`;
                keyid2 = `Ctrl+${keyid2}`;
            }
            if (e.altKey) {
                keyid1 = `Alt+${keyid1}`;
                keyid2 = `Alt+${keyid2}`;
            }
            // console.log("handleKey", keyid1, keyid2);
        }
        // console.log("callbacks", this.downOnceCallbacks);
        this.pressedKeys[keyid1] = down;
        this.pressedKeys[keyid2] = down;
        let fn;
        if (down) {
            fn = this.downCallbacks[keyid1] || this.downCallbacks[keyid2];
        }
        else {
            fn = this.upCallbacks[keyid1] || this.upCallbacks[keyid2];
        }
        fn?.();
        if (down) {
            if (!this.prevPressedKeys[keyid1] && !this.prevPressedKeys[keyid2]) {
                let fnOnce = this.downOnceCallbacks[keyid1] || this.downOnceCallbacks[keyid2];
                fnOnce?.();
            }
        }
        // When handling relase of modifier-keys, make sure to "unpress" all combinations with that modifierkey
        if (!down && modifierKeys.includes(e.key)) {
            // console.log("released", e.key);
            Object.keys(this.prevPressedKeys).forEach((keycombo) => {
                const keys = keycombo.split("+");
                if (keys.some((key) => modifierKeys.includes(key))) {
                    this.pressedKeys[keycombo] = false;
                    this.prevPressedKeys[keycombo] = false;
                }
            });
        }
        this.prevPressedKeys[keyid1] = down;
        this.prevPressedKeys[keyid2] = down;
    };
}
const easykeys = new Easykeys();
exports.easykeys = easykeys;
