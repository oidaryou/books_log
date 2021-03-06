// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

// require jquery3
//= require popper
//= require bootstrap-sprockets

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function () {

  // Swiper
  var mySwiper = new Swiper ('.swiper', {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    speed: 1500,
    pagination: { //円形のページネーションを有効にする
      el: ".swiper-pagination",
      clickable: true //クリックを有効にする
    },
    navigation: { //左右のページ送りを有効にする
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

});

$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});