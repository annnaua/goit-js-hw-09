// REFERENCES

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

// FUNCTIONS

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBackgroudColor() {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
}

// Class

class BackgroundColorSwitcher {
  constructor() {
    this.intervalID = null;
    this.isActive = false;
  }

  startChangeColor() {
    if (this.isActive) {
      return;
    }

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

    this.isActive = true;

    this.intervalID = setInterval(() => {
      changeBodyBackgroudColor();
    }, 1000);
  }

  stopChangeColor() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;

    this.isActive = false;

    clearInterval(this.intervalID);
  }
}

const backgroundColorSwitcher = new BackgroundColorSwitcher();

// EVENT LISTENRS

refs.startBtn.addEventListener('click', () =>
  backgroundColorSwitcher.startChangeColor()
);
refs.stopBtn.addEventListener('click', () =>
  backgroundColorSwitcher.stopChangeColor()
);

// const backgroundColorSwitcher = {
//   intervalID: null,
//   isActive: false,

//   startChangeColor() {
//     if (this.isActive) {
//       return;
//     }

//     refs.startBtn.disabled = true;
//     refs.stopBtn.disabled = false;

//     this.isActive = true;

//     this.intervalID = setInterval(() => {
//       changeBodyBackgroudColor();
//     }, 1000);
//   },

//   stopChangeColor() {
//     refs.startBtn.disabled = false;
//     refs.stopBtn.disabled = true;

//     this.isActive = false;

//     clearInterval(this.intervalID);
//   },
// };

// EVENT LISTENRS

// refs.startBtn.addEventListener('click', () =>
//   backgroundColorSwitcher.startChangeColor()
// );
// refs.stopBtn.addEventListener('click', () =>
//   backgroundColorSwitcher.stopChangeColor()
// );

// function startChangeColor() {
//   backgroundColorSwitcher.startChangeColor();
// }
// function stopChangeColor() {
//   backgroundColorSwitcher.stopChangeColor();
// }
