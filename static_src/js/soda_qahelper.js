const sodaDomain = {
    go: 'soda://go', studio: 'soda://studio',
};

const beautyArgs = {}
const styleArgs = {}
let makeUpAttr = [];

function generate_url(type) {
    let res = sodaDomain[type] + '?';

    $.each(beautyArgs, function (key, value) {
        res += key + '=' + value;
    })
    $(".beauty_pre").text(res);
    return res
}

function insert_args(k, v) {

    beautyArgs[k] = v
}

function delete_args(k) {
    delete beautyArgs[k];
}

function window_open(type, paraName, ele) {

    beautyArgs[paraName] = $(ele).val();
    console.log(beautyArgs);
    const url = generate_url(type);
    pop_dialog(url);
    make_qr_code(url);
    //window.open(url);
}

function add_makeup_attr(key, m_id, strength) {
    // makeUPAttr array 에 makeup 정보 세가지 저장
    makeUpAttr.push({
        'key': $(key).val(), 'm_id': $(m_id).val(),
        'strength': $(strength).val()
    });
    render_makeup_attr();

}

function del_makeup_attr(i) {
    makeUpAttr.splice(i, 1);
    render_makeup_attr();
}

// makeUPAttr의 정보를 지우고 새 그려준다.
function render_makeup_attr() {
    $('#id_makeup_attrs').empty();
    let htmls = '';


    makeUpAttr.forEach(function (ele, i) {
        htmls += `<div class="attrs">
        <span>${ele['key']}</span>
        <span>${ele['m_id']}</span>
        <span>${ele['strength']}</span>
        <span class="del" onclick="del_makeup_attr(${i})">&nbsp;x</span>
    </div>`

    });
    $('#id_makeup_attrs').append(htmls);
    console.log(makeUpAttr);
}

// makeUpAttr 정보 루프로 url을 만들어준다.
function makeup_open() {

    let url = sodaDomain['go'] + '?makeup=';
    makeUpAttr.forEach(function (ele, i) {
        url += `${ele['key']}(${ele['m_id']},${ele['strength']})&`

    });
    let res = url.slice(0, -1);

    pop_dialog(res);
    make_qr_code(res)
    // window.open(res); 넘어가는 것은 닫아
}

// makeUpAttr 정보 루프로 url을 만들어준다.
function makeup_op_open() {
    const val = $("#id_makeup_key").val()
    let res = sodaDomain['go'] + '?makeupOpen=' + val;


    pop_dialog(res);
    make_qr_code(res);
    // window.open(res);
}

function pop_dialog(res) {
    $("#modal_url").text(res);
    $("#dialog").dialog(
        {
            autoOpen: true,
            width: 400,
            height: 600,
            modal: true,
            buttons: [{
                text: "Ok", click: function () {
                    $(this).dialog("close");
                }
            },
                {
                    text: "Cancel", click: function () {
                        $(this).dialog("close");
                    }
                }]
        });


}

function make_qr_code(res) {
    $("#qrcode").empty();
    jQuery('#qrcode').qrcode({
        width: 280,
        height: 280,
        text: res
    });

}

$(function () {
    let url = '';
    $(".apps").on("click", function () {
        url = $(this).text() + "://"
        pop_dialog(url);
        make_qr_code(url);
    })

    // beauty url
    beautyArgs['beautyKeyname'] = $('#beauty_key').val()
    generate_url('go')

    //


    $(".beauty_take_mode_normal").on('click', function () {

        if ($(this).is(':checked')) {

            $(".beauty_take_mode_video").prop('checked', false)
            insert_args("takemode", "1")

        } else {
            delete_args("takemode");
        }
        generate_url('go');


    })
    $(".beauty_take_mode_video").on('click', function () {


        if ($(this).is(':checked')) {

            $(".beauty_take_mode_normal").prop('checked', false)
            insert_args("takemode", "2");

        } else {

            delete_args("takemode");

        }
        generate_url('go');
    })
    // [{me:'beauty_camera_position_in', you:'beauty_camera_position_in', k:'', v:'', theme:''},{}]

    $(".beauty_camera_position_in").on('click', function () {

        if ($(this).is(':checked')) {

            $(".beauty_camera_position_out").prop('checked', false)
            insert_args("cameraPosition", "0")

        } else {
            delete_args("cameraPosition");
        }


    })
    $(".beauty_camera_position_out").on('click', function () {


        if ($(this).is(':checked')) {

            $(".beauty_camera_position_in").prop('checked', false)
            insert_args("cameraPosition", "1")
        } else {

            delete_args("cameraPosition");

        }
        generate_url('go');
    })


})


///////////
