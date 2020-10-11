# 数据类型

## 值类型/基本类型

### 1. String
> 存储字符的变量，由0个或多个字符组成的字符序列，由 ” 或 ’ 表示

#### （1）属性：创建后值不可变

```
var name = "Java";
name = name + 'Script';
```

#### （2）转义序列
> 非打印字符或具有其他用途的字符
```
\n  换行
\r  回车
\\  斜杠
\'  单引号
\"  双引号
\xnn  以十六进制代码nn表示的一个字符（例：\x41表示"A"）
……………
```

### 2. Number
#### （1）JavaScript 只有一种数字类型。数字可以带小数点，也可以不带：

```
var x1=34.00;      //使用小数点来写（作为整数值保存）
var x2=34;         //不使用小数点来写

//科学计数法（极大或极小的数）
var y=3。125e7;      // 31250000
```
> 浮点数最高精度是17位小数，精确度较差。如0.1+0.2不是0.3而是0.30000000000000004。测试 a + b ==0.3时，如果两个数是0.05和0.25可通过，0.1和0.2不可通过。

#### （2）NaN
> 即非数值（Not a Number），表示本来要返回数值的操作数未返回数值的情况。注意：任何涉及NaN的操作都会返回NaN（NaN/10）；NaN不等于任何值，包括它本身。
```
alert(NaN == NaN);  //false
```
isNaN ()函数：判断传入的参数是否“不是数值”。任何不能被转换为数值的值都被返回“true”。字符串“10”和布尔值可转换为数值，为false。

### 3. Boolean
> 只有两个值：true和false（区分大小写）

### 4. Undefined
> 只有一个值：undefined（区分大小写）。使用了var声明变量但为对其初始化，该变量的值就是undefined。

该值主要用于比较。

### 5. Null
> 只有一个值：null（区分大小写），表示一个空对象指针

undefined值派生自null值
```
alert(null == undefined);  //true
```

### 6. Symbol
> 代表用给定名称作为唯一标识，表示独一无二的值（一种类似于字符串的数据类型）
```
let s = Symbol();
typeof s  // "symbol"

const sym = Symbol('foo');
sym.description  //"foo"
```
#### （1）主要性质
Symbol的唯一性：
> Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
Symbol 值不能与其他类型的值进行运算
可以转换为字符串、布尔值，不可转化为数值
```
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2);  //false
```

Symbol的隐藏性：
> Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。

但可用 Object.getOwnPropertySymbols() 方法访问：
```
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol(a), Symbol(b)]
```
#### （2）Symbol.for()
> 返回给定名称的全局symbol，多次调用返回相同symbol

```
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```

#### （3）Symbol.keyfor()
> 对全局symbol，Symbol.for(name)是根据名称返回symbol，Symbol.keyFor(name)则功能相反，是根据全局symbol返回名称。

```
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

---

## 引用类型（略）

### 1. Object
#### （1）创建
```
var person = new Object();
person.name = "Talon";
person.age = 20;            //new 操作符 + 构造函数

var person = {
	name: "Talon",
	age: 20
};                          //对象字面量表示法 
```

#### （2）访问对象属性

点表示法：
```
alert(person.name);  	// Talon
```

方括号表示法（推荐）：
```
alert(person["name"]);	// Talon
```
### 2. Array

#### （1）创建
通过Array构造函数进行创建
```
var arr = new Array();  // 创建一个空数组

var arr2 = new Array(10);  // 指定数组长度

var arr3 = new Array("a", "b", "c");  // 创建并指定数组项
```

通过数组字面量进行创建
```
var arr = [];

