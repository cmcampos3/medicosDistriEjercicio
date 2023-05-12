function mostrarPersonas() {
    let personas = []
    let localPersonas = localStorage.getItem("personas")
    if(localPersonas){
        personas = JSON.parse(localPersonas)
    }
    const tablaPersonas = document.getElementById("tabla-personas")
    const cuerpoTabla = tablaPersonas.getElementsByTagName("tbody")[0]
    personas.forEach(persona => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombrePersona = fila.insertCell()
        let celdaApellidoPersona = fila.insertCell()
        let celdaNumeroCedulaPersona = fila.insertCell()
        let celdaEdadPersona = fila.insertCell()
        let celdaTelefonoPersona = fila.insertCell()
        let celdaEspecialidadPersona = fila.insertCell()

        celdaNombrePersona.textContent = persona.nombrePer
        celdaApellidoPersona.textContent = persona.apellidoPer
        celdaNumeroCedulaPersona.textContent = persona.cedulaPer
        celdaEdadPersona.textContent = persona.edadPer
        celdaTelefonoPersona.textContent = persona.telefonoPer
        celdaEspecialidadPersona.textContent = persona.especialidadPer
    });
}
mostrarPersonas()