document.onload = function addElement(){
		var r = 255;
		var g = 10;
		var b = 255;
		var r2 = 10;
		var g2 = 155;
		var b2 = 255;	
	for (var i = 0; i < 99; i++){
		var col = "rgb(" + r + "," + g + "," + b + ")";
		var col2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
		g += 2;
		g2 += 2;
		if (i % 2 === 0){
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = col;
  		newDiv.style.width = '11.1%';
  		newDiv.style.float = 'left';
  		newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		}else {
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = col2;
  		newDiv.style.width = '11.1%';
  		newDiv.style.float = 'left';
  		newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		}	
	}
}();