var colors = ["red", "blue", "yellow"];
```

#### （2）检测数组
Array.isArray()方法：确定某个值到底是不是数组

#### （3）栈方法
* push()：push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。

* pop()：pop()方法不接收参数，从数组的末尾移除最后一项，减少数组的length值，然后返回移除的项。

#### （4）队列方法
* shift(): shift()方法不接收参数，从数组的前端移除第一个项并返回该项，同时将数组的长度减1。

* unshift(): unshift()方法与shift()用途相反，它能在数组的前端添加任意个项并返回新数组的长度。

#### （5）重排序方法
* reverse()方法: 反转数组项的顺序

* sort()方法: 按升序排列数组项

#### （6）操作方法
* concat()：基于当前数组中的所有项创建一个新的数组。

* slice()：基于当前数组的一个或多个项创建一个新数组。
```
slice() 方法可以接收一个或两个参数，即要返回项的起始位置和结束位置。
a) 当只有一个参数的情况下，slice() 方法返回从该参数指定位置开始到前数组末尾的所有项。
b) 如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。
注意：slice() 方法不会影响原始数组。
```
* splice()：可以用来对数组项进行删除、插入或替换。

* join()：接收一个参数，将数组中的每一项以传入的参数作为连接字符连接转换成一个字符串并返回

#### （7）位置方法
* indexOf() 和 lastIndexOf() 。这两个方法都接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中，indexOf() 方法从数组的开头（位置0）开始向后查找，lastIndexOf() 方法则从数组的末端开始向前查找。

#### （8）迭代方法
*  every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。

*  filter()：对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组。

*  forEach()：对数组中的每一项运行给定函数，这个方法没有返回值。

*  map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。

*  some()：对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true。

### 3. Function
#### （1）定义
```
//函数声明语法定义
function functionName(value1...){
    //函数体
}

//函数表达式定义
var functionName = function(value1...){
    //函数体
}

//Function构造函数定义
var functionName = new Function("value",...,"函数体");
```

#### （2）函数的重载
> 函数本身是没有重载的，因为在JavaScript中，函数可接收任意个参数，故不会因参数数量不同而发生函数重载。但可以通过特殊的写法实现函数重载。

#### （3）函数声明与函数表达式的区别
> 解析器对这两种定义函数方法的解析是不一样的。解析器会将函数声明的函数优先解析，使其在代码执行前可用（函数声明提前）。而函数表达式会在执行到该行代码才会被解析。

#### （4）函数内部属性
* arguments：包含函数所有参数的伪数组。其arguments.callee属性指向含有该arguments对象的函数。该属性可用于递归函数的函数调用。
```
function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
```

* this：函数执行的环境变量。

* caller：调用当前函数的函数引用。
```
function a(){
    console.log(a.caller);//指向调用a的b
}

function b(){
    a();
}
b();
```
#### （5）函数的属性和方法
* length：该属性指定义函数时，需要传入参数的个数。使用为：函数名.length

* prototype：原型函数。所有实例方法的真正所在。

* apply和call：方法均改变调用函数的环境对象，即改变函数的this值。语法：apply(环境对象,[value1,...])或apply(环境对象,arguments)；call(环境对象,value1,value2...)

* bind():创建一个函数实例，其this值会被绑定到传给bind()函数的值。

### 4. Date
#### （1）创建
```
var myDate=new Date()
```
#### （2）Date 对象属性
* constructor 属性：返回对创建此对象的 Date 函数的引用。语法：object.constructor

* prototype 属性：使您有能力向对象添加属性和方法。

#### （3）Date 对象方法
* Date.now(): 返回表示调用这个方法时的日期和时间的毫秒数

* Date.parse() 接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数

* Date.UTC(): 返回表示日期的毫秒数，但与Date.parse()在构建时使用不同的信息

* Date类型的数据，调用valueOf返回当前时间的毫秒数

### 5. RegExp（?）
RegExp类型用以支持正则表达式。

每个正则表达式都可带有一个或多个标志（flags），以表明正则表达式的行为。

* g：全局模式（global），即模式将被应用于所有字符串，而非发现第一个匹配项时立即停止。

* i：不区分大小写模式（case-insensitive），在确定匹配项时忽略模式与字符串的大小写。

* m：多行模式（multiline），在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。

以字面量形式定义的正则表达式：
```
var pattern1 = /at/g;  //匹配字符串中所有"at"的实例

var pattern2 = /[bc]at/g;  //匹配第一个"bat"或"cat"，不区分大小写

var pattern3 = /.at/g;  //匹配所有以"at"结尾的3个字符的组合，不区分大小写
```

> 模式中使用的所有元字符都必须转义

使用RegExp构造函数：

```
var pattern1 = /[bc]at/i;

