$(document).ready(function() {
    $('#autoWidth , #autoWidth1').lightSlider({
        autoWidth: true,
        loop: true,
        rtl: true,
        onSliderLoad: function() {
            $('#autoWidth , #autoWidth1').removeClass('cS-hidden');
        }
    });
});