# Week 4 assignments

- Improve your design mockup based on feedbacks from class. 
- Restructure your mockup so that it works better with the template. (ie. using grid, column width, web fonts)
- From your PSD mockup, cut images(only images. text will be treated as html later) into slices and start laying down as `background-image` in css. Each image should have its own class.
- Use HTML/CSS template provided. Do NOT start from scratch. Download and build on the template.
- Here is a [tutorial video]() on how to turn PSD to HTML/CSS.

```css
.img-flower {
  background-image: url("/images/img-flower.png");
  background-size: cover;
}

.img-ocean {
  background-image: url("/images/img-ocean.png");
  background-size: cover;
}
```
- Then you will use the classes in your HTML.
```html
<div class="col-25 img-flower"></div>
```
- Be clear and descriptive with your class names as well as image file names.

## Deliverables
- Post the updated design file (PNG) and work-in-progress HTML/CSS project (the entire folder) on Google Drive.
