const button = document.querySelector('button.pronto');
const control = document.querySelector('div.control');
const bloco = document.querySelector('div.bloco');
const divbmola = document.querySelector('div.basemola');
const divmola = document.querySelector('div.mola');
button.onclick=function(){
	a = document.querySelector('input').value
	remove(control);
	criar(control,'output','','A velocidade constante é de: '+a+' metros/segundo');
	mola(a)
}
function criar(pai,filho,classe,conteudo){//pai ja tem que ser uma variavel, filho é apenas o que será.
    if(conteudo==undefined){conteudo=''}
    if(classe==undefined){classe=''}
    f=document.createElement(filho);
    f.setAttribute('class',classe);
    f.innerText=conteudo;
    pai.appendChild(f);
}
function remove(a){
	while	(a.children.length>0){
		a.removeChild(a.children[a.children.length-1]);
	}
}
function mola(a){
	divmola.style.left="-11px";
	divbmola.style.left="-11px";
	bloco.style.left='10px';
	x=[9,0];
	interval = setInterval(function(){
		if(x[0]-1>=0){
			if(x[0]==1){
				x[1]=9;
			}
			divmola.style.left=parseInt(divmola.style.left)-1+'px';
			divbmola.style.left=parseInt(divbmola.style.left)-1+'px';
			bloco.style.left=parseInt(bloco.style.left)-1+'px';
			x[0]=x[0]-1;
		}
		if(x[1]-1>=0){
			divmola.style.left=parseInt(divmola.style.left)+1+'px';
			divbmola.style.left=parseInt(divbmola.style.left)+1+'px';
			bloco.style.left=parseInt(bloco.style.left)+1+'px';
			x[1]=x[1]-1;
		}
		if((x[0]==0)&&(x[1]==0)){
			clearInterval(interval);
			rodar(a);
		}
	},75)
}
function rodar(a){
	a=a/60;
	bloco.style.left='10px'
	var z=10;
	t=(document.querySelector('img.base').width-20)/a/60;
	console.log(a,t)
	interval = setInterval(function(){
		if(z+parseFloat(a)>document.querySelector('img.base').width-20){
			console.log(z+a,z+parseInt(a)>document.querySelector('img.base').width-20)
			bloco.style.left=(document.querySelector('img.base').width-20)-z+'px';
			clearInterval(interval);
		}
		if((z+parseInt(a)<document.querySelector('img.base').width-20)){
			z+=parseFloat(a);
			bloco.style.left=z+'px';
		}
	},t);
}