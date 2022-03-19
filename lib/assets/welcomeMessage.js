export const welcomeMessage = (isAuthenticate, user)=>{
    return !isAuthenticate() ?([{
        photo: "/assets/img/profile/robot.png",
        user: "Pepe",
        msg: "Hola! Bienvenid@ al chat de Maridaje Club, me llamo Pepe y soy uno de los administradores.",
        role: 1
    },{
        photo: "/assets/img/profile/robot.png",
        user: "Pepe",
        msg: `Por lo visto no has iniciado sesión, asique se te asignará un nombre de usuario único para que puedas comentar! Si deseas utilizar tu nombre inicia sesión!`,
        role: 1
    }]):(
        [{
            photo: "/assets/img/profile/robot.png",
            user: "Pepe",
            msg: `Hola ${user.name}! Bienvenido nuevamente al chat de Maridaje Club. Comenta algo!`,
            role: 1
        }]
    )
}