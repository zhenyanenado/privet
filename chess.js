var m1 = [
	document.getElementById('grid1'),
	document.getElementById('grid2'),
	document.getElementById('grid3'),
	document.getElementById('grid4'),
	document.getElementById('grid5'),
];

for(var i = 1; i<=3; i++){
	document.getElementById('l'+i).onmouseover = function(){
		this.style.width = '200px';
	}
	document.getElementById('l'+i).onmouseout = function(){
		this.style.width = '300px';

	}
}
	var number = 1;
	var intSize = setInterval(function(){
		document.getElementById('l'+number).style.width='300px';

		if(number<=4){
			number++;
		}

		if(number==4){
			clearInterval(intSize);
		}

	}, 500)

var hello = setTimeout(()=>{
	m1[0].innerHTML = 'Hello';
	m1[0].style.opacity=1;
}, 800);

var hello = setTimeout(()=>{
	m1[0].style.opacity=0;
}, 3500)

var hello = setTimeout(()=>{
	m1[1].style.opacity = 1;
	m1[2].style.opacity = 1;
	document.getElementById('grid4').style.opacity=1;
}, 1000);

document.getElementById('log').onclick = function(){
	this.style.width = '300px';
	m1[0].style.opacity = 0;
}

document.getElementById('pass').onclick = function(){
	this.style.width = '300px';
	m1[0].style.opacity = 0;
}

document.getElementById('grid5').addEventListener('click', function(){
	this.style.width='400px';
})