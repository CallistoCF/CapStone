$(function() {
    $('.toggle-nav').click(function() {
        if ($('body').hasClass('show-nav')) {
            $('body').removeClass('show-nav').addClass('hide-nav');
            setTimeout(function() {
                $('body').removeClass('hide-nav');
            }, 500);
            $('.lineBreak').show();
        } else {
            $('body').removeClass('hide-nav').addClass('show-nav');
            $('.lineBreak').hide();
        }
        return false;
    });
});