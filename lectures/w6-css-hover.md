# CSS Hover

## Hyperlink styling

When you use `<a>` to create a hyperlink in your HTML, the text is automatically underlined and becomes blue to indicate it is clickable. We can change that default behavior. Moreover, we have control over how we want to style the text for a few different states.

Let's use the simple hyperlink as an example:

```html
<a href="http://mica.edu">Maryland Institute College of Art</a>
```

If you want to change the color of the text and remove the underline, you can do so by:

```css
a {
  color: red;
  text-decoration: none;
}
```

If we need more control, we can use four *pseudo-classes* for different states - unvisited, visited, hover and active.

If the link is never visited or the browser does not have a history, we can style the link with `:link`:

```css
/* unvisited link */
a:link {
  color: black;
}
```

If the link has been visited, style with `:visited`:

```css
/* visited link */
a:visited {
    color: grey;
}
```

When the mouse is over the link, we can style with `:hover`:

```css
/* mouse over link */
a:hover {
  color: black;
  background-color: yellow;
  text-decoration: none;
}
```

When you are clicking the link, we can style with `:active`:

```css
/* selected link */
a:active {
  background-color: orange;
}
```

The order of the pseudo-classes is important. Look [here](https://www.w3schools.com/css/css_link.asp) for more information.

## Hover state
`:hover` pseudo-class can also be used for other HTML elements. We can attach it to any CSS selector.

```html
<div class="box-1">
  <h3>My Box</h3>
</div>
```

```css
.box-1 {
  width: 200px;
  height: 200px;
  background-color: green;
}
.box-1:hover {
  background-color: grey;
}
h3 {
  color: white;
}
h3:hover {
  color: yellow;
  text-align: right;
}
```
This hover state interaction can open a very exciting door for us. Just be careful in more practical situations, as having a lot of hover states can confuse the users.

---
*Exercise: Where else can you use the hover states? Play with it on different CSS properties.*


