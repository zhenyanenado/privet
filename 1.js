document.addEventListener('DOMContentLoaded', function(){

	const grid = document.getElementById('grid');

	let colors = [

		'green', 'red', 'black', 'yellow'

	];

	let grids = [];

	function create(){
		for(let i = 1; i<=4; i++){

			let newGrids = document.createElement('div');
				newGrids.id = 'grid' + i;
				newGrids.style.width = '400px';
				newGrids.style.height = '700px';
				newGrids.style.position = 'fixed';
				newGrids.style.transition = 'all ease 1s';
				grid.append(newGrids)
				grids.push(newGrids)

		



		}
	}

	create();

	document.addEventListener('touchmove', event =>{


		let number = 370;
		let number2 = 100;
		let position = event.touches[0].clientX;
		let num1 = 0;

			console.log(position)

			if(position >= number){
				num1+=3;
				for(let t = 0; t<3; t++){
					grids[t].style.background = colors[num1%4];
			}

			}

			if(position < number2){
				num1++;
				for(let t = 0; t<3; t++){
					grids[t].style.background = colors[num1%4];
				}
			}

		


	})




})
