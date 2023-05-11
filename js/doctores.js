function mostrarDoctores() {
    let doctores = []
    let localDoctores = localStorage.getItem("doctores")
    if(localDoctores){
        doctores = JSON.parse(localDoctores)
    }
    const tablaDoctores = document.getElementById("tabla-doctores")
    const cuerpoTabla = tablaDoctores.getElementsByTagName("tbody")[0]
    doctores.forEach(doctor => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombreDoctor = fila.insertCell()
        let celdaApellidoDoctor = fila.insertCell()
        let celdaNumeroCedulaDoctor = fila.insertCell()
        let celdaEspecialidadDoctor = fila.insertCell()
        let celdaConsultorioDoctor = fila.insertCell()
        let celdaCorreoContacto = fila.insertCell()

        celdaNombreDoctor.textContent = doctor.nombreDoc
        celdaApellidoDoctor.textContent = doctor.apellidoDoc
        celdaNumeroCedulaDoctor.textContent = doctor.cedulaDoc
        celdaEspecialidadDoctor.textContent = doctor.especialidadDoc
        celdaConsultorioDoctor.textContent = doctor.consultorioDoc
        celdaCorreoContacto.textContent = doctor.correoDoc
    });
}
mostrarDoctores()