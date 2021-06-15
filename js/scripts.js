// this tracks the current sp
var SP = 0;

// this tracks the current cp
var CP = 0;

// this tracks the current sp
var FP = 0;

// this tracks the current cp
var CP = 0;

// this tracks the current cp to sp conversion
var SPcounter = 0;

// this tracks the current sp to cp conversion
var CPcounter = 0;

// this tracks how many tier 3 power slots have been bought or sold
var T3counter = 0;

// this tracks how many tier 2 power slots have been bought or sold
var T2counter = 0;

// this tracks how many tier 1 power slots have been bought or sold
var T1counter = 0;

// this tracks how many times crossed wires has been taken
var CWcounter = 0;

// this tracks how many tier 3 slots there are
var maxtier3 = 5;

// this tracks how many tier 2 slots there are
var maxtier2 = 3;

// this tracks how many tier 1 slots there are
var maxtier1 = 1;

// this tracks how many kiss cluster members there are
var kisscounter = 0;

// this tracks how many neutral cluster members there are
var neutralcounter = 0;

// this tracks how many kill cluster members there are
var killcounter = 0;

var CGcounter = 0;

var UGcounter = 0;

var GTcounter = 0;

var NMcounter = 0;

var value = 0
var value1 = 0

var maxrooms = 5

var counterids = ['SPcounter', 'CPcounter', 'T3counter', 'T2counter', 'T1counter', 'CWcounter', 'CGcounter', 'UGcounter', 'GTcounter', 'NMcounter', 'kisscounter', 'neutralcounter', 'killcounter']
var counterbuttons = ['SPconvert', 'CPconvert', 'T3convert', 'T2convert', 'T1convert', 'CWconvert', 'CGconvert', 'UGconvert', 'GTconvert', 'NMconvert', 'kissconvert', 'neutralconvert', 'killconvert']
var counteradd = ['addSP', 'addCP', 'addT3', 'addT2', 'addT1', 'addCW', 'addCG', 'addUG', 'addGT', 'addNM', 'addkiss', 'addneutral', 'addkill']
var counternames = ['+0 SP -0 CP', '+0 CP -0 SP', 'Less Limited Power (Tier 3) [', 'Less Limited Power (Tier 2) [', 'Less Limited Power (Tier 1) [', 'Crossed Wires [', 'Conscious Geas [', 'Unconscious Geas [', 'Gang Target [', 'Nemesis [', 'Kiss Members [', 'Neutral Members [', 'Kill Members [']
var countervars = [SPcounter, CPcounter, T3counter, T2counter, T1counter, CWcounter, CGcounter, UGcounter, GTcounter, NMcounter, kisscounter, neutralcounter, killcounter]
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

