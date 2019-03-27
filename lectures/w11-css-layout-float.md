# CSS Layout: float

`float` is great for wrapping text around an image. Let's work on a simple example on Codepen. (Codepen doesn't allow uploading external images. http://placehold.it is a good website to get placeholder images. http://lipsum.com is great for placeholder paragraphs.)

```html
<div class="article">
  <img class="profile" src="http://placehold.it/120x120">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non eros ac tortor facilisis porttitor. Praesent est ligula, ultricies nec massa a, sodales varius magna. Vestibulum sit amet sagittis tellus, sed faucibus risus. Mauris et dapibus libero. Quisque venenatis consectetur vestibulum. Nam rutrum nisi hendrerit justo placerat, ac consectetur magna bibendum. Mauris condimentum ultricies eleifend. Suspendisse potenti. Sed tempus nunc condimentum, vulputate elit nec, sagittis odio. Phasellus ipsum justo, posuere at libero sit amet, vulputate laoreet felis. Curabitur at pulvinar diam, quis tempor tellus.
  </p>
</div>
```

## Wrap text around image
We will add `float: left` to the image. Although the paragraph is a block-level element, the text now wraps around the image.
```css
img.profile {
  float: left;
}
```

We can improve this with better spacings:
```css
img.profile {
  float: left;
  margin-right: 20px;
}
```

*Exercise: Can you move the image to the right?*

Flaoting is exciting and confusing at the same time. We just have to be extra careful when we use floats.

## Clear
Elements after a floated element will flow around it. If you want to avoid it, use `clear`.

```html
<div class="box box1">This is floated</div>
<div class="box box2">This is also floated</div>
<div class="box box3">This is not</div>
```
```css
.box {
  width: 100px;
  height: 100px;
  margin: 4px;
  border: 4px solid grey;
}
.box1 {
  float: left;

}
.box2 {
  float: left;
}

.box3 {
  clear: both;
}
```

## Clearfix
Let's have a look back at the first article example of this post. We have a simple hierarchy setup. `<div class="article">` contains a floated image and a paragraph. Let's add a border around `article`.

```html
<div class="article">
  <img class="profile" src="http://placehold.it/120x120">
  <p>
    some text
  </p>
</div>
```
```css
.profile {
  float: left;
  margin-right: 20px;
}
.article {
  border: 4px solid grey;
}
```

It looks strange. That's because when you float an element, its parent does not know how to handle the height. In this situation, we can use a technique called *clearfix*. Add the following code to `.article` css.

```css
.article {
  border: 4px solid grey;
  overflow: auto;
}
```
or,
```css
.article:after {
  content: "";
  clear: both;
  display: table;
}
```

Anytime you use a floating element, make sure you add `overflow: auto;` to its parent to correctly calculate the height. The technique is called *clearfix* if you want to look up on the internet.

## Page layout with float

`float` can also be used to design an entire page layout.

```html
<div class="box">Box</div>
<div class="box">Box</div>
<div class="box">Box</div>
<div class="box">Box</div>
```

```css
div {
  box-sizing: border-box;
  margin: 20px;
  width: 200px;
  height: 100px;
  background-color: grey;
}

div.box {
  float: left;
}
```

## Further learning
- https://css-tricks.com/almanac/properties/f/float/
- http://learnlayout.com/float.html
- https://css-tricks.com/snippets/css/clear-fix/

