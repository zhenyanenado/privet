var m1 = [
	document.getElementById('grid1'),
	document.getElementById('grid2'),
	document.getElementById('grid3'),
	document.getElementById('grid4'),
	document.getElementById('grid5'),
	document.getElementById('grid6')
];

var l = [

	document.getElementById('link4'),
	document.getElementById('link5'),
	document.getElementById('link6'),
	document.getElementById('link7'),
	document.getElementById('link8'),
	document.getElementById('link9'),
	document.getElementById('link10'),
	document.getElementById('link11'),
	document.getElementById('link12')

];

for(var i = 1; i<=3; i++){
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

var hello = new Promise(function(resolve, reject){
	m1[0].innerHTML = 'Hello';
	m1[0].style.opacity=1;
	resolve();
});

hello.then(function(){
	setTimeout(()=>{
		m1[5].style.width = '600px';
	}, 1000);
});


var hello = setTimeout(()=>{
	m1[1].style.opacity = 1;
	m1[2].style.opacity = 1;
	document.getElementById('grid4').style.opacity=1;
}, 700);

document.getElementById('log').onclick = function(){
	this.style.width = '200px';
	m1[0].style.opacity = 0;
}

document.getElementById('pass').onclick = function(){
	this.style.width = '200px';
	m1[0].style.opacity = 0;
}

document.getElementById('grid5').addEventListener('click', function(){
	this.style.width='400px';
})


for(var p = 0; p<=l.length; p++){

	let links = l[p];
		links.style.position = 'relative';
		links.style.marginTop = '10px';
		links.style.textDecoration = 'none';
		links.style.color = 'black';
		links.style.background = 'white';
		links.style.padding = '15px';
}

