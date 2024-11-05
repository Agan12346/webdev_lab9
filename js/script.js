function init() {
  var btn = document.getElementById('entrybutton');
  btn.addEventListener('click', function() {
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Anastasiya Ganus" + textbox.value);
    });
  }
  
  window.addEventListener('load', init);