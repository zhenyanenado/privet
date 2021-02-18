var m1 = [
	document.getElementById('grid1'),
	document.getElementById('grid2'),
	document.getElementById('grid3'),
	document.getElementById('grid4'),
	document.getElementById('grid5'),
]

var hello = ()=>{
	m1[0].innerHTML = 'Hello';
	m1[0].style.opacity=1;
}

var fon = new Promise(function(resolve, reject){
	document.body.style.background = 'white';
	resolve();

}).then(hello)

var hello = setTimeout(()=>{
	m1[1].style.opacity = 1;
	m1[2].style.opacity = 1;
}, 1500);

document.getElementById('log').onclick = function(){
	this.style.width = '300px';
	m1[0].style.opacity = 0;
}

document.getElementById('pass').onclick = function(){
	this.style.width = '300px';
	m1[0].style.opacity = 0;
}

