# How to show/hide elements using JavaScript

```html
<!doctype html>
<html>

<head>
	<style>
		#nav {
			width: 100px;
			background-color: lightgrey;
			height: 100%;
			position: fixed;
			top: 0;
			left: -60px;
			overflow-x: hidden;
			transition: 0.5s;
			z-index: 1;
		}

		#nav #open {
			position: absolute;
			right: 0;
		}

		#nav #open:hover {
			color: white;
			cursor: pointer;
		}

		#nav #close {
			position: absolute;
			right: 0;
			display: none; /* do not display at first */
		}

		#nav #close:hover {
			color: white;
			cursor: pointer;
		}

		.contents {
			margin-left: 60px;
		}
	</style>
	<script>
		function openNav() {
			document.getElementById("nav").style.left = "0px";
			document.getElementById("close").style.display = "block";
			document.getElementById("open").style.display = "none";
		}

		function closeNav() {
			document.getElementById("nav").style.left = "-60px";
			document.getElementById("close").style.display = "none";
			document.getElementById("open").style.display = "block";
		}
	</script>
</head>

<body>

	<div id="nav">
		<div id="open" onclick="openNav()">open</div>
		<div id="close" onclick="closeNav()">X</div>
		<a href="#">HOME</a>
		<a href="#">ABOUT</a>
		<a href="#">WORK</a>
	</div>

	<div id="contents" class="contents">
		<h1>Here are some other contents.</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam temporibus sed, nemo amet unde inventore, quis non ut eum vel? Unde porro omnis veritatis aliquid, iste dolorem saepe deleniti eum!</p>
	</div>

</body>

</html>
```

