"use strict";

var myCarouselElement = document.querySelector('#carouselMain');
var carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
});