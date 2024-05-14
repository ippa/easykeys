// prettier-ignore
type NumericKeypadKeys = "Decimal" | "Key11" | "Key12" | "Multiply" | "Add" | "Clear" | "Divide" | "Subtract" | "Separator" |  "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
// prettier-ignore
type UpperAlpha =  'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
// prettier-ignore
type LowerAlpha =  'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
// prettier-ignore
type ModifierKeys = "Alt" | "AltGraph" | "CapsLock" | "Control" | "Fn" | "FnLock" | "Hyper" | "Meta" | "NumLock" | "ScrollLock" | "Shift" | "Super" | "Symbol" | "SymbolLock"
// prettier-ignore
type WhitespaceKeys = "Enter" | "Tab" | " " | "Space"
// prettier-ignore
type NavigationKeys = "ArrowDown" | "ArrowLeft" | "ArrowRight" | "ArrowUp" | "End" | "Home" | "PageDown" | "PageUp"
// prettier-ignore
type EditingKeys = "Backspace" | "Clear" | "Copy" | "CrSel" | "Cut" | "Delete" | "EraseEof" | "ExSel" | "Insert" | "Paste" | "Redo" | "Undo"
// prettier-ignore
type UIKeys =  "Accept" | "Again" | "Attn" | "Cancel" | "ContextMenu" | "Escape" | "Execute" | "Find" | "Finish" | "Help" | "Pause" | "Play" | "Props" | "Select" | "ZoomIn" | "ZoomOut"
// prettier-ignore
type DeviceKeys = "BrightnessDown" | "BrightnessUp" | "Eject" | "LogOff" | "Power" | "PowerOff" | "PrintScreen" | "Hibernate" | "Standby" | "WakeUp"
// prettier-ignore
type IMECompositionKeys = "AllCandidates" | "Alphanumeric" | "CodeInput" | "Compose" | "Convert" | "Dead" | "FinalMode" | "GroupFirst" | "GroupLast" | "GroupNext" | "GroupPrevious" | "ModeChange" | "NextCandidate" | "NonConvert" | "PreviousCandidate" | "Process" | "SingleCandidate"
// prettier-ignore
type LinuxDeadKeys = "GDK_KEY_dead_grave" | "GDK_KEY_dead_acute" | "GDK_KEY_dead_circumflex" | "GDK_KEY_dead_tilde" | "GDK_KEY_dead_perispomeni" | "GDK_KEY_dead_macron" | "GDK_KEY_dead_breve" | "GDK_KEY_dead_abovedot" | "GDK_KEY_dead_diaeresis" | "GDK_KEY_dead_abovering" | "GDK_KEY_dead_doubleacute" | "GDK_KEY_dead_caron" | "GDK_KEY_dead_cedilla" | "GDK_KEY_dead_ogonek" | "GDK_KEY_dead_iota" | "GDK_KEY_dead_voiced_sound" | "GDK_KEY_dead_semivoiced_sound" | "GDK_KEY_dead_belowdot" | "GDK_KEY_dead_hook" | "GDK_KEY_dead_horn" | "GDK_KEY_dead_stroke" | "GDK_KEY_dead_abovecomma" | "GDK_KEY_dead_psili" | "GDK_KEY_dead_abovereversedcomma" | "GDK_KEY_dead_dasia" | "GDK_KEY_dead_doublegrave" | "GDK_KEY_dead_belowring" | "GDK_KEY_dead_belowmacron" | "GDK_KEY_dead_belowcircumflex" | "GDK_KEY_dead_belowtilde" | "GDK_KEY_dead_belowbreve" | "GDK_KEY_dead_belowdiaeresis" | "GDK_KEY_dead_invertedbreve" | "GDK_KEY_dead_belowcomma" | "GDK_KEY_dead_currency" | "GDK_KEY_dead_a" | "GDK_KEY_dead_A" | "GDK_KEY_dead_e" | "GDK_KEY_dead_E" | "GDK_KEY_dead_i" | "GDK_KEY_dead_I" | "GDK_KEY_dead_o" | "GDK_KEY_dead_O" | "GDK_KEY_dead_u" | "GDK_KEY_dead_U" | "GDK_KEY_dead_small_schwa" | "GDK_KEY_dead_capital_schwa" | "GDK_KEY_dead_greek"
// prettier-ignore
type FunctionKeys =  "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12" | "F13" | "F14" | "F15" | "F16" | "F17" | "F18" | "F19" | "F20" | "Soft1" | "Soft2" | "Soft3" | "Soft4"
// prettier-ignore
type PhoneKeys = "AppSwitch" | "Call" | "Camera" | "CameraFocus" | "EndCall" | "GoBack" | "GoHome" | "HeadsetHook" | "LastNumberRedial" | "Notification" | "MannerMode" | "VoiceDial"
// prettier-ignore
type MultimediaKeys = "ChannelDown" | "ChannelUp" | "MediaFastForward" | "MediaPause" | "MediaPlay" | "MediaPlayPause" | "MediaRecord" | "MediaRewind" | "MediaStop" | "MediaTrackNext" | "MediaTrackPrevious"
// prettier-ignore
type TVControlKeys = "TV" | "TV3DMode" | "TVAntennaCable" | "TVAudioDescription" | "TVAudioDescriptionMixDown" | "TVAudioDescriptionMixUp" | "TVContentsMenu" | "TVDataService" | "TVInput" | "TVInputComponent1" | "TVInputComponent2" | "TVInputComposite1" | "TVInputComposite2" | "TVInputHDMI1" | "TVInputHDMI2" | "TVInputHDMI3" | "TVInputHDMI4" | "TVInputVGA1" | "TVMediaContext" | "TVNetwork" | "TVNumberEntry" | "TVPower" | "TVRadioService" | "TVSatellite" | "TVSatelliteBS" | "TVSatelliteCS" | "TVSatelliteToggle" | "TVTerrestrialAnalog" | "TVTerrestrialDigital" | "TVTimer"
// prettier-ignore
type MediaControllerKeys = "AVRInput" | "AVRPower" | "ColorF0Red" | "ColorF1Green" | "ColorF2Yellow" | "ColorF3Blue" | "ColorF4Grey" | "ColorF5Brown" | "ClosedCaptionToggle" | "Dimmer" | "DisplaySwap" | "DVR" | "Exit" | "FavoriteClear0" | "FavoriteClear1" | "FavoriteClear2" | "FavoriteClear3" | "FavoriteRecall0" | "FavoriteRecall1" | "FavoriteRecall2" | "FavoriteRecall3" | "FavoriteStore0" | "FavoriteStore1" | "FavoriteStore2" | "FavoriteStore3" | "Guide" | "GuideNextDay" | "GuidePreviousDay" | "Info" | "InstantReplay" | "Link" | "ListProgram" | "LiveContent" | "Lock" | "MediaApps" | "MediaAudioTrack" | "MediaLast" | "MediaSkipBackward" | "MediaSkipForward" | "MediaStepBackward" | "MediaStepForward" | "MediaTopMenu" | "NavigateIn" | "NavigateNext" | "NavigateOut" | "NavigatePrevious" | "NextFavoriteChannel" | "NextUserProfile" | "OnDemand" | "Pairing" | "PinPDown" | "PinPMove" | "PinPToggle" | "PinPUp" | "PlaySpeedDown" | "PlaySpeedReset" | "PlaySpeedUp" | "RandomToggle" | "RcLowBattery" | "RecordSpeedNext" | "RfBypass" | "ScanChannelsToggle" | "ScreenModeNext" | "Settings" | "SplitScreenToggle" | "STBInput" | "STBPower" | "Subtitle" | "Teletext" | "VideoModeNext" | "Wink" | "ZoomToggle"
// prettier-ignore
type SpeechRecognitionKeys = "SpeechCorrectionList" | "SpeechInputToggle"
// prettier-ignore
type DocumentKeys = "Close" | "New" | "Open" | "Print" | "Save" | "SpellCheck" | "MailForward" | "MailReply" | "MailSend"
// prettier-ignore
type ApplicationSelectorKeys = "LaunchCalculator" | "LaunchCalendar" | "LaunchContacts" | "LaunchMail" | "LaunchMediaPlayer" | "LaunchMusicPlayer" | "LaunchMyComputer" | "LaunchPhone" | "LaunchScreenSaver" | "LaunchSpreadsheet" | "LaunchWebBrowser" | "LaunchWebCam" | "LaunchWordProcessor" | "LaunchApplication1" | "LaunchApplication2" | "LaunchApplication3" | "LaunchApplication4" | "LaunchApplication5" | "LaunchApplication6" | "LaunchApplication7" | "LaunchApplication8" | "LaunchApplication9" | "LaunchApplication10" | "LaunchApplication11" | "LaunchApplication12" | "LaunchApplication13" | "LaunchApplication14" | "LaunchApplication15" | "LaunchApplication16"
// prettier-ignore
type BrowserControlKeys = "BrowserBack" | "BrowserFavorites" | "BrowserForward" | "BrowserHome" | "BrowserRefresh" | "BrowserSearch" | "BrowserStop"
type SpecialValueKey = "Unidentified";

