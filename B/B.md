# CSS基础

CSS中文翻译叫层叠样式表或者级联样式表，css用来定义如何显示HTML的标签样式，用于设计网页的外观效果。在h4中还存在一部分不常用的具有样式的标签，比如&lt;big&gt;，&lt;strike&gt;等，但在h5中已经被废除使用，原因就是可以用css样式表代替。因此当我们写好html文档后，仅仅靠部分标签作用是不够的,为了满足需求，就需要我们写很多css来控制整个网页页面的样式。  
在网页设计中，html更多负责构建网页的基本结构，基本不用负责样式部分，所以css负责设计网页的显示效果。这样更便于我们设计网页时内容和样式分开的更彻底。  

## 前言

### 1. css样式

```html
<!doctype html><!--css样式-->
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS</title>
        <style type="text/css">
            body {/*页面基本属性*/
                font-size: 12px;/*设置字体*/
                color: #CCCCCC;/*设置字体颜色*/
            }
            /*段落文本基础属性*/
            p { background-color: #FF00FF; }/*设置段落背景色*/
        </style>
    </head>
    <body>
        <p>这是一个段落</p>
    </body>
</html>
```

像这样在&lt;style&gt;标签里面添加的样式就是css。  

### 2. css特点

从上面的例子来看，css样式表简单、灵活，可以根据自己的想法直接修改对应的属性值，就可以完成样式的设计。因此，像网页的换肤效果就可以省去很多代码，从而使网页呈现的速度更快。css可以控制的属性很多，以后我们会慢慢的接触到。  

---

## CSS语法和用法

### 1. css基本结构

css的语法单元是样式，每个样式包含两部分内容：**选择器**（或称选择符）和**声明**（或称规则）  

```css
body { font-size:12px; color:#333; }
```

**选择器**：选择器告诉浏览器该样式将作用于页面中的哪些对象，这些对象可以是某个标签、所有网页对象、指定Class或ID值等。可以看作小明。
**样式分隔符**：用大括号来表示{}。
**声明**：可以有无数个。但声明必须包括两部分：属性和属性值，并且必须使用分号来标识一个声明的结束。可以看作是小明身上的衣服颜色是红色、墨镜颜色黑色、鞋子大小40码等等。
**属性**：想要渲染的具体部位
**属性值**：渲染程度、结果

**注释方式：**

```css
body{
    font-size:14px;
}/*这里是css注释*/
```

### 2. css基本用法

css必须放在特定类型的文件、标签或属性中，负责无效。css代码一般可以放置在3个地方。  

**1. 行内样式**：直接放在标签的style属性中。例如：  

```html
<span style="color:red;">红色字体</span>
<div style="border:solid 1px blue;width:200px;height:200px;">一个方块</div>
```

这种方法其实并没有体现出html结构和css表现分开设计，因此不建议使用。除非是对页面中某个特定样式效果而单独进行定义。

**2. 网页内部样式**： 把样式代码放在&lt;style&gt;标签内。例如：

```html
<style type="text/css">
    body {/*页面基本属性*/
        font-size:12px;
        color:#cccccc;
    }
    /* 段落文本基本属性 */
    p {
        background-color:#ff00ff;
    }
</style>
```

**3. 外部样式**：把样式放置在单独的文件中，然后使用&lt;link&gt;标签或者@import关键字导入。

**使用&lt;link&gt;标签导入：**

```html
<link href="001.css" rel="stylesheet" type="text/css">
```

**href：** 定义样式表文件URL
**type：** 定义导入文件类型
**rel：** 用于定义文档关联，这里表示关联样式表

**使用@import关键字导入：**

```html
<style type="text/css">
    @import url("001.css");
</style>
```

---

## 常见修饰对象

