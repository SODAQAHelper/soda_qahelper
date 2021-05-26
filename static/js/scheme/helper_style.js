/* button setting을 1, 2로 나누었고 분기처리한다. 나중에 이름 헷갈리면 바꿀 것, */

const styleArgs = {
    mainUrl: '',
    paras: {styleId: '', autoDownload: '', cameraPosition: ''}
}
// main url하고 parameter를 따로 줘야되지 않나 싶어서,


const schemeOption = {}
$(function () {
    $("button.btnSetting1").on('click', function () {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            styleArgs.paras.autoDownload = ''

        } else {
            $("button.btnSetting1").removeClass('clicked');
            $(this).addClass('clicked');
            const auto = $(this).attr('auto') // auto라는 요소를 가져온다.
            styleArgs.paras.autoDownload = auto // auto가 true인지 false인지 체크한다.
        }
        set_main_url()

    });
    $("button.btnSetting2").on('click', function () {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            styleArgs.paras.cameraPosition = '';
        } else {
            $("button.btnSetting2").removeClass('clicked');
            $(this).addClass('clicked');
            const pos = $(this).attr('position')
            console.log(pos);
            styleArgs.paras.cameraPosition = pos;

        }
        set_main_url();


    });
    call_style_api();
});

function call_style_api() {

    $.ajax({
        url: "../ajax/api/style",
        success: function (result) {
            // DO SOMETHING
            console.log(result.result);
            for (var i = 0; i < result.result.groups.length; i++) {
                const gid = result.result.groups[i].id;
                const gname = result.result.groups[i].name;
                const html = `
            <div className="contentsListContainer">
                <div className="categoryNameColumn">
                    ${gid}, ${gname}
                </div>
            </div>`
                $(".content-main").append(html);
            }
        },
        error: function (e) {
            console.error(e);
        }
    })
}

function set_main_url() {
    let main_url = styleArgs.mainUrl;
    let para = ''
    $.each(styleArgs.paras, function (key, value) {

        if (value !== '') {
            para += key + '=' + value + '&';
        }

    });
    para = para.substring(0, para.length - 1);
    main_url += para;
    $("#scheme_input").val(main_url);
}