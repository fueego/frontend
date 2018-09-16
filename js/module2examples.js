$(function() {
    //wywołamy akcję show na przycisku
    $("#myCollapsedButton").on('click', () => {
        $("#collapsePlace").collapse('toggle');
    })

    //rejestrujemy akcję i sprzedajemy consol loga o zaistniałym fakcie
    $("#collapsePlace").on('show.bs.collapse', function () {
        console.log("I was touched :)");
    });

    //sterowanie sliderem
    $('button#poprzedni').on('click', () => {
        $('#slider').carousel('prev');
    });

    $('button#nastepny').on('click', () => {
        $('#slider').carousel('next');
    });

    //aktywacja tooltipa
    $('[data-toggle="tooltip"]').tooltip();

    //aktywacja popovera
    $('[data-toggle="popover"]').popover();
});