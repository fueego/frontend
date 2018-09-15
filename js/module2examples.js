$(function() {
    //wywołamy akcję show na przycisku
    $("#myCollapsedButton").on('click', () => {
        $("#collapsePlace").collapse('toggle');
    })

    //rejestrujemy akcję i sprzedajemy consol loga o zaistniałym fakcie
    $("#collapsePlace").on('show.bs.collapse', function () {
        console.log("I was touched :)");
    }); 
});