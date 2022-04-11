import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="true"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" crossOrigin="true"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;600;700;800;900&display=swap" crossOrigin="true"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Calligraffitti&display=swap" crossOrigin="true"/>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-500x500.png" />
                <meta name='theme-color' content='#1a1a1a'/>

            </Head>
            <body>
                <Main />
                <NextScript />
                
                <Script src='../lib/cart.js' strategy='beforeInteractive'/>
                <script src="https://kit.fontawesome.com/af9ea1f796.js" crossorigin="anonymous"></script>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </body>
        </Html>
        )
    }
}

export default MyDocument