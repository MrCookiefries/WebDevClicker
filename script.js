// Game Data
let xp = 0;
let xpPs = 0;
let click = 1;
const upgrades = {
  scavenger: {
    cost: 30,
    gain: 1,
    bought: 0
  },
  miner: {
    cost: 360,
    gain: 5,
    bought: 0
  },
  researcher: {
    cost: 4320,
    gain: 25,
    bought: 0
  },
  farmer: {
    cost: 51840,
    gain: 125,
    bought: 0
  },
  worker: {
    cost: 622080,
    gain: 625,
    bought: 0
  },
  learner: {
    cost: 7464000,
    gain: 3125,
    bought: 0
  },
  designer: {
    cost: 89579000,
    gain: 15625,
    bought: 0
  },
  copier: {
    cost: 1074000000,
    gain: 78125,
    bought: 0
  },
  developer: {
    cost: 12899000000,
    gain: 390625,
    bought: 0
  },
  factory: {
    cost: 154793000000,
    gain: 1953000,
    bought: 0
  },
  hacker: {
    cost: 1857000000000,
    gain: 9765000,
    bought: 0
  },
  duplicator: {
    cost: 22290000000000,
    gain: 48828000,
    bought: 0
  }
}

// DOM Events
$(document).ready(() => {

  setInterval(() => {
    xp += xpPs;
    $('.xp').html(xp);
  }, 1000)

  $(".menu").children().eq(1).on('click', () => {
    $('.upgrades').show();
  })

  $(".click").on('click', () => {
    xp += click;
    $('.xp').html(xp);
  })

})