function digit(n){
  if (document.form.res.value=='Y') {
    del();
  }
  document.form.monitor.value = document.form.monitor.value+n;
}

function ar(n){
  document.form.oper.value = n;
  document.form.last.value = document.form.monitor.value;
  document.form.monitor.value = '';
  document.form.res.value='';
}

function cancella() {
  var temp = document.form.monitor.value;
  document.form.monitor.value = temp.substring(0, temp.length-1);
}

function del() {
  document.form.monitor.value = '';
  document.form.last.value = '';
  document.form.oper.value = '';
  document.form.res.value = '';
}

function result() {
  if (document.form.res.value!='Y') {
  if (document.form.monitor.value && document.form.oper.value && document.form.last.value) {
    document.form.monitor.value = eval(document.form.last.value+document.form.oper.value+document.form.monitor.value);
    document.form.res.value='Y';
    document.querySelector('#click').play()
  }
  }
}

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


function play(){
    var audio = document.getElementById("audio");
    audio.play();
    
}



