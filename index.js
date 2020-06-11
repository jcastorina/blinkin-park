const shell = require('shelljs')
const ioHook = require('iohook')

ioHook.on('keypress', e => {
    let f = (e.keychar - 96) * 2
    let led = "led"
    let nled = "-led"
    for(let i = 0; i < f; i++){
        setTimeout(()=>{
            shell.exec(`xset ${i%2===0?led:nled} named "Num Lock"`)
        },0+(i*200))
    }
})

ioHook.start()