const control = document.querySelector('div.control');
const bloco = document.querySelector('div.bloco');
const button = document.querySelector('button.pronto')
button.onclick=function(){
	if((document.querySelectorAll('input')[0].value!="")&&(document.querySelectorAll('input')[1].value!="")){
		a = document.querySelectorAll('input')[0].value;t=document.querySelectorAll('input')[1].value;
		remove(control);
		criar(control,'p','','A velocidade no instante de impacto é de: '+a/t+' metros/segundo');//
		criar(control,'p','alt','1 metro = '+415/a+' pixeis');
		control.style.height='90px'
		pulo(a,t)
	}
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
function pulo(a,t){
	x=60;
	a=80;
	interval = setInterval(function(){
		if(x>0){
			a+=0.3333333333333333;bloco.style.left=a+'px';
			x--;
		}
		else{
			clearInterval(interval);
			queda(a,t);
		}
	},33.333333333333336);
}
function queda(a,t){
	v=(a/t)/60;
	t=t/60;
	a1=a;
	a=100;
	bloco.style.top='100px';
	bloco.style.left='100px';
	z=100;
	x=0;
	interval = setInterval(function(){
		if(parseInt(bloco.style.top)+v<515){	
			a+=v;bloco.style.top=a+'px';
			x++;
		}
		if((parseInt(bloco.style.left)+v)>=515||(parseInt(a)+v+1)>=515){
			bloco.style.top='515px';		
			clearInterval(interval);
		}
	},t);
}