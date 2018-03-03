/*var colors =[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb( 0, 0, 255)",
	"rgb(255, 0, 255)"
	];
	*/
	
	var numSquares = 6;
	var colors = generateRandomColor(numSquares);
	
	var squares = document.querySelectorAll(".square");
	
	//var pickedColor = colors[1];
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	colorDisplay.textContent = pickedColor;
	
	var messageDisplay = document.querySelector("#message");
	
	var h1 = document.querySelector("h1");
	
	var resetButton = document.querySelector("#reset");
	
	var easyBtn = document.querySelector("#easyBtn");
	var hardBtn = document.querySelector("#hardBtn");
	
	//=========================================================
	 easyBtn.addEventListener("click" ,function(){
		 //alert("easy button clicked!");
		 easyBtn.classList.add("selected");
		 hardBtn.classList.remove("selected");
		 
		 numSquares = 3;
		 colors = generateRandomColor(numSquares);
		 pickedColor = pickColor();
		 colorDisplay.textContent = pickedColor;
		 
		 for(var i =0;i<squares.length;i++){
		  //add initial colors to square
			  if(colors[i]){
			  squares[i].style.background = colors[i]; 
			 }
			 else{
			  squares[i].style.display = "none"; 
			 }
		 }
	 });
	 //------------------------------------------------------
	 hardBtn.addEventListener("click" ,function(){
		 //alert("hard button clicked!");
		 easyBtn.classList.remove("selected");
		 hardBtn.classList.add("selected");
		 
		 numSquares = 6;
		 colors = generateRandomColor(numSquares);
		 pickedColor = pickColor();
		 colorDisplay.textContent = pickedColor;
		 
		 for(var i =0;i<squares.length;i++){
		  //add initial colors to square
			  squares[i].style.background = colors[i]; 
			  squares[i].style.display = "block"; 
		 }
	 });
	//=========================================================
	resetButton.addEventListener("click",function(){
	 //alert("game rest!");
	 //generate all new colors
	  colors = generateRandomColor(numSquares);
	 //pick new color from colors array
	  pickedColor = pickColor();
	 //change picked color to match the colorDisplay
	  colorDisplay.textContent = pickedColor;
	  
	  //make it clean
	  message.textContent ="";
	  
	  //
	  this.textContent ="new colors";
	  
	  for(var i =0;i<squares.length;i++){
		//again initialize the new  colors to square
		squares[i].style.background = colors[i]; 
	  }
	  h1.style.background = "steelblue";
	})
	
	//=========================================================
	for(var i =0;i<squares.length;i++){
		//add initial colors to square
		squares[i].style.background = colors[i]; 
		
		//add click listeners to square
		squares[i].addEventListener("click",function(){
			   //grab color of picked square
				var clickedColor = this.style.background;
				//alert("pickedColor :"+pickedColor);
				//alert("clickedColor :"+clickedColor);
				
				//compare color to picked color 
				if(pickedColor === clickedColor){  //false ??
					//alert("CORRECT!");
					messageDisplay.textContent = "CORRECT"
					changeColor(pickedColor);
					h1.style.background = pickedColor;
					resetButton.textContent = "Play again!"
				}
				else{
					//alert("WRONG!!");
					this.style.background = "#232323";
					messageDisplay.textContent = "Try again"
				}
		});
	}
	
	
	//=========================================================
	function changeColor(color){
		
		for(var i =0;i<squares.length;i++){
			squares[i].style.background = color;
		}
	}
	//=========================================================
	
	function pickColor(){
		var random = Math.floor(Math.random()*colors.length)
		return colors[random];
	}
	//=========================================================
	function generateRandomColor(num){
		//make an array
		var arr = []
		//initialize an  array
		for(var i =0 ;i<num;i++){
			arr.push(randomColor());
		}
		//return array
		return arr;
	}
	
	function randomColor(){
		var r = Math.floor(Math.random()*256)
		var g = Math.floor(Math.random()*256)
		var b = Math.floor(Math.random()*256)
		
		//rerurn rgb(r, g, b);
		return "rgb("+ r +", "+ g +", "+ b +")";
	}