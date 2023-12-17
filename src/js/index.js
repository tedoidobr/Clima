const chaveDaApi = "9c2bec020fc946b7ab7220030231612";
const botaoDeBusca = document.querySelector(".btn-de-busca");
//console.log(botaoDeBusca)

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;
    //console.log(cidade);
    if (!cidade) return;
    const dados = await buscarDadosDaCidade(cidade);
    //console.log(dados);
    if (dados) preencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;
    //console.log(apiUrl);

    const resposta = await fetch(apiUrl);
    if (resposta.status !== 200) return;
    const dados = resposta.json();
    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    //console.log(temperatura);
    const condicao = dados.current.condition.text;
    //console.log(condicao);
    const humidade = dados.current.humidity;
    //console.log(humidade);
    const velocidadeDoVento = dados.current.wind_kph;
    //console.log(velocidadeDoVento);
    const iconeConcicao = dados.current.condition.icon;
    //console.log(iconeConcicao);

    document.getElementById("cidade").textContent = cidade;
    document.getElementById("temperatura").textContent = `${temperatura} °C`;
    document.getElementById("condicao").textContent = condicao;
    document.getElementById("humidade").textContent = `${humidade}%`;
    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`
    document.getElementById("icone-condicao").setAttribute("src", iconeConcicao);
}