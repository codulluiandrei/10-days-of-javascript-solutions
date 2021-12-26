HTML:
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
		<link rel="stylesheet" href="css/button.css" type="text/css">
        <title>Button</title>
    </head>
    <body>
		<button class="button" id="btn">0</button> 
		<script src="js/button.js" type="text/javascript"></script>
    </body>
</html>
CSS:
.button {
    width: 96px;
    height: 48px;
    font-size: 24px;
}
JS:
var btn = document.getElementById("btn");
	btn.addEventListener("click",function() {
		var current_value = this.innerHTML;
		this.innerHTML = parseInt(current_value)+1;
	});