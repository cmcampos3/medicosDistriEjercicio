// Datos formulario
const nombreDoc = document.getElementById("nombre")
const apellidoDoc = document.getElementById("apellido")
const cedulaDoc = document.getElementById("cedula")
const especialidadDoc = document.getElementById("especialidad")
const consultorioDoc = document.getElementById("consultorio")
const correoDoc = document.getElementById("correo")
const formularioRegistro = document.getElementById("registro-medicos-form")
// Creacion del objeto
formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    const doctor = {
        nombreDoc: nombreDoc.value,
        apellidoDoc: apellidoDoc.value,
        cedulaDoc: cedulaDoc.value,
        especialidadDoc: especialidadDoc.value,
        consultorioDoc: consultorioDoc.value,
        correoDoc: correoDoc.value,
    }
    // Creacion del Json
    let doctores = []
    let  localDoctores = localStorage.getItem("doctores")
    if (localDoctores){
        doctores = JSON.parse(localDoctores)
    }
    doctores.push(doctor)
    localStorage.setItem("doctores", JSON.stringify(doctores))
    formularioRegistro.reset()
    alert("Doctor registrado exitosamente !!!")
})