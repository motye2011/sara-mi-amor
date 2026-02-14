// ELEMENTOS PRINCIPALES
const abrirBtn = document.getElementById("abrirBtn");
const inicio = document.getElementById("inicio");
const pregunta = document.getElementById("pregunta");
const intermedio1 = document.getElementById("intermedio1");
const intermedio2 = document.getElementById("intermedio2");
const intermedio3 = document.getElementById("intermedio3");
const final = document.getElementById("final");
const musicaFondo = document.getElementById("musicaFondo");
const musicaSi = document.getElementById("musicaSi");

// INICIO
abrirBtn.addEventListener("click", () => {
    inicio.classList.add("hidden");
    pregunta.classList.remove("hidden");

    musicaFondo.currentTime = 19;
    musicaFondo.play();
});

// FUNCION ACEPTAR
function aceptar() {
    pregunta.classList.add("hidden");
    intermedio1.classList.add("hidden");
    intermedio2.classList.add("hidden");
    intermedio3.classList.add("hidden");
    final.classList.remove("hidden");

    musicaFondo.pause();
    musicaFondo.currentTime = 0;

    musicaSi.currentTime = 0;
    musicaSi.play();
}

// Activar todos los botones Sí
document.querySelectorAll(".si").forEach(btn => {
    btn.addEventListener("click", aceptar);
});

// FLUJO NO
document.getElementById("btnNo").addEventListener("click", () => {
    pregunta.classList.add("hidden");
    intermedio1.classList.remove("hidden");
});

document.getElementById("btnNo2").addEventListener("click", () => {
    intermedio1.classList.add("hidden");
    intermedio2.classList.remove("hidden");
});

document.getElementById("btnNo3").addEventListener("click", () => {
    intermedio2.classList.add("hidden");
    intermedio3.classList.remove("hidden");
});

// BOTON QUE HUYE
let intentos = 0;
const btnNo4 = document.getElementById("btnNo4");

btnNo4.addEventListener("mouseover", () => {
    intentos++;
    if (intentos >= 6) {
        btnNo4.style.display = "none";
        return;
    }

    let x = Math.random() * 200 - 100; // limitado al contenedor
    let y = Math.random() * 100 - 50;
    btnNo4.style.transform = `translate(${x}px, ${y}px)`;
});

// FLUJO DE TARJETAS EXTRA
const continuarBtn = document.getElementById("continuarBtn");
const regalos = document.getElementById("regalos");
const tarjetas = regalos.querySelectorAll(".tarjeta");

continuarBtn.addEventListener("click", () => {
    final.classList.add("hidden");
    regalos.classList.remove("hidden");
    tarjetas[0].classList.remove("hidden");
});

// Botones "Siguiente"
regalos.querySelectorAll(".siguiente").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        tarjetas[index].classList.add("hidden");
        tarjetas[index + 1].classList.remove("hidden");
    });
});

// Botón Finalizar
document.getElementById("finalizarBtn").addEventListener("click", () => {
    window.location.href = "galaxia.html";
});