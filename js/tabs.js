
let nav_tabs = document.querySelectorAll('.nav-tabs');

nav_tabs.forEach(element => {

    $('#' + element.id + ' ul li').click(function () {
        var id_tab = $(this).data('filter');

        $('#' + element.id + ' ul li').each(function () {
            if ($(this).data('filter') == id_tab) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});
