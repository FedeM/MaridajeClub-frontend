import {isAuthenticate} from './auth'
import cryptoRandomString from 'crypto-random-string';

let id = cryptoRandomString({length: 10, type: 'alphanumeric'});

//Utilizar los valores provenientes de la bd
export const user = {
    id: id,
    name: isAuthenticate() ? (isAuthenticate().name):(`user${id}`),
    email: isAuthenticate().email,
    photo:isAuthenticate().photo ? (isAuthenticate().photo):("/assets/img/profile/user.png"),
    phone: 2634786580,
    role: 1,
    cart:[
        {
            _id: 1,
            img: '/assets/img/products/wine1.jpg',
            name: 'Vino Malbec',
            price: 98.50,
            quantity: 1,
        },
        {
            _id: 2,
            img: '/assets/img/products/wine2.jpg',
            name: 'Vino Chandon',
            price: 105.75,
            quantity: 1,
        },
        {
            _id: 3,
            img: '/assets/img/products/wine3.jpg',
            name: 'Champagne',
            price: 100.50,
            quantity: 1,
        },
        {
            _id: 4,
            img: '/assets/img/products/wine4.jpg',
            name: 'Vino Sidra',
            price: 98.50,
            quantity: 1,
        },
    ],
    history:[
        {
            _id: 1,
            img: '/assets/img/products/wine1.jpg',
            name: 'Vino Malbec',
            price: 98.50,
            quantity: 1,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error."
        },
        {
            _id: 2,
            img: '/assets/img/products/wine2.jpg',
            name: 'Vino Chandon',
            price: 105.75,
            quantity: 1,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error."
        },
        {
            _id: 3,
            img: '/assets/img/products/wine3.jpg',
            name: 'Champagne',
            price: 100.50,
            quantity: 1,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error."
        },
        {
            _id: 4,
            img: '/assets/img/products/wine4.jpg',
            name: 'Vino Sidra',
            price: 98.50,
            quantity: 1,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error."
        },
    ]

}