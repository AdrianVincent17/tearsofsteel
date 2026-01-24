
    const audio = document.getElementById('miAudio');
    const boton = document.getElementById('botonReproducir');
    let estaReproduciendo = false;

    // Función que maneja el clic en el botón
    boton.addEventListener('click', function() {
        if (estaReproduciendo) {

        // PAUSAR
        audio.pause();
    estaReproduciendo = false;
    boton.innerHTML = `<i class="bi bi-volume-up"></i>`;

    // 2. Detiene la animación removiendo la clase
    boton.classList.remove('reproduciendo');
        } else {
        // REPRODUCIR
        audio.play();
    estaReproduciendo = true;
    boton.innerHTML =` <i class="bi bi-volume-mute"></i>`;

    // 1. Inicia la animación añadiendo la clase
    boton.classList.add('reproduciendo');
        }
    });

    // 3. Restablecer el botón si el audio termina
    audio.addEventListener('ended', function() {
        estaReproduciendo = false;
    boton.innerHTML = `<i class="bi bi-volume-up"></i>`;
    boton.classList.remove('reproduciendo');
    });

    // Asegurarse de que el botón se vea como 'Reproducir' al cargar la página
    document.addEventListener('DOMContentLoaded', () => {
        boton.innerHTML = `<i class="bi bi-volume-up"></i>`;
    });
