# Navigation

Let's look at the basics of building the navigation bar. There are many different ways of creating the navigation, and you should look at many different examples. [W3School page](https://www.w3schools.com/css/css_navbar.asp) is a great place to start. Check out the examples in the link. More resources are provided at the end of the posting.

Before we dive into coding, when you build a navigation, you have to first think about the usability. How clear is it for people to find the information they need and navigate on your website? What kind of feedbacks do you provide so your users will understand the text or graphic will be clickable?

We will use this HTML code for the exercises:
```html
<div class="container">
  <ul class="nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Work</a></li>
    <li><a href="#">Blog</a></li>
  </ul>
</div>
```

## Vertical navigation
```css
* {
  margin: 0;
  padding: 0;
}

div.container {
  width: 480px;
  margin: 0 auto;
}

ul.nav {
  list-style: none;
  width: 100px;
}
ul.nav li a {
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  display: block; // for top-bottom paddings
  text-align: center;
}
ul.nav li a:hover {
  background-color: lightgreen;
}
```

## Horizontal navigation
```css
* {
  margin: 0;
  padding: 0;
}

div.container {
  width: 480px;
  margin: 0 auto;
}

ul.nav {
  list-style: none;
  width: 100px;
}
ul.nav li a {
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  display: block; /* for top-bottom paddings */
  text-align: center;
}
ul.nav li a:hover {
  background-color: lightgreen;
}
```

We just look at a few very basic examples. On top of the basic code, you can add grid classes (i.e. `col-4`, `col-3`, etc.) to have more control over your layout. You can also wrap the whole navigation with another `div` for one more level of hierarchy and position it the way you need. There are many techniques for creating the navigation, so be sure to check out exmaples online.



## Further learning
- [CSS Navigation Bar](https://www.w3schools.com/css/css_navbar.asp) - a great resource
- [Search on Codepen](http://codepen.io/search/pens?q=css+navigation&limit=all&type=type-pens)
- [Simple navigation example](http://codepen.io/sahilpopli/pen/jcqBk?editors=1100)
- [Simple Pure CSS Drop Down Menu](https://codepen.io/philhoyt/pen/ujHzd?editors=0100)
