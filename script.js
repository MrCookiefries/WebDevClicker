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
let powerups = {
  clicker: {
    cost: 500,
    gain: 5,
    bought: 0,
    getPrice() {
      return calcCost(this.bought, this.cost);
    }
  },
  doubleClick: {
    cost: 10000,
    gain: "Click XP x2",
    canUse: false,
    duration: 10000,
    recharge: 300000,
    purchased: false,
    getPrice() {
      return calcCost(0, this.cost);
    }
  },
  doubleXp: {
    cost: 1000000,
    gain: "XP Per Second x2",
    duration: 5000,
    canUse: false,
    purchased: false,
    recharge: 180000,
    getPrice() {
      return calcCost(0, this.cost);
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
if (localStorage.powerups) {
  powerups = JSON.parse(localStorage.getItem('powerups'));
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
  $(".scavenger .owned").html(roundPrice(upgrades.scavenger.bought));
  $(".miner .owned").html(roundPrice(upgrades.miner.bought));
  $(".researcher .owned").html(roundPrice(upgrades.researcher.bought));
  $(".farmer .owned").html(roundPrice(upgrades.farmer.bought));
  $(".worker .owned").html(roundPrice(upgrades.worker.bought));
  $(".learner .owned").html(roundPrice(upgrades.learner.bought));
  $(".designer .owned").html(roundPrice(upgrades.designer.bought));
  $(".copier .owned").html(roundPrice(upgrades.copier.bought));
  $(".developer .owned").html(roundPrice(upgrades.developer.bought));
  $(".factory .owned").html(roundPrice(upgrades.factory.bought));
  $(".hacker .owned").html(roundPrice(upgrades.hacker.bought));
  $(".duplicator .owned").html(roundPrice(upgrades.duplicator.bought));
}

function displayGain() {
  $(".scavenger .gain").html(roundPrice(upgrades.scavenger.gain));
  $(".miner .gain").html(roundPrice(upgrades.miner.gain));
  $(".researcher .gain").html(roundPrice(upgrades.researcher.gain));
  $(".farmer .gain").html(roundPrice(upgrades.farmer.gain));
  $(".worker .gain").html(roundPrice(upgrades.worker.gain));
  $(".learner .gain").html(roundPrice(upgrades.learner.gain));
  $(".designer .gain").html(roundPrice(upgrades.designer.gain));
  $(".copier .gain").html(roundPrice(upgrades.copier.gain));
  $(".developer .gain").html(roundPrice(upgrades.developer.gain));
  $(".factory .gain").html(roundPrice(upgrades.factory.gain));
  $(".hacker .gain").html(roundPrice(upgrades.hacker.gain));
  $(".duplicator .gain").html(roundPrice(upgrades.duplicator.gain));
}

function displayPowerups() {
  $('.clicker .cost').html(roundPrice(powerups.clicker.getPrice()));
  $('.double-click .cost').html(roundPrice(powerups.doubleClick.getPrice()));
  $('.double-xp .cost').html(roundPrice(powerups.doubleXp.getPrice()));
  $('.clicker .level').html(roundPrice(powerups.clicker.bought));
  $('.clicker .gain').html(roundPrice(powerups.clicker.gain));
  $('.double-click .gain').html(powerups.doubleClick.gain);
  $('.double-xp .gain').html(powerups.doubleXp.gain);
  $('.double-click .purchased').html((powerups.doubleClick.purchased ? "Yep" : "Nope"));
  $('.double-xp .purchased').html((powerups.doubleXp.purchased ? "Yep" : "Nope"));
  $('.double-click .duration').html("10 Seconds");
  $('.double-xp .duration').html("5 Seconds");
}

function buyUpgrade(upgrade) {
  let cost = upgrade.getPrice();
  if (cost > xp) {
    return;
  } else {
    xp -= cost;
    upgrade.bought++;
    xpPs += upgrade.gain;
    displayCosts();
    displayOwned();
  }
}

function buyPowerup(powerup) {
  let cost = powerup.getPrice();
  if (cost > xp) {
    return;
  } else if (powerup.purchased === true) {
    return;
  } else {
    xp -= cost;
    powerup.purchased = true;
    progressBars();
    displayPowerups();
  }
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

function usePowerup(powerup) {
  let origClick = click;
  let origxpPs = xpPs;
  if (powerup.canUse == false) {
    return;
  } else {
    powerup.canUse = false;
    if (powerup == powerups.doubleClick) {
      $(".double-click progress").val(0);
      click = click * 2;
    } else if (powerup == powerups.doubleXp) {
      $(".double-xp progress").val(0);
      xpPs = xpPs * 2;
    }
    setInterval(() => {
      if (powerup == powerups.doubleClick) {
        click = origClick;
      } else if (powerup == powerups.doubleXp) {
        xpPs = origxpPs;
      }
      progressBars();
    }, powerup.duration)
  }
}

function progressBars() {
  if (powerups.doubleClick.purchased === true && powerups.doubleClick.canUse === false) {
    let dbClickVal = $('.double-click progress').val();
    let dbClickId = setInterval(() => {
      dbClickVal = $('.double-click progress').val();
      if ($(".double-click progress").attr('max') <= dbClickVal) {
        clearInterval(dbClickId);
        powerups.doubleClick.canUse = true;
      } else {
        dbClickVal += 1000;
        $(".double-click progress").val(dbClickVal);
      }
    }, 1000)
  }
  if (powerups.doubleXp.purchased === true && powerups.doubleXp.canUse === false) {
    let dbXpVal = $('.double-xp progress').val();
    let dbXpId = setInterval(() => {
      dbXpVal = $('.double-xp progress').val();
      if ($(".double-xp progress").attr('max') <= dbXpVal) {
        clearInterval(dbXpId);
        powerups.doubleXp.canUse = true;
      } else {
        dbXpVal += 1000;
        $(".double-xp progress").val(dbXpVal);
      }
    }, 1000)
  }
  if (powerups.halveRecharge.purchased === true && powerups.halveRecharge.canUse === false) {
    let halveRchVal = $('.halve-recharge progress').val();
    let halveRchId = setInterval(() => {
      halveRchVal = $('.halve-recharge progress').val();
      if ($(".halve-recharge progress").attr('max') <= halveRchVal) {
        clearInterval(halveRchId);
        powerups.halveRecharge.canUse = true;
      } else {
        halveRchVal += 1000;
        $(".halve-recharge progress").val(halveRchVal);
      }
    }, 1000)
  }
}
// Style Shop
let style = document.getElementById('style').sheet;
style.insertRule(".inline {display: inline-block;}");
style.insertRule(".padding {padding: 10px;}");
style.insertRule(".margin {margin: 10px;}");
style.insertRule(".block {display: block;}");
style.insertRule(".flex {display: flex; flex-direction: column; align-items: center; justify-content: center;}");
style.insertRule(".sticky {position: sticky; top: 0;}");
style.insertRule(".dark {background-color: hsla(0, 0%, 0%, 0.75); color: var(--white);}");
style.insertRule(".background {background: var(--background);}");
style.insertRule(".light {background-color: hsla(0, 0%, 100%, 0.75); color: var(--black);}");
style.insertRule(".round {border-radius: 8px;}");
style.insertRule(".blue {background-color: var(--blue); color: var(--black);}");
style.insertRule(".pink {background-color: var(--pink); color: var(--black);}");
style.insertRule(".purple {background-color: var(--purple); color: var(--black);}");
style.insertRule(".border {border: 2px solid var(--black);}");
style.insertRule(".hover-pointer:hover {cursor: pointer;}");

// DOM Events
$(document).ready(() => {
  // Update Timer
  setInterval(() => {
    xp += xpPs;
    $('.xp').html(xp);
  }, 1000)
  // Local Storage Saves
  $(".save").on('click', () => {
    localStorage.setItem('xp', JSON.stringify(xp));
    localStorage.setItem('xpPs', JSON.stringify(xpPs));
    localStorage.setItem('click', JSON.stringify(click));
    localStorage.setItem('upgrades', JSON.stringify(upgrades));
    localStorage.setItem('powerups', JSON.stringify(powerups));
  })
  // Local Storage Clear Saves
  $('.clear').on('click', () => {
    localStorage.clear();
  })
  // Menu Navigation
  $(".menu").children().eq(0).on('click', () => {
    // Style Shop Purchases
  })
  $(".menu").children().eq(1).on('click', () => {
    $('.upgrades').toggle();
    $('.powerups').hide();
    displayCosts();
    displayOwned();
    displayGain();
  })
  $(".menu").children().eq(2).on('click', () => {
    $('.powerups').toggle();
    $('.upgrades').hide();
    displayPowerups();
  })
  // Click Event Handler
  $(".click").on('click', () => {
    xp += click;
    $('.xp').html(xp);
  })
})