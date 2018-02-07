# Week 4 assignments

- Improve your design mockup based on feedbacks from class. 
- Restructure your mockup so that it works better with the template.
- Watch the [video tutorial](https://www.youtube.com/watch?v=_Gj_Dm_05Qg&feature=youtu.be) on using the HTML/CSS template. Follow along.
- From your PSD mockup, cut images(only images, hide the text) into slices and start laying down as `background-image` in css. Each image should have its own class.
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
