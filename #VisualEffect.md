# 视觉特效

## 过渡

### 1.1 过渡的实现

CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。  
要实现这一点，必须规定两项内容：

* 指定要添加效果的CSS属性
* 指定效果的持续时间。

### 1.2实现过渡属性的元素

|属性|描述|值|描述|
|----|----|----|----|
|transition|简写属性，用于在一个属性中设置四个过渡属性。||
|transition-property|规定应用过渡的 CSS 属性的名称。||
|transition-duration|定义过渡效果花费的时间。默认是 0。|时间|
|transition-delay|规定过渡效果何时开始。默认是 0。|时间|
|transition-timing-function|规定过渡效果的时间曲线。默认是 "ease"。|linear|规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。|
|||ease|规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。|
|||ease-in|规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。|
|||ease-out|规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。|
|||ease-in-out|规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。|
|||cubic-bezier(n,n,n,n)|在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。|

**CSS**:

```css
div
{
    transition-property: width;
    transition-duration: 1s;/*定义完成过渡花费一秒*/
    transition-timing-function: linear;/*定义过渡是匀速的*/
    transition-delay: 2s;
}
```

用transition简写上面的代码，实现相同的功能：

```css
div
{
    transition: width 1s linear 2s;
}
```

### 1.3实例讲解

#### 1.3.1 单属性变化

**HTML**:

```html
<style>
.box {
    width:  160px;
    height: 160px;
    background-color: #ff0000;
    /*过渡效果*/
    transition: background-color .5s linear 0s;
}

.box:hover {
    background-color: #000;
}
</style>
<body>

<div class="box"></div>

</body>
```

#### 1.3.2 多属性变化

**HTML**:

```html
<style>
.box {
    width:  160px;
    height: 160px;
    background-color: #ff0000;
    /*过渡效果*/
    transition: all .25s linear 0s;
}
.box:hover {
    background-color: #000;
    border-radius: 80px;
    opacity: .25;
    /*缩放*/
    transform: scale(.5);
}

</style>
<body>

<div class="box"></div>

</body>
```

---

## 变换

### 2.1 变换的实现

变换的基本原理，是通过改变坐标系统，来实现元素的平移、旋转、缩放和倾斜等效果。  

### 2.2 2D变换

#### 2.2.1 translate() 方法

translate( )方法，根据左( X轴 )和顶部( Y轴 )位置给定的参数，从当前元素位置移动。
translate( x,y )，沿 x 轴移动 x 个单位，沿 y 轴移动 y 个单位。  
例如：translate（ 50px，100px ）是从左边元素移动 50 个像素，并从顶部移动 100 像素。  

实例：
**HTML**:

```html
<style>
div
{
    width:100px;
    height:75px;
    background-color:red;
    border:1px solid black;
}
div#div2
{
    transform:translate(50px,100px);
}
</style>
</head>
<body>

<div>Hello</div>

<div id="div2">Hello</div>

</body>
```

#### 2.2.2 rotate() 方法

rotate( ) 方法: 在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。  
rotate( angle ): angle 就是要旋转的角度。例如：rotate值（ 30deg ）元素顺时针旋转 30 度。  
>注意：旋转的中心点默认为div盒子的中心点要设置特殊的旋转点要使用 transform-origin 属性，例如 transform-origin: left top; 表示左上角为旋转点。  

**HTML**:

```html
<style>
div
{
        width:100px;
        height:75px;
        background-color:red;
        border:1px solid black;
}
div#div2
{
        transform:rotate(30deg);
        transform-origin: left top;
}
</style>
<body>

<div>Hello. This is a DIV element.</div>

<div id="div2">Hello. This is a DIV element.</div>

</body>
```

#### 2.2.3 scale() 方法

scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数。  

例如：scale（2,3）转变宽度为原来的大小的2倍，和其原始大小3倍的高度。  
**HTML**:

```html
<style>
div {
    margin: 150px;
    width: 200px;
    height: 100px;
    background-color: yellow;
    border: 1px solid black;
    border: 1px solid black;
    transform: scale(2,3);
}
</style>
<body>
​
<div>
div 元素的宽度是原始大小的两倍，高度是原始大小的三倍。
</div>
​
</body>
```

#### 2.2.4 skew() 方法

语法为：skew(x-angle,y-angle)包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。  

例如：skew(30deg,20deg) 元素在X轴和Y轴上倾斜20度30度。  
**html**:  

```html
<style>
    div
    {
        width:100px;
        height:75px;
        background-color:red;
        border:1px solid black;
    }
    div#div2
    {
        transform:skew(30deg,20deg);
    }
</style>

<body>

    <div>Hello</div>
    <div id="div2">Hello</div>

</body>
```

#### 2.2.5 执行多个不同的属性

如果要给一个元素同时设置多个不同的 css 变换属性时，在属性中间用空格隔开即可，同时执行多个效果。  

>当给 dom 元素同时设置多个变换transform属性时它们的执行顺序——是从后向前执行的，顺序不同执行的效果也会不同！！！

