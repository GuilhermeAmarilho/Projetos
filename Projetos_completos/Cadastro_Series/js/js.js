var div1= document.getElementById('ta');
var botao= document.getElementById('temp');
const div= document.getElementById('sla');
const form= document.querySelector('form');
botao.addEventListener('click',function(){
  numtemp(parseInt(document.getElementById('qt').value));
  form.removeChild(form.childNodes[5]);
  aparecer(bt);
});
function numtemp(a) {
  for (var i = 0; i < a; i++) {
    b=i+1;
    c=document.createElement('br');
    div.appendChild(c);
    c=document.createElement('label');
    c.innerText=(b) + 'ª Temporada';
    div.appendChild(c);
    c=document.createElement('input');
    c.setAttribute("class","nserie form-control");
    c.setAttribute("placeholder", "Quantos episódios tem essa temporada?")
    div.appendChild(c);
  }
}
const bt=document.getElementById('formulario');
bt.addEventListener('click',function(){
  b=document.getElementById('nome').value;
  c=[];
  for (i = 0; i < document.getElementsByClassName('nserie').length; i++) {
    c.push(document.getElementsByClassName('nserie')[i].value);
  }
  Storage.salva(b,c);
  window.location.reload();
})
function aparecer(a){
  a.className= "btn btn-danger ta1";
}
