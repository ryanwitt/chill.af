"use strict";

var titles = [
  'pasadena sunset',
  'la river',
  'the hudson',
  'out the window',
  'sheeps meadow',
  'out the window',
  'the hudson',
  'sheeps meadow',
  'the hudson',
];

$(document).ready(function() {
    $('#chill').Kenburns({
      images: [
        'images/DSCN2118.JPG',
        'images/IMG_4040.JPG',
        'images/IMG_4535.JPG',
        'images/IMG_4820.JPG',
        'images/IMG_6371.JPG',
        'images/IMG_4826.JPG',
        'images/IMG_4536.JPG',
        'images/IMG_6021.JPG',
        'images/IMG_4538.JPG',
      ],
      scale:0.75,
      duration:12000,
      fadeSpeed:1200,
      ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)',

      onSlideComplete: function(){
        $('#slide-title').html(titles[this.getSlideIndex()]);
      },
      onLoadingComplete: function(){
        $('#loading').remove();
      }

    });
});
