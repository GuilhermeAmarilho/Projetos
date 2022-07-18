const meuNome = document.querySelector('.span__nome');
const fName = meuNome.innerHTML;
const type = document.querySelector('p.type');
function criaNome (nome) {
    setTimeout( () => {
        const meuNomeF = "Amarilho".split('');
        meuNomeF.forEach( (letra, index) => {
            setTimeout(function (){
                meuNome.innerHTML += letra;
            }, 100 * index) // Tempo por letra
        })
    }, 3500); // Tempo para começar   
    // 100 * (index+1) + 1500 = 2400 = tempo fim apaga nome
}
function apagaNome(nome) {
    setTimeout( () => {
        const meuNomeF = nome.split('');
        var nomeParaRemover = nome;
        meuNomeF.forEach( (letra, index) => {
            setTimeout(function (){
                nomeParaRemover = nomeParaRemover.substring(0, nome.length - (index+1));
                meuNome.innerHTML = nomeParaRemover;
            }, 100 * index)
        })
    }, 1000);
    criaNome(nome);
}