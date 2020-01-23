$(document).ready(function () {
    $.getJSON('https://poloniex.com/public?command=returnCurrencies', function (data) {
        let cryptodata = '';
        let id = 1;
        $.each(data, function (key, value) {
            cryptodata += '<tr>';
            cryptodata += '<td>' + (id++) + '</td>';
            cryptodata += '<td>' + value.name + '</td>';
            cryptodata += '<td>' + value.humanType + '</td>';
            cryptodata += '<td>' + value.currencyType + '</td>';
            cryptodata += '<td>' + value.txFee + '</td>';
            cryptodata += '<td>' + value.minConf + '</td>';
            cryptodata += '<td><button onclick="deleteRow(this)">Delete this</button></td>';
            cryptodata += '</tr>';
        });
        $('#maintb').append(cryptodata);
    });
});

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}