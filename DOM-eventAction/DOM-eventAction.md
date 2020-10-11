# 事件行为

## 事件类型

### 1. UI（User Interface，用户界面）事件
当用户与页面上的元素交互时触发

* load事件
页面完全加载后触发。

两种定义onload事件处理程序的方式：

```
EventUtil.addHandler(window,"load",function(event){
    alert("loaded!")
});
```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body onload="alert('loaded!')">
    
</body>
</html>
```

DOM和HTML中的图像元素也可以触发load事件。

* unload事件
页面完全卸载后触发。用户从一个页面切换到另一个页面，就发生unload事件。

> 两种指定onload事件处理程序的方式与load类似，在此不再举例。

* resize事件
窗口或框架的大小变化时在window或框架上触发（浏览器窗口最大化最小化时也会触发）

```
EventUtil.addHandler(window,"load",function(event){
    alert("loaded!")
});
```

> 不同浏览器触发resize事件的时间不一样
* scroll事件
用户滚动带滚动条的元素的内容时，在该元素上触发（在window对象上发生）

> 通过scrollLeft和scrollTop监控。在滚动期间重复被触发，代码不应该太复杂。

### 2. 焦点事件
当元素获得或失去焦点时触发

主要包括的事件：
* blur事件：Element节点失去焦点后触发，该事件不会冒泡。

* focus事件：Element节点获得焦点后触发，该事件不会冒泡。

* focusin事件：Element节点将要获得焦点时触发，发生在focus事件之前。该事件会冒泡。Firefox不支持该事件。

* focusout事件：Element节点将要失去焦点时触发，发生在blur事件之前。该事件会冒泡。Firefox不支持该事件。

### 3. 鼠标事件
用户通过鼠标在页面上执行操作时触发

主要包括的事件：
* cilck：单击鼠标左键或按下回车键时触发（键盘可执行）

* dblclick：用户双击鼠标左键时触发

* mousedown：用户按下任意鼠标按钮时触发

* mouseenter：鼠标光标从元素外部首次移动到元素范围内触发

* mouseleave：位于元素上方的鼠标光标移动到元素范围之外时触发

* mousemove：鼠标指针在元素内部移动时重复触发

* mouseout：鼠标指针位于一个元素上方，移入另一个元素时触发

* mouseover：鼠标指针位于一个元素外部，首次移入另一个元素边界之内时时触发

* mouseup：用户释放鼠标按钮时触发。

click和dblclick依赖其他先行事件的触发，mousedown和mouseup不受其他事件的影响

### 4. 滚轮事件
使用鼠标滚轮（或类似设备）时触发

### 5. 文本事件
在文档中输入文本时触发

* textInput：对keypress的补充，以将文本显示给用户之前更容易拦截文本。文本插入文本框之前触发。

### 6. 键盘事件
用户通过键盘在页面上执行操作时触发

* keydown：按下键盘的任意键时触发，按住不放会重复触发此事件

* keypress：按下键盘上的字符键时触发，按住不放会重复触发此事件

* keyup：释放键盘上的键时触发

---

## 事件监听
三种方法：
* element.addEventListener(type, listener[, useCapture]);   // IE6~8不支持

* element.attachEvent('on' + type, listener);    // IE6~10支持, IE11不支持

* element.'on' + type = function(){} // 所有浏览器

```
window.onload = function(){
    var oSmall = document.getElementById('small');
    var oBig = document.getElementById('big');
 
    //第一种：所有浏览器支持
    oBig.onclick = function(){
        console.log('Big Div');
    }

    //第二种：ie8及ie8以下不支持
    oBig.addEventListener('click', function(){
        console.log('Big Div');
    }, true);
 
    //第三种：ie6~ie10支持
    oBig.attachEvent('onclick', function(){
        console.log('Big Div');
    });
}
```

---

## 事件传递

### 1.事件冒泡
> 即IE的事件流，即事件开始时由最具体的元素（文档中嵌套层次最深的节点）接收，然后逐级传播到较为不具体的节点。

以一下页面为例：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <div id = "myDiv">Click me</div>
</body>
</html>
```

单击事件先在div元素上发生,而后click事件沿DOM树向上传播，在每一级节点上都会发生，直至传播到document对象。顺序为：div -> body -> html -> document

### 2.捕获
> 不太具体的节点更早接收到事件，最具体的节点最后接收到事件（目的是在到达预定目标前捕获它）。

在事件捕获过程中，document对象首先接收到click事件，然后事件沿DOM树依次向下，一直传播到事件的实际目标。顺序：document -> html -> body -> div

---

## 事件委托/代理
把监听器设置到其父节点上,然后利用冒泡原理影响设置每个子节点。只指定一个事件处理程序，就可以管理某一类型的所有事件，是对“事件处理程序过多”问题的解决方案。

```
<div id="box">
        <input type="button" id="add" value="添加" />
        <input type="button" id="remove" value="删除" />
        <input type="button" id="move" value="移动" />
        <input type="button" id="select" value="选择" />
</div>
```

```
window.onload = function(){
    var oBox = document.getElementById("box");
    oBox.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLocaleLowerCase() == 'input'){
            switch(target.id){
                case 'add' :
                    alert('添加');
                    break;
                case 'remove' :
                    alert('删除');
                    break;
                case 'move' :
                    alert('移动');
                    break;
                case 'select' :
                    alert('选择');
                    break;
            }
        }
    }
}
```

##作业
根据下面代码补充js部分，实现获取表单填入的内容，并将信息内容填入表单下面的表格中

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
    <!-- <link rel="stylesheet" type="text/css" href="index.css" /> -->
    <style>
        * {
            margin: 0;
            padding: 0;
            font-size: 16px;
        }

        td {
            height: 30px;
            text-align: center
        }

        table {
            margin: 0px auto;
        }

        table,
        td,
        th {
            border: 1px #DCDCDC solid;
            border-collapse: collapse;
        }

        .input1 {
            width: 200px;
            height: 15px;
            font-size: 12px;
        }

        .input2 {
            width: 80px;
            height: 15px;
            font-size: 12px;
        }

        #show-box th{
            width: 100px;

        }
    </style>
    <script type="text/javascript" src="index.js"></script>
</head>

<body>
    <form action="" class="fill-in-box">
        <table id="fillin">
            <tr class="title">
                <th colspan="2">用户信息填写</th>
            </tr>
            <tr class="name">
                <td>姓名</td>
                <td><input type="text" name="" id="name" class="input1" value="" /></td>
            </tr>
            <tr class="sex">
                <td>性别</td>
                <td>
                    <input type="radio" name="sex" value="男" checked="checked" />男
                    <input type="radio" name="sex" value="女" />女
                </td>
            </tr>
            <tr class="birth">
                <td>出生日期</td>
                <td>
                    <input type="text" name="" class="input2" id="year" value="" />年
                    <input type="text" name="" class="input2" id="month" />月
                </td>
            </tr>
            <tr class="city">
                <td>所在城市</td>
                <td><input type="text" name="" class="input1" id="city" value="" /></td>
            </tr>
            <tr class="btns">
                <td><input type="reset" name="" id="reset" value="重置" /></td>
                <td><input type="button" name="" class="sub" value="提交" /></td>
            </tr>
        </table>
    </form>

    <table id="show-box">
        <caption>用户信息表格</caption>
        <tr id="row">
            <th class="l1">姓名</th>
            <th class="l2">性别</th>
            <th class="l3">出生日期</th>
            <th class="l4">所在城市</th>
        </tr>
    </table>
</body>

```

</html>
---
作者 dlrow-ebircsed

2020 年 08月 22日

