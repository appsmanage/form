$(document).ready(function () {

    var liffId = "1656016086-rAPy0G7P";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
          // start to use LIFF's api
          initializeApp();
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
        sendMessages(text);
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': "以下の内容でお申込みを受付けました。"
    },{
        'type': 'text',
        'text': text
    },{
        'type': 'text',
        'text': "リンクからお支払いを設定してください。\n https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-41E3830771397714GMCJ5GTI"
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
