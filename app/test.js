/**
 * Created by huaha on 2017/2/4.
 */
document.write('<h1>Hello webpack aaaaaaaaafasfa</h1>');
$.ajax({
    url: '/crm-api/a/getLoginValidCode',
    type: 'get',
    data: {
        _time: new Date().getTime()
    },
    success: function(data) {
        console.log(data);
    }
});