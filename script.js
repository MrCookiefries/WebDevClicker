// Game Data
let xp = 0;
let xpPs = 0;
let click = 1;
let upgrades = {
  scavenger: {
    cost: 30,
    gain: 1,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  miner: {
    cost: 360,
    gain: 5,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  researcher: {
    cost: 4320,
    gain: 25,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  farmer: {
    cost: 51840,
    gain: 125,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  worker: {
    cost: 622080,
    gain: 625,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  learner: {
    cost: 7464000,
    gain: 3125,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  designer: {
    cost: 89579000,
    gain: 15625,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  copier: {
    cost: 1074000000,
    gain: 78125,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  developer: {
    cost: 12899000000,
    gain: 390625,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  factory: {
    cost: 154793000000,
    gain: 1953000,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  hacker: {
    cost: 1857000000000,
    gain: 9765000,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  duplicator: {
    cost: 22290000000000,
    gain: 48828000,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  }
}

// Save Session
if (localStorage.xp) {
  xp = JSON.parse(localStorage.getItem('xp'));
}
if (localStorage.xpPs) {
  xpPs = JSON.parse(localStorage.getItem('xpPs'));
}
if (localStorage.click) {
  click = JSON.parse(localStorage.getItem('click'));
}
if (localStorage.upgrades) {
  upgrades = JSON.parse(localStorage.getItem('upgrades'));
}

// Update Functions
function displayCosts() {
  $(".scavenger .cost").html(roundPrice(upgrades.scavenger.getPrice()));
  $(".miner .cost").html(roundPrice(upgrades.miner.getPrice()));
  $(".researcher .cost").html(roundPrice(upgrades.researcher.getPrice()));
  $(".farmer .cost").html(roundPrice(upgrades.farmer.getPrice()));
  $(".worker .cost").html(roundPrice(upgrades.worker.getPrice()));
  $(".learner .cost").html(roundPrice(upgrades.learner.getPrice()));
  $(".designer .cost").html(roundPrice(upgrades.designer.getPrice()));
  $(".copier .cost").html(roundPrice(upgrades.copier.getPrice()));
  $(".developer .cost").html(roundPrice(upgrades.developer.getPrice()));
  $(".factory .cost").html(roundPrice(upgrades.factory.getPrice()));
  $(".hacker .cost").html(roundPrice(upgrades.hacker.getPrice()));
  $(".duplicator .cost").html(roundPrice(upgrades.duplicator.getPrice()));
}

function displayOwned() {
  $(".scavenger .owned").html(upgrades.scavenger.bought);
  $(".miner .owned").html(upgrades.miner.bought);
  $(".researcher .owned").html(upgrades.researcher.bought);
}

function displayGain() {
  $(".scavenger .gain").html(upgrades.scavenger.gain);
  $(".miner .gain").html(upgrades.miner.gain);
  $(".researcher .gain").html(upgrades.researcher.gain);
}

function calcCost(purchased, baseCost) {
  let price = baseCost * Math.pow(1.09, purchased);
  price = Math.round(price);
  price = price.toString();
  if (price.length === 7) {
    price = price.slice(0, 4) + "000";
  } else if (price.length === 8) {
    price = price.slice(0, 5) + "000";
  } else if (price.length === 9) {
    price = price.slice(0, 6) + "000";
  } else if (price.length === 10) {
    price = price.slice(0, 4) + "000000";
  } else if (price.length === 11) {
    price = price.slice(0, 5) + "000000";
  } else if (price.length === 12) {
    price = price.slice(0, 6) + "000000";
  } else if (price.length === 13) {
    price = price.slice(0, 4) + "000000000";
  } else if (price.length === 14) {
    price = price.slice(0, 5) + "000000000";
  } else if (price.length === 15) {
    price = price.slice(0, 6) + "000000000";
  } else if (price.length === 16) {
    price = price.slice(0, 4) + "000000000000";
  } else if (price.length === 17) {
    price = price.slice(0, 5) + "000000000000";
  } else if (price.length === 18) {
    price = price.slice(0, 6) + "000000000000";
  } else if (price.length === 19) {
    price = price.slice(0, 4) + "000000000000000";
  } else if (price.length === 20) {
    price = price.slice(0, 5) + "000000000000000";
  } else if (price.length === 21) {
    price = price.slice(0, 6) + "000000000000000";
  } else if (price.length === 22) {
    price = price.slice(0, 4) + "000000000000000000";
  }
  return parseInt(price);
}

function roundPrice(num) {
  num = num.toString();
  switch (num.length) {
    case 1:
      return num
      break;
    case 2:
      return num
      break;
    case 3:
      return num
      break;
    case 4:
      num = num.slice(0, 1) + "." + num.slice(1) + " tho";
      break;
    case 5:
      num = num.slice(0, 2) + "." + num.slice(2) + " tho";
      break;
    case 6:
      num = num.slice(0, 3) + "." + num.slice(3) + " tho";
      break;
    case 7:
      num = num.slice(0, 1) + "." + num.slice(1, 4) + " mil";
      break;
    case 8:
      num = num.slice(0, 2) + "." + num.slice(2, 5) + " mil";
      break;
    case 9:
      num = num.slice(0, 3) + "." + num.slice(3, 6) + " mil";
      break;
    case 10:
      num = num.slice(0, 1) + "." + num.slice(1, 4) + " bil";
      break;
    case 11:
      num = num.slice(0, 2) + "." + num.slice(2, 5) + " bil";
      break;
    case 12:
      num = num.slice(0, 3) + "." + num.slice(3, 6) + " bil";
      break;
    case 13:
      num = num.slice(0, 1) + "." + num.slice(1, 4) + " tri";
      break;
    case 14:
      num = num.slice(0, 2) + "." + num.slice(2, 5) + " tri";
      break;
    case 15:
      num = num.slice(0, 3) + "." + num.slice(3, 6) + " tri";
      break;
    case 16:
      num = num.slice(0, 1) + "." + num.slice(1, 4) + " qua";
      break;
    case 17:
      num = num.slice(0, 2) + "." + num.slice(2, 5) + " qua";
      break;
    case 18:
      num = num.slice(0, 3) + "." + num.slice(3, 6) + " qua";
      break;
    default:
      console.log("Error with the roundPrice function");
      break;
  }
  return num;
}

// DOM Events
$(document).ready(() => {

  setInterval(() => {
    xp += xpPs;
    $('.xp').html(xp);
  }, 1000)

  $(".save").on('click', () => {
    localStorage.setItem('xp', JSON.stringify(xp));
    localStorage.setItem('xpPs', JSON.stringify(xpPs));
    localStorage.setItem('click', JSON.stringify(click));
    localStorage.setItem('upgrades', JSON.stringify(upgrades));
  })

  $(".menu").children().eq(1).on('click', () => {
    $('.upgrades').toggle();
    displayCosts();
    displayOwned();
    displayGain();
  })

  $(".click").on('click', () => {
    xp += click;
    $('.xp').html(xp);
  })

})