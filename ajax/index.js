//html元素渲染函数
function appendItem(response, head) {
    var content = '';
    if (head) {
        var head = '';
        for (i in response) {
            head += `<th>${i}</th>`;
        }
        head = `<tr><td>id</td>${head}</tr>`;
        $("#head").append(head);
    }
    for (i in response['cityName']) {
        var row = `<td>${i}<td>`;
        for (j in response) {
            row += `<td>${response[j][i]}</td>`
        }
        content += `<tr name='item'>${row}</tr>`;
    }
    $("#body").append(content);
}


//滚动请求

var isbool = true;
$(window).scroll(function () {
    var scrollTop = parseFloat($(window).scrollTop()); //滚动条距顶部距离
    var scrollHeight = $(window).height(); //当前页面高度
    var windowHeight = $(document).height(); //当前窗口高度
    if ((Math.abs(scrollTop + scrollHeight - windowHeight)) <= 4 && isbool) {
        isbool = false;
        var skip = document.getElementsByName('item').length;
        getData(skip, 15);
    }
})


function getData(skip, n, head = false) { //参数为需要跳过的数目,获取的数目
    $.ajax({
        type: "post",
        url: "http://182.92.75.70:5000/",
        contentType: "json",
        data: JSON.stringify({ 'provinceName': '', 'cityName': '', 'skip': skip, 'n': n }),
        dataType: "json",
        success: function (response) {
            appendItem(response, head);
            setTimeout(function () {
                isbool = true;
            }, 400); //节流
        },
        error: function (response) {
            alert('error!');
        }
    })
}



$(document).ready(function () {
    getData(0, 15, head = true);
})