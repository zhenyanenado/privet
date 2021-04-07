document.addEventListener('DOMContentLoaded', function(){
	
	let slides = [];
	let grid1 = document.getElementById('grid1');
	let krug = document.getElementById('krug');
	let swipe = document.getElementById('swipe');
	let hello = document.getElementById('hello');


			krug.addEventListener('touchmove', function(){

					let pos = event.touches[0].pageX;
					let position = pos-=150;

					if(position < 650 && position > 0){
						this.style.left = position + 'px';
				
					}

					if(position > 650){
					
							grid1.style.background = 'white';
							krug.style.opacity = 0;
							swipe.style.opacity = 0;
					
						setTimeout(function(){
		
							hello.style.opacity = 1;
					
						}, 500)

						setTimeout(function(){
							hello.style.opacity = 0;

								for(var i=2; i<=5; i++){

									let all = document.getElementById('grid'+i).style;
										all.opacity = 1;

										all.width = '750px';
										all.left = 100 + 'px';
										all.transition = 'all ease 1s';
									}


						}, 1000)
						
					}			

				})

})