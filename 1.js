document.addEventListener('DOMContentLoaded', ()=>{

	let grids = [];
	let number = 1;

	function createBorder(){
	
			for(let i=1; i<=16; i++){

				let all = document.createElement('div');
					all.id = 'grid' + i;
					grids.push(all);
					all.innerHTML = 0;
					all.style.borderRadius = '5%';
					all.style.border = '3px solid black';

					document.getElementById('grid').append(all);					

			}

}

createBorder();
gen();


console.log(grids)


function gen(){

	document.getElementById('grid').addEventListener('touchmove', function(){


	let num = Math.floor(Math.random(number)*16);
		
		if(grids[num].innerHTML == 0){
			grids[num].innerHTML = 2;

			if(grids[num].innerHTML == 2){
				grids[num].style.background = 'orange';
			}

				grids.reverse();
				console.log(grids)
			}

		})

}



})

 