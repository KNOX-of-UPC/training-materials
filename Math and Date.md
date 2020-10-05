<<<<<<< HEAD
# 数学（Math）和日期（Date）

## 数学(Math)

### Math对象

Math对象用于执行数学任务，没有构造函数Math()。

```javascript
var x=Math.PI; //返回PI
var y=Math.abs(-5); //返回-5的绝对值
```

### Math对象属性

|属性|描述|
|----|----|
|E|返回算术常量 e，即自然对数的底数（约等于2.718）。|
|LN2|返回 2 的自然对数（约等于0.693）。|
|LN10|返回 10 的自然对数（约等于2.302）。|
|LOG2E|返回以 2 为底的 e 的对数（约等于 1.4426950408889634）。|
|LOG10E|返回以 10 为底的 e 的对数（约等于0.434）。|
|PI|返回圆周率（约等于3.14159）。|
|SQRT1_2|返回 2 的平方根的倒数（约等于 0.707）。|
|SQRT2|返回 2 的平方根的倒数（约等于 0.707）。|

### Math对象方法

|方法|描述|
|----|----|
|abs(x)|返回 x 的绝对值。|
|acos(x)|返回 x 的反余弦值。|
|asin(x)|返回 x 的反正弦值。|
|atan(x)|以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。|
|atan2(y,x)|返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。|
|ceil(x)|对数进行上舍入。|
|cos(x)|返回数的余弦。|
|exp(x)|返回 Ex 的指数。|
|floor(x)|对 x 进行下舍入。|
|log(x)|返回数的自然对数（底为e）。|
|max(x,y,z,...,n)|返回 x,y,z,...,n 中的最高值。|
|min(x,y,z,...,n)|返回 x,y,z,...,n中的最低值。|
|pow(x,y)|返回 x 的 y 次幂。|
|random()|返回 0 ~ 1 之间的随机数。|
|round(x)|四舍五入。|
|sin(x)|返回数的正弦。|
|sqrt(x)|返回数的平方根。|
|tan(x)|返回角的正切。|

---

## 日期(Date)

### Date对象

Date对象是用于处理日期与时间。可以通过new关键字来定义Date对象。有以下四种方法初始化日期：

