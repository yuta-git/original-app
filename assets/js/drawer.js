"use strict";

$(function () {
  $(".js-main-nav").on('click', function () {
    $('.main-nav').toggleClass('open');
    $('body').toggleClass('noscroll');
  });
  $(".js-p-function__check").on('click', function () {
    $(this).toggleClass('opacity-off');
  });
  $(".js-my-star").on('click', function () {
    $(this).toggleClass('far');
    $(this).toggleClass('fas');
  });
});