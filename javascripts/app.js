
$(document).ready(function() {

  var h = $(window).height();
  var mt = $('.modalCont').height() + 40;
  var mt2 = (mt/2)  * -1;
  $('.modalCont').css('marginTop',mt2);

})

$(window).resize(function () {
  if( $(window).height() > 650 ){
    var h = $(window).height();
    var mt = $('.modalCont').height() + 40;
    var mt2 = (mt/2)  * -1;
    $('.modalCont').css('marginTop',mt2);
  }
});
