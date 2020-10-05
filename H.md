# Javascript基础

## 前言

### 1. 简介

JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言。它可以插入 HTML 页面的编程代码，插入 HTML 页面后，可由所有的现代浏览器执行。JavaScript是web开发人员必须学习的 3 门语言中的一门。HTML定义了网页的内容，CSS描述了网页的布局，而JavaScript则规定了网页的行为。

### 2. 特点

1. 它是一种解释性脚本语言（也就是说代码不去进行预编译）；

2. 主要用来向HTML页面添加交互行为；

3. 可直接嵌入HTML页面，但写成单独的JS文件有利于结构和行为的分离；

4. 它还具有跨平台的特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac等）；

5. 可以实现web页面的人机交互；

6. JavaScript脚本语言同其他语言一样，也有自身的基本数据类型，表达式，算术运算符及程序的基本程序框架等。

### 3. 用法

如果我们要在HTML页面中插入JavaScript，需要使用标签。`<script>`和`</script>`之间的代码行包含了JavaScript。JavaScript作为脚本语言可被放置于HTML页面的`<body>`和`<head>`的部分中。
在`<body>`中

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"> 
    <title>在body中的JS</title> 
</head>
<body>
    <h1>我的第一个 Web 页面</h1>
    <p id="demo">一个段落。</p>
    <button type="button" onclick="myFunction()">点击这里</button>
    <script>
        function myFunction(){
        document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
        }
    </script>
</body>
</html>
``

在`<head>`中

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"> 
    <title>在head中的JS</title> 
    <script>
        function myFunction(){
        document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
        }
    </script>
</head>
<body>
    <h1>我的 Web 页面</h1>
    <p id="demo">一个段落。</p>
    <button type="button" onclick="myFunction()">点击这里</button>
</body>
</html>
```

---

## 声明定义

### 1. 字面量

在编程语言中，一般固定的值称为字面量。

* **数字（Number）字面量**:可以是整数或者是小数，或者是科学计数(e)。

```javascript
3.14
10e5
```

* **字符串（String）字面量**:可以使用单引号或双引号。

```javascript
"nuo ke"
'nuo ke'
```

* **达式字面量**:可用于计算。

```javascript
3 + 4
6 * 3
```

* **数组（Array）字面量**:定义一个数组。

```javascript
[10, 20, 30, 40]
```

* **对象（Object）字面量**:定义一个对象。

```javascript
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```

* **函数（Function）字面量**：定义一个函数。

```javascript
Function myFunction(a,b) {return a+b;}
```

### 2. 标识符

在JS中所有我们可以自主命名的都可称为标识符，它可以用来对变量，函数，属性，参数进行命名，或者用做某些循环语句中的跳转位置的标记。标识符中可以含有字母，下划线，数字，但不能以数字开头，也不能是ES中的关键字或保留字。

```javascript
//变量
var I_3=123;
```

### 3. 关键字

关键字又称__保留字__，JavaScript的关键字是用于标识要执行的操作。和其他任何编程语言一样，JavaScript保留了一些关键字为自己所用。比如下面列表中的都是JavaScript的关键字。

| abstract | arguments  | boolean  | break     | byte       | case         |
| :------: | :--------: | -------- | --------- | ---------- | ------------ |
|  catch   |    char    | class    | const     | continue   | debugger     |
| default  |   delete   | do       | double    | else       | enum         |
|  export  |  extends   | false    | final     | finally    | float        |
|   for    |  function  | goto     | if        | implements | import       |
|    in    | instanceof | int      | interface | let        | long         |
|  native  |    null    | package  | private   | protected  | public       |
|  return  |   short    | static   | super     | switch     | synchronized |
|   this   |   throw    | throws   | transient | true       | try          |
|  typeof  |    var     | volatile | while     | with       |

很多关键字与其他语言的关键字相同，你们学习其他语言时会逐渐加深了解。下面主要介绍一下var,let,const这三个关键字的用法。

| 关键字 | 用法 |特点|
| ---- | ---- | ----|
|  var| 定义变量|能够跨块访问，不能跨函数访问 |
|let|定义变量|只能在块作用域访问，不能跨块或跨函数访问|
|const|定义常量|使用时要先赋值，只能够在块作用域里访问|

```javascript
function varTest() {
    var a = 1;
    {
        var a = 2; // 函数块中，同一个变量
        console.log(a); // 2
    }
    console.log(a); // 2
    }

