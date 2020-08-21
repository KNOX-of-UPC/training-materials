# 盒子模型（一）

## 组成

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：外边距 (margin)，边框 (border)，内边距 (padding)，和实际内容 (content)。  

![盒子模型组成](./zucheng1.png)

![盒子模型详细组成](./zucheng2.png)

---

## 外边距 margin

### 1. 属性

空白边的属性有五种 ，即 margin-top、margin-bottom、margin- left、margin-right以及综合了以上四种方向的快捷空白边属性 margin。  

格式：  
**CSS**：  

```css
margin-width: 2px;
/*定义四个边均为2px*/
margin-width: 2px 4px;
/*定义上下边为2px，左右边为4px*/
margin-width: 2px 3px 4px;
/*定义上边为2px，左右边为3px，下边为4px*/
margin-width: 2px 3px 4px 5px;
/*定义上边为2px，右边为3px，下边为4px，左边为5px*/
```

### 2.外边距合并

#### (1) 相邻块元素外边距的合并

对于两个相邻的（水平或垂直方向）且设置有空白边值的盒子，他们邻近部分的空白边将不是二者空白边的相加，而是二者的并集。若二者邻近的空白边值大小不等，则取二者中较大的值。例如示例中的 shortcut 和 detailed 。  

![相邻块元素外边距的合并](./相邻块元素外边距的合并.png)

例：  
**HTML**：

```html
    <div class="margin-normal">
        <p id="shortcut">顺时针方向，分别为10像素，20像素，30像素，40像素。快捷</p>
        <p id="detailed">分开详细写</p>
    </div>
```

**CSS**：

```css
html,body{
    margin: 0;
    padding: 0;
}

.margin-normal{
    height: 200px;
    margin: 40px;
    background-color: lemonchiffon;
}

#shortcut{
    width: 200px;
    margin: 10px 20px 30px 40px;
    border: 5px solid green;
}

#detailed{
    width: 100px;
    margin-top: 80px;
    margin-right: 40px;
    margin-bottom: 60px;
    margin-left: 80px;
    border: 5px solid rgb(115, 167, 38);
}
```

#### (2) 嵌套块元素垂直外边距的合并

两个嵌套关系的块元素，如果父元素没有上(下)内边距以及边框，则父元素的上(下)外边距会与子元素的上(下)外边距发生合并，合并后的外边距为两者中的较大者。例如示例中的margin-normal和shortcut。  

![嵌套块元素垂直外边距的合并](./嵌套块元素垂直外边距的合并.png)

**解决方案**：可以为父元素定义1px的上(下)边框或内边距，也可以为父元素添加  overflow: hidden。

---

## 边框 border

### 属性

边框的属性有 border-style、border-width 和 border-color 以及综合了以上三类属性的快捷边框属性 border。  

#### (1) border-style

一共九种，列出常用几种。

|属性值|说明|
|:----:|:----:|
|none|默认值，无边框|
|hidden|隐藏边框，IE不支持|
|dotted|边框为点线|
|dashed|边框为虚线|
|solid|边框为实线|
|double|边框为双线边框，两条线及其间隔宽度之和为border-width|

#### (2) border-width

使用 border-width 属性可以指定边框的宽度，其属性值可以是长度计量值（同 margin），也可以是 CSS 规定的 thin、medium 和 thick (一般不用，不同浏览器对此解析的宽度值不同）。  

>当定义 border-width 时，必须要定义 border-style。由于默认样式为 none，所以宽度也自动被清除为 0。  

#### (3) border-color

使用 border-color 属性可以为边框指定相应的颜色，其属性值可以是 RGB 值，也可以是 CSS 规定的17个颜色名。  

>设置盒子背景色属性时，在IE中背景不会延伸到边框区域，但在 Firefox 等标准浏览器中，背景颜色可以延伸到边框区域，特别是单边框设置为点线或虚线时能看到效果。

在设定以上三种边框属性时，既可以进行边框四个方向整体的快捷设置，也可以进行四个方向的专向设置，如：  
格式：  
**CSS**：  

```css
/*写法一*/
border: 2px solid green;
/*定义四个边均为2px，边框为实线，颜色为绿色*/

/*写法二*/
border-width: 2px;
border-style: solid;
border-color: green;
```

#### (4) border-radius

border-radius 圆角边框是CSS3的新属性。  
格式：  
**CSS**：

```css  
border-radius: 10px;
/*四个角均为10px的弧度*/
border-radius: 50%;
/*取宽高的各一半，变成圆形*/
border-radius: 10px 40px;
/*左上和右下为10px，右上和左下均为40px*/
border-radius: 10px 40px 80px;
/*左上为10px，右上和左下为40px，右下为80px*/
border-radius: 10px 40px 60px 80px;
/*左上为10px，右上为40px，右下为60px，左下为80px*/
```

---

## 内边距 padding

### 属性

填充的属性有五种 ，即 padding -top、padding -bottom、padding -left、padding-right  以及综合了以上四种方向的快捷填充属性padding。(同margin）

---

## 内容（content）

内容区是盒子模型的中心，它呈现了盒子的主要信息内容，这些内容可以是文本、图片等多种类型。

### 属性

内容区有三个属性，width、height 和overflow。  

#### (1) width height

使用 width 和 height 属性可以指定盒子内容区的高度和宽度.  

>当您指定一个 CSS 元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。  

#### (2) overflow

当内容信息太多，超出内容区所占范围时，可以使用 overflow 溢出属性来指定处理方法。当 overflow 属性值为 hidden 时，溢出部分将不可见；为 visible 时，溢出的内容信息可见，只是被呈现在盒子的外部；当为 scroll 时，滚动条将被自动添加到盒子中，用户可以通过拉动滚动条显示内容信息；当为 auto 时，将由浏览器决定如何处理溢出部分。

---

## 标准盒模型和IE盒模型的区别

在 标准盒子模型中，width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。

![标准盒子模型](./标准盒子模型.png)

IE盒子模型中，width 和 height 指的是内容区域 + border + padding 的宽度和高度。  

![IE盒子模型](./IE盒子模型.png)

box-sizing 属性可以指定盒子模型种类，content-box 指定盒子模型为W3C（标准盒模型），border-box 为IE盒子模型（怪异盒模型）。  

---

作者 [@Bling12138](home)
2020 年 08月 21日

[home]: https://github.com/Bling12138