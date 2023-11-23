
const key = "d348eff4e1277e77656c926683a8cfb8"



function cityTime(){


    const input = document.getElementById("search").value

    passarValorParaAI(input)

    

}

async function passarValorParaAI(dados){
    const dadosAPI = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${dados}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    
    console.log(dadosAPI)
        atualizarDadosNaTela(dadosAPI)

}

function atualizarDadosNaTela(atualizar){
    document.querySelector(".city").innerHTML = "Tempo em " + atualizar.name
    document.querySelector(".graus").innerHTML = Math.floor(atualizar.main.temp_max) + "ºC"
    document.querySelector(".weather-situation").innerHTML = atualizar.weather[0].description
    document.querySelector(".porcentagem").innerHTML = `Umidade: `+ atualizar.main.humidity + "%"
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/${atualizar.weather[0].icon}.png`



}











