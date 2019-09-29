// Game Data
let storage = window.localStorage;
let style = document.getElementById('style').sheet;
let xp;
if (storage.xp !== undefined) {
  xp = JSON.parse(storage.getItem('xp'));
} else {
  xp = 0;
}
let xpPs;
if (storage.xpPs !== undefined) {
  xpPs = JSON.parse(storage.getItem('xpPs'));
} else {
  xpPs = 0;
}
let click;
if (storage.click !== undefined) {
  click = JSON.parse(storage.getItem('click'));
} else {
  click = 1;
}
let upgrades;
if (localStorage.upgrades !== undefined) {
  upgrades = JSON.parse(localStorage.getItem('upgrades'));
} else {
  upgrades = {
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
}
let powerups;
if (localStorage.powerups !== undefined) {
  powerups = JSON.parse(localStorage.getItem('powerups'));
} else {
  powerups = {
    clicker: {
      cost: 500,
      gain: 5,
      bought: 0,
      purchased: false
    },
    doubleClick: {
      cost: 10000,
      gain: "Click XP x2",
      canUse: false,
      duration: 10000,
      recharge: 300000,
      bought: 0,
      purchased: false
    },
    doubleXp: {
      cost: 1000000,
      gain: "XP Per Second x2",
      duration: 5000,
      canUse: false,
      bought: 0,
      purchased: false,
      recharge: 180000
    }
  }
}
let styles;
if (localStorage.styles !== undefined) {
  styles = JSON.parse(localStorage.getItem('styles'));
} else {
  styles = {
    inline: {
      cost: 10,
      bought: 0,
      purchased: false
    },
    padding: {
      cost: 50,
      bought: 0,
      purchased: false
    },
    margin: {
      cost: 100,
      bought: 0,
      purchased: false
    },
    block: {
      cost: 500,
      bought: 0,
      purchased: false
    },
    flex: {
      cost: 1000,
      bought: 0,
      purchased: false
    },
    sticky: {
      cost: 5000,
      bought: 0,
      purchased: false
    },
    dark: {
      cost: 10000,
      bought: 0,
      purchased: false
    },
    background: {
      cost: 50000,
      bought: 0,
      purchased: false
    },
    light: {
      cost: 100000,
      bought: 0,
      purchased: false
    },
    round: {
      cost: 500000,
      bought: 0,
      purchased: false
    },
    blue: {
      cost: 1000000,
      bought: 0,
      purchased: false
    },
    pink: {
      cost: 5000000,
      bought: 0,
      purchased: false
    },
    purple: {
      cost: 10000000,
      bought: 0,
      purchased: false
    },
    border: {
      cost: 50000000,
      bought: 0,
      purchased: false
    },
    hoverPointer: {
      cost: 100000000,
      bought: 0,
      purchased: false
    },
    heavy: {
      cost: 500000000,
      bought: 0,
      purchased: false
    },
    large: {
      cost: 1000000000,
      bought: 0,
      purchased: false
    },
    hoverShadow: {
      cost: 5000000000,
      bought: 0,
      purchased: false
    },
    focus: {
      cost: 10000000000,
      bought: 0,
      purchased: false
    },
    title: {
      cost: 50000000000,
      bought: 0,
      purchased: false
    },
    text: {
      cost: 100000000000,
      bought: 0,
      purchased: false
    }
  }
}

function getPrice(object) {
  return calcCost(object.bought, object.cost);
}
// Update Functions
function displayCosts() {
  $(".scavenger .cost").html(roundPrice(getPrice(upgrades.scavenger)));
  $(".miner .cost").html(roundPrice(getPrice(upgrades.miner)));
  $(".researcher .cost").html(roundPrice(getPrice(upgrades.researcher)));
  $(".farmer .cost").html(roundPrice(getPrice(upgrades.farmer)));
  $(".worker .cost").html(roundPrice(getPrice(upgrades.worker)));
  $(".learner .cost").html(roundPrice(getPrice(upgrades.learner)));
  $(".designer .cost").html(roundPrice(getPrice(upgrades.designer)));
  $(".copier .cost").html(roundPrice(getPrice(upgrades.copier)));
  $(".developer .cost").html(roundPrice(getPrice(upgrades.developer)));
  $(".factory .cost").html(roundPrice(getPrice(upgrades.factory)));
  $(".hacker .cost").html(roundPrice(getPrice(upgrades.hacker)));
  $(".duplicator .cost").html(roundPrice(getPrice(upgrades.duplicator)));
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
  $('.clicker .cost').html(roundPrice(getPrice(powerups.clicker)));
  $('.double-click .cost').html(roundPrice(getPrice(powerups.doubleClick)));
  $('.double-xp .cost').html(roundPrice(getPrice(powerups.doubleXp)));
  $('.clicker .level').html(roundPrice(powerups.clicker.bought));
  $('.clicker .gain').html(roundPrice(powerups.clicker.gain));
  $('.double-click .gain').html(powerups.doubleClick.gain);
  $('.double-xp .gain').html(powerups.doubleXp.gain);
  $('.double-click .purchased').html((powerups.doubleClick.purchased ? "Yep" : "Nope"));
  $('.double-xp .purchased').html((powerups.doubleXp.purchased ? "Yep" : "Nope"));
  $('.double-click .duration').html("10 Seconds");
  $('.double-xp .duration').html("5 Seconds");
}

function displayStyles() {
  $('.s-inline .cost').html(roundPrice(styles.inline.cost));
  $('.s-padding .cost').html(roundPrice(styles.padding.cost));
  $('.s-margin .cost').html(roundPrice(styles.margin.cost));
  $('.s-block .cost').html(roundPrice(styles.block.cost));
  $('.s-flex .cost').html(roundPrice(styles.flex.cost));
  $('.s-sticky .cost').html(roundPrice(styles.sticky.cost));
  $('.s-dark .cost').html(roundPrice(styles.dark.cost));
  $('.s-background .cost').html(roundPrice(styles.background.cost));
  $('.s-light .cost').html(roundPrice(styles.light.cost));
  $('.s-round .cost').html(roundPrice(styles.round.cost));
  $('.s-blue .cost').html(roundPrice(styles.blue.cost));
  $('.s-pink .cost').html(roundPrice(styles.pink.cost));
  $('.s-purple .cost').html(roundPrice(styles.purple.cost));
  $('.s-border .cost').html(roundPrice(styles.border.cost));
  $('.s-hover-pointer .cost').html(roundPrice(styles.hoverPointer.cost));
  $('.s-heavy .cost').html(roundPrice(styles.heavy.cost));
  $('.s-large .cost').html(roundPrice(styles.large.cost));
  $('.s-hover-shadow .cost').html(roundPrice(styles.hoverShadow.cost));
  $('.s-focus .cost').html(roundPrice(styles.focus.cost));
  $('.s-title .cost').html(roundPrice(styles.title.cost));
  $('.s-text .cost').html(roundPrice(styles.text.cost));
  $('.s-inline .purchased').html((styles.inline.purchased ? "Yep" : "Nope"));
  $('.s-padding .purchased').html((styles.padding.purchased ? "Yep" : "Nope"));
  $('.s-margin .purchased').html((styles.margin.purchased ? "Yep" : "Nope"));
  $('.s-block .purchased').html((styles.block.purchased ? "Yep" : "Nope"));
  $('.s-flex .purchased').html((styles.flex.purchased ? "Yep" : "Nope"));
  $('.s-sticky .purchased').html((styles.sticky.purchased ? "Yep" : "Nope"));
  $('.s-dark .purchased').html((styles.dark.purchased ? "Yep" : "Nope"));
  $('.s-background .purchased').html((styles.background.purchased ? "Yep" : "Nope"));
  $('.s-light .purchased').html((styles.light.purchased ? "Yep" : "Nope"));
  $('.s-round .purchased').html((styles.round.purchased ? "Yep" : "Nope"));
  $('.s-blue .purchased').html((styles.blue.purchased ? "Yep" : "Nope"));
  $('.s-pink .purchased').html((styles.pink.purchased ? "Yep" : "Nope"));
  $('.s-purple .purchased').html((styles.purple.purchased ? "Yep" : "Nope"));
  $('.s-border .purchased').html((styles.border.purchased ? "Yep" : "Nope"));
  $('.s-hover-pointer .purchased').html((styles.hoverPointer.purchased ? "Yep" : "Nope"));
  $('.s-heavy .purchased').html((styles.heavy.purchased ? "Yep" : "Nope"));
  $('.s-large .purchased').html((styles.large.purchased ? "Yep" : "Nope"));
  $('.s-hover-shadow .purchased').html((styles.hoverShadow.purchased ? "Yep" : "Nope"));
  $('.s-focus .purchased').html((styles.focus.purchased ? "Yep" : "Nope"));
  $('.s-title .purchased').html((styles.title.purchased ? "Yep" : "Nope"));
  $('.s-text .purchased').html((styles.text.purchased ? "Yep" : "Nope"));
}

function buyUpgrade(upgrade) {
  let cost = getPrice(upgrade);
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
  let cost = getPrice(powerup);
  if (cost > xp) {
    return;
  } else if (powerup.purchased === true) {
    return;
  } else {
    xp -= cost;
    if (powerup === powerups.clicker) {
      powerup.bought++;
      click += powerup.gain;
      powerup.gain++;
    } else {
      powerup.purchased = true;
      progressBars();
    }
    displayPowerups();
  }
}

function buyStyle(styleObject) {
  let cost = getPrice(styleObject);
  if (cost > xp) {
    return;
  } else if (styleObject.purchased === true) {
    return;
  } else {
    xp -= cost;
    styleObject.purchased = true;
    if (styleObject === styles.inline) {
      style.insertRule(".inline {display: inline-block;}");
    } else if (styleObject === styles.padding) {
      style.insertRule(".padding {padding: 10px;}");
    } else if (styleObject === styles.margin) {
      style.insertRule(".margin {margin: 10px;}");
    } else if (styleObject === styles.block) {
      style.insertRule(".block {display: block;}");
    } else if (styleObject === styles.flex) {
      style.insertRule(".flex {display: flex; flex-direction: column; align-items: center; justify-content: center;}");
    } else if (styleObject === styles.sticky) {
      style.insertRule(".sticky {position: sticky; top: 0;}");
    } else if (styleObject === styles.dark) {
      style.insertRule(".dark {background-color: hsla(0, 0%, 0%, 0.75); color: var(--white);}");
    } else if (styleObject === styles.background) {
      style.insertRule(".background {background: var(--background);}");
    } else if (styleObject === styles.light) {
      style.insertRule(".light {background-color: hsla(0, 0%, 100%, 0.75); color: var(--black);}");
    } else if (styleObject === styles.round) {
      style.insertRule(".round {border-radius: 8px;}");
    } else if (styleObject === styles.blue) {
      style.insertRule(".blue {background-color: var(--blue); color: var(--black);}");
    } else if (styleObject === styles.pink) {
      style.insertRule(".pink {background-color: var(--pink); color: var(--black);}");
    } else if (styleObject === styles.purple) {
      style.insertRule(".purple {background-color: var(--purple); color: var(--black);}");
    } else if (styleObject === styles.border) {
      style.insertRule(".border {border: 2px solid var(--black);}");
    } else if (styleObject === styles.hoverPointer) {
      style.insertRule(".hover-pointer:hover {cursor: pointer;}");
    } else if (styleObject === styles.heavy) {
      style.insertRule(".heavy {font-weight: 700; font-size: 16px; font-family: var(--subtitle)}");
    } else if (styleObject === styles.large) {
      style.insertRule(".large {font-size: 22px !important; text-transform: uppercase; font-family: var(--title);}");
    } else if (styleObject === styles.hoverShadow) {
      style.insertRule(".hover-shadow:hover {box-shadow: 0 4px 6px 2px var(--purple);}");
    } else if (styleObject === styles.focus) {
      style.insertRule(".focus:focus {position: relative; top: 6px; outline: none;}");
    } else if (styleObject === styles.title) {
      style.insertRule(".title {font-size: 36px; font-family: var(--title);}");
    } else if (styleObject === styles.text) {
      style.insertRule(".text {font-family: var(--paragraph);}");
    } else {
      console.log("Error with buying styles!");
    }
  }
  displayStyles();
}

if (styles.inline.purchased) {
  style.insertRule(".inline {display: inline-block;}");
}
if (styles.padding.purchased) {
  style.insertRule(".padding {padding: 10px;}");
}
if (styles.margin.purchased) {
  style.insertRule(".margin {margin: 10px;}");
}
if (styles.block.purchased) {
  style.insertRule(".block {display: block;}");
}
if (styles.flex.purchased) {
  style.insertRule(".flex {display: flex; flex-direction: column; align-items: center; justify-content: center;}");
}
if (styles.sticky.purchased) {
  style.insertRule(".sticky {position: sticky; top: 0;}");
}
if (styles.dark.purchased) {
  style.insertRule(".dark {background-color: hsla(0, 0%, 0%, 0.75); color: var(--white);}");
}
if (styles.background.purchased) {
  style.insertRule(".background {background: var(--background);}");
}
if (styles.light.purchased) {
  style.insertRule(".light {background-color: hsla(0, 0%, 100%, 0.75); color: var(--black);}");
}
if (styles.round.purchased) {
  style.insertRule(".round {border-radius: 8px;}");
}
if (styles.blue.purchased) {
  style.insertRule(".blue {background-color: var(--blue); color: var(--black);}");
}
if (styles.pink.purchased) {
  style.insertRule(".pink {background-color: var(--pink); color: var(--black);}");
}
if (styles.purple.purchased) {
  style.insertRule(".purple {background-color: var(--purple); color: var(--black);}");
}
if (styles.border.purchased) {
  style.insertRule(".border {border: 2px solid var(--black);}");
}
if (styles.hoverPointer.purchased) {
  style.insertRule(".hover-pointer:hover {cursor: pointer;}");
}
if (styles.heavy.purchased) {
  style.insertRule(".heavy {font-weight: 700; font-size: 16px; font-family: var(--subtitle)}");
}
if (styles.large.purchased) {
  style.insertRule(".large {font-size: 22px !important; text-transform: uppercase; font-family: var(--title);}");
}
if (styles.hoverShadow.purchased) {
  style.insertRule(".hover-shadow:hover {box-shadow: 0 4px 6px 2px var(--purple);}");
}
if (styles.focus.purchased) {
  style.insertRule(".focus:focus {position: relative; top: 6px; outline: none;}");
}
if (styles.title.purchased) {
  style.insertRule(".title {font-size: 36px; font-family: var(--title);}");
}
if (styles.text.purchased) {
  style.insertRule(".text {font-family: var(--paragraph);}");
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
}

// DOM Events
$(document).ready(() => {
  // Update Timer
  setInterval(() => {
    xp += xpPs;
    $('.xp').html(roundPrice(xp));
  }, 1000)
  // Local Storage Saves
  $(".save").on('click', () => {
    localStorage.setItem('xp', JSON.stringify(xp));
    localStorage.setItem('xpPs', JSON.stringify(xpPs));
    localStorage.setItem('click', JSON.stringify(click));
    localStorage.setItem('upgrades', JSON.stringify(upgrades));
    localStorage.setItem('powerups', JSON.stringify(powerups));
    localStorage.setItem('styles', JSON.stringify(styles));
  })
  // Local Storage Clear Saves
  $('.clear').on('click', () => {
    localStorage.clear();
  })
  // Menu Navigation
  $(".menu").children().eq(0).on('click', () => {
    $('.styles').toggle();
    $('.powerups').hide();
    $('.upgrades').hide();
    displayStyles();
  })
  $(".menu").children().eq(1).on('click', () => {
    $('.upgrades').toggle();
    $('.powerups').hide();
    $(".styles").hide();
    displayCosts();
    displayOwned();
    displayGain();
  })
  $(".menu").children().eq(2).on('click', () => {
    $('.powerups').toggle();
    $('.upgrades').hide();
    $(".styles").hide();
    displayPowerups();
  })
  // Click Event Handler
  $(".click").on('click', () => {
    xp += click;
    $('.xp').html(roundPrice(xp));
  })
})