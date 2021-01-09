let imgpo = document.getElementById('imgpo');
let body = document.querySelector('body');
let post = document.querySelector('.post-star');
imgpo.addEventListener('click', function() {
    post.style.display = 'block';
    body.style.overflow = 'hidden';
});
var slide = document.getElementsByClassName('sliide');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;
var i;

function disno() {
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}


next.addEventListener('click', function(e) {
    e.preventDefault();
    n++;
    if (n > slide.length - 1) {
        n = 0;
    }
    disno();
    slide[n].style.display = 'block';

})

prev.addEventListener('click', function(e) {
    e.preventDefault();
    n--;
    if (n < 0) {
        n = slide.length - 1;
    }
    disno();
    slide[n].style.display = 'block';

})

// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        rtl: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});