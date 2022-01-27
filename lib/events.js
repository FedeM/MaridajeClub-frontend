import cryptoRandomString from 'crypto-random-string';


export const events = [
    {
        id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
        shop_id: 0,
        name: "Presentación Bodega Tittarelli 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
        banner: "/assets/img/2.jpg",
        date_from: new Date(2022, 0, 29, 16, 30, 0),
        date_to: new Date(2022, 0, 29, 16, 30, 0),
        video_url: "/assets/video/videoWine.mp4",
        is_live: false
    },
    {
        id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
        shop_id: 0,
        name: "Presentación Bodega Tittarelli",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
        banner: "/assets/img/2.jpg",
        date_from: new Date(2022, 0, 28, 16, 30, 0),
        date_to: new Date(2022, 0, 28, 16, 30, 0),
        video_url: "/assets/video/videoWine.mp4",
        is_live: false
    },
    // {
    //     id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
    //     shop_id: 0,
    //     name: "Presentación Bodega Tittarelli2",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
    //     banner: "/assets/img/2.jpg",
    //     date_from: new Date(2022, 0, 31, 16, 30, 0),
    //     date_to: new Date(2022, 0, 31, 16, 30, 0),
    //     video_url: "/assets/video/videoWine.mp4",
    //     is_live: false
    // },
    // {
    //     id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
    //     shop_id: 0,
    //     name: "Presentación Bodega Los Haroldos",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
    //     banner: "/assets/img/2.jpg",
    //     date_from: new Date(),
    //     date_to: new Date(),
    //     video_url: "/assets/video/videoWine.mp4",
    //     is_live: true
    // },
    // {
    //     id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
    //     shop_id: 0,
    //     name: "Presentación Bodega Garzón",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
    //     banner: "/assets/img/1.jpg",
    //     date_from: new Date(2021, 11, 28, 18, 30, 0),
    //     date_to: new Date(2021, 11, 28, 18, 30, 0),
    //     video_url: "/assets/video/videoWine.mp4",
    //     is_live: false
    // },
    // {
    //     id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
    //     shop_id: 0,
    //     name: "Presentación Bodega Super Úco",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
    //     banner: "/assets/img/2.jpg",
    //     date_from: new Date(2021, 11, 20, 17, 0, 0),
    //     date_to: new Date(2021, 11, 20, 17, 0, 0),
    //     video_url: "/assets/video/videoWine.mp4",
    //     is_live: false
    // },
    // {
    //     id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
    //     shop_id: 0,
    //     name: "Presentación Bodega Zuccardi",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
    //     banner: "/assets/img/1.jpg",
    //     date_from: new Date(2021, 11, 17, 16, 30, 0),
    //     date_to: new Date(2021, 11, 17, 16, 30, 0),
    //     video_url: "/assets/video/videoWine.mp4",
    //     is_live: false
    // },
    // {
    //     id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
    //     shop_id: 0,
    //     name: "Presentación Bodega Marqués de Riscal",
    //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
    //     banner: "/assets/img/2.jpg",
    //     date_from: new Date(2021, 11, 10, 16, 0, 0),
    //     date_to: new Date(2021, 11, 10, 16, 0, 0),
    //     video_url: "/assets/video/videoWine.mp4",
    //     is_live: false
    // },
]