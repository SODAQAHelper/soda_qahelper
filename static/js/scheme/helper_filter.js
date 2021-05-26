const filterArgs = {
    mainUrl: '',
}
const schemeOption = {}
$(function () {
    $("button.btnSetting").on('click', function () {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
        } else {
            $("button.btnSetting").removeClass('clicked');
            $(this).addClass('clicked');

        }
    });

});