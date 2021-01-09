$(document).ready(function() {
    $('#autoWidth,#autoWidth1').lightSlider({
        autoWidth: true,
        loop: true,
        rtl: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});