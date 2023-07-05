export const Action = {
    Left: "Left",
    Right: "Right",
    Rotate: "Rotate",
    SlowDrop: "SlowDrop",
    Quit: "Quit",
    Pause: "Pause",
    FastDrop: "FastDrop"
}

export const Key = {
ArrowUp: Action.Rotate,
ArrowDown: Action.SlowDrop,
ArrowLeft: Action.Left,
ArrowRight: Action.Right,
KeyQ: Action.Quit,
KeyP: Action.Pause,
Space: Action.FastDrop
};

export const actionForKey = (keyCode) => Key[keyCode];