function letTest() {
    let a = 1;
    {
        let a = 2; // 代码块中，新的变量
        console.log(a); // 2
    }

    console.log(a); // 1
    }

//let,const
let a;
const b = "constant"
a = "variable"
b = 'change' // TypeError: Assignment to constant variable
```

---

## 代码规范

### 1. 注释

写代码不写注释的都不是一个善良的程序员。我们写代码时，都要习惯去添加一些注释来提高代码的可读性，让别人，也让以后的自己能够读懂，自己现在的代码到底在写些什么，方便以后去修改。
在JavaScript里注释的用法：

* 单行注释时以`//`开头：

```javascript
// 输出标题：
document.getElementById("myH1").innerHTML="欢迎来到我的主页";
// 输出段落：
document.getElementById("myP").innerHTML="这是我的第一个段落。";
```

* 多行注释时以`/*`开始，`*/`结尾：

```javascript
/*
下面的这些代码会输出
一个标题和一个段落
并将代表主页的开始
*/
document.getElementById("myH1").innerHTML="欢迎来到我的主页";
document.getElementById("myP").innerHTML="这是我的第一个段落。";
```

* 使用注释来阻止执行：

```javascript
// document.getElementById("myH1").innerHTML="欢迎来到我的主页";
document.getElementById("myP").innerHTML="这是我的第一个段落。";
```

* 在行末使用注释：

```javascript
var x=5;    // 声明 x 并把 5 赋值给它
var y=x+2;  // 声明 y 并把 x+2 赋值给它
```

### 2.  常见规则

* 1. 命名规则：
**变量：**
变量是由字母，数字，下划线组成。
  * 1. 要区分大小写。
  * 2. 要具有表意功能，让人能快速明白变量的作用，如果没有表意功能，通常用前面加下划线的形式和简单字母来表示。
  * 3. 关键字和保留字不能用来命名
  * 4. 在window中有很多属性，如name,alert,confirm等，不能用这些作为变量名字
  * 5. 变量名推荐使用驼峰法来命名
驼峰命名法就是当变量名或函式名是由一个或多个单词连结在一起，而构成的唯一识别字时，第一个单词以小写字母开始；第二个单词的首字母大写或每一个单词的首字母都采用大写字母，例如：myFirstName、myLastName，这样的变量名看上去就像骆驼峰一样此起彼伏，故得名。
  * 6. 常量与全局变量:全为大写
* 2. 空格与运算符：
通常我们在运算符`（= + - * / ）`前后需要添加空格，方便读懂修改。
* 3. 代码缩进：
通常使用4个空格符号来缩进代码块（注：有人可能会用Tab键来缩进，但在不同编辑器上Tab键的 解析不一样，所以最好不要用）：
* 4. 语句规则：
  * 1. 一条语句通常以分号作为结束符。
  * 2. 复杂语句：
  * 3.将左花括号放在第一行的结尾
    * 左花括号前添加一空格
    * 将右花括号独立放在一行
    * 不要以分号结束一个复杂的声明
* 5. 对象规则：
  * 1. 将左花括号与同类名放在同一行
  * 2. 冒号与属性值间有个空格
  * 3. 字符串使用双引号，数字不需要
  * 4. 最后一个属性-值对后面不要添加逗号
  * 5. 将右花括号独立放在一行，并以分号作为结束符号。

## 作业

* **使用var,let,const去定义变量，理解他们的不同之处**

作者：[@ccwwaa](https://github.com/ccwwaa)  
2020年08月15日
