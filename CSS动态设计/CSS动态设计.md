# CSS 动态设计

## 变量

### 1. 变量的声明
声明变量的时候，变量名前面要加两根连词线（`--`）
```
body {
  --foo: #7F583F;
  --bar: #F7EFD2;
}
```

上面代码中，`body`选择器里面声明了两个变量：`--foo`和`--bar`。

它们与`color`、`font-size`等正式属性没有什么不同，只是没有默认含义。所以 CSS 变量（CSS variable）又叫做"CSS 自定义属性"（CSS custom properties）。因为变量与自定义的 CSS 属性其实是一回事。

各种值都可以放入 CSS 变量。

```css
:root{
  --main-color: #4d4e53;
  --main-bg: rgb(255, 255, 255);
  --logo-border-color: rebeccapurple;

  --header-height: 68px;
  --content-padding: 10px 20px;

  --base-line-height: 1.428571429;
  --transition-duration: .35s;
  --external-link: "external link";
  --margin-top: calc(2vh + 20px);
}
```
变量名大小写敏感，`--header-color`和`--Header-Color`是两个不同变量。

### 2.var() 函数

var()函数用于读取变量。

```css
a {
  color: var(--foo);
  text-decoration-color: var(--bar);
}
```
`var()`函数还可以使用第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值。

```css
color: var(--foo, #7F583F);
```
第二个参数不处理内部的逗号或空格，都视作参数的一部分。

```css
var(--font-stack, "Roboto", "Helvetica");
var(--pad, 10px 15px 20px);
```

var()函数还可以用在变量的声明。

```css
:root {
  --primary-color: red;
  --logo-text: var(--primary-color);
}
```
注意，变量值只能用作属性值，不能用作属性名。

```css
.foo {
  --side: margin-top;
  /* 无效 */
  var(--side): 20px;
}
```
上面代码中，变量--side用作属性名，这是无效的。



### 3. 变量值的类型
如果变量值是一个字符串，可以与其他字符串拼接。

```css
--bar: 'hello';
--foo: var(--bar)' world';
```
利用这一点，可以 debug（例子）。

```css
body:after {
  content: '--screen-category : 'var(--screen-category);
}
```
如果变量值是数值，不能与数值单位直接连用。

```css
.foo {
  --gap: 20;
  /* 无效 */
  margin-top: var(--gap)px;
}
```

上面代码中，数值与单位直接写在一起，这是无效的。必须使用calc()函数，将它们连接。

```css
.foo {
  --gap: 20;
  margin-top: calc(var(--gap) * 1px);
}
```

如果变量值带有单位，就不能写成字符串。

```css
/* 无效 */
.foo {
  --foo: '20px';
  font-size: var(--foo);
}

/* 有效 */
.foo {
  --foo: 20px;
  font-size: var(--foo);
}
```

### 4. 作用域
同一个 CSS 变量，可以在多个选择器内声明。读取的时候，优先级最高的声明生效。这与 CSS 的"层叠"（cascade）规则是一致的。

下面是一个例子。

```css
<style>
  :root { --color: blue; }
  div { --color: green; }
  #alert { --color: red; }
  * { color: var(--color); }
</style>

<p>蓝色</p>
<div>绿色</div>
<div id="alert">红色</div>
```

上面代码中，三个选择器都声明了--color变量。不同元素读取这个变量的时候，会采用优先级最高的规则，因此三段文字的颜色是不一样的。

这就是说，变量的作用域就是它所在的选择器的有效范围。

```css
body {
  --foo: #7F583F;
}

.content {
  --bar: #F7EFD2;
}
```

上面代码中，变量--foo的作用域是body选择器的生效范围，--bar的作用域是.content选择器的生效范围。

由于这个原因，全局的变量通常放在根元素:root里面，确保任何选择器都可以读取它们。

```css
:root {
  --main-color: #06c;
}
```