# 异步请求

## ajax

ajax的功能：

* 在不重新加载页面的情况下更新网页
* 在页面已加载后从服务器请求数据
* 在页面已加载后从服务器接收数据
* 在后台向服务器发送数据

### 1. XMLHttpRequest 对象

```javascript
const reqURL = "http://182.92.75.70:5000/";

        // 创建代理对象
        let xhr = new XMLHttpRequest();

        // 基本设置
        xhr.timeout = 5000;
        xhr.responseType = "text";

        // 配置事件处理函数
        xhr.onreadystatechange = function (evt) {
            if (evt.target.readyState == 4) {
                let res = JSON.parse(evt.target.response);
                console.log(res);
            }
        }
        xhr.ontimeout = (evt) => {
            console.log("请求超时");
        }
        xhr.onerror = (evt) => {
            console.log("网络错误");
        }
        xhr.open("post", reqURL);

        query = JSON.stringify({'provinceName':'山东省','cityName':'青岛','skip':0,'n':10})
        // 发送
        xhr.send(query);
```

onreadystatechange 是一个事件句柄。它的值是一个函数,当 XMLHttpRequest 对象的状态发生改变时，会触发此函数。  
readyState:

* 0: 请求未初始化
* 1: 服务器连接已建立
* 2: 请求已接收
* 3: 请求处理中
* 4: 请求已完成，且响应已就绪

### 2. jquery ajax

```javascript
$.ajax({
            url: "http://182.92.75.70:5000/",
            data: JSON.stringify({ 'provinceName': '山东省', 'cityName': '青岛', 'skip': 0, 'n': 10 }),
            type: "POST",
            dataType: "json",
            success: function (response) {
                console.log(response);
            },
            error: function () {
                console.log('error');
            }
        });
```

* url：链接地址，字符串表示
* data：需发送到服务器的数据，GET与POST都可以，格式为{A: '...', B: '...'}
* type："POST" 或 "GET"，请求类型
* timeout：请求超时时间，单位为毫秒，数值表示
* cache：是否缓存请求结果，bool表示
* contentType：内容类型，默认为"application/x-www-form-urlencoded"
* dataType：服务器响应的数据类型，字符串表示；当填写为json时，回调函数中无需再对数据反序列化为json
* success：请求成功后，服务器回调的函数
* error：请求失败后，服务器回调的函数
* complete：请求完成后调用的函数，无论请求是成功还是失败，都会调用该函数；如果设置了success与error函数，则该函数在它们之后被调用
* async：是否异步处理，bool表示，默认为true；设置该值为false后，JS不会向下执行，而是原地等待服务器返回数据，并完成相应的回调函数后，再向下执行  

---

## fetch  

### 1. post  

```javascript
var url = "http://182.92.75.70:5000/";
        var data = JSON.stringify({ 'provinceName': '山东省', 'cityName': '青岛', 'skip': 0, 'n': 10 });

        fetch(url, {
            method: 'POST',
            body: data,
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {
            return res.json(); //将Promise对象转换成json对象
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .then(response => {
                console.log('Success:', response);
            });
```

### 2. get

```javascript
fetch('https://raw.githubusercontent.com/BlankerL/DXY-2019-nCoV-Data/master/json/DXYArea.json', {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
            })
```

### 3. 另一种写法  

```javascript
async function fetchAsync() { //声明异步执行
        init = {
            method: 'POST',
            body: JSON.stringify({ 'provinceName': '山东省', 'cityName': '青岛', 'skip': 0, 'n': 10 }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        };

        const res = await fetch("http://182.92.75.70:5000/", init); //等带一个异步方法执行完毕
        const json = await res.json();
        console.log(json);
    }

fetchAsync();
```

* await只能出现在async声明的函数中

---

## ajax实战练习 --疫情表格

要求实现下拉滚动条至底端获取新数据

`html`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">

    <title>Ajax demo</title>
</head>

<body>
    <div>
        <table class="table table-striped">
            <thead id='head'>

            </thead>
            <tbody id='body'>

            </tbody>

        </table>
    </div>

    <script type="text/javascript" src="./jquery.min.js"></script>
    <script type="text/javascript" src="./index.js"></script>
</body>

</html>
```

`js`:

```javascript
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
        url: "http://127.0.0.1:5000/",
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

```

---

以上即为本文全部内容，若有其他技术问题或建议见解，欢迎qq、当面交流学习。  
作者 [@CYS](https://blog.csdn.net/CYS_zxcvbnm)  
2020年8月16日
