const keys = [
  // 'F1',
  // 'F2',
  // 'F3',
  // 'F4',
  // 'F5',
  // 'F6',
  // 'F7',
  // 'F8',
  // 'F9',
  // 'F10',
  // 'F11',
  // 'F12',
  'KeyA',
  'KeyB',
  'KeyC',
  'KeyD',
  'KeyE',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyI',
  'KeyJ',
  'KeyK',
  'KeyL',
  'KeyM',
  'KeyN',
  'KeyO',
  'KeyP',
  'KeyQ',
  'KeyR',
  'KeyS',
  'KeyT',
  'KeyU',
  'KeyV',
  'KeyW',
  'KeyX',
  'KeyY',
  'KeyZ',
  // 'Escape',
  // 'Insert',
  // 'Delete',
  'Backquote',
  'Digit0',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Minus',
  'Equal',
  // 'Backspace',
  // 'Home',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  // 'PageUp',
  // 'CapsLock',
  'Semicolon',
  'Quote',
  // 'Enter',
  // 'PageDown',
  // 'ShiftLeft',
  'Comma',
  'Period',
  'Slash',
  // 'ShiftRight',
  // 'End',
  // 'ControlLeft',
  // 'MetaLeft',
  // 'AltLeft',
  // 'Space',
  // 'AltRight',
  // 'ContextMenu',
  // 'ControlRight',
  // 'ArrowLeft',
  // 'ArrowUp',
  // 'ArrowDown',
  // 'ArrowRight',
];

document.addEventListener('keyup', (event) => {
  // console.log(event.code);
  // console.log(event.key);
  const pressedKey = event.code;
  const pressedElement = document.getElementById(pressedKey);
  if (!pressedElement) return;
  pressedElement.classList.add('hit');
  pressedElement.addEventListener('animationend', () => {
    pressedElement.classList.remove('hit');
  });
  const selectedElement = document.querySelector('.selected');
  if (pressedElement === selectedElement) {
    selectedElement.classList.remove('selected');
    selectRandomKey();
  }
});

function selectRandomKey() {
  const targetID = getRandomKey();
  const randomElement = document.getElementById(targetID);
  randomElement.classList.add('selected');
}

function getRandomKey() {
  return keys[Math.floor(Math.random() * keys.length)];
}

selectRandomKey();
