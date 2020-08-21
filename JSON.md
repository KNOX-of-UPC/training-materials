# JSON

## 定义
JSON全称为 JavaScript Object Notation（JavaScript对象表示法），JSON是一种轻量级的数据交换格式，是存储和交换文本信息的语法，通常用于服务端向网页传递数据。JSON独立于语言：JSON使用JavaScript语法来描述数据对象，但是JSON仍然独立于语言和平台。JSON解析器和JSON库支持许多不同的编程语言。目前非常多的动态（PHP,JSP,NET）编程语言都支持JSON。JSON具有自我描述性，更容易去理解。

## 语法
JSON语法是JavaScript 对象表示语法中的一部分。

### 1.  语法规则
* 数据在名称/值对中
* 数据由逗号分隔
* 大括号保存对象
* 中括号保存数组

### 2. 书写格式
__名称/值对__：字段名称（用双引号），后面加上一个冒号，然后是值。
```javascript
"name":"糯客"//等价于name="糯客"
```
__JSON值__:
* 数字（整型或浮点型）
* 字符串（在双引号中）
* 逻辑值（true或false）
* 数组（在中括号中）
* 对象（在大括号中）
* null

## 对象

JSON对象使用在大括号{}中，可包含多个键值对，key必须是字符串，value可以是合法的JSON数据类型。每个键值对使用逗号分割。

### 1.  访问对象值
可以使用点号（.）或中括号（[]）来访问。
```javascript
var myObj, x,y;
myObj = { "name":"nuoke", "alexa":10000, "site":null };
x = myObj.name;
y = myObj["name"];
```

### 2. 循环对象
可以用for-in来循环对象的属性，使用中括号（[]）访问属性的值：
```javascript
var myObj = { "name":"nuoke", "alexa":10000, "site":null };
for (x in myObj) {
    document.getElementById("demo").innerHTML += x + "<br>"; //键值对中的键
    document.getElementById("demo").innerHTML += myObj[x] + "<br>"; //键值对中的值
}
```

### 3. 嵌套JSON对象
JSON对象中可以嵌套另一个JSON对象。可使用点号（.）或者中括号（[]）来访问嵌套的对象。
```javascript
var myObj, i, x = "";
myObj = {
    "name":"nuoke",
    "alexa":10000,
    "sites": {
        "site1":"nuoke1",
        "site2":"nuoke2",
        "site3":"nuoke3"
    }
document.getElementById("demo").innerHTML += myObj.sites.site1 + "<br>";
// 或者
document.getElementById("demo").innerHTML += myObj.sites["site1"];
}
```

### 4. 修改值
可以使用点号来修改JSON对象的值。
```javascript
myObj.sites.site1 = "www.google.com";
//或者
myObj.sites["site1"] = "www.google.com";
```

### 5. 删除对象属性
可使用delete关键字来删除JSON对象的属性。
```javascript
delete myObj.sites.site1;
//或者
delete myObj.sites["site1"];
```

### 6. 数组
JSON对象包含JSON数组，数组要在中括号中书写，在JS中，数组值可以是合法的JSON数据类型，也可以是JS的表达式（函数，日期，undefined）。
```javascript
{
"name":"网站",
"num":3,
"sites":[ "UPC", "Nuoke", "Taobao" ]
}
```
数组要访问可通过索引值：
```javascript
var x;
x = myObj.sites[0];
```

__数组循环，嵌套，修改值，删除元素的方法与对象一样，只不过访问的方式变成了用索引值。__

## 相关函数
### 1.  JSON.parse()
JSON通常用于与服务端交换数据，在接收服务器数据时一般是字符串。JSON.parse()能够将数据转换为JavaScript对象。

* 语法
```javascript
JSON.parse(text[, reviver]);
//text:必需，一个有效的 JSON 字符串。
//reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
```

* 解析实例
我们从服务器接收以下数据：
```javascript
{ "name":"nuoke", "alexa":10000, "site":"www.nuoke.com" }
```
进行解析：
```javascript
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.nuoke.com" }');
document.getElementById("demo").innerHTML = obj.name + "：" + obj.site;
```

* 从服务端接收JSON数据：
```javascript
//使用 AJAX 从服务器请求 JSON 数据，并解析为 JavaScript 对象。
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "/try/ajax/json_demo.txt", true);
xmlhttp.send();
```

* 从服务端接收数组的JSON数据：
```javascript
//会转换为JS数组
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myArr = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myArr[1];
    }
};
xmlhttp.open("GET", "/try/ajax/json_demo_array.txt", true);
xmlhttp.send();
```

* 异常
解析数据时，JSON不能存储Date对象，如果要存储Date对象，要将其转换为字符串，再转换为Date对象。
```javascript
var text = '{ "name":"Nuoke", "initDate":"2013-12-14", "site":"www.nuoke.com"}';
var obj = JSON.parse(text);
obj.initDate = new Date(obj.initDate);
 
document.getElementById("demo").innerHTML = obj.name + "创建日期: " + obj.initDate;

//也可以调用一个转换结果的函数，对对象的每个成员都调用
var text = '{ "name":"Nuoke", "initDate":"2020-8-16", "site":"www.nuoke.com"}';
var obj = JSON.parse(text, function (key, value) {
    if (key == "initDate") {
        return new Date(value);
    } else {
        return value;
}});
 
document.getElementById("demo").innerHTML = obj.name + "创建日期：" + obj.initDate;
```

JSON不允许包含函数，但可以将函数作为字符串存储，再将字符串转换为函数(最好不要在JSON中使用函数)
```javascript
var text = '{ "name":"Nuoke", "alexa":"function () {return 10000;}", "site":"www.nuoke.com"}';
var obj = JSON.parse(text);
obj.alexa = eval("(" + obj.alexa + ")");
 
document.getElementById("demo").innerHTML = obj.name + " Alexa 排名：" + obj.alexa();
```

### 2.  JSON.stringify()
可将JS对象转换为字符串

* 语法
```javascript
JSON.stringify(value[, replacer[, space]])；
/*
value:
必需， 要转换的 JavaScript 值（通常为对象或数组）。
replacer:
可选。用于转换结果的函数或数组。
如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。
如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。
space:
可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t。
*/
```

* 转换实例
我们要向服务器发送以下数据：
```javascript
var obj = { "name":"nuoke", "alexa":10000, "site":"www.nuoke.com"};
```
进行转换
```javascript
var obj = { "name":"nuoke", "alexa":10000, "site":"www.nuoke.com"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON; //将myJSON发送到服务器
```
```javascript
//数组转换
var arr = [ "UPC", "Nuoke", "Taobao", "Facebook" ];
var myJSON = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myJSON;
```

* 异常
JSON不能存储Date对象,JSON.stringify()会将所有日期转换为字符串。
```javascript
var obj = { "name":"Nuoke", "initDate":new Date(), "site":"www.nuoke.com"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
```

JSON不允许包含函数，JSON.stringify()会删除JS对象的函数，包括键值对。所以在执行前，可将函数先转换为字符串。
```javascript
var obj = { "name":"Nuoke", "alexa":function () {return 10000;}, "site":"www.nuoke.com"};
obj.alexa = obj.alexa.toString();
var myJSON = JSON.stringify(obj);
 
document.getElementById("demo").innerHTML = myJSON;
```

作者：[@ccwwaa](https://github.com/ccwwaa)  
2020年08月17日

