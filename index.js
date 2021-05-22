var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var username = $('input[name="username"]').val();
        var mailadress = $('input[name="mailadress"]').val();
        //var mes_date = $('textarea[name="end_time"]').val();
        var plan = $('input[name="plan"]').val();

        var msg = `${key}\nお名前：${username}\nMail：${mailadress}\nお申込みプラン：${plan}`;
        sendText(msg);

        return false;
    });
});
