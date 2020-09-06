 # 排版上下文(FC)

## 1. 块级排版上下文(BFC)

### 1.1 BFC 定义

BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box（块级元素）参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干.

通俗地来说：创建了 BFC的元素就是一个独立的盒子，里面的子元素不会在布局上
影响外面的元素（里面怎么布局都不会影响外部），BFC任然属于文档中的普通流

### 1.2BFC的生成

知道了BFC怎么触发BFC
满足以下条件之一都可以触发BFC，变身为BFC

1. 根元素
2. float属性不为none
3. position不为static和relative
4. overflow不为visible
5. display为inline-block, table-cell, table-caption, flex, inline-flex

> 你会发现BFC无处不在，只是自己用的时候不知道而已

### 1.3 BFC布局规则

变身为BFC后有什么特性呢，以下：

1. 内部的Box会在垂直方向，一个接一个地放置。
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
3. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. BFC的区域不会与float box重叠。
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
6. 计算BFC的高度时，浮动元素也参与计算

### 1.4 BFC作用

#### 1.4.1 防止外边距重叠

bfc导致的属于同一个bfc中的子元素的margin重叠(Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠)

问题：由图可以看到，String1和String2 之间只有20px的margin，按理来说应该是40px，但这是在bfc中导致了他们的margin重叠

<style>
.container1{
        /*通过overflow：hidden可以创建bfc*/
        overflow: hidden;
        background-color: red;
        width: 300px;
    }
    .sub1{
        margin: 20px 0px;
        background-color: #dea;
    }
</style>
<div class="container1">
        <div class="sub1">String1</div>
        <div class="sub1">String2</div>
</div>

代码：

~~~html
<style>
.container1{
        /* 通过overflow：hidden可以创建bfc */
        overflow: hidden;
        background-color: red;
        width: 300px;
    }
    .sub1{
        margin: 20px 0px;
        background-color: #dea;
    }
</style>
<div class="container1">
        <div class="sub1">String1</div>
        <div class="sub1">String2</div>
</div>
~~~

解决方法：我们可以在div外面包裹一层容器，并触发该容器生成一个BFC。那么两个div便不属于同一个BFC，就不会发生margin重叠了。

<style>
    .newbfc{
            overflow: hidden;
    }
</style>
<div class="container1">
        <div class="sub1">String1</div>
        <div class="newbfc"><div class="sub1">String2</div></div>
</div>

代码：

~~~html
<style>
    .newbfc{
            overflow: hidden;
    }
</style>
<div class="container1">
        <div class="sub1">String1</div>
        <div class="newbfc"><div class="sub1">String2</div></div>
</div>
~~~

#### 1.4.2 清除浮动

问题：当元素的子元素都浮动后，会出现高度坍塌的现象，即父容器的高度不会被撑开

<style>
    .pre2{
        width: 200px;
        border: 2px solid red;
    }
    .float1,.float2{
        width: 100px;
        height: 100px;
        float: left;
    }
    .float1{
        background-color: #dee;
    }
    .float2{
        background-color: #dcc;
    }
</style>
<div class="pre2">
        <div class="float1"></div>
        <div class="float2"></div>
</div>

代码：

~~~html
<style>
    .pre2{
        width: 200px;
        border: 2px solid red;
    }
    .float1,.float2{
        width: 100px;
        height: 100px;
        float: left;
    }
    .float1{
        background-color: #dee;
    }
    .float2{
        background-color: #dcc;
    }
</style>
<div class="pre2">
        <div class="float1"></div>
        <div class="float2"></div>
</div>
~~~

解决方法：

bfc的规则：计算BFC的高度时，浮动元素也参与计算所以只要将父容器设置为bfc就可以把子元素包含进去：
这个容器将包含浮动的子元素，它的高度将扩展到可以包含它的子元素，在这个BFC，这些元素将会回到页面的常规文档流。
<style>
    .pre2{
        width: 200px;
        border: 2px solid red;
        /*设置overflow*/
        overflow:hidden;
    }
    .float1,.float2{
        width: 100px;
        height: 100px;
        float: left;
    }
    .float1{
        background-color: #dee;
    }
    .float2{
        background-color: #dcc;
    }
</style>
<div class="pre2">
        <div class="float1"></div>
        <div class="float2"></div>
</div>

代码：

~~~html
.pre2{
        width: 200px;
        border: 2px solid red;
        /* 设置overflow*/
        overflow:hidden;
    }
~~~

#### 1.4.3 解决布局：防止文字环绕

<style>
.container2{
        overflow: hidden;
        width: 200px;
    }
    .box{
        float: left;
        width: 100px;
        height: 30px;
        background-color: #daa;
    }
</style>

<div class="container2">
        <div class="box"></div>
        <p style="background-color: #eea">sdfadsfdff fffffffds fsfffff sfd  fsdsdfsdf fffffff</p>
