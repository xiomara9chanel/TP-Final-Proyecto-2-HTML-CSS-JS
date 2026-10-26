

// 1. FUNCIÓN AUXILIAR PARA REDIRECCIONES SIMPLES
function configurarBoton(idBoton, urlDestino) {
    const boton = document.getElementById(idBoton);
    if (boton !== null) {
        boton.addEventListener("click", function() {
            window.location.href = urlDestino;
        });
    }
}

// Usamos la función de arriba para todos los botones que solo cambian de página:
configurarBoton("crear", "registrar.html");
configurarBoton("perfil", "perfil.html");
configurarBoton("volver", "index.html");

// 3. VALIDACIÓN DE LOGIN ("siguiente")
const botonSiguiente = document.getElementById("siguiente");
if (botonSiguiente !== null) {
    botonSiguiente.addEventListener("click", function() {
        const correo = document.getElementById("correo").value.trim();
        const contra = document.getElementById("contra").value;

        if (correo === "" || contra === "") {
            alert("Debe completar todos los campos");
        } else {
           // Traemos los usuarios guardados en la memoria del navegador
            let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            // Buscamos si coincide el correo y la contraseña
            const usuarioValido = listaUsuarios.find(function(u) {
                return u.email === correo && u.contra === contra;
            });

            if (usuarioValido) {
                // Guardamos qué usuario inició sesión (te servirá para el perfil)
                localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioValido));

                alert("¡Inicio de sesión exitoso!");
                window.location.href = 'index.html';
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        }
    });
}
    

// 4. VALIDACIÓN DE REGISTRO ("ccrear")
const crearCuenta2 = document.getElementById("ccrear");
if (crearCuenta2 !== null) {
    crearCuenta2.addEventListener("click", function() {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const peso = document.getElementById("peso").value.trim();
        const nacimiento = document.getElementById("nacimiento").value.trim();
        const email = document.getElementById("email").value.trim();
        const contraa = document.getElementById("contraa").value.trim();

        if (nombre === "" || apellido === "" || edad === "" || peso === "" || nacimiento === "" || email === "" || contraa === "") {
            alert("Debe completar todos los campos");
        } else {
            window.location.href = 'index.html';
        }
    });
}