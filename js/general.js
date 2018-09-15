$(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    //smooth scroll ;)
    $('.nav a').on('click', (e) => {
        const hash = e.currentTarget.hash;

        if(hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                location.hash = hash
            })
        }
    });
});