// prettier-ignore
type SpecialKeys =  '!' | '"' | '#' | '€' | '%' | '&' | '/' | '(' | ')' | '=' | '?'
| '©' | '@' | '£' | '$' | '∞' | '§' | '|' | '[' | ']' | '≈' | '±'
| '¡' | '”' | '¥' | '¢' | '‰' | '¶' | '\\' | '{' | '}' | '≠' | '¿'
| '+' | ',' | '.' | '-' |';'|':'|'_'|'\''|'*'

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#editing_keys
// prettier-ignore
export type KeyboardEventKey = SpecialValueKey | ModifierKeys | WhitespaceKeys | NavigationKeys | EditingKeys | UIKeys | DeviceKeys | IMECompositionKeys | LinuxDeadKeys | FunctionKeys | PhoneKeys | MultimediaKeys | TVControlKeys | MediaControllerKeys | SpeechRecognitionKeys | DocumentKeys | ApplicationSelectorKeys | BrowserControlKeys | NumericKeypadKeys | UpperAlpha | LowerAlpha | SpecialKeys

// type KeyboardEventKeyWithMeta = `meta+${KeyboardEventKey}` | `Meta+${KeyboardEventKey}`;
// type KeyboardEventKeyWithAlt = `alt+${KeyboardEventKey}` | `Alt+${KeyboardEventKey}`;
// type KeyboardEventKeyWithControl = `control+${KeyboardEventKey}` | `Control+${KeyboardEventKey}`;
// type KeyboardEventKeyWithShift = `shift+${KeyboardEventKey}` | `Shift+${KeyboardEventKey}`;

