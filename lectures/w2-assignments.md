# Week 2 assignments


## Webpage design

### First, markups
1. You will be given a blog posting in plain text.
1. Download the text and the HTML template folder `w2-assignment-template.zip` on Google Drive. Do not start from scratch for this assignment.
1. First, identify different structural elements and add proper HTML markups such as `h1`, `h2`, `img`, `p`, `div`, `a`, etc.
1. For the elements that are hard to find the existing HTML tags, give them the generic `<div>` tag with a class. For example, `<div class="author">` or `<div class="date">`, etc.
1. In the text, there are external websites you need to link to. They are inside the parentheses. Don't let the full URL show up on your page. Contain within `<a href="">` block so it is clickable.
1. There is a video that you need to embed. Below is how you do it. You can find more information [here](http://www.w3schools.com/html/html5_video.asp).
    ```
    <video controls>
      <source src="http://address-of-your-video-file" type="video/mp4">
    </video>
    ```
1. Every element in the text *must* be given a proper HTML tag.

### Second, styling
You are going to have to do a fair amount of your own research to find proper CSS properties and how to use them. There are [far too many of them](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) to cover in class. When you design for the web, you usually rely on a lot of google searches to find different techniques and examples. Look at the [Resources page](../resources.md) as well.

1. Once you have all the html ready, now it's time to add styling.
1. Add CSS rules to give your audience good reading experience. This is a blog article, so you have to consider that the text is meant to be read on screen.
1. How big or small does the text need to be? What about line heights? What typefaces will work best? How do you create contrast between headings and body text? What is the optimal width for a text column?
1. Focus on the visual aesthetics and the user experience. It should be visually pleasing to look at and read, and also easy for users to experience.
1. It is also important to visit as many different websites/blogs as possible to get ideas for making your design better.

#### Tips
1. To control the width of your entire contents, first, contain the entire contents block within `<div class="container"> ... </div>` in your HTML file. In other words, `<div class="container">` block will be the parent element of all the other contents. Then, using CSS, add this rule:

  ```css
  div.container {
    width: XXX px; /* the width you want to set for the entire contents  */
    margin: auto; /* this line will center the contents. */
  }
  ```
  
1. The same technique can be applied to control the width of any image.
  ```css
  img {
    width: XXX px; /* set the width of your image */
  }
  ```
  
  or you can set the image width to `100%`, which is what the template code is doing, then, your image will never go out of your parent element.
  ```css
  img {
    width: 100%; /* image will stay within the parent element */
  }
  ```
  
  The same technique can be applied to control the width of video.
  ```css
  video {
    width: 100%;
  }
  ```

## Deliverables
  - The project folder that contains `index.html` - you *must* name your file `index.html`.
  - If you have any local image files, that should also be part of the project folder.
  - Upload the entire project folder on Google Drive Week 2 folder.
  - Don't just do the bare minimum. Search for more CSS properties and experiment with them.

-----

## Video lessons
Continue watching [Khan Academy lessons](https://www.khanacademy.org/computing/computer-programming/html-css). Again, post the screenshots for *each* chapter. Take notes and bring back the questions.
  - More HTML tags
  - CSS text properties
  - CSS layout 
