// Datos formulario
const nombrePer = document.getElementById("nombre")
const apellidoPer = document.getElementById("apellido")
const cedulaPer = document.getElementById("cedula")
const edadPer = document.getElementById("edad")
const telefonoPer = document.getElementById("telefono")
const especialidadPer = document.getElementById("especialidad")
const formularioRegistro = document.getElementById("registro-personas-form")
// Creacion del objeto
formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    const persona = {
        nombrePer: nombrePer.value,
        apellidoPer: apellidoPer.value,
        cedulaPer: cedulaPer.value,
        edadPer: edadPer.value,
        telefonoPer: telefonoPer.value,
        especialidadPer: especialidadPer.value
    }
    // Creacion del Json
    let personas = []
    let  localPersonas = localStorage.getItem("personas")
    if (localPersonas){
        personas = JSON.parse(localPersonas)
    }
    personas.push(persona)
    localStorage.setItem("personas", JSON.stringify(personas))
    formularioRegistro.reset()
    alert("Persona registrada exitosamente !!!")
})