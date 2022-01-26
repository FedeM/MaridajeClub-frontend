import cryptoRandomString from 'crypto-random-string';


export const events = [
    {
        id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
        shop_id: 0,
        name: "Presentación Bodega Los Haroldos",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
        banner: "/assets/img/2.jpg",
        date_from: "26-01-2022",
        date_to: "26-01-2022",
        hour: "16:15",
        video_url: "/assets/video/videoWine.mp4",
        is_live: true
    },
    {
        id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
        shop_id: 0,
        name: "Presentación Bodega Garzón",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
        banner: "/assets/img/1.jpg",
        date_from: "19-02-2022",
        date_to: "19-02-2022",
        hour: "18:15",
        video_url: "/assets/video/videoWine.mp4",
        is_live: false
    },
    {
        id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
        shop_id: 0,
        name: "Presentación Bodega Super Úco",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
        banner: "/assets/img/2.jpg",
        date_from: "20-02-2022",
        date_to: "20-02-2022",
        hour: "15:00",
        video_url: "/assets/video/videoWine.mp4",
        is_live: false
    },
    {
        id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
        shop_id: 0,
        name: "Presentación Bodega Zuccardi",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
        banner: "/assets/img/1.jpg",
        date_from: "25-02-2022",
        date_to: "25-02-2022",
        hour: "17:15",
        video_url: "/assets/video/videoWine.mp4",
        is_live: false
    },
    {
        id: cryptoRandomString({length: 10, type: 'alphanumeric'}),
        shop_id: 0,
        name: "Presentación Bodega Marqués de Riscal",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea velit ad commodi reprehenderit iusto, quam pariatur at, aut non beatae aliquid, praesentium deleniti! Sit, cupiditate aspernatur. Deserunt unde nemo magni.",
        banner: "/assets/img/2.jpg",
        date_from: "01-03-2022",
        date_to: "01-03-2022",
        hour: "18:00",
        video_url: "/assets/video/videoWine.mp4",
        is_live: false
    },
]