const appData = {
    app:""
}
$(function (){
    $("input").on('click', function(){
    if ($(this).hasClass('clicked'))
    {
        $(this).removeClass('clicked');
    }
    else
    {
        $("input").removeClass('clicked');
        $(this).addClass('clicked');
        const appD = $(this).attr('data-app')
        appData.app = appD;
    }
});

});

function click_scheme(url_para)
{

        location.href = '/sodabeta/' + appData.app + '/' + url_para;

}