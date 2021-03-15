import { io } from 'socket.io-client'
import { SOCKET_CON_STRING } from '../constants'

const socket = io(SOCKET_CON_STRING)

socket.on('message', text => {
    const el = document.createElement('li')
    el.innerHTML = text
    document.querySelector('ul').appendChild(el)

});

document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value
    socket.emit('message', text)

}
