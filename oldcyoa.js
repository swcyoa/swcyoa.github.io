var SP = 0;
var CP = 0;
var SPcounter = 0;
var CPcounter = 0;
var T3counter = 0;
var T2counter = 0;
var T1counter = 0;
var maxpowercopy = 1;
var maxtier3 = 5;
var maxtier2 = 3;
var maxtier1 = 1;
var kisscounter = 0;
var neutralcounter = 0;
var killcounter = 0;
const nonstt3 = document.getElementsByClassName('tier3');
const stt3 = document.getElementsByClassName('tier3st');
const nonstt2 = document.getElementsByClassName('tier2');
const stt2 = document.getElementsByClassName('tier2st');
const nonstt1 = document.getElementsByClassName('tier1');
const stt1 = document.getElementsByClassName('tier1st');
const nonstpc = document.getElementsByClassName('powercopy');
const stpc = document.getElementsByClassName('copyst');
window.onload = function() {
  UncheckAll();
  var max1 = ['.aware', '.target', '.difficulty', '.scenario', '.alignment1', '.alignment2', '.incarnation', '.age', '.sex', '.gender', '.appearance', '.identity', '.civilianidentity', '.shard', '.shardranking', '.powercopy', '.tier1', '.oops', '.location', '.locationnonearth']
  var choices = document.getElementsByClassName('choice');
  for (var i = 0; i < choices.length; ++i) {
    choices[i].checked = false;
  }
  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];
    if (choice.classList.contains('tier3') == false && choice.classList.contains('tier2') == false && choice.classList.contains('tier1') == false && choice.classList.contains('shardkitspower') == false && choice.classList.contains('powercopy') == false && choice.classList.contains('tier3st') == false && choice.classList.contains('tier2st') == false && choice.classList.contains('tier1st') == false){
      choice.onclick = function() {
        for (var i = 0; i < max1.length; i++) {
          var checkedChecks = document.querySelectorAll(max1[i] + ':checked');
          if (checkedChecks.length >= 2){
            return false;
          }
        }
      }
    }
  }
  var tabs = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
      var tab = tabs[i];
      tab.onchange = function() {
        var section = this.id.substr(0, this.id.length - 2) + 'section';
        if (this.checked == true) document.getElementsByClassName(section)[0].classList.remove('hide');
        else document.getElementsByClassName(section)[0].classList.add('hide');
      }
  }
  var characters = document.getElementsByClassName('character');
  for (var i = 0; i < characters.length; i++) {
      var character = characters[i];
      character.onchange = function() {
        var section = this.id.substr(0, this.id.length - 2) + 'section';
        if (this.checked == true) document.getElementsByClassName(section)[0].classList.remove('hide');
        else if (document.getElementById('characteropenallid').checked == false) document.getElementsByClassName(section)[0].classList.add('hide');
      }
  }
  var powers = document.getElementsByClassName('powers');
  for (var i = 0; i < powers.length; i++) {
      var power = powers[i];
      power.onchange = function() {
        var section = this.id.substr(0, this.id.length - 2) + 'section';
        if (this.checked == true) document.getElementsByClassName(section)[0].classList.remove('hide');
        else if (document.getElementById('powersopenallid').checked == false) document.getElementsByClassName(section)[0].classList.add('hide');
      }
  }
}
function UncheckAll(){ 
  var w = document.getElementsByTagName('input'); 
  for(var i = 0; i < w.length; i++){ 
    if(w[i].type=='checkbox'){ 
      w[i].checked = false; 
    }
  }
} 
var checks = document.querySelectorAll(".tier3");
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".tier3:checked");
  if (checkedChecks.length >= maxtier3 + 1){
    return false;
  }
  if(this.id != '6q91' && this.id != 'ab0h'){
    for (var i = 0; i < nonstt3.length; i++){
      if(this == nonstt3[i]){
        var index = i - 2
      }
    }
    if (this.checked == true){
      stt3[index].disabled = false
      document.getElementsByName(stt3[index].id)[0].classList.remove('disabled')
    } else {
      if (stt3[index].checked){stt3[index].click()}
      stt3[index].disabled = true
      document.getElementsByName(stt3[index].id)[0].classList.add('disabled')
    }
  }
}
var checks = document.querySelectorAll(".tier2");
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck1;
function selectiveCheck1 (event) {
  var checkedChecks = document.querySelectorAll(".tier2:checked");
  if (checkedChecks.length >= maxtier2 + 1){
    return false;
  }
  for (var i = 0; i < nonstt2.length; i++){
    if(this == nonstt2[i]){
      var index = i
    }
  }
  if (this.checked == true){
    stt2[index].disabled = false
    document.getElementsByName(stt2[index].id)[0].classList.remove('disabled')
  } else {
    if (stt2[index].checked){stt2[index].click()}
    stt2[index].disabled = true
    document.getElementsByName(stt2[index].id)[0].classList.add('disabled')
  }
}
var checks = document.querySelectorAll(".tier1");
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck2;
function selectiveCheck2 (event) {
  var checkedChecks = document.querySelectorAll(".tier1:checked");
  if (checkedChecks.length >= maxtier1 + 1){
    return false;
  }
  for (var i = 0; i < nonstt1.length; i++){
    if(this == nonstt1[i]){
      var index = i
    }
  }
  if (this.checked == true){
    stt1[index].disabled = false
    document.getElementsByName(stt1[index].id)[0].classList.remove('disabled')
  } else {
    if (stt1[index].checked){stt1[index].click()}
    stt1[index].disabled = true
    document.getElementsByName(stt1[index].id)[0].classList.add('disabled')
  }
}
var checks = document.querySelectorAll(".powercopy");
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck4;
function selectiveCheck4 (event) {
  var checkedChecks = document.querySelectorAll(".powercopy:checked");
  if (checkedChecks.length >= maxpowercopy + 1){
    return false;
  }
  for (var i = 0; i < nonstpc.length; i++){
    if(this == nonstpc[i]){
      var index = i
    }
  }
  if (this.checked == true){
    stpc[index].disabled = false
    document.getElementsByName(stpc[index].id)[0].classList.remove('disabled')
  } else {
    if (stpc[index].checked){stpc[index].click()}
    stpc[index].disabled = true
    document.getElementsByName(stpc[index].id)[0].classList.add('disabled')
  }
}
function PointChange(SPvalue, CPvalue, elem){
  SPChange(SPvalue, elem)
  CPChange(CPvalue, elem)
}
function SPChange(value, elem) {
      if (elem.checked == true) {
          SP = SP + value
      } else{
          SP = SP - value
      }
      document.getElementById('SP').innerHTML = SP
}
function CPChange(value, elem) {
  if (elem.checked == true) {
      CP = CP + value
  } else{
      CP = CP - value
  }
  document.getElementById('CP').innerHTML = CP
}
function incompatible1(SPChange, CPChange, elem, targets){
  if (elem.checked == true){
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    if (elem.checked == true){
      document.getElementById(targets[i]).disabled = false
      document.getElementsByName(targets[i])[0].classList.remove('disabled')
    } else {
      document.getElementById(targets[i]).disabled = true;
      document.getElementsByName(targets[i])[0].classList.add('disabled');
    }
  }
}
function incompatible2(SPChange, CPChange, elem, targets){
  if (elem.checked == true){
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    if (elem.checked == true){
      document.getElementById(targets[i]).disabled = true;
      document.getElementsByName(targets[i])[0].classList.add('disabled');
    } else {
      document.getElementById(targets[i]).disabled = false
      document.getElementsByName(targets[i])[0].classList.remove('disabled')
    }
  }
}
function incompatible(SPChange, CPChange, elem, targets){
  if (elem.checked == true){
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    if (document.getElementById(targets[i]).disabled == true){
      document.getElementById(targets[i]).disabled = false
      document.getElementsByName(targets[i])[0].classList.remove('disabled')
    } else {
      if (document.getElementById(targets[i]).checked == true){
        document.getElementById(targets[i]).click()
      }
      document.getElementById(targets[i]).disabled = true;
      document.getElementsByName(targets[i])[0].classList.add('disabled');
    }
  }
}
function multiplerequired(SPChange, CPChange, elem, targets, otherrequirements, optionalrequirements){
  if (elem.checked == true){
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
            } else if (otherrequirements[i1].checked != true){
              if (document.getElementById(targets[i]).checked == true){
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
    if (elem.checked == true){
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
function visible(SPChange, CPChange, elem, targets, incompatibletargets){
  if (elem.checked == true){
    SP = SP + SPChange;
    CP = CP + CPChange;
  } else {
    SP = SP - SPChange;
    CP = CP - CPChange;
  }
  document.getElementById('SP').innerHTML = SP;
  document.getElementById('CP').innerHTML = CP;
  for (var i = 0; i < targets.length; ++i) {
    if (document.getElementsByClassName(targets[i])[0].classList.contains('visible') == true){
      document.getElementsByClassName(targets[i])[0].classList.remove('visible')
    } else {
      document.getElementsByClassName(targets[i])[0].classList.add('visible');
    }
  }
  if (incompatibletargets !== undefined) incompatible(0, 0, elem, incompatibletargets);
}
var ctabs = ['incarnation', 'age', 'sex', 'gender', 'appearance', 'identity', 'civilianidentity']
document.getElementById('characteropenallid').onchange = function(){
  if (this.checked) {
    for (var i = 0; i < ctabs.length; ++i) {
      document.getElementsByClassName(ctabs[i]+'section')[0].classList.remove('hide');
    }
  } else{
    for (var i = 0; i < ctabs.length; ++i) {
      if (document.getElementById(ctabs[i] + 'id').checked == false) document.getElementsByClassName(ctabs[i]+'section')[0].classList.add('hide');
    }
  }
}
var ptabs = ['classifications', 'tier4', 'tier3', 'powercopy', 'combopowers', 'tier2', 'masterendbringerpowers', 'masterendbringerappearance', 'changerendbringerpowers', 'changerendbringerappearance', 'tier1']
document.getElementById('powersopenallid').onchange = function(){
  if (this.checked) {
    for (var i = 0; i < ptabs.length; ++i) {
      document.getElementsByClassName(ptabs[i]+'section')[0].classList.remove('hide');
    }
  } else{
    for (var i = 0; i < ptabs.length; ++i) {
      if (document.getElementById(ptabs[i] + 'id').checked == false) document.getElementsByClassName(ptabs[i]+'section')[0].classList.add('hide');
    }
  }
}
document.getElementById('addSP').onclick = function(event){
  event.stopPropagation();
  document.getElementById('spconvert').classList.add('activebutton')
  document.getElementById('removeSP').classList.add('activebutton')
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
document.getElementById('removeSP').onclick = function(event){
  event.stopPropagation();
  if (SPcounter == 1) {
    document.getElementById('spconvert').classList.remove('activebutton')
    document.getElementById('removeSP').classList.remove('activebutton')
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
document.getElementById('addCP').onclick = function(event){
  event.stopPropagation();
  document.getElementById('cpconvert').classList.add('activebutton')
  document.getElementById('removeCP').classList.add('activebutton')
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
document.getElementById('removeCP').onclick = function(event){
  event.stopPropagation();
  if (CPcounter == 1) {
    document.getElementById('cpconvert').classList.remove('activebutton')
    document.getElementById('removeCP').classList.remove('activebutton')
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
document.getElementById('addSP').onblur = function(){
  document.querySelectorAll('.ripple').forEach(e => e.remove())
}
document.getElementById('removeSP').onblur = function(){
  document.querySelectorAll('.ripple').forEach(e => e.remove())
}
document.getElementById('addCP').onblur = function(){
  document.querySelectorAll('.ripple').forEach(e => e.remove())
}
document.getElementById('removeCP').onblur = function(){
  document.querySelectorAll('.ripple').forEach(e => e.remove())
}
document.getElementById('check').onclick = function(){
  const selections = [];
  document.getElementById('check2').innerHTML = "";
  document.getElementById('check3').innerHTML = "";
  var elements = document.getElementsByClassName('choice')
  const button = document.getElementById('check');
  const circle = document.createElement("span");
  button.appendChild(circle);
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.classList.add("ripple");
  for (var i = 0; i < elements.length; ++i) {
    if (document.getElementById(document.getElementsByClassName('choice')[i].getAttribute("id")).checked == true) {
      selections.push(document.getElementsByClassName('choice')[i])
    }
  }
  for (var i = 0; i < selections.length; ++i) {
    document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + selections[i].getAttribute('name') + ", ";
    document.getElementById('check3').innerHTML = document.getElementById('check3').innerHTML + selections[i].id + ", ";
  }
  document.getElementById('overlay').classList.remove('visible');
  document.getElementById('check1').classList.remove('visible');
  if(document.getElementById("check2").value == ''){
    document.getElementById('check2label').classList.remove('active');
  } else {
    document.getElementById('check2label').classList.add('active');
  }
  if(document.getElementById("check3").value == ''){
    document.getElementById('check3label').classList.remove('active');
  } else {
    document.getElementById('check3label').classList.add('active');
  }
  if(document.getElementById("check4").value == ''){
    document.getElementById('check4label').classList.remove('active');
  } else {
    document.getElementById('check4label').classList.add('active');
  }
}
document.getElementById('import').onclick = function(){
  const selections = [];
  var elements = document.getElementsByClassName('choice')
  var ids = document.getElementById('check4').value;
  var imp = ids.replace(/\,/g,"");
  imp = imp.replace(/\s+/g, '');
  document.getElementById('check2').innerHTML = "";
  document.getElementById('check3').innerHTML = "";
  SPcounter = 0;
  CPcounter = 0;
  document.getElementById('spconvert').classList.remove('activebutton')
  document.getElementById('removeSP').classList.remove('activebutton')
  document.getElementById('addSP').classList.remove('activebutton')
  document.getElementById('cpconvert').classList.remove('activebutton')
  document.getElementById('removeCP').classList.remove('activebutton')
  document.getElementById('addCP').classList.remove('activebutton')
  for (var i = 0; i < elements.length; ++i) {
    if (elements[i].checked == true){
      elements[i].click()
    }
  }
  for (var i = 0; i < imp.length/4; ++i) {
    selections.push(document.getElementById(imp.substr(i*4, 4)));
    if (selections[i] != null) {
      if (document.getElementById('check2label').classList.contains('active') == false) {
        document.getElementById('check2label').classList.add('active')
        document.getElementById('check3label').classList.add('active')
      }
      document.getElementById('check3').innerHTML = document.getElementById('check3').innerHTML + selections[i].id + ", ";
      document.getElementById('check2').innerHTML = document.getElementById('check2').innerHTML + selections[i].getAttribute('name') +", "
      selections[i].click()
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
document.getElementById('check2').onfocus = function(){
  document.getElementById('check2label').classList.add('active');
  document.getElementById('check2label').classList.add('focus');
  document.getElementById('check2label').classList.add('transition');
}
document.getElementById('check3').onfocus = function(){
  document.getElementById('check3label').classList.add('active');
  document.getElementById('check3label').classList.add('focus');
  document.getElementById('check3label').classList.add('transition');
}
document.getElementById('check4').onfocus = function(){
  document.getElementById('check4label').classList.add('active');
  document.getElementById('check4label').classList.add('focus');
  document.getElementById('check4label').classList.add('transition');
}
document.getElementById('check2').onblur = function(){
  document.getElementById('check2label').classList.remove('focus');
  if(document.getElementById("check2").value == ''){
    document.getElementById('check2label').classList.remove('active');
  }
}
document.getElementById('check3').onblur = function(){
  document.getElementById('check3label').classList.remove('focus');
  if(document.getElementById("check3").value == ''){
    document.getElementById('check3label').classList.remove('active');
  }
}
document.getElementById('check4').onblur = function(){
  document.getElementById('check4label').classList.remove('focus');
  if(document.getElementById("check4").value == ''){
    document.getElementById('check4label').classList.remove('active');
  }
}
document.getElementById('popup').onclick = function(){
  document.getElementById('overlay').classList.add('visible');
  document.getElementById('check1').classList.add('visible');
  document.getElementById('check2').innerHTML = "";
  document.getElementById('list1').classList.add('visible');
  document.querySelectorAll('.ripple').forEach(e => e.remove());
}
document.getElementById('close').onclick = function(){
  document.getElementById('overlay').classList.add('visible');
  document.getElementById('check1').classList.add('visible');
  document.getElementById('check2').innerHTML = "";
  document.querySelectorAll('.ripple').forEach(e => e.remove());
}
document.getElementById('close1').onclick = function(){
  document.getElementById('overlay').classList.add('visible');
  document.getElementById('list1').classList.add('visible');
  document.querySelectorAll('.ripple').forEach(e => e.remove());
}
// document.getElementById('list').onclick = function(){
//   const selections = [];
//   var elements = document.getElementsByClassName('choice')
//   document.querySelectorAll('.dpl').forEach(e => e.remove())
//   const button = document.getElementById('list');
//   const circle = document.createElement("span");
//   button.appendChild(circle);
//   const diameter = Math.max(button.clientWidth, button.clientHeight);
//   circle.style.width = circle.style.height = `${diameter}px`;
//   circle.classList.add("ripple");
//   for (var i = 0; i < elements.length; ++i) {
//     if (document.getElementById(document.getElementsByClassName('choice')[i].getAttribute("id")).checked == true) {
//       selections.push(document.getElementsByClassName('choice')[i])
//     }
//   }
//   for (var i = 0; i < selections.length; ++i) {
//     var dpl = document.getElementsByName(selections[i].id)[0].cloneNode(true);
//     dpl.style.pointerEvents = "none";
//     dpl.classList.add('activebutton')
//     var con = document.createElement("div");
//     con.classList.add('col-3');
//     con.classList.add('buttoncon');
//     con.classList.add('dpl')
//     document.getElementById("listdisplay").appendChild(con);
//     con.appendChild(dpl)
//   }
//   document.getElementById('overlay').classList.remove('visible');
//   document.getElementById('list1').classList.remove('visible');
// }
document.getElementById('tjz1').onchange = function(){
  multiplerequired(-5, 0, document.getElementById('tjz1'), ['o80q'], ['uwde'])
  multiplerequired(0, 0, document.getElementById('tjz1'), ['2f3c'], ['m981', 'lv3m'])
  multiplerequired(0, 0, document.getElementById('tjz1'), ['1mnn'], ['tjz1'], ['vll5', '1x6x'])
}
document.getElementById('vll5').onchange = function(){
  incompatible(-2, 0, this, ['kb60', '6zrd'])
  multiplerequired(0, 0, this, ['1mnn'], ['tjz1', 'az0n'])
}
document.getElementById('p4k9').onchange = function(){
  incompatible(-3, 0, document.getElementById('p4k9'), ['kb60'])
  multiplerequired(0, 0, document.getElementById('p4k9'), ['ccoz'], ['uh4g', '9mam'])
}
document.getElementById('k1xt').onchange = function(){
  multiplerequired(-12, 0, document.getElementById('k1xt'), ['uxkw'], ['cpi7'])
  multiplerequired(-14, 0, document.getElementById('k1xt'), ['mypd'], ['g2oz', 'w67q', '38m6'])
}
document.getElementById('48m6').onchange = function(){
  multiplerequired(-8, -3, document.getElementById('48m6'), ['gw54'], [], ['kmwf', 's7sb'])
  multiplerequired(0, 0, document.getElementById('48m6'), ['mypd'], ['g2oz', 'k1xt', 'w67q'])
}
document.getElementById('cpi7').onchange = function(){
  multiplerequired(-20, 0, document.getElementById('cpi7'), ['uxkw'], ['k1xt'])
  multiplerequired(0, 0, document.getElementById('cpi7'), ['0ze9'], ['7jpe'])
}
document.getElementById('b8h1').onchange = function(){
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
document.getElementById('974r').onchange = function(){
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
document.getElementById('pxsf').onchange = function(){
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
document.getElementById('vp1e').onchange = function(){
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
document.getElementById('ab2s').onchange = function(){
  incompatible(-7, 0, this, ['6zrd'])
  if (this.checked == true) {
    if (document.getElementById('5zy0').checked == true && document.getElementById('gkyf').checked == true) {
      document.getElementById('lyn7').disabled = false;
      document.getElementsByName('lyn7')[0].classList.remove('disabled')
    } else {
      document.getElementById('lyn7').disabled = true;
      document.getElementsByName('lyn7')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('lyn7').disabled = true;
    document.getElementsByName('lyn7')[0].classList.add('disabled')
  }
}
document.getElementById('s7sb').onchange = function(){
  multiplerequired(-7, 0, document.getElementById('s7sb'), ['gw54'], ['48m6'])
  multiplerequired(0, 0, document.getElementById('s7sb'), ['nx9r'], ['nhgo'])
}
document.getElementById('euib').onchange = function(){
  visible(0, 50, document.getElementById('euib'), ['tier3section'], ['wwb1', 'fy08', 'uh4g', '9mam', '4ech', '42jg', 'w0ll', '48m6', '2b7c', 'pr2q', 'whrm', '6s5p', 'l8bx', 'aaam', 'aaap'])
  incompatible1(0, 0, document.getElementById('euib'), ['q9pq', 'tz0c', 'tz70', 'aqu7', 'q4m0', '3s16'])
  if (this.checked == true){
    document.getElementById('t3convert').classList.add('disabled')
  } else  {
    document.getElementById('t3convert').classList.remove('disabled')
  }
}
document.getElementById('addT3').onclick = function(event){
  event.stopPropagation();
  if (document.getElementById('euib').checked == false) {
    if (T3counter != -1) {
      document.getElementById('t3convert').classList.add('activebutton')
    } else {
      document.getElementById('t3convert').classList.remove('activebutton')
    }
    SP = SP - 5;
    T3counter = T3counter + 1;
    maxtier3 = maxtier3 + 1;
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
document.getElementById('removeT3').onclick = function(event){
  event.stopPropagation();
  if (document.getElementById('euib').checked == false) {
    if (T3counter == 1) {
      document.getElementById('t3convert').classList.remove('activebutton')
    } else {
      document.getElementById('t3convert').classList.add('activebutton')
    }
    if (T3counter >= -4) {
      SP = SP + 5;
      T3counter = T3counter - 1;
      maxtier3 = maxtier3 - 1;
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
document.getElementById('addT2').onclick = function(event){
  event.stopPropagation();
  if ((document.getElementById('ttv5').checked == true || document.getElementById('sxhj').checked == true) && document.getElementById('euib').checked == false) {
    if (T2counter != -1) {
      document.getElementById('t2convert').classList.add('activebutton')
    } else {
      document.getElementById('t2convert').classList.remove('activebutton')
    }
    SP = SP - 15;
    T2counter = T2counter + 1;
    maxtier2 = maxtier2 + 1;
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
document.getElementById('removeT2').onclick = function(event){
  event.stopPropagation();
  if ((document.getElementById('ttv5').checked == true || document.getElementById('sxhj').checked == true) && document.getElementById('euib').checked == false) {
    if (T2counter == 1) {
      document.getElementById('t2convert').classList.remove('activebutton')
    } else {
      document.getElementById('t2convert').classList.add('activebutton')
    }
    if (T2counter >= -2) {
      SP = SP + 15;
      T2counter = T2counter - 1;
      maxtier2 = maxtier2 - 1;
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
document.getElementById('addT1').onclick = function(event){
  event.stopPropagation();
  if (document.getElementById('sxhj').checked == true && document.getElementById('euib').checked == false) {
    if (T1counter != -1) {
      document.getElementById('t1convert').classList.add('activebutton')
    } else {
      document.getElementById('t1convert').classList.remove('activebutton')
    }
    SP = SP - 25;
    T1counter = T1counter + 1;
    maxtier1 = maxtier1 + 1;
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
document.getElementById('removeT1').onclick = function(event){
  event.stopPropagation();
  if (document.getElementById('sxhj').checked == true && document.getElementById('euib').checked == false) {
    if (T1counter == 1) {
      document.getElementById('t1convert').classList.remove('activebutton')
    } else {
      document.getElementById('t1convert').classList.add('activebutton')
    }
    if (T1counter >= 0) {
      SP = SP + 25;
      T1counter = T1counter - 1;
      maxtier1 = maxtier1 - 1;
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
document.getElementById('ttv5').onchange = function(){
  visible(0, 0, this, ['tier2section'])
  if (this.checked == true){
    document.getElementById('t2convert').classList.remove('disabled')
  } else  {
    document.getElementById('t2convert').classList.add('disabled')
  }
}
document.getElementById('sxhj').onchange = function(){
  visible(0, -20, this, ['tier2section', 'tier1section'])
  if (this.checked == true){
    document.getElementById('t2convert').classList.remove('disabled')
    document.getElementById('t1convert').classList.remove('disabled')
  } else  {
    document.getElementById('t2convert').classList.add('disabled')
    document.getElementById('t1convert').classList.add('disabled')
  }
}
document.getElementById('whrm').onchange = function(){
  PointChange(5, 8, this)
  incompatible2(0, 0, this, ['gmpq'])
  incompatible(0, 0, this, ['monstermash', 'aabf'])
  if (this.checked == true) {
    if (document.getElementById('kht1').checked == false){
      document.getElementsByClassName('appearancesection')[0].classList.remove('visible')
    }
  } else {
    if (document.getElementById('kht1').checked == false){
      document.getElementsByClassName('appearancesection')[0].classList.add('visible')
    }
  }
}
document.getElementById('kht1').onchange = function(){
  visible(0, -5, this, ['agesection', 'sexsection', 'civilianidentitysection'])
  if (this.checked == true) {
    if (document.getElementById('whrm').checked == false){
      document.getElementsByClassName('appearancesection')[0].classList.remove('visible')
    }
  } else {
    if (document.getElementById('whrm').checked == false){
      document.getElementsByClassName('appearancesection')[0].classList.add('visible')
    }
  }
}
document.getElementById('pnjs').onchange = function(){
  incompatible1(-20, -10, this, ['q9pq', 'tz0c', 'tz70', 'aqu7', 'q4m0', '3s16'])
  incompatible(0, 0, this, ['aaac'])
}
document.getElementById('5zy0').onchange = function(){
  PointChange(-15, 0, this)
  if (this.checked == true) {
    if (document.getElementById('gkyf').checked == true && (document.getElementById('zwy8').checked == true || document.getElementById('ab2s').checked == true)) {
      document.getElementById('lyn7').disabled = false;
      document.getElementsByName('lyn7')[0].classList.remove('disabled')
    } else {
      document.getElementById('lyn7').disabled = true;
      document.getElementsByName('lyn7')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('lyn7').disabled = true;
    document.getElementsByName('lyn7')[0].classList.add('disabled')
  }
}
document.getElementById('gkyf').onchange = function(){
  PointChange(-7, 0, this)
  if (this.checked == true) {
    if (document.getElementById('5zy0').checked == true && (document.getElementById('zwy8').checked == true || document.getElementById('ab2s').checked == true)) {
      document.getElementById('lyn7').disabled = false;
      document.getElementsByName('lyn7')[0].classList.remove('disabled')
    } else {
      document.getElementById('lyn7').disabled = true;
      document.getElementsByName('lyn7')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('lyn7').disabled = true;
    document.getElementsByName('lyn7')[0].classList.add('disabled')
  }
}
document.getElementById('zwy8').onchange = function(){
  PointChange(-7, 0, this)
  if (this.checked == true) {
    if (document.getElementById('5zy0').checked == true && document.getElementById('gkyf').checked == true) {
      document.getElementById('lyn7').disabled = false;
      document.getElementsByName('lyn7')[0].classList.remove('disabled')
    } else {
      document.getElementById('lyn7').disabled = true;
      document.getElementsByName('lyn7')[0].classList.add('disabled')
    }
  } else {
    document.getElementById('lyn7').disabled = true;
    document.getElementsByName('lyn7')[0].classList.add('disabled')
  }
}
var checks = document.querySelectorAll(".shardkitspower");
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck3;
function selectiveCheck3 (event) {
  var checkedChecks = document.querySelectorAll(".shardkitspower:checked");
  if (checkedChecks.length >= 2 + 1)
    return false;
}
document.getElementById('addkiss').onclick = function(event){
  event.stopPropagation();
  if (neutralcounter + kisscounter + killcounter < 10){
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
document.getElementById('removekiss').onclick = function(event){
  event.stopPropagation();
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
document.getElementById('addneutral').onclick = function(event){
  event.stopPropagation();
  if (neutralcounter + kisscounter + killcounter < 10){
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
document.getElementById('removeneutral').onclick = function(event){
  event.stopPropagation();
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
document.getElementById('addkill').onclick = function(event){
  event.stopPropagation();
  if (neutralcounter + kisscounter + killcounter < 10){
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
document.getElementById('removekill').onclick = function(event){
  event.stopPropagation();
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
