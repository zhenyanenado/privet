document.addEventListener('DOMContentLoaded', function(){
	let slides = []

	let krug = document.getElementById('krug');

				krug.addEventListener('touchmove', function(){

					let pos = event.touches[0].pageX;
					let position = pos-=30;

					if(position < 200 && position > 0){
						this.style.left = position + 'px';
						console.log(pos)
					}

					if(position > 200){
						document.getElementById('grid1').style.background = 'white';
						document.getElementById('krug').style.opacity = 0;
						document.getElementById('swipe').style.opacity = 0;
						document.getElementById('hello').style.opacity = 1;
					}
					

				})





})


