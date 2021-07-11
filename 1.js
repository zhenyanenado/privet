let grids = [];
let inps = [];
let values = [[],[],[],[],[]];

for(let i = 1; i<=5; i++){

	grids.push(document.getElementById('grid'+i));
	inps.push(document.getElementById('inp'+i))

		grids[i-1].addEventListener('touchmove', function(){
		let position = event.touches[0].clientX;
			if(position <= 700){
				grids[i-1].style.width = 0 + 'px';
					inps[i-1].style.opacity = 0;
			}
	})

		inps[i-1].addEventListener('touchmove', function(){
			let position1 = event.touches[0].clientX;
				if(position1 <= 700){
					grids[i-1].style.width = 0 + 'px';
						inps[i-1].style.opacity = 0;
			}	
	})



		inps[i-1].addEventListener('click', function(){
			this.style.width = '700px';

			if(this == inps[0]){
				values[0].push(this.value);
			}

			if(this == inps[1]){
				values[1].push(this.value);
			}

			if(this == inps[2]){
				values[2].push(this.value);
			}

			if(this == inps[3]){
				values[3].push(this.value);
			}

			if(this == inps[4]){
				values[4].push(this.value);
			}
			

		})







}