var pattern2 = new RegExp("[bc]at","i");
//pattern1与pattern2等价
```

属性：
* global：布尔值，表示是否设置了g标志

* ignoreCase：布尔值，表示是否设置了i标志

* lastIndex：整数，表示开始搜索下一个匹配项的字符位置，从0算起。

* multiline：布尔值，表示是否设置了m标志

* sourse：正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回。

实例方法：
* exec()：该方法专门为捕获组而设计的。exec()接受一个参数，既要应用模式的字符串，然后返回包含第一个匹配项信息的数组；或者在没有匹配项的情况下返回null。返回的数组虽然是Array的实例，但是其包含两个额外的属性：index和input。其中index表示匹配项在字符串中的位置，为input表示应用正则表达式的字符串。在数组中，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（如果没有捕获组，则该数组只包含一项）。

* test(),它接受一个字符串参数。在模式与该参数匹配的情况下返回true；否则，返回false。

### 6. Error
1.SyntaxError解析错误: SyntaxError是解析代码时发生的语法错误

2.RefenrceError引用错误: ReferenceError是引用一个不存在的变量时发生的错误。将一个值分配给无法分配的对象，比如对函数的运行结果或者this赋值。

3.RangeError范围错误: RangeError是当一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。

4.TypeError类型错误: TypeError是变量或参数不是预期类型时发生的错误。比如，使用new字符串、布尔值、数值等原始类型和调用对象不存在的方法就会抛出这种错误，因为new命令的参数应该是一个构造函数。

5.URIError统一资源标识符函数错误:URIError是URI相关函数的参数不正确时抛出的错误.

6.EvalError eval()函数执行错误: eval()函数没有被正确执行时，会抛出EvalError错误。

---

## 类型转换
可以用typeof查看数据类型

### 1. 转换为字符串
* toString()方法 : 返回相应值（数值、布尔值、对象、字符串值）的字符串表现。一般情况下该方法不必传参。

```
var num = 10;
var numToString = num.toString();  //"10"

var hhh = true;
var hhhToString = hhh.toString();  //"true"
```

* String()方法 : 能将任意类型的值转换为字符串，包括null和undefined

```
var value；
alert(String(value));  //"underfined"
```

### 2. 数值转换
* Number()函数（用于任何数据类型）

转换规则：
```
Boolean值：true和false转换为1和0
数字值：传入、返回
null值：返回0
undefined：返回NaN
字符串：只包含数字，则被转化为十进制数值（忽略前导的0）；包含有效的浮点格式，则转换为对应的浮点数值（忽略前导的0）；包含有效的十六进制格式，，转换为相同大小的十进制整数值；字符串为空，转换为0；以上皆不是，转换为NaN。
对象：调用valueOf()方法，然后依照之前的规则转换。如果结果是NaN,调用toString()方法再次依照之前的规则转换。
```

* parseInt()函数（处理整数）

```
var num1 = parseInt("1234blue");  //1234
var num1 = parseInt("");          //NaN
var num1 = parseInt("0xA);        //10
var num1 = parseInt("22.5");      //22
var num1 = parseInt("70");        //70
var num1 = parseInt("070");       //56（八进制）
var num1 = parseInt("070"，10);   //70
```

* parseFloat()函数（处理浮点数）

```
var num1 = parseInt("1234blue");  //1234
var num1 = parseInt("0xA);        //0
var num1 = parseInt("22.5");      //22.5
var num1 = parseInt("22.34.5");   //22.34
var num1 = parseInt("0708.5");    //708.5
var num1 = parseInt("3.125e7");   //31250000
```

### 3. Boolean转换
|  数据类型   | 转换为true的值  |  转换为false的值  |
|  ----  | ----  | ----  |
| Boolean  | true | false  |
| String  | 任何非空字符串 | "" (空)  |
| Number  | 任何非空数值 | 0和NaN  |
| Object  | 任何对象 | null  |
| Undefined  | 不适用 | undefined  |

```
var a = "Hello world!";
if (a){
    alert("Value is true");
}
```

##作业

编写以下代码，结果从控制台输出：

有两数组arrA=[3,56,34,86,44,7,35,56]和arrB=[84,37,4,35,86,26]

* 编写sort函数，对数组arrA进行冒泡排序

* 编写combine函数，求arrA与arrB的交集

---
作者 dlrow-ebircsed

2020 年 08月 22日
