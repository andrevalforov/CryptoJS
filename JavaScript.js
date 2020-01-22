let src = 'https://poloniex.com/public?command=returnCurrencies';

function json2table(json, classes) {
    var cols = Object.keys(json[0]);
    var headerRow = '';
    var bodyRows = '';
    classes = classes || '';
    cols.map(function (col) {
        headerRow += '<th>' + col + '</th>';
    });
    json.map(function (row) {
        bodyRows += '<tr>';

        cols.map(function (colname) {
            bodyRows += '<td>' + row[colname] + '</td>';
        })

        bodyRows += '</tr>';
    });

    return '<table class="' + classes + '"><thead><tr>' + headerRow + '</tr></thead><tbody>' + bodyRows + '</tbody></table>';

    var defaultData = [
        name: '1',
        humanType: '2',

    ]
}