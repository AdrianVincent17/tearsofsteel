document.addEventListener('DOMContentLoaded', function () {

    // 1. Identificar el Modal y el Video
    const videoModalElement = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('sinopsis-video');

    // Verificar que ambos elementos existen en el DOM
    if (videoModalElement && videoPlayer) {
        
        // 2. Usar los eventos nativos de Bootstrap
        
        // Evento que se dispara justo ANTES de que el modal se oculte
        videoModalElement.addEventListener('hide.bs.modal', function () {

            // Acción clave: Pausar y reiniciar el video
            videoPlayer.pause();
            videoPlayer.currentTime = 0; // vuelve al inicio
        });

        // Evento que se dispara DESPUÉS de que el modal se muestra
        videoModalElement.addEventListener('shown.bs.modal', function () {

            // Acción clave: Reproducir el video
            // Usamos .play()
            videoPlayer.play()
        });

        // El disparador del tráiler responda a la tecla Enter 
        var botonTrailer = document.querySelector('.clickable-sinopsis') || document.querySelector('.sinopsis-card'); // selecciona el botón del tráiler
        if (botonTrailer) { //si el botón existe,
            // asignar tabIndex directamente
            botonTrailer.tabIndex = 0; // hace el elemento enfocables con Tab
            botonTrailer.addEventListener('keydown', function(Evento) { // escucha keydown
                if (Evento.key === 'Enter') {  // solo Enter
                    Evento.preventDefault(); // previene el comportamiento por defecto
                    this.click(); // simula click para abrir modal
                }
            });
        }
    }
});