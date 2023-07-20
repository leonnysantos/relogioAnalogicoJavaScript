const ponteiroH = document.getElementById('horas');
const ponteiroM = document.getElementById('minutos');
const ponteiroS = document.getElementById('segundos');

const relogio = setInterval(() => {
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    ponteiroS.style.transform = `translate(0, -50%) rotate(${sec * 6}deg)`;
    ponteiroM.style.transform = `translate(0, -50%) rotate(${min * 6}deg)`;
    ponteiroH.style.transform = `translate(0, -50%) rotate(${hr * 30}deg)`;
}, 1000);