type KeyboardEventKeyWithMeta = `Meta+${KeyboardEventKey}`;
type KeyboardEventKeyWithAlt = `Alt+${KeyboardEventKey}`;
type KeyboardEventKeyWithControl = `Ctrl+${KeyboardEventKey}`;
type KeyboardEventKeyWithShift = `Shift+${KeyboardEventKey}`;
// prettier-ignore
export type KeyboardEventKeyWithModifier = KeyboardEventKeyWithMeta | KeyboardEventKeyWithAlt | KeyboardEventKeyWithControl | KeyboardEventKeyWithShift;

type CallbackMap = {[key: string]: () => void | undefined};
type BooleanMap = {[key: string]: boolean};
interface Args {
  debug?: boolean;
  listenTo?: HTMLElement;
  // preventDefaultForKeycodes?: string[] | string;
}

class Easykeys {
  private pressedKeys: BooleanMap = {};
  private prevPressedKeys: BooleanMap = {};
  private downCallbacks: CallbackMap = {};
  private downOnceCallbacks: CallbackMap = {};
  private upCallbacks: CallbackMap = {};
  preventDefaultForKeycodes: string[] = [];
  debug: boolean = false;

  constructor(args: Args = {debug: false}) {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", this.onKeyDown);
      window.addEventListener("keyup", this.onKeyUp);
    }
    this.debug = args.debug;

    //@ts-ignore
    globalThis.easykeys = this;
  }

  down = (
    key: KeyboardEventKey | KeyboardEventKey[] | KeyboardEventKeyWithModifier | KeyboardEventKeyWithModifier[],
    callback: () => void
  ) => {
    [].concat(key).forEach((key) => (this.downOnceCallbacks[key] = callback));
  };

  downWithRepeat = (key: KeyboardEventKey | KeyboardEventKey[], callback: () => void) => {
    [].concat(key).forEach((key) => (this.downCallbacks[key] = callback));
  };

  up = (
    key: KeyboardEventKey | KeyboardEventKey[] | KeyboardEventKeyWithModifier | KeyboardEventKeyWithModifier[],
    callback: () => void
  ) => {
    [].concat(key).forEach((key) => (this.upCallbacks[key] = callback));
  };

  isDown = (key: KeyboardEventKey | KeyboardEventKeyWithModifier): boolean => {
    return this.pressedKeys[key];
  };

  isUp = (key: KeyboardEventKey | KeyboardEventKeyWithModifier): boolean => {
    return !this.pressedKeys[key];
  };

  preventDefaultFor(key: KeyboardEventKey | KeyboardEventKey[]) {
    this.preventDefaultForKeycodes = [].concat(key);
  }

  private onKeyDown = (e: KeyboardEvent) => {
    // console.log("onKeyDown", e);
    this.handleKey(e, true);
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.handleKey(e, false);
  };

  private handleKey = (e: KeyboardEvent, down: boolean) => {
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
    } else {
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
export {easykeys};