</div>
代码：

~~~html
<style>
.container2{
        overflow: hidden;
        width: 200px;
    }
    .box{
        float: left;
        width: 100px;
        height: 30px;
        background-color: #daa;
    }
</style>

<div class="container2">
        <div class="box"></div>
        <p style="background-color: #eea">sdfadsfdff fffffffds fsfffff sfd  fsdsdfsdf fffffff</p>
</div>
~~~

这个p元素并没有移动，但是它却出现在浮动元素的下方。p元素的line boxes（指的是文本行）进行了移位。此处line boxes的水平收缩为浮动元素提供了空间。

> bfc的规则：每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

解决这个问题只要将p元素添加overflow：hidden使其成为一个新的bfc就可以了
<style>
    p{
        overflow: hidden;
    }
    .container2{
        overflow: hidden;
        width: 200px;
    }
    .box{
        float: left;
        width: 100px;
        height: 30px;
        background-color: #daa;
    }
</style>

<div class="container2">
        <div class="box"></div>
        <p style="background-color: #eea">sdfadsfdff fffffffds fsfffff sfd  fsdsdfsdf fffffff</p>
</div>

## 2. 内联排版上下文(IFC)

* 符合以下条件即会生成一个IFC

    块级元素中仅包含内联级别元素

形成条件非常简单，需要注意的是当IFC中有块级元素插入时，会产生两个匿名块将父元素分割开来，产生两个IFC，这里不做过多介绍。

* IFC布局规则

1. 子元素水平方向横向排列，并且垂直方向起点为元素顶部。
2. 子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。
3. 在垂直方向上，子元素会以不同形式来对齐（vertical-align）
4. 能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。
5. IFC中的“line box”一般左右边贴紧其包含块，但float元素会优先排列。
6. IFC中的“line box”高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同。
7. 当 inline-level boxes的总宽度少于包含它们的line box时，其水平渲染规则由 text-align 属性值来决定。
8. 当一个“inline box”超过父元素的宽度时，它会被分割成多个boxes，这些 oxes 分布在多个“line box”中。如果子元素未设置强制换行的情况下，“inline box”将不可被分割，将会溢出父元素。

来几个例子？

* 上下间距不生效

<style>
.warp1 { border: 1px solid red; display: inline-block; }
.text1 { margin: 20px; background: green; }
</style>

<div class="warp1">
    <span class="text1">文本一</span>
    <span class="text1">文本二</span>
</div>

代码：

~~~html
<style>
.warp1 { border: 1px solid red; display: inline-block; }
.text1 { margin: 20px; background: green; }
</style>

<div class="warp1">
    <span class="text1">文本一</span>
    <span class="text1">文本二</span>
</div>
~~~

* 多个元素水平居中
水平排列规则根据IFC容器的text-align值来排列，可以用来实现多个子元素的水平居中。

<style>
.warp2 { border: 1px solid red; width: 200px; text-align: center; }
.text2 { background: green; }
</style>

<div class="warp2">
    <span class="text2">文本一</span>
    <span class="text2">文本二</span>
</div>

代码：

~~~html
<style>
.warp2 { border: 1px solid red; width: 200px; text-align: center; }
.text2 { background: green; }
</style>

<div class="warp2">
    <span class="text2">文本一</span>
    <span class="text2">文本二</span>
</div>
~~~

* float元素优先排列

<style>
.warp3 { border: 1px solid red; width: 200px; }
.text3 { background: green; }
.f-l { float: left; }
</style>
<div class="warp3">
    <span class="text3">这是文本1</span>
    <span class="text3">这是文本2</span>
    <span class="text3 f-l">这是文本3</span>
    <span class="text3">这是文本4</span>
</div>

> "这是文本3"优先排列

代码：

~~~html
<style>
.warp3 { border: 1px solid red; width: 200px; }
.text3 { background: green; }
.f-l { float: left; }
</style>
<div class="warp3">
    <span class="text3">这是文本1</span>
    <span class="text3">这是文本2</span>
    <span class="text3 f-l">这是文本3</span>
    <span class="text3">这是文本4</span>
</div>
~~~

## 3. 网格排版上下文(GFC)

GFC（GrideLayout formatting contexts）：

直译为"网格布局格式化上下文"（也即是新的布局：display:grid;兼容性问题比较大），当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。

　　GFC将改变传统的布局模式，他将让布局从一维布局变成了二维布局。简单的说，有了GFC之后，布局不再局限于单个维度了。这个时候你要实现类似九宫格，拼图之类的布局效果显得格外的容易。

>landexiele

指路知乎[GFC]

## 4. 弹性排版上下文(FFC)

### 4.1 FFC(Flex Formatting Contexts)

