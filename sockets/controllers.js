

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', () => {
        console.log('Cliente OFF', socket.id)
    })

    socket.on('enviar-mensaje', ( payload, callback ) => {
        // console.log(payload)
        const id =  123456789
        callback(id)
        socket.broadcast.emit('enviar-mensaje', payload)

    })
}

export {socketController}