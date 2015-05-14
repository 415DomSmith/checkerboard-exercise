document.onload = function addElement(){
	for (var i = 0; i < 99; i++){
		if (i % 2 === 0){
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = 'red';
  		newDiv.style.width = '11.1%';
  		newDiv.style.float = 'left';
  		newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		}else {
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = 'black';
  		newDiv.style.width = '11.1%';
  		newDiv.style.float = 'left';
  		newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		}	
	}
}();