CSS3引入了一种新的布局模型——flex布局`display:flex;`display值为`flex`或者`inline-flex`的元素将会生成自适应容器（flex container）。
flex是flexible box的缩写，一般称之为弹性盒模型。和CSS3其他属性不一样，flexbox并不是一个属性，而是一个模块，包括多个CSS3属性。flex布局提供一种更加有效的方式来进行容器内的项目布局，以适应各种类型的显示设备和各种尺寸的屏幕。

Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。

伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。

### 4.2 FFC的特性

FFC与BFC有点儿类似，但它是弹性容器不是块容器，因此一些假设使用块布局的属性不适用于弹性布局的场合，特别是以下几个：

* Flexbox 不支持 ::first-line 和 ::first-letter 这两种伪元素
* vertical-align 对 Flexbox 中的子元素 是没有效果的
* float 和 clear 属性对 Flexbox 中的子元素是无效的，也不会使子元素脱离文档流。然而，浮动属性仍然会通过影响display属性的计算值而影响box的生成。
* 在CSS3多栏布局（column-*） 并不适用于弹性容器，其在 Flexbox 中也是失效的，就是说我们不能使用多栏布局在 Flexbox 排列其下的子元素
* Flexbox 下的子元素不会继承父级容器的宽

除此之外其自身的一些特性使得其在某些领域具有独特的优势：

* 弹性容器的内容可以在任何方向以任何顺序放置。
  * 可以被摆放在上下左右任何流方向（flow direction）
  * 可以拥有显示序（display order），这样可以在样式层颠倒或重新安排位置。（也就是视觉顺序可以和文档顺序无关）
  * 可以沿着一个单一的（主要的）轴摆放，或沿第2条正交轴线包装成多行。
* 可以弹性调整大小来适配可用空间。
* 可以与它们的容器或彼此对齐。
* 可以沿主轴线动态压缩或扩展，同时保持容器的截面尺寸（cross size）

### 4.3 常见属性

容器属性

* flex-direction
  * flex-direction属性决定主轴的方向（即项目的排列方向）。
  * row（默认值）：主轴为水平方向，起点在左端。
  * row-reverse：主轴为水平方向，起点在右端。
  * column：主轴为垂直方向，起点在上沿。
  * column-reverse：主轴为垂直方向，起点在下沿。

    ~~~html
    .box {
        flex-direction: row | row-reverse | column | column-reverse;
    }
    ~~~


* flex-wrap
  * 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
  * flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
  * nowrap（默认）：不换行。
  * wrap：换行，第一行在上方。
  * wrap-reverse：换行，第一行在下方。

    ~~~html
    .box{
        flex-wrap: nowrap | wrap | wrap-reverse;
    }
    ~~~

* flex-flow
  * flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

    ~~~html
    .box {
        flex-flow: <flex-direction> <flex-wrap>;
    }
    ~~~

* justify-content
  * ustify-content属性定义了项目在主轴上的对齐方式。
  * flex-start（默认值）：左对齐
  * flex-end：右对齐
  * center： 居中
  * space-between：两端对齐，项目之间的间隔都相等。
  * space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

    ~~~html
    .box {
        justify-content: flex-start | flex-end | center | space-between | space-around;
    }
    ~~~

* align-items
  * align-items属性定义项目在交叉轴上如何对齐。
  * flex-start：交叉轴的起点对齐。
  * flex-end：交叉轴的终点对齐。
  * center：交叉轴的中点对齐。
  * baseline: 项目的第一行文字的基线对齐。
  * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

    ~~~html
    .box {
        align-items: flex-start | flex-end | center | baseline | stretch;
    }
    ~~~

* align-content
  * align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  * flex-start：与交叉轴的起点对齐。
  * flex-end：与交叉轴的终点对齐。
  * center：与交叉轴的中点对齐。
  * space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  * space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  * stretch（默认值）：轴线占满整个交叉轴。

    ~~~html
    .box {
        align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }
    ~~~

项目属性
* order
  * order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

~~~html
.item {
  order: <integer>;
}
~~~

* flex-grow
  * flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
  * 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

~~~html
.item {
  flex-grow: <number>; /* default 0 */
}
~~~

* flex-shrink
  * flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  * 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。

~~~html
.item {
  flex-shrink: <number>; /* default 1 */
}
~~~

* flex-basis
  * flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
  * 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

~~~html
.item {
  flex-basis: <length> | auto; /* default auto */
}
~~~

* flex
  * flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
  * 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

~~~html
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
~~~

* align-self
  * align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
  * 该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

~~~html
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

~~~

作者[@Harrison-LUO][home]
2020 年 08月 25日

[GFC]:https://zhuanlan.zhihu.com/p/33030746
[home]:https://github.com/Harrison-LUO