|**分类**|**说明**|
|:--:|:--:|
|字体|定义字体属性，包括字体基本属性、行距、字距和文字修饰、大小写等属性|
|文本|定义段落属性，如缩进、文本对齐、书写方式、换行省略等|
|背景|设置对象的背景，如背景色、背景图像及其显示位置|
|**定位**|布局网页，包括定位方式、定位坐标|
|**尺寸**|设置对象的大小，包括宽、高、最大宽高、最小宽高|
|**布局**|布局网页，包括定位方式、定位坐标|
|外边距|设置对象的外边距，包括全部和4个方向外边距设置|
|轮廓|设置对象的轮廓，包括轮廓的样式、颜色和宽，比如阴影|
|边框|设置对象的边框，包括变现样式、颜色、宽度|
|内边距|设置对象的内边距，包括全部和4个方向内边距设置|
|列表|设置列表项，包括列表样图像样显示位置等|
|超链接|设置超链接样式，包括链接颜色、行为等|
|表格|设置表格，包括单元格遍地显示方式、空隙，标题、是否隐藏空单元格、表格解析方式等等|
|滚动条|设置滚动条，包括滚动条地不同区域颜色|
|其他|一些特殊设置，包括鼠标样式、行为、特效、对象缩放|

### 1. 字体

**常见属性:**

|**属性**|**属性值**|**用法**|
|:--:|:--:|:--:|
|font-family|name(Arial、kaiti、songti)|font-family:Arial,kaiti,songti;按照从左到右的顺序，如果系统中不存在字体，则使用下一种字体|
|font-size|xx-small,x-small,medium,large,x-large,xx-large等，也可以用具体数值值|font-size:12px;设置字体大小为12像素|
|color|red、blue、green等|color:red;设置红色字体|
|font-weight|normal、bold、bolder、lighter、100、200、300~900|font-weight:700;各个数值之间差别不大，一般来说，仅用bold、normal两个属性|
|text-decoration|none、underline、blink、overline、line-through|text-decoration:none;|
|font-style|none、italic、oblique|font-style:none;|
|font|综合属性，可以按照一定顺序一次填写，各个属性之间用空格分开|font:font-style font-weight font-size line-height font-family;|

### 2. 文本

**常见属性：**

|**属性**|**属性值**|**用法**|
|:--:|:--:|:--:|
|text-align|left、right、center、justify|text-align:left;左对齐|
|vertical-align|auto、top、bottom、middle|vertical-align:middle;垂直居中对齐|
|line-height|normal(1.2em)、具体数值(注意：设置行高前必须先设置字体大小)|line-height:1.5em;行距1.5倍|

### 3. 背景

|**属性**|**属性值**|**用法**|
|:--:|:--:|:--:|
|background-image|none、url()|background-image:url(001.jpg);插入背景图片|
|background-repeat|repeat-x、repeat-y、repeat、no-repeat、round(自适应)|background-repeat:no-repeat;不设置背景图平铺|
|background-position|left、right、center、top、bottom|background-position:left top;设置背景图在左上角的位置|
|background|复合属性，将上面属性依次写|background:url(001.png) no-repeat left top;|

### 4. 边框

|**属性**|**属性值**|**用法**|
|:--:|:--:|:--:|
|border-style|dotted(点线框)、dashed(虚线框)、solid(实线框)、double(双线框)|border-top-style:dashed;设置上边框为虚线框|
|border-color|red、blue|border-color:red;设置边框颜色为红色|
|border-width|具体数值|border-width:10px;边框宽度为10像素|
|border|复合属性，把上面三个依次写|border:solid red 100px;|
|border-radius|none、水平半径 垂直半径(只写一个值代表两个数值相等，即四分之一圆角)|border-radius:12px;12像素的圆角边框|

### 5. 阴影

|**属性**|**属性值**|**用法**|
|:--:|:--:|:--:|
|box-shadow|none、(inset内阴影，默认外阴影)、水平偏移、垂直偏移、阴影大小、color|box-shadow:10px 10px 20px red;红色阴影向右下方偏移|

**注意：**  

1、以上所有复合属性里面，如果存在不需要设置的属性值，最好不要加none，否则会导致属性值失效。  
2、浏览器引擎是按照从上到下的顺序来解析网页源代码的，所以在写css时，要注意样式的顺序，比如如果用em为单位设置行高时，要先设置字体的大小，才能接着设置文本行高。

---

作者：[@Shirley-zzb][address]

[address]:https://github.com/Shirley-zzb
