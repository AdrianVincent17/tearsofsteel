// Tab para enfocar, Enter para abrir
document.addEventListener('DOMContentLoaded', function () { // espera a que el DOM esté cargado

    const fotogaleria = document.querySelectorAll('.fotogaleria');  //selecciona todos los elementos con la clase fotogaleria

    for (let i = 0; i < fotogaleria.length; i++) {  //recoree el array de elementos con la clase fotogaleria
        const elemento = fotogaleria[i];    //selecciona cada elemento individualmente

        elemento.tabIndex = 0; // hace el elemento enfocables con Tab
            elemento.addEventListener('keydown', function (event) { // escucha el evento keydown
            if (event.key === 'Enter') { // solo Enter
                event.preventDefault(); // previene el comportamiento por defecto
                this.click(); // simula click para abrir modal
            }
        });
    }
});
