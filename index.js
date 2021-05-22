var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var username = $('input[name="username"]').val();
        var email = $('input[name="email"]').val();
        //var mes_date = $('textarea[name="end_time"]').val();
        var plan = $('input[name="plan"]').val();
        var msg = `${key}\nお名前：${username}\nEmail：${email}\nお申込みプラン：${plan}`;
        sendText(msg, plan);
        setUserlist(username, email, plan);

        return false;
    });
});
