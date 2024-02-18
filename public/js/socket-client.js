//COMUNICACION DE LOS WEBS SOCKETS CON MI SERVIDOR


//REFERENCIAS HTML

const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io()


socket.on('connect', ( ) => {
    // console.log('Conectado')
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})


socket.on('disconnect', ( ) => {
    // console.log('Desconectado del servidor')
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})

btnEnviar.addEventListener('click', ( ) => {
    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: 'u12in12nbeey3uie2763',
        fecha: new Date().getTime()
    }
    // console.log(mensaje)
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id)
    })

})