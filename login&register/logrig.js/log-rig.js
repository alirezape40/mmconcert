$(document).ready(function() {
    $('#goRight').on('click', function() {
        $('#slideBox').animate({
            'marginLeft': '0'
        });
        $('.topLayer').animate({
            'marginLeft': '100%'
        });
    });
    $('#goLeft').on('click', function() {
        $('#slideBox').animate({
            'marginLeft': '20%'
        });
        $('.topLayer').animate({
            'marginLeft': '0'
        });
    });
});