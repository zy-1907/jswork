function calendar(y) {
    //获取y年1月1日星期值
    var w = new Date(y, 0).getDay();
    var html = '<div class="box">';
    for (m = 1; m <= 12; ++m) {
        html += '<table>';
        html += '<tr class="title"><th colspan="7">' + y + '年' + m + '月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>'
        //获取每个月共有多少天
        var max = new Date(y, m, 0).getDate();
        html += '<tr>';
        //遍历到最后一天
        for (d = 1; d <= max; ++d) {
            if (w && d == 1) {
                html += '<td colspan="' + w + '"></td>';
            }
            html += '<td>' + d + '</td>';

            if (w == 6 && d != max) {
                html += '</tr><tr>';
            } else if (d == max) {
                html += '</tr>';
            }
            //控制星期值在0-6内变动
            w = (w + 1 > 6) ? 0 : w + 1;
        }
        html += '</table>';
    }
    html += '</div>';
    return html;
}