例如：transform: rotate(360deg) scale(2,2) skew(10deg,5deg);
上面变换属性中会先执行 skew( 10deg,5deg )  再执行 scale(2,2) 最后再执行 rotate( 360deg )。  

### 2.3 3D变换

#### 2.3.1 rotate 属性

rotate( )方法，围绕其在一个给定度数 x 轴旋转的元素。  

实例：
**HTML**:

```html
<style>
 *{
      padding: 0;
      margin: 0;
  }
.demo{
      width: 100px;
      height: 100px;
      background-color: rgba(255, 0, 0);
      border: 2px solid #000;
      transform: rotateX(0deg);
    }
.content{
      perspective: 240px;
      margin: 50px;
      width: 104px;
      height: 104px;
      background-color: rgba(0, 0, 255);
    }
</style>
<body>
<div class="content">
    <div class="demo">Hello</div>
  </div>

</body>
```

语法：

```html

rotate3d(x, y, z, angle)  
x<number 类型> 表示旋转轴 x 坐标方向上的矢量（可以为小数）  
y<number 类型> 表示旋转轴 x 坐标方向上的矢量（可以为小数）  
z<number 类型> 表示旋转轴 x 坐标方向上的矢量（可以为小数）  ·
angle 旋转角度，允许负值。
```

---

## 动画

CSS3 动画就像一部迷你电影，里面有演员（ HTML 元素）、剧本（ keyframes ）以及动作片段（ CSS 规则）。相比于过渡，动画可以实现更多变化，更多控制，连续播放等效果。  

动画的使用分为两步：

* 定义动画
* 调用动画

现在先用一个实例来了解动画：我们想页面一打开，一个盒子就从左面走到右面。  

### 3.1 用 keyframes 定义动画

格式：

```html
@keyframes 动画名称
{
    0%{
        width: 100px;
    }
    100%{
        width: 200px;
    }
}
```

这里的 0 和 100 是动画序列表示动画的开始和完成。这里我们还可以用“ form ”和“ to ”来表示。当我们中间有多种变化时，我们可以使用百分比来规定变化发生的时间。  
下面我们编写刚刚的实例。  
**HTML**:

```html
<style>
@keyframes move{
    /*开始状态*/
   0%{
        transform: translateX(0px);
   }
   /*结束状态*/
    100%{
        transform: translateX(500px);
    }
}

div
{
    width:100px;
    height:100px;
    background:blue;
    /*调用动画*/
    animation-name:move;/*动画名称*/
    animation-duration:5s;/*持续时间*/
}
</style>
```

### 3.2 动画序列

当我需要不止一次状态的变化时，就需要用到动画序列了。  
**HTML**:

```html
<style>
@keyframes move{
    /*开始状态*/
   0%{
        transform: translate(0,0);
   }
   /*结束状态*/
    25%{
        transform: translate(500px,0);
    }
    50%{
        transform: translate(500px,500px);
    }
    75%{
         transform: translate(0,500px);
    }
    100%{
        transform: translate(0, 0);
    }
}

div
{
    width:100px;
    height:100px;
    background:blue;
    /*调用动画*/
    animation-name:move;/*动画名称*/
    animation-duration:10s;/*持续时间*/
}
</style>
```

>注意：这里的每一部分的时间是总的十秒的百分比的划分。  

### 3.3 动画常见属性

* **animation-timing-function** : 规定动画的速度曲线。（默认是“ease”）
* **animation-delay** 规定动画何时开始。（默认是0）  
* **animation-iteration-count** : 规定动画的播放次数。（默认是1，还有infinite）  
* **animation-direction** : 规定动画是否在下一周期逆向播放。（默认是“normal”，alternate逆播放）  
* **animation-fill-mode** : 规定动画结束后的状态，保持forwards回到起始backwards。  
* **animation-play-state** : 规定动画是否正在运行或暂停。默认是“running”，还有“paused”。  

实例：
**HTML**:

```html
<style>
@keyframes move{
    /*开始状态*/
   0%{
        transform: translateX(0px);
   }
   /*结束状态*/
    100%{
        transform: translateX(500px);
    }
}

div
{
    width:100px;
    height:100px;
    background:blue;
    /*调用动画*/
    animation-name:move;/*动画名称*/
    animation-duration:5s;/*持续时间*/
    anmimation-delay:1s;/*何时开始*/
    /*重复次数 次数 infinite 无限*/
    animation-iteration-count:infinite;
    /*是否反向播放 默认是 normal 如果反方向就写alternate*/
    animation-direction: alternate;
    /*动画结束后的状态 默认回到起始backwards 保持*/
    /*animation-fill-mode: forwards;*/
}

div:hover{
    /*鼠标经过div 让这个div停止 鼠标离开则继续*/
    animation-play-state: paused;
}
</style>
```

---

作者 [@Bling12138](home)
2020 年 10月 05日

[home]: https://github.com/Bling12138