import $ from 'jquery';

$(document).ready(() => {

  $(document).mousemove((e) => {
    let x_offset = e.clientX / $(window).width() * 5,
      y_offset = e.clientY / $(window).height() * 5,
      helicopter_x_offset = e.clientX / $(window).width() * 10,
      helicopter_y_offset = e.clientY / $(window).height() * 10;

    $('.content__text-wrapper').css('transform','translate(' + x_offset + '%,' + y_offset + '%)');
    $('.main-image').css('transform','translate(-' + helicopter_x_offset + '%,-' + helicopter_y_offset + '%)');
  });

});
