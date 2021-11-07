"use strict";

$(function () {
  $(".js-main-nav").on('click', function () {
    $('.main-nav').toggleClass('open');
    $('body').toggleClass('noscroll');
  });
});