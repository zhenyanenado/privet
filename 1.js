document.addEventListener('DOMContentLoaded', function(){
	
	let slides = [];
	let grid1 = document.getElementById('grid1');
	let krug = document.getElementById('krug');
	let swipe = document.getElementById('swipe');


	let wallpapers = [

		

	];

				krug.addEventListener('touchmove', function(){

					let pos = event.touches[0].pageX;
					let position = pos-=150;

					if(position < 700 && position > 0){
						this.style.left = position + 'px';
						console.log(pos)
					}

					if(position > 700){
					
							grid1.style.background = 'white';
							krug.style.opacity = 0;
							swipe.style.opacity = 0;
					
						setTimeout(function(){
		
							document.getElementById('hello').style.opacity = 1;
					
						}, 500)
						
					}			

				})

})