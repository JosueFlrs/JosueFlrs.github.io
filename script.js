const audio = document.getElementById("cancion");
const boton = document.getElementById("playPauseBtn");
const icono = boton.querySelector("img");

boton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        icono.src = "/assets/images/icons8-pause-50.png";
    } else {
        audio.pause();
        icono.src = "/assets/images/icons8-heart-64.png";
    }
});

function iniciarCuentaRegresiva() {
    const destino = new Date("2025-11-23T10:00:00").getTime();

    setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = destino - ahora;

        if (diferencia <= 0) return;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = String(dias).padStart(2, '0');
        document.getElementById("horas").textContent = String(horas).padStart(2, '0');
        document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
        document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
    }, 1000);
}

iniciarCuentaRegresiva();

