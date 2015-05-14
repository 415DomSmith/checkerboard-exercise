document.onload = function addElement(){
	for (var i = 0; i < 99; i++){
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var col = "rgb(" + r + "," + g + "," + b + ")";
	
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = col;
  		newDiv.style.width = '11.1%';
  		newDiv.style.float = 'left';
  		newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		
	}
}();



