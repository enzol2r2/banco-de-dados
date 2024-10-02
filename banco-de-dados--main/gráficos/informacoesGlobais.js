const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

//url='10.55.44.252/main/dados/graico-principal.json'
//modelo de endereço servidor de dados para javaScript.

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json;
}