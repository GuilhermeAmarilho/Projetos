const Storage = {
  salva: function (chave, objeto) {
    localStorage[chave] = JSON.stringify(objeto);
  },
  carrega: function () {
    d=[];
    for (i=0,b = "",c = [];localStorage.key(i)!=null;i++) {
      b=localStorage.key(i);
      c=JSON.parse(localStorage[b])
      d[i]=[b,c];
    }
    return d;
  },
};

const tb = document.querySelector('tbody');
const table = document.querySelector('table')
function tabela(a){
  a=Storage.carrega();
  for (i=0;a.length > i ; i++){
      b=a[i][0];
      c=a[i][1].length;
    tr=document.createElement('tr');
    td=document.createElement('td');
    td.innerText=b;
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerText=c;
    tr.appendChild(td);
    tb.appendChild(tr);
  }
}
tabela();
table.addEventListener('click',function(target){

})