window.onload = function () {
  // this is a list of all the different categories of choice that can only have 1 selected, like alignment and age
  var max1 = ['.aware', '.target', '.difficulty', '.scenario', '.alignment1', '.alignment2', '.incarnation', '.age', '.sex', '.gender', '.appearance', '.identity', '.job', '.education', '.homelife', '.shard', '.shardranking', '.powercopy', '.tier1', '.oops', '.settinglocation', '.location', '.locationnonearth', '.basesize', '.baseconcealment', '.dafuniid']

  // this makes a list of all the choices, doesn't include menu buttons
  var choices = document.getElementsByClassName('choice');

  // this just goes through the list
  for (var i = 0; i < choices.length; i++) {

    // this tracks which choice out of the list is currently being looked at
    var choice = choices[i];

    // this basically just makes the choices that have a max of more than 1 exempt from the next bit of code, i don't know why this is necessary but it breaks without it by being able to take unlimited options that should be limited
    if (choice.classList.contains('tier3') == false && choice.classList.contains('tier2') == false && choice.classList.contains('tier1') == false && choice.classList.contains('shardkitspower') == false && choice.classList.contains('powercopy') == false && choice.classList.contains('tier1st') == false && choice.classList.contains('tier2st') == false && choice.classList.contains('changerendbringerpower') == false && choice.classList.contains('masterendbringerpower') == false) {

      // if there's more than 1 choice selected in a category that should only have 1 selected at most it will go through the checked choices and uncheck the first one that isn't the thing that was just clicked
      choice.onclick = function () {
        for (var x = 0; x < max1.length; x++) {
          var checkedChecks = document.querySelectorAll(max1[x] + ':checked');
          if (checkedChecks.length >= 2) {
            for (var y = 0; y < checkedChecks.length; y++) {
              if (checkedChecks[y] != this) {
                checkedChecks[y].click();
                break;
              }
            }
          }
        }
      }
    }
  }
  // this makes a list of all the menu buttons that open up another section and don't do anything else
  var tabs = document.getElementsByClassName('tab');
  // this just goes through the list and makes it so a thing happens no matter which one you press
  for (var i = 0; i < tabs.length; i++) {
    // this tracks which menu button out of the list is currently being looked at
    var tab = tabs[i];

    // this takes the id of the menu button, removes the last 2 letters which are id, adds section to the string of text, and uses that to find the id of the related section and removes the hide class from it, which makes the section display
    tab.oninput = function () {
      var section = this.id.substr(0, this.id.length - 2) + 'section';
      if (this.checked == true) document.getElementsByClassName(section)[0].classList.remove('hide');
      else document.getElementsByClassName(section)[0].classList.add('hide');
    }
  }

  // this makes a list of all the main menu buttons
  var maintabs = document.getElementsByClassName('maintab');
  // this just goes through the list and makes it so a thing happens no matter which one you press
  for (var i = 0; i < maintabs.length; i++) {
    // this tracks which menu button out of the list is currently being looked at
    var maintab = maintabs[i];

    // this does exactly what the function above does but it also prevents the section from closing if the open all button is selected when you unselect a menu button
    maintab.oninput = function () {
      var section = this.id.substr(0, this.id.length - 2) + 'section';
      if (this.checked == true) document.getElementsByClassName(section)[0].classList.remove('hide');
      else if (document.getElementById('openallid').checked == false) { document.getElementsByClassName(section)[0].classList.add('hide'); }
    }
  }

  // this section does exactly what the above section does except for the character menu buttons, so i'm not going to comment on it too much
  var characters = document.getElementsByClassName('character');
  for (var i = 0; i < characters.length; i++) {
    var character = characters[i];
    character.oninput = function () {
      var section = this.id.substr(0, this.id.length - 2) + 'section';
      if (this.checked == true) document.getElementsByClassName(section)[0].classList.remove('hide');
      else if (document.getElementById('characteropenallid').checked == false) document.getElementsByClassName(section)[0].classList.add('hide');
    }
  }
  // this section does exactly what the above section does except for the power menu buttons, so i'm not going to comment on it too much
  var powers = document.getElementsByClassName('powers');
  for (var i = 0; i < powers.length; i++) {
    var power = powers[i];
    power.oninput = function () {
      var section = this.id.substr(0, this.id.length - 2) + 'section';
      if (this.checked == true) document.getElementsByClassName(section)[0].classList.remove('hide');
      else if (document.getElementById('powersopenallid').checked == false) document.getElementsByClassName(section)[0].classList.add('hide');
    }
  }
  // this makes a list of all the tier 3 powers
  var tier3s = document.getElementsByClassName('tier3');

  // this just goes through the list and makes it so a thing happens no matter which one you press
  for (var i = 0; i < tier3s.length; i++) {

    // this tracks which choice out of the list is currently being looked at
    var tier3 = tier3s[i];

    tier3.onclick = function () {
      // if there's more tier 3 powers selected than there are tier 3 slots then it will go through the checked choices and uncheck the first one that isn't the thing that was just clicked
      var checkedChecks = document.querySelectorAll(".tier3:checked");
      document.getElementById('t3').innerHTML = checkedChecks.length;
      if (checkedChecks.length >= maxtier3 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }

      // this finds what number in the list of tier 3 powers the one just clicked, this is done to find the number of the corresponding second trigger in the list of tier 3 second triggers
      for (var i = 0; i < document.getElementsByClassName('tier3').length; i++) {
        if (this == document.getElementsByClassName('tier3')[i]) {
          var index = i
        }
      }
      // if the option just clicked is being selected it will enable the corresponding second trigger and disable it if the option is being unselected
      if (this.checked == true) {
        document.getElementsByClassName('tier3st')[index].disabled = false
        document.getElementsByName(document.getElementsByClassName('tier3st')[index].id)[0].classList.remove('disabled')
      } else {
        if (document.getElementsByClassName('tier3st')[index].checked) { document.getElementsByClassName('tier3st')[index].click() }
        document.getElementsByClassName('tier3st')[index].disabled = true
        document.getElementsByName(document.getElementsByClassName('tier3st')[index].id)[0].classList.add('disabled')
      }
    }
  }

  // this does basically the same thing as the above section except for tier 2 powers
  var tier2s = document.querySelectorAll(".tier2");
  for (var i = 0; i < tier2s.length; i++) {
    tier2 = tier2s[i]
    tier2.onclick = function () {
      var checkedChecks = document.querySelectorAll(".tier2:checked");
      document.getElementById('t2').innerHTML = checkedChecks.length;
      if (checkedChecks.length >= maxtier2 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
      for (var i = 0; i < document.getElementsByClassName('tier2').length; i++) {
        if (this == document.getElementsByClassName('tier2')[i]) {
          var index = i
        }
      }
      if (this.checked == true) {
        document.getElementsByClassName('tier2st')[index].disabled = false
        document.getElementsByName(document.getElementsByClassName('tier2st')[index].id)[0].classList.remove('disabled')
      } else {
        if (document.getElementsByClassName('tier2st')[index].checked) { document.getElementsByClassName('tier2st')[index].click() }
        document.getElementsByClassName('tier2st')[index].disabled = true
        document.getElementsByName(document.getElementsByClassName('tier2st')[index].id)[0].classList.add('disabled')
      }
    }
  }

  // this is the exact same thing as above but for tier 1 powers
  var tier1s = document.querySelectorAll(".tier1");
  for (var i = 0; i < tier1s.length; i++) {
    tier1 = tier1s[i]
    tier1.onclick = function () {
      var checkedChecks = document.querySelectorAll(".tier1:checked");
      document.getElementById('t1').innerHTML = checkedChecks.length;
      if (checkedChecks.length >= maxtier1 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
      for (var i = 0; i < document.getElementsByClassName('tier1').length; i++) {
        if (this == document.getElementsByClassName('tier1')[i]) {
          var index = i
        }
      }
      if (this.checked == true) {
        document.getElementsByClassName('tier1st')[index].disabled = false
        document.getElementsByName(document.getElementsByClassName('tier1st')[index].id)[0].classList.remove('disabled')
      } else {
        if (document.getElementsByClassName('tier1st')[index].checked) { document.getElementsByClassName('tier1st')[index].click() }
        document.getElementsByClassName('tier1st')[index].disabled = true
        document.getElementsByName(document.getElementsByClassName('tier1st')[index].id)[0].classList.add('disabled')
      }
    }
  }

  // same thing again but for power copy options
  var copys = document.querySelectorAll(".powercopy");
  for (var i = 0; i < copys.length; i++) {
    copy = copys[i]
    copy.onclick = function () {
      var checkedChecks = document.querySelectorAll(".powercopy:checked");
      var checkedCheckst3 = document.querySelectorAll(".tier3:checked");
      document.getElementById('t3').innerHTML = checkedCheckst3.length;
      if (checkedChecks.length >= maxtier3 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
      for (var i = 0; i < document.getElementsByClassName('powercopy').length; i++) {
        if (this == document.getElementsByClassName('powercopy')[i]) {
          var index = i
        }
      }
      if (this.checked == true) {
        document.getElementsByClassName('copyst')[index].disabled = false
        document.getElementsByName(document.getElementsByClassName('copyst')[index].id)[0].classList.remove('disabled')
      } else {
        if (document.getElementsByClassName('copyst')[index].checked) { document.getElementsByClassName('copyst')[index].click() }
        document.getElementsByClassName('copyst')[index].disabled = true
        document.getElementsByName(document.getElementsByClassName('copyst')[index].id)[0].classList.add('disabled')
      }
    }
  }

  // this does the same thing again but for shardkits
  var shardkits1 = document.querySelectorAll(".shardkitspower1");
  for (var i = 0; i < shardkits1.length; i++) {
    shardkit1 = shardkits1[i]
    shardkit1.onclick = function () {
      var checkedChecks = document.querySelectorAll(".shardkitspower1:checked");
      if (checkedChecks.length >= 2 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
    }
  }

  var shardkits2 = document.querySelectorAll(".shardkitspower2");
  for (var i = 0; i < shardkits2.length; i++) {
    shardkit2 = shardkits2[i]
    shardkit2.onclick = function () {
      var checkedChecks = document.querySelectorAll(".shardkitspower2:checked");
      if (checkedChecks.length >= 2 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
    }
  }

  var shardkits3 = document.querySelectorAll(".shardkitspower3");
  for (var i = 0; i < shardkits3.length; i++) {
    shardkit3 = shardkits3[i]
    shardkit3.onclick = function () {
      var checkedChecks = document.querySelectorAll(".shardkitspower3:checked");
      if (checkedChecks.length >= 2 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
    }
  }

  var shardkits4 = document.querySelectorAll(".shardkitspower4");
  for (var i = 0; i < shardkits4.length; i++) {
    shardkit4 = shardkits4[i]
    shardkit4.onclick = function () {
      var checkedChecks = document.querySelectorAll(".shardkitspower4:checked");
      if (checkedChecks.length >= 2 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
    }
  }

  var shardkits5 = document.querySelectorAll(".shardkitspower5");
  for (var i = 0; i < shardkits5.length; i++) {
    shardkit5 = shardkits5[i]
    shardkit5.onclick = function () {
      var checkedChecks = document.querySelectorAll(".shardkitspower5:checked");
      if (checkedChecks.length >= 2 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
    }
  }

  var shardkits6 = document.querySelectorAll(".shardkitspower6");
  for (var i = 0; i < shardkits6.length; i++) {
    shardkit6 = shardkits6[i]
    shardkit6.onclick = function () {
      var checkedChecks = document.querySelectorAll(".shardkitspower6:checked");
      if (checkedChecks.length >= 2 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
    }
  }
  
  var companions = document.querySelectorAll(".companion");
  for (var i = 0; i < companions.length; i++) {
    companion = companions[i]
    companion.onclick = function () {
      var checkedChecks = document.querySelectorAll(".companion:checked");
      if (checkedChecks.length >= 3 + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
    }
  }

  var baserooms = document.querySelectorAll(".basefeature");
  for (var i = 0; i < baserooms.length; i++) {
    baseroom = baserooms[i]
    baseroom.onclick = function () {
      var checkedChecks = document.querySelectorAll(".basefeature:checked");
      if (checkedChecks.length >= maxrooms + 1) {
        for (var i = 0; i < checkedChecks.length; i++) {
          if (checkedChecks[i] != this) {
            checkedChecks[i].click();
            break;
          }
        }
      }
    }
  }
}

// this changes how many points you have
function PointChange(SPChange, CPChange, elem) {
  if (document.getElementById('aagr').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (document.getElementById('aagt').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 2){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 3){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (elem.checked == true) {
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
}

// this just prevents two things that are incompatible with the same thing from conflicting, like if you took both case 53 and servant and unselect one it won't enable handicap
function multiincompatible(SPChange, CPChange, elem, targets, otherincompatible) {
  if (document.getElementById('aagr').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (document.getElementById('aagt').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 2){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 3){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (elem.checked == true) {
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    for (var x = 0; x < otherincompatible.length; ++x) {
      if (elem.checked == true || document.getElementById(otherincompatible[x]).checked == true) {
        if (document.getElementById(targets[i]).checked == true) { document.getElementById(targets[i]).click() }
        document.getElementById(targets[i]).disabled = true;
        document.getElementsByName(targets[i])[0].classList.add('disabled');
      } else if (elem.checked != true && document.getElementById(otherincompatible[x]).checked != true) {
        document.getElementById(targets[i]).disabled = false
        document.getElementsByName(targets[i])[0].classList.remove('disabled')
      }
    }
  }
}

function multirequired(SPChange, CPChange, elem, targets, otherincompatible) {
  if (document.getElementById('aagr').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (document.getElementById('aagt').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 2){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 3){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (elem.checked == true) {
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    y = 0
    for (var x = 0; x < otherincompatible.length; ++x) {
      if (elem.checked == true || document.getElementById(otherincompatible[x]).checked == true) {
        if (document.getElementById(targets[i]).checked == true) { document.getElementById(targets[i]).click() }
        document.getElementById(targets[i]).disabled = false;
        document.getElementsByName(targets[i])[0].classList.remove('disabled');
        y = 1
      } else if (elem.checked != true && document.getElementById(otherincompatible[x]).checked != true) {
        if (y == 1) return
        document.getElementById(targets[i]).disabled = true
        document.getElementsByName(targets[i])[0].classList.add('disabled')
      }
    }
  }
}

// this enables and disables choices when you select something, used for both requirements and incompatibilities despite the name
function incompatible(SPChange, CPChange, elem, targets) {
  if (document.getElementById('aagr').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (document.getElementById('aagt').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 2){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 3){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (elem.checked == true) {
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    if (document.getElementById(targets[i]).disabled == true) {
      document.getElementById(targets[i]).disabled = false
      document.getElementsByName(targets[i])[0].classList.remove('disabled')
    } else {
      if (document.getElementById(targets[i]).checked == true) {
        document.getElementById(targets[i]).click()
      }
      document.getElementById(targets[i]).disabled = true;
      document.getElementsByName(targets[i])[0].classList.add('disabled');
    }
  }
}

// this makes requirements for choices that need multiple things, like combo powers, work and it also handles situations where multiple things can work as a requirement
function multiplerequired(SPChange, CPChange, elem, targets, otherrequirements, optionalrequirements) {
  if (document.getElementById('aagr').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (document.getElementById('aagt').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 2){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 3){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (elem.checked == true) {
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    if (optionalrequirements != undefined) {
      document.getElementById(targets[i]).disabled = true;
      document.getElementsByName(targets[i])[0].classList.add('disabled');
      if (otherrequirements.length != 0) {
        for (var i1 = 0; i1 < otherrequirements.length; ++i1) {
          for (var i2 = 0; i2 < optionalrequirements.length; ++i2) {
            if (document.getElementById(optionalrequirements[i2]).checked == true && otherrequirements[i1].checked == true) {
              document.getElementById(targets[i]).disabled = false
              document.getElementsByName(targets[i])[0].classList.remove('disabled')
            } else if (otherrequirements[i1].checked != true) {
              if (document.getElementById(targets[i]).checked == true) {
                document.getElementById(targets[i]).click()
              }
              document.getElementById(targets[i]).disabled = true;
              document.getElementsByName(targets[i])[0].classList.add('disabled');
            }
          }
        }
      } else {
        for (var i2 = 0; i2 < optionalrequirements.length; ++i2) {
          if (document.getElementById(optionalrequirements[i2]).checked == true) {
            document.getElementById(targets[i]).disabled = false
            document.getElementsByName(targets[i])[0].classList.remove('disabled')
          }
        }
      }
    }
    if (elem.checked == true) {
      for (var i1 = 0; i1 < otherrequirements.length; ++i1) {
        if (document.getElementById(otherrequirements[i1]).checked == true && optionalrequirements == undefined) {
          document.getElementById(targets[i]).disabled = false
          document.getElementsByName(targets[i])[0].classList.remove('disabled')
        }
      }
    } else {
      document.getElementById(targets[i]).disabled = true;
      document.getElementsByName(targets[i])[0].classList.add('disabled');
    }
  }
}

// this toggles the visibility of a section
function visible(SPChange, CPChange, elem, targets, incompatibletargets) {
  if (document.getElementById('aagr').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (document.getElementById('aagt').checked == true && value == 1){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 2){
    if (SPChange > 0) SPChange = Math.round (SPChange/2)
    if (CPChange > 0) CPChange = Math.round (CPChange/2)
  }
  if (value == 3){
    if (SPChange > 0) SPChange = Math.round (SPChange*2)
    if (CPChange > 0) CPChange = Math.round (CPChange*2)
  }
  if (elem.checked == true) {
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    if (elem.checked == true) {
      document.getElementsByClassName(targets[i])[0].classList.remove('visible')
    } else {
      document.getElementsByClassName(targets[i])[0].classList.add('visible');
    }
  }
  if (incompatibletargets != undefined) incompatible(0, 0, elem, incompatibletargets);
}

// these just make the open all buttons open all the sections in their relevant section and make sure that it doesn't close a section when the button for that section is selected
var ctabs = ['incarnation', 'age', 'sex', 'gender', 'appearance', 'identity', 'civilianidentity', 'location']
document.getElementById('characteropenallid').oninput = function () {
  if (this.checked) {
    for (var i = 0; i < ctabs.length; ++i) {
      document.getElementsByClassName(ctabs[i] + 'section')[0].classList.remove('hide');
    }
  } else {
    for (var i = 0; i < ctabs.length; ++i) {
      if (document.getElementById(ctabs[i] + 'id').checked == false) document.getElementsByClassName(ctabs[i] + 'section')[0].classList.add('hide');
    }
  }
}
var mtabs = ['who', 'difficulty', 'scenario', 'alignment', 'character', 'shard', 'conversion', 'perks', 'skills', 'companions', 'powers', 'items', 'cluster']
document.getElementById('openallid').oninput = function () {
  if (this.checked) {
    for (var i = 0; i < mtabs.length; ++i) {
      document.getElementsByClassName(mtabs[i] + 'section')[0].classList.remove('hide');
    }
  } else {
    for (var i = 0; i < mtabs.length; ++i) {
      if (document.getElementById(mtabs[i] + 'id').checked == false) document.getElementsByClassName(mtabs[i] + 'section')[0].classList.add('hide');
    }
  }
}
var ptabs = ['classifications', 'tier4', 'tier3', 'powercopy', 'combopowers', 'shardkits', 'tier2', 'masterendbringerpowers', 'masterendbringerappearance', 'changerendbringerpowers', 'changerendbringerappearance', 'tier1']
document.getElementById('powersopenallid').oninput = function () {
  if (this.checked) {
    for (var i = 0; i < ptabs.length; ++i) {
      document.getElementsByClassName(ptabs[i] + 'section')[0].classList.remove('hide');
    }
  } else {
    for (var i = 0; i < ptabs.length; ++i) {
      if (document.getElementById(ptabs[i] + 'id').checked == false) document.getElementsByClassName(ptabs[i] + 'section')[0].classList.add('hide');
    }
  }
}

// these are all the counters and they all do basically the same thing just with some very minor differences in things like requirements and caps
document.getElementById('add25SP').onclick = function () {
  document.getElementById('SPconvert').classList.add('activebutton')
  document.getElementById('remove25SP').classList.add('activebutton')
  document.getElementById('remove10SP').classList.add('activebutton')
  document.getElementById('remove5SP').classList.add('activebutton')
  document.getElementById('removeSP').classList.add('activebutton')
  document.getElementById('add25SP').classList.add('activebutton')
  document.getElementById('add10SP').classList.add('activebutton')
  document.getElementById('add5SP').classList.add('activebutton')
  document.getElementById('addSP').classList.add('activebutton')
  SP = SP + 25;
  CP = CP - 50;
  SPcounter = SPcounter + 25
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('SPcounter').innerHTML = SPcounter;
  const button = document.getElementById('add25SP');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('add10SP').onclick = function () {
  document.getElementById('SPconvert').classList.add('activebutton')
  document.getElementById('remove25SP').classList.add('activebutton')
  document.getElementById('remove10SP').classList.add('activebutton')
  document.getElementById('remove5SP').classList.add('activebutton')
  document.getElementById('removeSP').classList.add('activebutton')
  document.getElementById('add25SP').classList.add('activebutton')
  document.getElementById('add10SP').classList.add('activebutton')
  document.getElementById('add5SP').classList.add('activebutton')
  document.getElementById('addSP').classList.add('activebutton')
  SP = SP + 10;
  CP = CP - 20;
  SPcounter = SPcounter + 10
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('SPcounter').innerHTML = SPcounter;
  const button = document.getElementById('add10SP');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('add5SP').onclick = function () {
  document.getElementById('SPconvert').classList.add('activebutton')
  document.getElementById('remove25SP').classList.add('activebutton')
  document.getElementById('remove10SP').classList.add('activebutton')
  document.getElementById('remove5SP').classList.add('activebutton')
  document.getElementById('removeSP').classList.add('activebutton')
  document.getElementById('add25SP').classList.add('activebutton')
  document.getElementById('add10SP').classList.add('activebutton')
  document.getElementById('add5SP').classList.add('activebutton')
  document.getElementById('addSP').classList.add('activebutton')
  SP = SP + 5;
  CP = CP - 10;
  SPcounter = SPcounter + 5
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('SPcounter').innerHTML = SPcounter;
  const button = document.getElementById('add5SP');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('addSP').onclick = function () {
  document.getElementById('SPconvert').classList.add('activebutton')
  document.getElementById('remove25SP').classList.add('activebutton')
  document.getElementById('remove10SP').classList.add('activebutton')
  document.getElementById('remove5SP').classList.add('activebutton')
  document.getElementById('removeSP').classList.add('activebutton')
  document.getElementById('add25SP').classList.add('activebutton')
  document.getElementById('add10SP').classList.add('activebutton')
  document.getElementById('add5SP').classList.add('activebutton')
  document.getElementById('addSP').classList.add('activebutton')
  SP = SP + 1;
  CP = CP - 2;
  SPcounter = SPcounter + 1
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('SPcounter').innerHTML = SPcounter;
  const button = document.getElementById('addSP');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('remove25SP').onclick = function () {
  if (SPcounter == 25) {
    document.getElementById('SPconvert').classList.remove('activebutton')
    document.getElementById('remove25SP').classList.remove('activebutton')
    document.getElementById('remove10SP').classList.remove('activebutton')
    document.getElementById('remove5SP').classList.remove('activebutton')
    document.getElementById('removeSP').classList.remove('activebutton')
    document.getElementById('add25SP').classList.remove('activebutton')
    document.getElementById('add10SP').classList.remove('activebutton')
    document.getElementById('add5SP').classList.remove('activebutton')
    document.getElementById('addSP').classList.remove('activebutton')
  }
  if (SPcounter >= 25) {
    SP = SP - 25;
    CP = CP + 50;
    SPcounter = SPcounter - 25
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('SPcounter').innerHTML = SPcounter
    const button = document.getElementById('remove25SP');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('remove10SP').onclick = function () {
  if (SPcounter == 10) {
    document.getElementById('SPconvert').classList.remove('activebutton')
    document.getElementById('remove25SP').classList.remove('activebutton')
    document.getElementById('remove10SP').classList.remove('activebutton')
    document.getElementById('remove5SP').classList.remove('activebutton')
    document.getElementById('removeSP').classList.remove('activebutton')
    document.getElementById('add25SP').classList.remove('activebutton')
    document.getElementById('add10SP').classList.remove('activebutton')
    document.getElementById('add5SP').classList.remove('activebutton')
    document.getElementById('addSP').classList.remove('activebutton')
  }
  if (SPcounter >= 10) {
    SP = SP - 10;
    CP = CP + 20;
    SPcounter = SPcounter - 10
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('SPcounter').innerHTML = SPcounter
    const button = document.getElementById('remove10SP');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('remove5SP').onclick = function () {
  if (SPcounter == 5) {
    document.getElementById('SPconvert').classList.remove('activebutton')
    document.getElementById('remove25SP').classList.remove('activebutton')
    document.getElementById('remove10SP').classList.remove('activebutton')
    document.getElementById('remove5SP').classList.remove('activebutton')
    document.getElementById('removeSP').classList.remove('activebutton')
    document.getElementById('add25SP').classList.remove('activebutton')
    document.getElementById('add10SP').classList.remove('activebutton')
    document.getElementById('add5SP').classList.remove('activebutton')
    document.getElementById('addSP').classList.remove('activebutton')
  }
  if (SPcounter >= 5) {
    SP = SP - 5;
    CP = CP + 10;
    SPcounter = SPcounter - 5
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('SPcounter').innerHTML = SPcounter
    const button = document.getElementById('removeSP');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('removeSP').onclick = function () {
  if (SPcounter == 1) {
    document.getElementById('SPconvert').classList.remove('activebutton')
    document.getElementById('remove25SP').classList.remove('activebutton')
    document.getElementById('remove10SP').classList.remove('activebutton')
    document.getElementById('remove5SP').classList.remove('activebutton')
    document.getElementById('removeSP').classList.remove('activebutton')
    document.getElementById('add25SP').classList.remove('activebutton')
    document.getElementById('add10SP').classList.remove('activebutton')
    document.getElementById('add5SP').classList.remove('activebutton')
    document.getElementById('addSP').classList.remove('activebutton')
  }
  if (SPcounter >= 1) {
    SP = SP - 1;
    CP = CP + 2;
    SPcounter = SPcounter - 1
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('SPcounter').innerHTML = SPcounter
    const button = document.getElementById('removeSP');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('add25CP').onclick = function () {
  document.getElementById('CPconvert').classList.add('activebutton')
  document.getElementById('remove25CP').classList.add('activebutton')
  document.getElementById('remove10CP').classList.add('activebutton')
  document.getElementById('remove5CP').classList.add('activebutton')
  document.getElementById('removeCP').classList.add('activebutton')
  document.getElementById('add25CP').classList.add('activebutton')
  document.getElementById('add10CP').classList.add('activebutton')
  document.getElementById('add5CP').classList.add('activebutton')
  document.getElementById('addCP').classList.add('activebutton')
  SP = SP - 50;
  CP = CP + 25;
  CPcounter = CPcounter + 25
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('CPcounter').innerHTML = CPcounter;
  const button = document.getElementById('add25CP');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('add10CP').onclick = function () {
  document.getElementById('CPconvert').classList.add('activebutton')
  document.getElementById('remove25CP').classList.add('activebutton')
  document.getElementById('remove10CP').classList.add('activebutton')
  document.getElementById('remove5CP').classList.add('activebutton')
  document.getElementById('removeCP').classList.add('activebutton')
  document.getElementById('add25CP').classList.add('activebutton')
  document.getElementById('add10CP').classList.add('activebutton')
  document.getElementById('add5CP').classList.add('activebutton')
  document.getElementById('addCP').classList.add('activebutton')
  SP = SP - 20;
  CP = CP + 10;
  CPcounter = CPcounter + 10
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('CPcounter').innerHTML = CPcounter;
  const button = document.getElementById('add10CP');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('add5CP').onclick = function () {
  document.getElementById('CPconvert').classList.add('activebutton')
  document.getElementById('remove25CP').classList.add('activebutton')
  document.getElementById('remove10CP').classList.add('activebutton')
  document.getElementById('remove5CP').classList.add('activebutton')
  document.getElementById('removeCP').classList.add('activebutton')
  document.getElementById('add25CP').classList.add('activebutton')
  document.getElementById('add10CP').classList.add('activebutton')
  document.getElementById('add5CP').classList.add('activebutton')
  document.getElementById('addCP').classList.add('activebutton')
  SP = SP - 10;
  CP = CP + 5;
  CPcounter = CPcounter + 5
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('CPcounter').innerHTML = CPcounter;
  const button = document.getElementById('add5CP');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('addCP').onclick = function () {
  document.getElementById('CPconvert').classList.add('activebutton')
  document.getElementById('remove25CP').classList.add('activebutton')
  document.getElementById('remove10CP').classList.add('activebutton')
  document.getElementById('remove5CP').classList.add('activebutton')
  document.getElementById('removeCP').classList.add('activebutton')
  document.getElementById('add25CP').classList.add('activebutton')
  document.getElementById('add10CP').classList.add('activebutton')
  document.getElementById('add5CP').classList.add('activebutton')
  document.getElementById('addCP').classList.add('activebutton')
  SP = SP - 2;
  CP = CP + 1;
  CPcounter = CPcounter + 1
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('CPcounter').innerHTML = CPcounter;
  const button = document.getElementById('addCP');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('remove25CP').onclick = function () {
  if (CPcounter == 25) {
    document.getElementById('CPconvert').classList.remove('activebutton')
    document.getElementById('remove25CP').classList.remove('activebutton')
    document.getElementById('remove10CP').classList.remove('activebutton')
    document.getElementById('remove5CP').classList.remove('activebutton')
    document.getElementById('removeCP').classList.remove('activebutton')
    document.getElementById('add25CP').classList.remove('activebutton')
    document.getElementById('add10CP').classList.remove('activebutton')
    document.getElementById('add5CP').classList.remove('activebutton')
    document.getElementById('addCP').classList.remove('activebutton')
  }
  if (CPcounter >= 25) {
    SP = SP + 50;
    CP = CP - 25;
    CPcounter = CPcounter - 25
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('CPcounter').innerHTML = CPcounter
    const button = document.getElementById('remove25CP');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('remove10CP').onclick = function () {
  if (CPcounter == 10) {
    document.getElementById('CPconvert').classList.remove('activebutton')
    document.getElementById('remove25CP').classList.remove('activebutton')
    document.getElementById('remove10CP').classList.remove('activebutton')
    document.getElementById('remove5CP').classList.remove('activebutton')
    document.getElementById('removeCP').classList.remove('activebutton')
    document.getElementById('add25CP').classList.remove('activebutton')
    document.getElementById('add10CP').classList.remove('activebutton')
    document.getElementById('add5CP').classList.remove('activebutton')
    document.getElementById('addCP').classList.remove('activebutton')
  }
  if (CPcounter >= 10) {
    SP = SP + 20;
    CP = CP - 10;
    CPcounter = CPcounter - 10
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('CPcounter').innerHTML = CPcounter
    const button = document.getElementById('remove10CP');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('remove5CP').onclick = function () {
  if (CPcounter == 5) {
    document.getElementById('CPconvert').classList.remove('activebutton')
    document.getElementById('remove25CP').classList.remove('activebutton')
    document.getElementById('remove10CP').classList.remove('activebutton')
    document.getElementById('remove5CP').classList.remove('activebutton')
    document.getElementById('removeCP').classList.remove('activebutton')
    document.getElementById('add25CP').classList.remove('activebutton')
    document.getElementById('add10CP').classList.remove('activebutton')
    document.getElementById('add5CP').classList.remove('activebutton')
    document.getElementById('addCP').classList.remove('activebutton')
  }
  if (CPcounter >= 5) {
    SP = SP + 10;
    CP = CP - 5;
    CPcounter = CPcounter - 5
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('CPcounter').innerHTML = CPcounter
    const button = document.getElementById('remove5CP');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('removeCP').onclick = function () {
  if (CPcounter == 1) {
    document.getElementById('CPconvert').classList.remove('activebutton')
    document.getElementById('remove25CP').classList.remove('activebutton')
    document.getElementById('remove10CP').classList.remove('activebutton')
    document.getElementById('remove5CP').classList.remove('activebutton')
    document.getElementById('removeCP').classList.remove('activebutton')
    document.getElementById('add25CP').classList.remove('activebutton')
    document.getElementById('add10CP').classList.remove('activebutton')
    document.getElementById('add5CP').classList.remove('activebutton')
    document.getElementById('addCP').classList.remove('activebutton')
  }
  if (CPcounter >= 1) {
    SP = SP + 2;
    CP = CP - 1;
    CPcounter = CPcounter - 1
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('CPcounter').innerHTML = CPcounter
    const button = document.getElementById('removeCP');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('addT3').onclick = function () {

  if (document.getElementById('euib').checked == false) {
    if (T3counter != -1) {
      document.getElementById('T3convert').classList.add('activebutton')
    } else {
      document.getElementById('T3convert').classList.remove('activebutton')
    }
    SP = SP - 5;
    T3counter = T3counter + 1;
    maxtier3 = maxtier3 + 1;
    document.getElementById('t3slots').innerHTML = maxtier3;
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('T3counter').innerHTML = T3counter;
    const button = document.getElementById('addT3');
    const circle = document.createElement("span");
    button.appendChild(circle);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
  }
}
document.getElementById('removeT3').onclick = function () {

  var powers = 0;
  for (var i = 0; i < document.getElementsByClassName('tier3').length; ++i) {
    if (document.getElementsByClassName('tier3')[i].checked == true) { powers = powers + 1 }
  }
  if (document.getElementById('euib').checked == false) {
    if (T3counter == 1) {
      document.getElementById('T3convert').classList.remove('activebutton')
    } else if (powers != 5) {
      // document.getElementById('T3convert').classList.add('activebutton')
    }
    if (T3counter >= 1 && T3counter > (powers - 5)) {
      SP = SP + 5;
      T3counter = T3counter - 1;
      maxtier3 = maxtier3 - 1;
      document.getElementById('t3slots').innerHTML = maxtier3;
      document.getElementById('SP').innerHTML = SP;
      document.getElementById('CP').innerHTML = CP;
      document.getElementById('T3counter').innerHTML = T3counter
      const button = document.getElementById('removeT3');
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.classList.add("ripple");
      button.appendChild(circle);
    }
  }
}
document.getElementById('addT2').onclick = function () {

  if ((document.getElementById('ttv5').checked == true || document.getElementById('sxhj').checked == true) && document.getElementById('euib').checked == false) {
    if (T2counter != -1) {
      document.getElementById('T2convert').classList.add('activebutton')
    } else {
      document.getElementById('T2convert').classList.remove('activebutton')
    }
    SP = SP - 15;
    T2counter = T2counter + 1;
    maxtier2 = maxtier2 + 1;
    document.getElementById('t2slots').innerHTML = maxtier2;
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('T2counter').innerHTML = T2counter;
    const button = document.getElementById('addT2');
    const circle = document.createElement("span");
    button.appendChild(circle);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
  }
}
document.getElementById('removeT2').onclick = function () {

  var powers = 0;
  for (var i = 0; i < document.getElementsByClassName('tier2').length; ++i) {
    if (document.getElementsByClassName('tier2')[i].checked == true) { powers = powers + 1 }
  }
  if ((document.getElementById('ttv5').checked == true || document.getElementById('sxhj').checked == true) && document.getElementById('euib').checked == false) {
    if (T2counter == 1) {
      document.getElementById('T2convert').classList.remove('activebutton')
    } else if (powers != 3) {
      // document.getElementById('T2convert').classList.add('activebutton')
    }
    if (T2counter >= 1 && T2counter > (powers - 3)) {
      SP = SP + 15;
      T2counter = T2counter - 1;
      maxtier2 = maxtier2 - 1;
      document.getElementById('t2slots').innerHTML = maxtier2;
      document.getElementById('SP').innerHTML = SP;
      document.getElementById('CP').innerHTML = CP;
      document.getElementById('T2counter').innerHTML = T2counter
      const button = document.getElementById('removeT2');
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.classList.add("ripple");
      button.appendChild(circle);
    }
  }
}
document.getElementById('addT1').onclick = function () {

  if (document.getElementById('sxhj').checked == true && document.getElementById('euib').checked == false) {
    if (T1counter != -1) {
      document.getElementById('T1convert').classList.add('activebutton')
    } else {
      document.getElementById('T1convert').classList.remove('activebutton')
    }
    SP = SP - 25;
    T1counter = T1counter + 1;
    maxtier1 = maxtier1 + 1;
    document.getElementById('t1slots').innerHTML = maxtier1;
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('T1counter').innerHTML = T1counter;
    const button = document.getElementById('addT1');
    const circle = document.createElement("span");
    button.appendChild(circle);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
  }
}
document.getElementById('removeT1').onclick = function () {

  var powers = 0;
  for (var i = 0; i < document.getElementsByClassName('tier1').length; ++i) {
    if (document.getElementsByClassName('tier1')[i].checked == true) { powers = powers + 1 }
  }
  if (document.getElementById('sxhj').checked == true && document.getElementById('euib').checked == false) {
    if (T1counter == 1) {
      document.getElementById('T1convert').classList.remove('activebutton')
    } else if (powers != 1) {
      // document.getElementById('T1convert').classList.add('activebutton')
    }
    if (T1counter >= 1 && T1counter > (powers - 1)) {
      SP = SP + 25;
      T1counter = T1counter - 1;
      maxtier1 = maxtier1 - 1;
      document.getElementById('t1slots').innerHTML = maxtier1;
      document.getElementById('SP').innerHTML = SP;
      document.getElementById('CP').innerHTML = CP;
      document.getElementById('T1counter').innerHTML = T1counter
      const button = document.getElementById('removeT1');
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.classList.add("ripple");
      button.appendChild(circle);
    }
  }
}
document.getElementById('addkiss').onclick = function () {

  if (neutralcounter + kisscounter + killcounter < 10) {
    document.getElementById('kissconvert').classList.add('activebutton')
    CP = CP - 5;
    kisscounter = kisscounter + 1
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('kisscounter').innerHTML = kisscounter;
    const button = document.getElementById('addkiss');
    const circle = document.createElement("span");
    button.appendChild(circle);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
  }
}
document.getElementById('removekiss').onclick = function () {

  if (kisscounter == 1) {
    document.getElementById('kissconvert').classList.remove('activebutton')
    document.getElementById('removekiss').classList.remove('activebutton')
    document.getElementById('addkiss').classList.remove('activebutton')
  }
  if (kisscounter >= 1) {
    CP = CP + 5;
    kisscounter = kisscounter - 1
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('kisscounter').innerHTML = kisscounter
    const button = document.getElementById('removekiss');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('addneutral').onclick = function () {

  if (neutralcounter + kisscounter + killcounter < 10) {
    document.getElementById('neutralconvert').classList.add('activebutton')
    CP = CP - 3;
    neutralcounter = neutralcounter + 1
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('neutralcounter').innerHTML = neutralcounter;
    const button = document.getElementById('addneutral');
    const circle = document.createElement("span");
    button.appendChild(circle);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
  }
}
document.getElementById('removeneutral').onclick = function () {

  if (neutralcounter == 1) {
    document.getElementById('neutralconvert').classList.remove('activebutton')
    document.getElementById('removeneutral').classList.remove('activebutton')
    document.getElementById('addneutral').classList.remove('activebutton')
  }
  if (neutralcounter >= 1) {
    CP = CP + 3;
    neutralcounter = neutralcounter - 1
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('neutralcounter').innerHTML = neutralcounter
    const button = document.getElementById('removeneutral');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('addkill').onclick = function () {

  if (neutralcounter + kisscounter + killcounter < 10) {
    document.getElementById('killconvert').classList.add('activebutton')
    CP = CP + 5;
    killcounter = killcounter + 1
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('killcounter').innerHTML = killcounter;
    const button = document.getElementById('addkill');
    const circle = document.createElement("span");
    button.appendChild(circle);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
  }
}
document.getElementById('removekill').onclick = function () {

  if (killcounter == 1) {
    document.getElementById('killconvert').classList.remove('activebutton')
    document.getElementById('removekill').classList.remove('activebutton')
    document.getElementById('addkill').classList.remove('activebutton')
  }
  if (killcounter >= 1) {
    CP = CP - 5;
    killcounter = killcounter - 1
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('killcounter').innerHTML = killcounter
    const button = document.getElementById('removekill');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('addCW').onclick = function () {

  var powers = 0;
  for (var i = 0; i < document.getElementsByClassName('tier3').length; ++i) {
    if (document.getElementsByClassName('tier3')[i].checked == true) { powers = powers + 1 }
  }
  for (var i = 0; i < document.getElementsByClassName('tier2').length; ++i) {
    if (document.getElementsByClassName('tier2')[i].checked == true) { powers = powers + 1 }
  }
  for (var i = 0; i < document.getElementsByClassName('tier1').length; ++i) {
    if (document.getElementsByClassName('tier1')[i].checked == true) { powers = powers + 1 }
  }
  if (CWcounter < powers) {
    document.getElementById('CWconvert').classList.add('activebutton')
    if (document.getElementById('aagr').checked == true && value == 1){
      SP = SP + 10;
      CP = CP + 10;
    } else if (document.getElementById('aagt').checked == true && value == 1){
      SP = SP + 3;
      CP = CP + 3;
    } else {
      SP = SP + 5;
      CP = CP + 5;
    }
    CWcounter = CWcounter + 1
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('CWcounter').innerHTML = CWcounter;
    const button = document.getElementById('addCW');
    const circle = document.createElement("span");
    button.appendChild(circle);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
  }
}
document.getElementById('removeCW').onclick = function () {

  if (CWcounter == 1) {
    document.getElementById('CWconvert').classList.remove('activebutton')
    document.getElementById('removeCW').classList.remove('activebutton')
    document.getElementById('addCW').classList.remove('activebutton')
  }
  if (CWcounter >= 1) {
    if (document.getElementById('aagr').checked == true && value == 1){
      SP = SP - 10;
      CP = CP - 10;
    } else if (document.getElementById('aagt').checked == true && value == 1){
      SP = SP - 3;
      CP = CP - 3;
    } else {
      SP = SP - 5;
      CP = CP - 5;
    }
    CWcounter = CWcounter - 1
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('CWcounter').innerHTML = CWcounter
    const button = document.getElementById('removeCW');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('addCG').onclick = function () {
  document.getElementById('CGconvert').classList.add('activebutton')
  if (document.getElementById('aagr').checked == true && value == 1){
    SP = SP + 6;
    CP = CP + 16;
  } else if (document.getElementById('aagt').checked == true && value == 1){
    SP = SP + 2;
    CP = CP + 4;
  } else {
    SP = SP + 3;
    CP = CP + 8;
  }
  CGcounter = CGcounter + 1
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('CGcounter').innerHTML = CGcounter;
  const button = document.getElementById('addCG');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('removeCG').onclick = function () {
  if (CGcounter == 1) {
    document.getElementById('CGconvert').classList.remove('activebutton')
  }
  if (CGcounter >= 1) {
    if (document.getElementById('aagr').checked == true && value == 1){
      SP = SP - 6;
      CP = CP - 16;
    } else if (document.getElementById('aagt').checked == true && value == 1){
      SP = SP - 2;
      CP = CP - 4;
    } else {
      SP = SP - 3;
      CP = CP - 8;
    }
    CGcounter = CGcounter - 1
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('CGcounter').innerHTML = CGcounter
    const button = document.getElementById('removeCG');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('addUG').onclick = function () {
  document.getElementById('UGconvert').classList.add('activebutton')
  if (document.getElementById('aagr').checked == true && value == 1){
    SP = SP + 16;
    CP = CP + 6;
  } else if (document.getElementById('aagt').checked == true && value == 1){
    SP = SP + 4;
    CP = CP + 2;
  } else {
    SP = SP + 8;
    CP = CP + 3;
  }
  UGcounter = UGcounter + 1
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('UGcounter').innerHTML = UGcounter;
  const button = document.getElementById('addUG');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('removeUG').onclick = function () {
  if (UGcounter == 1) {
    document.getElementById('UGconvert').classList.remove('activebutton')
  }
  if (UGcounter >= 1) {
    if (document.getElementById('aagr').checked == true && value == 1){
      SP = SP - 16;
      CP = CP - 6;
    } else if (document.getElementById('aagt').checked == true && value == 1){
      SP = SP - 4;
      CP = CP - 2;
    } else {
      SP = SP - 8;
      CP = CP - 3;
    }
    UGcounter = UGcounter - 1
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('UGcounter').innerHTML = UGcounter
    const button = document.getElementById('removeUG');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('addGT').onclick = function () {
  document.getElementById('GTconvert').classList.add('activebutton')
  if (document.getElementById('aagr').checked == true && value == 1){
    SP = SP + 10;
    CP = CP + 10;
  } else if (document.getElementById('aagt').checked == true && value == 1){
    SP = SP + 3;
    CP = CP + 3;
  } else {
    SP = SP + 5;
    CP = CP + 5;
  }
  GTcounter = GTcounter + 1
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('GTcounter').innerHTML = GTcounter;
  const button = document.getElementById('addGT');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('removeGT').onclick = function () {
  if (GTcounter == 1) {
    document.getElementById('GTconvert').classList.remove('activebutton')
  }
  if (GTcounter >= 1) {
    if (document.getElementById('aagr').checked == true && value == 1){
      SP = SP - 10;
      CP = CP - 10;
    } else if (document.getElementById('aagt').checked == true && value == 1){
      SP = SP - 3;
      CP = CP - 3;
    } else {
      SP = SP - 5;
      CP = CP - 5;
    }
    GTcounter = GTcounter - 1
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('GTcounter').innerHTML = GTcounter
    const button = document.getElementById('removeGT');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}
document.getElementById('addNM').onclick = function () {
  document.getElementById('NMconvert').classList.add('activebutton')
  if (document.getElementById('aagr').checked == true && value == 1){
    SP = SP + 10;
    CP = CP + 10;
  } else if (document.getElementById('aagt').checked == true && value == 1){
    SP = SP + 3;
    CP = CP + 3;
  } else {
    SP = SP + 5;
    CP = CP + 5;
  }
  NMcounter = NMcounter + 1
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  document.getElementById('NMcounter').innerHTML = NMcounter;
  const button = document.getElementById('addNM');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
}
document.getElementById('removeNM').onclick = function () {
  if (NMcounter == 1) {
    document.getElementById('NMconvert').classList.remove('activebutton')
  }
  if (NMcounter >= 1) {
    if (document.getElementById('aagr').checked == true && value == 1){
      SP = SP - 10;
      CP = CP - 10;
    } else if (document.getElementById('aagt').checked == true && value == 1){
      SP = SP - 3;
      CP = CP - 3;
    } else {
      SP = SP - 5;
      CP = CP - 5;
    }
    NMcounter = NMcounter - 1
    document.getElementById('SP').innerHTML = SP;
    document.getElementById('CP').innerHTML = CP;
    document.getElementById('NMcounter').innerHTML = NMcounter
    const button = document.getElementById('removeNM');
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
  }
}

// this makes sure that the counter ids are 3 digits
function pad(n, length) {
  var len = length - ('' + n).length;
  if (n > -1) {
    return (len > 0 ? new Array(++len).join('0') : '') + n
  } else {
    return "-" + (len > 0 ? new Array(++len).join('0') : '') + Math.abs(n)
  }
}
// this opens the overlay and displays the names and ids of all the choices
document.getElementById('check').onclick = function () {
  countervars = [SPcounter, CPcounter, T3counter, T2counter, T1counter, CWcounter, CGcounter, UGcounter, GTcounter, NMcounter, kisscounter, neutralcounter, killcounter]
  const selections = [];
  document.getElementById('check2').innerHTML = "";
  document.getElementById('check3').innerHTML = "";
  var elements = document.getElementsByClassName('choice')
  const button = document.getElementById('check');
  const circle = document.createElement("span");
  circle.style.width = circle.style.height = `80px`;
  circle.style.left = `${button.offsetLeft - 0}px`;
  circle.style.top = `${button.offsetTop - 22}px`;
  circle.classList.add("ripple");
  button.appendChild(circle);
  for (var i = 0; i < elements.length; ++i) {
    if (document.getElementById(document.getElementsByClassName('choice')[i].getAttribute("id")).checked == true) {
      selections.push(document.getElementsByClassName('choice')[i])
    }
    for (var x = 0; x < counterids.length; ++x) {
      if (elements[i].id == counterids[x] && countervars[x] != 0){
        selections.push(alphabet[x] + pad(countervars[x], 3))
      }
    }
  }
  for (var i = 0; i < selections.length; ++i) {
    if (typeof selections[i] != 'string') {
      document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + selections[i].getAttribute('name') + ", ";
    } else {
      for (var x = 0; x < counterids.length; ++x) {
        if (selections[i].substr(0, 1) == alphabet[x] && selections[i].substr(1, 3).match(/^[0-9]+$/) != null){
          if (x == 0) {
            document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + "+" + countervars[x] + " SP -" + countervars[x]*2 + "CP, "
          } else if (x == 1) {
            document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + "+" + countervars[x] + " CP -" + countervars[x]*2 + "SP, "
          } else document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + counternames[x] + countervars[x] + "], "
        }
      }
    }
    if (typeof selections[i] != 'string') {
      document.getElementById('check3').innerHTML = document.getElementById('check3').innerHTML + selections[i].id + ", ";
    } else {
      for (var x = 0; x < counterids.length; ++x) {
        if (selections[i].substr(0, 1) == alphabet[x] && selections[i].substr(1, 3).match(/^[0-9]+$/) != null){
          document.getElementById('check3').innerHTML = document.getElementById('check3').innerHTML + selections[i] + ", "
        }
      }
    }
  }
  // document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + "+" + SPcounter + " SP -" + SPcounter * 2 + " CP, " + "+" + CPcounter + " CP -" + CPcounter * 2 + " SP, " + "Less Limited Power (Tier 3) [" + T3counter + "], " + "Less Limited Power (Tier 2) [" + T2counter + "], " + "Less Limited Power (Tier 1) [" + T1counter + "], " + "Crossed Wires [" + CWcounter + "], " + "Conscious Geas [" + CGcounter + "], " + "Unconscious Geas [" + UGcounter + "], " + "Gang Target [" + GTcounter + "], " + "Kiss Members [" + kisscounter + "], " + "Neutral Members [" + neutralcounter + "], " + "Kill Members [" + killcounter + "]"
  // document.getElementById('check3').innerHTML = document.getElementById('check3').innerHTML + pad(SPcounter, 3) + ", " + pad(CPcounter, 3) + ", " + pad(T3counter, 3) + ", " + pad(T2counter, 3) + ", " + pad(T1counter, 3) + ", " + pad(CWcounter, 3) + ", " + pad(CGcounter, 3) + ", " + pad(UGcounter, 3) + ", " + pad(UGcounter, 3) + ", "+ pad(kisscounter, 3) + ", " + pad(neutralcounter, 3) + ", " + pad(killcounter, 3)
  document.getElementById('check1').classList.remove('visible');
  document.getElementById('overlay').classList.remove('visible');
  if (document.getElementById("check2").value == '') {
    document.getElementById('check2label').classList.remove('active');
  } else {
    document.getElementById('check2label').classList.add('active');
  }
  if (document.getElementById("check3").value == '') {
    document.getElementById('check3label').classList.remove('active');
  } else {
    document.getElementById('check3label').classList.add('active');
  }
  if (document.getElementById("check4").value == '') {
    document.getElementById('check4label').classList.remove('active');
  } else {
    document.getElementById('check4label').classList.add('active');
  }
}
// this imports choices from a string
document.getElementById('import').onclick = function () {
  killcounter = 0;
  neutralcounter = 0;
  kisscounter = 0;
  CWcounter = 0;
  CGcounter = 0;
  UGcounter = 0;
  T1counter = 0;
  T2counter = 0;
  T3counter = 0;
  CPcounter = 0;
  SPcounter = 0;
  GTcounter = 0;
  NMcounter = 0;
  maxtier1 = 1;
  maxtier2 = 3;
  maxtier3 = 5;
  document.getElementById('t1slots').innerHTML = "1"
  document.getElementById('t2slots').innerHTML = "3"
  document.getElementById('t3slots').innerHTML = "5"
  document.getElementById('killconvert').classList.remove('activebutton')
  document.getElementById('neutralconvert').classList.remove('activebutton')
  document.getElementById('kissconvert').classList.remove('activebutton')
  document.getElementById('CWconvert').classList.remove('activebutton')
  document.getElementById('CGconvert').classList.remove('activebutton')
  document.getElementById('UGconvert').classList.remove('activebutton')
  document.getElementById('T1convert').classList.remove('activebutton')
  document.getElementById('T2convert').classList.remove('activebutton')
  document.getElementById('T3convert').classList.remove('activebutton')
  document.getElementById('CPconvert').classList.remove('activebutton')
  document.getElementById('SPconvert').classList.remove('activebutton')
  document.getElementById('GTconvert').classList.remove('activebutton')
  document.getElementById('NMconvert').classList.remove('activebutton')
  document.getElementById('T1counter').innerHTML = 0
  document.getElementById('T2counter').innerHTML = 0
  document.getElementById('T3counter').innerHTML = 0
  document.getElementById('killcounter').innerHTML = 0
  document.getElementById('neutralcounter').innerHTML = 0
  document.getElementById('kisscounter').innerHTML = 0
  document.getElementById('CWcounter').innerHTML = 0
  document.getElementById('CGcounter').innerHTML = 0
  document.getElementById('UGcounter').innerHTML = 0
  document.getElementById('CPcounter').innerHTML = 0
  document.getElementById('SPcounter').innerHTML = 0
  document.getElementById('GTcounter').innerHTML = 0
  document.getElementById('NMcounter').innerHTML = 0
  const selections = [];
  var elements = document.getElementsByClassName('choice')
  var ids = document.getElementById('check4').value;
  var imp = ids.replace(/\,/g, "");
  imp = imp.replace(/\s+/g, '');
  document.getElementById('check2').innerHTML = "";
  document.getElementById('check3').innerHTML = "";
  for (var i = 0; i < elements.length; ++i) {
    if (elements[i].checked == true) {
      elements[i].click()
    }
  }
  SP = 0
  CP = 0
  for (var i = 0; i < (imp.length) / 4; ++i) {
    selections.push(imp.substr(i * 4, 4));
    if (selections[i] != null) {
      if (document.getElementById('check2label').classList.contains('active') == false) {
        document.getElementById('check2label').classList.add('active')
        document.getElementById('check3label').classList.add('active')
      }
      document.getElementById('check3').innerHTML = document.getElementById('check3').innerHTML + selections[i] + ", ";
      if (document.getElementById(selections[i]) != null) {
        document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + document.getElementById(selections[i]).getAttribute('name') + ", ";
        document.getElementById(selections[i]).click()
      } else {
        for (var x = 0; x < counterids.length; ++x) {
          if (selections[i].substr(0, 1) == alphabet[x] && selections[i].substr(1, 3).match(/^[0-9]+$/) != null){
            for (var y = 0; y < Math.abs(parseInt(selections[i].substr(1, 3))); ++y) {
              document.getElementById(counteradd[x]).click()
            }
          }
        }
        var countervars = [SPcounter, CPcounter, T3counter, T2counter, T1counter, CWcounter, CGcounter, UGcounter, GTcounter, NMcounter, kisscounter, neutralcounter, killcounter]
        for (var x = 0; x < counterids.length; ++x) {
          if (selections[i].substr(0, 1) == alphabet[x] && selections[i].substr(1, 3).match(/^[0-9]+$/) != null){
            if (x == 0) {
              document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + "+" + countervars[x] + " SP -" + countervars[x]*2 + "CP, "
            } else if (x == 1) {
              document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + "+" + countervars[x] + " CP -" + countervars[x]*2 + "SP, "
            } else document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + counternames[x] + countervars[x] + "], "
          }
        }
      }
    }
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < selections.length; ++i) {
    if (selections[i] != null) {
      if (selections[i].checked == false) selections[i].click()
    }
  }
}

document.getElementById('list').onclick = function(){
  document.querySelectorAll('.ripple').forEach(e => e.remove());
  const selections = [];
  var elements = document.getElementsByClassName('choice')
  document.querySelectorAll('.dpl').forEach(e => e.remove())
  const button = document.getElementById('list');
  const circle = document.createElement("span");
  circle.style.width = circle.style.height = `80px`;
  circle.style.left = `${button.offsetLeft - 0}px`;
  circle.style.top = `${button.offsetTop - 22}px`;
  circle.classList.add("ripple");
  button.appendChild(circle);
  for (var i = 0; i < elements.length; ++i) {
    if (elements[i].checked == true && elements[i].classList.contains('tier3st') == false && elements[i].classList.contains('tier2st') == false && elements[i].classList.contains('tier1st') == false) {
      selections.push(elements[i])
    }
    for (var x = 0; x < counterids.length; ++x) {
      if (elements[i].id == counterids[x] && countervars[x] != 0){
        selections.push(alphabet[x] + pad(countervars[x], 3))
      }
    }
  }
  for (var i = 0; i < selections.length; ++i) {
    if (typeof selections[i] == 'string') {
      for (var x = 0; x < counterids.length; ++x) {
        if (selections[i].substr(0, 1) == alphabet[x] && selections[i].substr(1, 3).match(/^[0-9]+$/) != null){
          var dpl = document.getElementById(counterbuttons[x]).cloneNode(true);
          dpl.style.pointerEvents = "none";
          dpl.classList.add('activebutton')
          var con = document.createElement("div");
          if (x == 0){
            con.classList.add('col-8');
          } else if (x == 1){
            con.classList.add('col-8');
          } else {
            con.classList.add('col-4');
          }
          con.classList.add('buttoncon');
          con.classList.add('dpl')
          document.getElementById("listdisplay").appendChild(con);
          con.appendChild(dpl)
        }
      }
    }
    if (typeof selections[i] != 'string') {
      var dpl = document.getElementsByName(selections[i].id)[0].cloneNode(true);
      dpl.style.pointerEvents = "none";
      dpl.classList.add('activebutton')
      var con = document.createElement("div");
      con.classList.add('col-4');
      con.classList.add('buttoncon');
      con.classList.add('dpl')
      document.getElementById("listdisplay").appendChild(con);
      con.appendChild(dpl)
    }
  }
  document.getElementById('overlay').classList.remove('visible');
  document.getElementById('list1').classList.remove('visible');
}

document.getElementById('menu').onclick = function(){
  const button = document.getElementById('menu');
  const circle = document.createElement("span");
  circle.style.width = circle.style.height = `80px`;
  circle.style.left = `${button.offsetLeft - 0}px`;
  circle.style.top = `${button.offsetTop - 22}px`;
  circle.classList.add("ripple");
  button.appendChild(circle);
  if (document.getElementById('navigation').classList.contains('visible')){
    document.getElementById('navigation').classList.remove('visible')
  } else {
    document.getElementById('navigation').classList.add('visible')
  }
}

// these just do minor animation stuff
document.getElementById('check2').onfocus = function () {
  document.getElementById('check2label').classList.add('active');
  document.getElementById('check2label').classList.add('focus');
  document.getElementById('check2label').classList.add('transition');
}
document.getElementById('check3').onfocus = function () {
  document.getElementById('check3label').classList.add('active');
  document.getElementById('check3label').classList.add('focus');
  document.getElementById('check3label').classList.add('transition');
}
document.getElementById('check4').onfocus = function () {
  document.getElementById('check4label').classList.add('active');
  document.getElementById('check4label').classList.add('focus');
  document.getElementById('check4label').classList.add('transition');
}
document.getElementById('check2').onblur = function () {
  document.getElementById('check2label').classList.remove('focus');
  if (document.getElementById("check2").value == '') {
    document.getElementById('check2label').classList.remove('active');
  }
}
document.getElementById('check3').onblur = function () {
  document.getElementById('check3label').classList.remove('focus');
  if (document.getElementById("check3").value == '') {
    document.getElementById('check3label').classList.remove('active');
  }
}
document.getElementById('check4').onblur = function () {
  document.getElementById('check4label').classList.remove('focus');
  if (document.getElementById("check4").value == '') {
    document.getElementById('check4label').classList.remove('active');
  }
}
document.getElementById('addSP').onblur = function () {
  document.querySelectorAll('.ripple').forEach(e => e.remove())
}
document.getElementById('removeSP').onblur = function () {
  document.querySelectorAll('.ripple').forEach(e => e.remove())
}
document.getElementById('addCP').onblur = function () {
  document.querySelectorAll('.ripple').forEach(e => e.remove())
}
document.getElementById('removeCP').onblur = function () {
  document.querySelectorAll('.ripple').forEach(e => e.remove())
}

// this closes the overlay
document.getElementById('popup').onclick = function () {
  document.getElementById('overlay').classList.add('visible');
  document.getElementById('check1').classList.add('visible');
  document.getElementById('check2').innerHTML = "";
  document.getElementById('list1').classList.add('visible');
  document.querySelectorAll('.ripple').forEach(e => e.remove());
  document.querySelectorAll('.dpl').forEach(e => e.remove())
}
// this also closes the overlay
document.getElementById('close').onclick = function () {
  document.getElementById('overlay').classList.add('visible');
  document.getElementById('check1').classList.add('visible');
  document.getElementById('check2').innerHTML = "";
  document.querySelectorAll('.ripple').forEach(e => e.remove());
  document.querySelectorAll('.dpl').forEach(e => e.remove())
}
// this also closes the overlay
document.getElementById('close1').onclick = function () {
  document.getElementById('overlay').classList.add('visible');
  document.getElementById('list1').classList.add('visible');
  document.querySelectorAll('.ripple').forEach(e => e.remove());
  document.querySelectorAll('.dpl').forEach(e => e.remove())
}

// these are just choices that need to do multiple functions since you can't really do that in the html file
document.getElementById('tjz1').oninput = function () {
  multiplerequired(-5, 0, document.getElementById('tjz1'), ['o80q'], ['uwde'])
  multiplerequired(0, 0, document.getElementById('tjz1'), ['2f3c'], ['m981', 'lv3m'])
}
document.getElementById('vll5').oninput = function () {
  incompatible(-7, 0, this, ['kb60', '6zrd'])
  multiplerequired(0, 0, this, ['1mnn'], ['woqj'])
}
document.getElementById('woqj').oninput = function () {
  multiplerequired(-12, 0, this, ['l4kr'], [], ['iofn', 'rnkx'])
  multiplerequired(0, 0, this, ['1mnn'], [], ['vll5', '1x6x'])
}
document.getElementById('k1xt').oninput = function () {
  multiplerequired(-12, 0, document.getElementById('k1xt'), ['uxkw'], ['cpi7'])
  multiplerequired(0, 0, document.getElementById('k1xt'), ['mypd'], ['g2oz', 'w67q', '38m6'])
}
document.getElementById('cpi7').oninput = function () {
  multiplerequired(-25, 0, document.getElementById('cpi7'), ['uxkw'], ['k1xt'])
  multiplerequired(0, 0, document.getElementById('cpi7'), ['0ze9'], ['7jpe'])
}
document.getElementById('b8h1').oninput = function () {
  PointChange(-9, 0, this)
  if (this.checked == true) {
    if (document.getElementById('974r').checked == true || document.getElementById('idq4').checked == true) {
      document.getElementById('5elz').disabled = false;
      document.getElementsByName('5elz')[0].classList.remove('disabled')
    } else {
      document.getElementById('5elz').disabled = true;
      document.getElementsByName('5elz')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('5elz').disabled = true;
    document.getElementsByName('5elz')[0].classList.add('disabled')
  }
  if (this.checked == true) {
    if (document.getElementById('1b1s').checked == true || document.getElementById('etl7').checked == true) {
      document.getElementById('wo5e').disabled = false;
      document.getElementsByName('wo5e')[0].classList.remove('disabled')
    } else {
      document.getElementById('wo5e').disabled = true;
      document.getElementsByName('wo5e')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('wo5e').disabled = true;
    document.getElementsByName('wo5e')[0].classList.add('disabled')
  }
}
document.getElementById('974r').oninput = function () {
  multiplerequired(-30, 0, this, ['5elz'], ['b8h1']);
  if (this.checked == true) {
    if (document.getElementById('vp1e').checked == true) {
      document.getElementById('o1kp').disabled = false;
      document.getElementsByName('o1kp')[0].classList.remove('disabled')
    } else {
      document.getElementById('o1kp').disabled = true;
      document.getElementsByName('o1kp')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('o1kp').disabled = true;
    document.getElementsByName('o1kp')[0].classList.add('disabled')
  }
}
document.getElementById('pxsf').oninput = function () {
  PointChange(-18, 0, this);
  if (this.checked == true) {
    if (document.getElementById('vp1e').checked == true) {
      document.getElementById('o1kp').disabled = false;
      document.getElementsByName('o1kp')[0].classList.remove('disabled')
    } else {
      document.getElementById('o1kp').disabled = true;
      document.getElementsByName('o1kp')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('o1kp').disabled = true;
    document.getElementsByName('o1kp')[0].classList.add('disabled')
  }
}
document.getElementById('vp1e').oninput = function () {
  PointChange(-3, 0, this)
  if (this.checked == true) {
    if (document.getElementById('974r').checked == true || document.getElementById('pxsf').checked == true) {
      document.getElementById('o1kp').disabled = false;
      document.getElementsByName('o1kp')[0].classList.remove('disabled')
    } else {
      document.getElementById('o1kp').disabled = true;
      document.getElementsByName('o1kp')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('o1kp').disabled = true;
    document.getElementsByName('o1kp')[0].classList.add('disabled')
  }
}
document.getElementById('s7sb').oninput = function () {
  multiplerequired(-7, 0, document.getElementById('s7sb'), ['gw54'], ['48m6'])
  multiplerequired(0, 0, document.getElementById('s7sb'), ['nx9r'], ['nhgo'])
}
document.getElementById('euib').oninput = function () {
  incompatible(0, 50, document.getElementById('euib'), ['mkit', 'akit', 'pkit', 'wwb1', 'fy08', 'uh4g', '42jg', 'w0ll', '48m6', '2b7c', 'pr2q', 'whrm', '6s5p', 'l8bx', 'aaam', 'aabi', 'aabc', 'aaaa', 'aafn', 'aagn', 'aabx', 'pjir'])
  if (this.checked == true) {
    document.getElementById('T3convert').classList.add('disabled')
  } else {
    document.getElementById('T3convert').classList.remove('disabled')
  }
}
document.getElementById('ttv5').oninput = function () {
  visible(0, 0, this, ['tier3section', 'powercopysection', 'shardkitssection', 'tier2section'])
  if (this.checked == true) {
    document.getElementById('T2convert').classList.remove('disabled')
  } else {
    document.getElementById('T2convert').classList.add('disabled')
  }
}
document.getElementById('sxhj').oninput = function () {
  visible(-10, 0, this, ['tier3section', 'powercopysection', 'shardkitssection', 'tier2section', 'tier1section'], ['ngod'])
  if (this.checked == true) {
    document.getElementById('T2convert').classList.remove('disabled')
    document.getElementById('T1convert').classList.remove('disabled')
  } else {
    document.getElementById('T2convert').classList.add('disabled')
    document.getElementById('T1convert').classList.add('disabled')
  }
}
document.getElementById('whrm').oninput = function () {
  PointChange(5, 8, this)
  incompatible(0, 0, this, ['mash', 'aabf', 'aabw'])
  if (this.checked == true) {
    if (document.getElementById('kht1').checked !=  true && document.getElementById('qpwm').checked !=  true) {
      document.getElementsByClassName('appearancesection')[0].classList.remove('visible')
    }
  } else {
    if (document.getElementById('kht1').checked !=  true && document.getElementById('qpwm').checked !=  true) {
      document.getElementsByClassName('appearancesection')[0].classList.add('visible')
    }
  }
}
document.getElementById('kht1').oninput = function () {
  visible(0, -5, this, ['agesection', 'sexsection', 'civilianidentitysection'])
  if (this.checked == true) {
    if (document.getElementById('whrm').checked !=  true && document.getElementById('qpwm').checked !=  true) {
      document.getElementsByClassName('appearancesection')[0].classList.remove('visible')
    }
  } else {
    if (document.getElementById('whrm').checked !=  true && document.getElementById('qpwm').checked !=  true) {
      document.getElementsByClassName('appearancesection')[0].classList.add('visible')
    }
  }
}
document.getElementById('qpwm').oninput = function () {
  if (this.checked == true) {
    if (document.getElementById('whrm').checked !=  true && document.getElementById('kht1').checked !=  true) {
      document.getElementsByClassName('appearancesection')[0].classList.remove('visible')
    }
  } else {
    if (document.getElementById('whrm').checked !=  true && document.getElementById('kht1').checked !=  true) {
      document.getElementsByClassName('appearancesection')[0].classList.add('visible')
    }
  }
}
document.getElementById('r1r7').oninput = function () {
  PointChange(15, 15, this)
  if (this.checked) {
    if (document.getElementById('pfjj').checked == false) {
      document.getElementById('aaad').disabled = false
      document.getElementsByName('aaad')[0].classList.remove('disabled')
    }
  } else {
    if (document.getElementById('aaad').checked) {document.getElementById('aaad').click()}
    document.getElementById('aaad').disabled = true
    document.getElementsByName('aaad')[0].classList.add('disabled')
  }
}
document.getElementById('pfjj').oninput = function () {
  PointChange(5, 10, this)
  if (this.checked) {
    if (document.getElementById('aaad').checked) {document.getElementById('aaad').click()}
    document.getElementById('aaad').disabled = true
    document.getElementsByName('aaad')[0].classList.add('disabled')
  } else {
    if (document.getElementById('r1r7').checked == true) {
      document.getElementById('aaad').disabled = false
      document.getElementsByName('aaad')[0].classList.remove('disabled')
    }
  }
}
const values = [];
document.getElementById('aagr').oninput = function () {
  for (var i = 0; i < document.getElementsByClassName('cost').length; ++i) {
    if (value1 == 0) {
      values.push(document.getElementsByClassName('cost')[i].innerHTML.replace(/\D/g, ''))
    }
  }
  value1 = 1
  var choices = []
  for (var i = 0; i < document.getElementsByClassName('choice').length; ++i) {
    if (document.getElementsByClassName('choice')[i].checked && document.getElementsByClassName('choice')[i].id != 'aagr') {
      choices.push(document.getElementsByClassName('choice')[i].id)
    }
  }
  if (this.checked) {
    value = 0
    for (var i = 0; i < choices.length; ++i) {
      document.getElementById(choices[i]).click()
    }
    value = 1
    for (var i = 0; i < choices.length; ++i) {
      document.getElementById(choices[i]).click()
    }
  }
  if (this.checked == false) {
    value = 3
    for (var i = 0; i < choices.length; ++i) {
      document.getElementById(choices[i]).click()
    }
    value = 0
    for (var i = 0; i < choices.length; ++i) {
      document.getElementById(choices[i]).click()
    }
  }
  if (this.checked) {
    for (var i = 0; i < document.getElementsByClassName('cost').length; ++i) {
      if (document.getElementsByClassName('cost')[i].innerHTML.substr(0, 4) == "Gain") {
        var str = document.getElementsByClassName('cost')[i].innerHTML;
        document.getElementsByClassName('cost')[i].innerHTML = "Gain: " + Math.round(values[i]*2) + " " + document.getElementsByClassName('cost')[i].innerHTML.substr(document.getElementsByClassName('cost')[i].innerHTML.length - 2, 2)
      }
    }
  } else {
    for (var i = 0; i < document.getElementsByClassName('cost').length; ++i) {
      if (document.getElementsByClassName('cost')[i].innerHTML.substr(0, 4) == "Gain") {
        var str = document.getElementsByClassName('cost')[i].innerHTML;
        document.getElementsByClassName('cost')[i].innerHTML = "Gain: " + values[i] + " " + document.getElementsByClassName('cost')[i].innerHTML.substr(document.getElementsByClassName('cost')[i].innerHTML.length - 2, 2)
      }
    }
  }
}
document.getElementById('aagt').oninput = function () {
  for (var i = 0; i < document.getElementsByClassName('cost').length; ++i) {
    if (value1 == 0) {
      values.push(document.getElementsByClassName('cost')[i].innerHTML.replace(/\D/g, ''))
    }
  }
  value1 = 1
  var choices = []
  for (var i = 0; i < document.getElementsByClassName('choice').length; ++i) {
    if (document.getElementsByClassName('choice')[i].checked && document.getElementsByClassName('choice')[i].id != 'aagt') {
      choices.push(document.getElementsByClassName('choice')[i].id)
    }
  }
  if (this.checked) {
    value = 0
    for (var i = 0; i < choices.length; ++i) {
      document.getElementById(choices[i]).click()
    }
    value = 1
    for (var i = 0; i < choices.length; ++i) {
      document.getElementById(choices[i]).click()
    }
  }
  if (this.checked == false) {
    value = 2
    for (var i = 0; i < choices.length; ++i) {
      document.getElementById(choices[i]).click()
    }
    value = 0
    for (var i = 0; i < choices.length; ++i) {
      document.getElementById(choices[i]).click()
    }
  }
  if (this.checked) {
    for (var i = 0; i < document.getElementsByClassName('cost').length; ++i) {
      if (document.getElementsByClassName('cost')[i].innerHTML.substr(0, 4) == "Gain") {
        document.getElementsByClassName('cost')[i].innerHTML = "Gain: " + Math.round(values[i]/2) + " " + document.getElementsByClassName('cost')[i].innerHTML.substr(document.getElementsByClassName('cost')[i].innerHTML.length - 2, 2)
      }
    }
  } else {
    for (var i = 0; i < document.getElementsByClassName('cost').length; ++i) {
      if (document.getElementsByClassName('cost')[i].innerHTML.substr(0, 4) == "Gain") {
        document.getElementsByClassName('cost')[i].innerHTML = "Gain: " + values[i] + " " + document.getElementsByClassName('cost')[i].innerHTML.substr(document.getElementsByClassName('cost')[i].innerHTML.length - 2, 2)
      }
    }
  }
}
document.getElementById('aagu').oninput = function () {
  multiincompatible(0, -5, this, ['aahl'], ['aahb'])
  if (this.checked) {
    maxrooms = 5
  } else maxrooms = 5
  
}
document.getElementById('aagv').oninput = function () {
  PointChange(0, -10, this)
  if (this.checked) {
    maxrooms = 10
  } else maxrooms = 5
}
document.getElementById('aagw').oninput = function () {
  PointChange(0, -15, this)
  if (this.checked) {
    maxrooms = 18
  } else maxrooms = 5
}
document.getElementById('aagx').oninput = function () {
  multiincompatible(0, -20, this, ['aahb'], ['aaha'])
  if (this.checked) {
    maxrooms = 99
  } else maxrooms = 5
}
document.getElementById('ar45').oninput = function () {
  visible(5, 0, this, ['shardrankingsection', 'powerdrawbacks'], ['r1r7'])
  if (this.checked) {
    if (document.getElementById('icne').checked == false) {
      document.getElementById('aapq').disabled = false
      document.getElementsByName('aapq')[0].classList.remove('disabled')
    }
  } else {
    if (document.getElementById('aapq').checked) document.getElementById('aapq').click();
    document.getElementById('aapq').disabled = true
    document.getElementsByName('aapq')[0].classList.add('disabled')
  }
}
document.getElementById('icne').oninput = function () {
  incompatible(5, 5, this, ['6zrd', 'vrqv', '87du', 'aaae', 'aaba'])
  if (this.checked) {
    if (document.getElementById('aapq').checked) document.getElementById('aapq').click();
    document.getElementById('aapq').disabled = true
    document.getElementsByName('aapq')[0].classList.add('disabled')
  } else {
    if (document.getElementById('ar45').checked == true) {
      document.getElementById('aapq').disabled = false
      document.getElementsByName('aapq')[0].classList.remove('disabled')
    }
  }
}