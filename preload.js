//inserir data no rodape da pagina 
window.addEventListener('DOMContentLoaded',()=>{
    const dataAtual =document.getElementById('data').innerHTML=
    obterDataAtual()
})

function obterDataAtual(){
    const data = new Date()
    const options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    }
    return data.toLocaleDateString('pr-br',options)
}