```javascript
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

以上的参数在不指定的情况下，默认为0。

### Date对象属性

|属性|描述|
|----|----|
|constructor|返回对创建此对象的 Date 函数的引用。|
|prototype|使您有能力向对象添加属性和方法。|

### Date对象方法

|方法|描述|
|----|----|
|getDate()|从 Date 对象返回一个月中的某一天 (1 ~ 31)。|
|getDay()|从 Date 对象返回一周中的某一天 (0 ~ 6)。|
|getFullYear()|从 Date 对象以四位数字返回年份。|
|getHours()|返回 Date 对象的小时 (0 ~ 23)。|
|getMilliseconds()|返回 Date 对象的毫秒(0 ~ 999)。|
|getMinutes()|返回 Date 对象的分钟 (0 ~ 59)。|
|getMonth()|从 Date 对象返回月份 (0 ~ 11)。|
|getSeconds()|返回 Date 对象的秒数 (0 ~ 59)。|
|getTime()|返回 1970 年 1 月 1 日至今的毫秒数。|
|getTimezoneOffset()|返回本地时间与格林威治标准时间 (GMT) 的分钟差。|
|getUTCDate()|根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。|
|getUTCDay()|根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。|
|getUTCFullYear()|根据世界时从 Date 对象返回四位数的年份。|
|getUTCHours()|根据世界时返回 Date 对象的小时 (0 ~ 23)。|
|getUTCMilliseconds()|根据世界时返回 Date 对象的毫秒(0 ~ 999)。|
|getUTCMinutes()|根据世界时返回 Date 对象的分钟 (0 ~ 59)。|
|getUTCMonth()|根据世界时从 Date 对象返回月份 (0 ~ 11)。|
|getUTCSeconds()|根据世界时返回 Date 对象的秒钟 (0 ~ 59)。|
|parse()|返回1970年1月1日午夜到指定日期（字符串）的毫秒数。|
|setDate()|设置 Date 对象中月的某一天 (1 ~ 31)。|
|setFullYear()|设置 Date 对象中的年份（四位数字）。|
|setHours()|设置 Date 对象中的小时 (0 ~ 23)。|
|setMilliseconds()|设置 Date 对象中的毫秒 (0 ~ 999)。|
|setMinutes()|设置 Date 对象中的分钟 (0 ~ 59)。|
|setMonth()|设置 Date 对象中月份 (0 ~ 11)。|
|setSeconds()|设置 Date 对象中的秒钟 (0 ~ 59)。|
|setTime()|setTime() 方法以毫秒设置 Date 对象。|
|setUTCDate()|根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。|
|setUTCFullYear()|根据世界时设置 Date 对象中的年份（四位数字）。|
|setUTCHours()|根据世界时设置 Date 对象中的小时 (0 ~ 23)。|
|setUTCMilliseconds()|根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。|
|setUTCMinutes()|根据世界时设置 Date 对象中的分钟 (0 ~ 59)。|
|setUTCMonth()|根据世界时设置 Date 对象中的月份 (0 ~ 11)。|
|setUTCSeconds()|setUTCSeconds() 方法用于根据世界时 (UTC) 设置指定时间的秒字段。|
|toDateString()|把 Date 对象的日期部分转换为字符串。|
|toISOString()|使用 ISO 标准返回字符串的日期格式。|
|toJSON()|以 JSON 数据格式返回日期字符串。|
|toLocaleDateString()|根据本地时间格式，把 Date 对象的日期部分转换为字符串。|
|toLocaleTimeString()|根据本地时间格式，把 Date 对象的时间部分转换为字符串。|
|toLocaleString()|根据本地时间格式，把 Date 对象转换为字符串。|
|toString()|把 Date 对象转换为字符串。|
|toTimeString()|把 Date 对象的时间部分转换为字符串。|
|toUTCString()|根据世界时，把 Date 对象转换为字符串。|
|UTC()|根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。|
|valueOf()|返回 Date 对象的原始值。|

### 设置日期

```javascript
var MyDate = new date();
MyDate.setFullYear(2020,8,14); //为日期对象设置一个特定日期2020.8.14
```

```javascript
var MyDate = new date();
MyDate.setDate(MyDate.getDate()+10); //将日期对象设置为10天后的日期
//注：天数的增加会改变年份和月份，日期对象会自动转换
```

## 作业

* **输入圆柱体的直径和高，用function函数，Math对象计算一个圆柱体的底面积和体积。**

* **计算平均分**
**格式：XXXX年XX月X日 星期X--班级平均分为:。。；平均分为：。。**
**要求：1.显示打印的日期，日期为当天的日期；2.平均分保留整数**
**张三：87；李四：97；王五：70；小明：74；小雨：90；小红：82**


作者：[@ccwwaa](https://github.com/ccwwaa)  
=======
# 数学（Math）和日期（Date）
## 数学(Math)
### Math对象

Math对象用于执行数学任务，没有构造函数Math()。
```javascript
var x=Math.PI; //返回PI
var y=Math.abs(-5); //返回-5的绝对值
```
### Math对象属性
|属性|描述|
|----|----|
|E|返回算术常量 e，即自然对数的底数（约等于2.718）。|
|LN2|返回 2 的自然对数（约等于0.693）。|
|LN10|返回 10 的自然对数（约等于2.302）。|
|LOG2E|返回以 2 为底的 e 的对数（约等于 1.4426950408889634）。|
|LOG10E|返回以 10 为底的 e 的对数（约等于0.434）。|
|PI|返回圆周率（约等于3.14159）。|
|SQRT1_2|返回 2 的平方根的倒数（约等于 0.707）。|
|SQRT2|返回 2 的平方根的倒数（约等于 0.707）。|

### Math对象方法
|方法|描述|
|----|----|
|abs(x)|返回 x 的绝对值。|
|acos(x)|返回 x 的反余弦值。|
|asin(x)|返回 x 的反正弦值。|
|atan(x)|以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。|
|atan2(y,x)|返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。|
|ceil(x)|	对数进行上舍入。|
|cos(x)|	返回数的余弦。|
|exp(x)|	返回 Ex 的指数。|
|floor(x)|	对 x 进行下舍入。|
|log(x)|	返回数的自然对数（底为e）。|
|max(x,y,z,...,n)|	返回 x,y,z,...,n 中的最高值。|
|min(x,y,z,...,n)|	返回 x,y,z,...,n中的最低值。|
|pow(x,y)|	返回 x 的 y 次幂。|
|random()|	返回 0 ~ 1 之间的随机数。|
|round(x)|	四舍五入。|
|sin(x)|返回数的正弦。|
|sqrt(x)|	返回数的平方根。|
|tan(x)|	返回角的正切。|



## 日期(Date)
### Date对象

Date对象是用于处理日期与时间。可以通过new关键字来定义Date对象。有以下四种方法初始化日期：
```javascript
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```
以上的参数在不指定的情况下，默认为0。

### Date对象属性

|属性|描述|
|----|----|
|constructor|返回对创建此对象的 Date 函数的引用。|
|prototype|使您有能力向对象添加属性和方法。|


### Date对象方法

|方法|描述|
|----|----|
|getDate()|从 Date 对象返回一个月中的某一天 (1 ~ 31)。|
|getDay()|从 Date 对象返回一周中的某一天 (0 ~ 6)。|
|getFullYear()|从 Date 对象以四位数字返回年份。|
|getHours()|返回 Date 对象的小时 (0 ~ 23)。|
|getMilliseconds()|返回 Date 对象的毫秒(0 ~ 999)。|
|getMinutes()|	返回 Date 对象的分钟 (0 ~ 59)。|
|getMonth()|从 Date 对象返回月份 (0 ~ 11)。|
|getSeconds()|返回 Date 对象的秒数 (0 ~ 59)。|
|getTime()|	返回 1970 年 1 月 1 日至今的毫秒数。|
|getTimezoneOffset()|返回本地时间与格林威治标准时间 (GMT) 的分钟差。|
|getUTCDate()|	根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。|
|getUTCDay()|根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。|
|getUTCFullYear()|根据世界时从 Date 对象返回四位数的年份。|
|getUTCHours()|根据世界时返回 Date 对象的小时 (0 ~ 23)。|
|getUTCMilliseconds()|根据世界时返回 Date 对象的毫秒(0 ~ 999)。|
|getUTCMinutes()|根据世界时返回 Date 对象的分钟 (0 ~ 59)。|
|getUTCMonth()|根据世界时从 Date 对象返回月份 (0 ~ 11)。|
|getUTCSeconds()|根据世界时返回 Date 对象的秒钟 (0 ~ 59)。|
|parse()|返回1970年1月1日午夜到指定日期（字符串）的毫秒数。|
|setDate()|设置 Date 对象中月的某一天 (1 ~ 31)。|
|setFullYear()|设置 Date 对象中的年份（四位数字）。|
|setHours()|设置 Date 对象中的小时 (0 ~ 23)。|
|setMilliseconds()|设置 Date 对象中的毫秒 (0 ~ 999)。|
|setMinutes()|设置 Date 对象中的分钟 (0 ~ 59)。|
|setMonth()|设置 Date 对象中月份 (0 ~ 11)。|
|setSeconds()|设置 Date 对象中的秒钟 (0 ~ 59)。|
|setTime()|setTime() 方法以毫秒设置 Date 对象。|
|setUTCDate()|根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。|
|setUTCFullYear()|根据世界时设置 Date 对象中的年份（四位数字）。|
|setUTCHours()|根据世界时设置 Date 对象中的小时 (0 ~ 23)。|
|setUTCMilliseconds()|根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。|
|setUTCMinutes()|	根据世界时设置 Date 对象中的分钟 (0 ~ 59)。|
|setUTCMonth()|根据世界时设置 Date 对象中的月份 (0 ~ 11)。|
|setUTCSeconds()|setUTCSeconds() 方法用于根据世界时 (UTC) 设置指定时间的秒字段。|
|toDateString()|把 Date 对象的日期部分转换为字符串。|
|toISOString()|使用 ISO 标准返回字符串的日期格式。|
|toJSON()|以 JSON 数据格式返回日期字符串。|
|toLocaleDateString()|根据本地时间格式，把 Date 对象的日期部分转换为字符串。|
|toLocaleTimeString()|根据本地时间格式，把 Date 对象的时间部分转换为字符串。|
|toLocaleString()|根据本地时间格式，把 Date 对象转换为字符串。|
|toString()|把 Date 对象转换为字符串。|
|toTimeString()|把 Date 对象的时间部分转换为字符串。|
|toUTCString()|根据世界时，把 Date 对象转换为字符串。|
|UTC()|根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。|
|valueOf()|返回 Date 对象的原始值。|

### 设置日期
```javascript
var MyDate = new date();
MyDate.setFullYear(2020,8,14); //为日期对象设置一个特定日期2020.8.14
```
```javascript
var MyDate = new date();
MyDate.setDate(MyDate.getDate()+10); //将日期对象设置为10天后的日期
//注：天数的增加会改变年份和月份，日期对象会自动转换
```

作者：[@ccwwaa](https://github.com/ccwwaa)  
>>>>>>> 68364ed20e81365cdfd8391f64c2e0a6daecce97
2020年08月17日