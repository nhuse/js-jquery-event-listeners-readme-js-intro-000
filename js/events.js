//define functions here
function getIt () {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which == 71) {
      alert('G key pressed')
    }
  })
}

function submitIt() {
  $('#')
}

$(document).ready(function(){

// call functions here

});
