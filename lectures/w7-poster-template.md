# Poster code template

First, download the template [here](../files/web-poster-code-template.zip). This template is similar to the one we used for the Lyrical Mapping project, but there are a few major differences. A few notable differences:

1. Now, we use the fixed width of 1200px (no responsive design) so you don't need to use `vw` or `%`. Simply, use `px` to set your layout.
1. There are no classes for setting heights in the template (ie. `full`, `half` and `quarter`). So, you will have to create your own classes for setting different heights. You have more flexibility this time, but! instead of creating many, many classes, think systematically and decide how many different heights your design will require.
1. The use of `.row` is the same but now we have 12 different column classes such as `col-1`, `col-2`, etc.
1. In addition to using `background-image`, you can now also use `<img>` to display images and use `position` to place them where you want.
1. The template grid is here to *help* you organize and structure your contents, but using `position:relative` and `position:absolute` will give you more freedom.

Let's have a deeper look at the new template:


## Box sizing
Do you remember in the previous exercises, we set the `div`s to have  `border-box`? This is to make the calcuations of the `width` easier by combining content, padding and border. With the code below, we are now setting all the element to use the border box:

```css
/*-- all elements will use border-box --*/
html {
  box-sizing: border-box;
}
*, :before, :after {
  box-sizing: inherit; 
}
```

`*` is called a wildcard. It selects *all the elements*.

## Grid container
We will use 1200 pixels for the width of the page. The height of the page is up to you. `.grid-container` class will set the width to 1200px. We don't make it responsive for this project. `margin: 0 auto` is to center the contents in case the window is larger than 1200px.

```css
/*-- container for all the columns --*/
.grid-container{
  width: 1200px; 
  margin: 0 auto;
}
```

## Row
We have not talked about `float` yet. Just know that this is to reset any floating.
```css
/*-- our cleafix hack -- */ 
.row:before, 
.row:after {
  content:"";
  display: table ;
  clear:both;
}
```

## Columns
This rule uses a [CSS attribute selector](https://www.w3schools.com/css/css_attribute_selectors.asp). It will look at select the classes that contain `col-`. We can find all the class names manually, but this saves our time. `padding` here sets the gutter between columns. If you want some gutter spacing, then set it to something like `padding: 0 10px;`

```css
[class*='col-'] {
  float: left; 
  min-height: 1px; 
  width: 8.33%; 
    
  /*-- our gutter -- */
  padding: 0 0px; /* top-bottom right-left */
}
```

This template uses 12 column grid, and their class names are different from the other project. It's the same with any offsets.

```css
/*-- columns with different widths --*/
.col-1{ width: 8.333333%; }
.col-2{ width: 16.666666%; }
.col-3{ width: 25%;    }
.col-4{ width: 33.333333%; }
.col-5{ width: 41.666667%; }
.col-6{ width: 50%; }
.col-7{ width: 58.333333%; }
.col-8{ width: 66.666666%; }
.col-9{ width: 75%; }
.col-10{ width: 83.333333%; }
.col-11{ width: 91.666667%; }
.col-12{ width: 100%;   }

/*-- use thse to offset columns --*/
.col-offset-1 { margin-left: 8.333333%; }
.col-offset-2 { margin-left: 16.666666%; }
.col-offset-3 { margin-left: 25%; }
.col-offset-4 { margin-left: 33.333333%; }
.col-offset-5 { margin-left: 41.666667%; }
.col-offset-6 { margin-left: 50%; }
.col-offset-7 { margin-left: 58.333333%; }
.col-offset-8 { margin-left: 66.666666%; }
.col-offset-9 { margin-left: 75%; }
.col-offset-10 { margin-left: 83.333333%; }
.col-offset-11 { margin-left: 91.666667%; }
```

## Helper
Again, anytime you draw a column, use `.test` to see the size of your box.

```css
/*-- helpers --*/
.test,
.outline {
  outline: 1px solid red; 
}
```

----
That's it! This template only contains the bare minimum. There are no classes for centering, heights, etc. *You* will have to find resources and create your own classes most of the time. If you want to learn more about this template, read [this posting](http://j4n.co/blog/Creating-your-own-css-grid-system), which I based this template on.

Unlike the last project, you now have more freedom in building a composition. You have more columns to use, and you know how to use `position` to move things around. Although you may always use `position` without relying on any column grids, you also need to think about the hierarchy of the elements. The grid template should help you create a better systematic layout with proper hierarchies.
