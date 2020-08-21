# JS语法基础

JavaScript属于C语系范畴，类似语言包括C、C++、C#、Java、Python等。这些语言都具有相同或相似的语法特性，所以在学习时我们可以根据我们学过的语言进行一些对比，快速上手。

## JS运算符

运算符一般使用符号来表示，如+、-、*、/、=、|等，也有些运算符使用关键字来表示，如delete、void等。此时作用于运算符夫人子表达式被称为操作数。

根据结合操作数的个数，JavaScript运算符可以分为3种类型:

**一元运算符：** 一个运算符能够结合一个操作数，把一个操作数运算后转换为另一个操作数，如++、--等。
**二元运算符：** 一个运算符能够结合两个操作数，形成一个复杂的表达式。大部分运算符都属于二元运算符。
**三元运算符：** 一个运算符能够结合3个操作数，把3个操作数合并为一个表达式，最后返回一个值。JavaScript只定义了一个三元运算符（?:）,它相当于条件语句。

根据运算逻辑，可以分为以下类型：

**算数运算符：** +、-、\*、/、%、++、--;  
**字符串运算符：** +、+=;  
**赋值运算符：** =、+=、-=、*=、/=、%=;  
**比较运算符：** \=\=、\=\=\=、!=、!==、>、<、>=、<=;  
**逻辑运算符：** &&、||、!;  
**位运算符：**   &、^、|、~、<<、>>、>>>  
**类型运算符：**   instanceof、typeof

---

## JS基础语句

### 1. 条件语句

#### if语句

if语句的基本语法如下：

```javascript
if(condition)
    statements
//condition为条件表达式，表达式结果为true就执行statements，否则不执行
//statements可以为一个句子，也可以为一个段落
```

if还可以扩展为多分支结构：

```javascript
if(condition)
    statements1
else
    statements2
```

```javascript
if(condition1)
    statements1
else if(condition2)
    statements2
...
else
    statements3
```

**注意：** 虽然执行语句块可以是单个句子或段落，但解析器不会根据缩进来判断if、else的对应关系，所以我们要养成把单句转化为段落的好习惯。

举例：

转化前：

```javascript
if(condition1)
    statements1
    if(condition2)
        statements2
else
    statements3
```

转化后：

```javascript
if(condition1){
    statements1
    if(condition2){
        statements2
    }
}
else{
    statements3
}
```

#### switch语句

对于多条件的语句，使用switch语句较为方便。其基本语法格式如下：

```javascript
switch(expression){
    case label1: //判断条件为等同运算===，值、类型均相同
        statement1;//满足相应条件则执行
        break;//执行完成后退出
    case label2:
        statement2;
        break;
    ...
    default:statement;//在上述所有条件都不满足时执行
}
```

下面来看一个例子：

```javascript
var age = prompt('您好，请输入你的年级',"") ;
switch(age){
    case "1":
        alert("你上一年级！");
        break;
    case "2":
        alert("你上二年级！");
        break;
    case "3":
        alert("你上三年级！");
        break;
    default:
        alert("不知道你上几年级");
}
```

### 2. 循环语句

#### while语句

while语句的基本语法如下：

```javascript
while(condition)
    statements
//while语句在每次循环前都会计算condition表达式
//如果为true，则执行循环体，否则跳出循环体
//先判断，再执行
```

举例：

```javascript
var a=0;
while(a<10){
    console.log(a);
    a++;
}
```

while语句还有一种变体，其语法形式如下：

```javascript
do
    statements
while(condition);
//这种语句体首先执行statements语句块一次，在每次循环完成后计算condition条件
//如果为true，则重新执行循环体，否则跳出循环体
//先执行一次，再判断
```

还是上面的例子，修改后如下：

```javascript
var a=0;
do{
    console.log(a);
    a++;
}
while(a<10)
```

#### for语句

for语句相对简洁，使用相对广泛。其语法形式如下：

```javascript
for([initial-expression;][condition;][increment-expression]){
    statements
}
//初始条件；判断是否终止循环的条件(默认为true)；更新变量的表达式
```

还是上面的例子：

```javascript
for(var i=0;i<10;i++){
    console.log(a);
}
```

### 3. 跳转语句

```javascript
break;//break语句用于跳出循环
```

```javascript
var i=0;
while(1){
    if(i>50) break;
    i++;
    console.log(i);
}
```

跳转语句可以与标记结合使用：

```javascript
x:for(var a=1;a<10;a++){
    console.log("<br>"+a+"<br>")
    for(var b=1;b<10;b++){
        if(a>5) break x;
        console.log(b)
    }
}
```

```javascript
continue;//用法与break相似，但不同的是continue不会退出循环，而是结束当轮循环开始重新循环
```

```javascript
return [expression];//用来指定函数的返回值
```

### 4. 异常处理语句

使用try、catch、finally来作异常处理的语句。其语法形式如下：

```javascript
try                         //执行语句
{
    CreatExpression();
}
catch(ex)                   //捕获异常
{
    alert(ex.number+"\n"+ex.description);
}
finally                     //最后必须执行的语句
{
    alert("end");
}
```

```javascript
try{
    alert("执行程序");
    var error=new Error("异常");
    throw error;
}
catch(e){
    alert("错误名称："+e.name+"\n 错误信息："+e.message);
}
finally{
    alert("finally");
}
```

### 5. var语句和function语句

```javascript
var a,b=5,c=d=5;//var语句用来声明变量
founction [name]([param][,param][...,param]){
    statements
}//founction语句用来定义函数
```

---

作者：[@Shirley-zzb][address]

[address]:https://github.com/Shirley-zzb
