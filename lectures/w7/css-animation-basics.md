# CSS Animation Basics

You can create (a bit limited) animation with CSS. Here are the CSS properties we will look at in this posting:

- `@keyframes`
- `animation`
- `transition`

## Keyframe animation
We can predefine animation using `@keyframes`. This keyframes rule can be attached to many elements and be reused just like classes.

Let's use a simple box to demonstrate CSS animation:
```html
<div class="box">
  BOX
</div>
```
...and its default styling:
```css
div.box {
  width: 200px;
  height: 200px;
  background-color: green;
}
```

Now, I want to fade out the background color of the box. First, I create a keyframe animation rule. A keyframe defines a state. When you have more than two keyframes, your browser will automatically animate all the inbetween values. This is not only for the box, but also can be used for other elements.

```css
@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
```
`fade-out` is a name that I created for this animation. You can use any name you want. Inside the rule, we create `from` and `to` to define the value for the beginning and ending. You can also have multiple properties inside `from` and `to`.

Now, let's add this animation to our box styling using `animation` property:

```css
div.box {
  width: 200px;
  height: 200px;
  background-color: green;
  animation: fadeout 2s infinite;
}
```

`animation` property is a short-hand notation to set multiple values related to animation (for all the animation-related properties, look at [this page](https://www.w3schools.com/cssref/css3_pr_animation.asp)). Here, we are setting three different things - name of the keyframe animation, the duration and the number of repetitions. Play with the duration to see its effect. For the number of repetition, if you want it to stop after a few cycles, simply replace with a number.

If you want to keep your animation at the ending state, use `animation-fill-mode` like this:

```css
div.box {
  width: 200px;
  height: 200px;
  background-color: green;
  animation: fadeout 2s forwards; /* forwards will keep your animation at the end state */
}
```

### More keyframe animation
Let's look at another example of the keyframe animation. We will use the same box as before. Our animation looks like this:
```css
div.box {
  position: relative; /* so we can control position! */
  width: 200px;
  height: 200px;
  background-color: green;
  animation: fadeout 2s infinite,
             moveleft 2s infinite;
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes moveleft {
  from { left: 0; }
  to { left: 120px; }
}
```

As you can see from the example above, we can create *modules* of keyframe animation and layer them using `animation` property. Just remember to separate each animation with a comma.

What if you instead want to move to left and come back? Simple from/to will not be able to handle that. We can also use percentage values:

```css
@keyframes moveleft-back {
  0%   { left: 0; }
  50%  { left: 120px; }
  100% { left: 0; }
}
```

### With interaction
If you want the user to start the animation, you simply attach the `animation` property in `:hover` selector:

```css
div.box {
  position: relative; /* so we can control position! */
  width: 200px;
  height: 200px;
  background-color: green;
}
div.box:hover {
  animation: moveleft-back 2s infinite;
}

@keyframes moveleft-back {
  0%   { left: 0; }
  50%  { left: 120px; }
  100% { left: 0; }
}
```

Notice that if you move your mouse out before the animation completes, there is a bit of jump. If you want this interaction to be smoother, we will have to look at `transition`.

## Transitions
`@keyframes` and `animation` are great for creating a looping animation without any intervention. When you want animation to happen with user interaction, you may consider using `transition` as it provides a smoother *transition*.

Let's modify the example above.
```css
div.box {
  width: 200px;
  height: 200px;
  background-color: green;
  position: relative; /* so we can control position! */
  left: 0;
  transition: left 1s;
}
div.box:hover {
  left: 120px;
}
```

First, to the default box, we set its `left` value to 0, and add `transition: left 1s`, so the transition will listen for any changes to `left` property, and when there is, the transition will take 1 second. Now, we add the changes to `left` property in `:hover` state. Try moving your mouse over and out. The whole transition will be smooth.

`transition` does not give us the full flexibility of setting multiple keyframes. It can only make changes from A to B, but it can be very useful when you want to combine animation and user interaction.

Here is another example:

```css
div.box {
  position: relative; /* so we can control position! */
  width: 200px;
  height: 200px;
  background-color: green;
  transition: transform 1s;
}
div.box:hover {
  transform: rotate(180deg);
}
```

-----


We had a look at the basic CSS animation here. There are a lot more you can do with this technique. You should google for more info or look for tutorials on Lynda.com or Youtube.

## Further learning
- [W3Schools CSS animation tutorial](https://www.w3schools.com/css/css3_animations.asp)
- [CodePen CSS animation search result](http://codepen.io/search/pens?q=css+animation&limit=all&type=type-pens)
- [CSS3: Animations vs. Transitions](https://www.kirupa.com/html5/css3_animations_vs_transitions.htm)
