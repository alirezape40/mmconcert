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

});
$(document).ready(function() {
    $('.post-slider').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        nextArrow: $('.nextt'),
        prevArrow: $('.prevv'),
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }

        ]
    });
});