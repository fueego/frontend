$(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    //smooth scroll ;)
    $('.nav a').on('click', (e) => {
        const hash = e.currentTarget.hash;
        const attrLen = e.currentTarget.attributes && e.currentTarget.attributes.length;

        if(hash && attrLen < 3) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                location.hash = hash
            })
        }
    });

    //scroll up    
    $(window).on('scroll', () => {
        if($(window).scrollTop() >= 1500) {
            $('#goUp').removeClass('hideMe');
            $('#goUp').addClass('animateMe');
        } else {
            $('#goUp').addClass('hideMe');
            $('#goUp').removeClass('animateMe')
        }
    });

    $('#goUp').on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
});