import {isAuthenticate} from './auth'
import cryptoRandomString from 'crypto-random-string';

let id = cryptoRandomString({length: 10, type: 'alphanumeric'});

//Utilizar los valores provenientes de la bd
export const user = {
    id: id,
    name: isAuthenticate() ? (isAuthenticate().username):(`user${id}`),
    email: isAuthenticate().email,
    photo:isAuthenticate().photo ? (isAuthenticate().photo):("/assets/img/profile/user.png"),
    phone: 2634786580,
    role: 0,
    cart:[
        
    ],
    history:[

    ]

}