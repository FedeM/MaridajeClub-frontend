import Document, { Html, Head, Main, NextScript } from 'next/document'

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
                <link rel="stylesheet" href="css/animate.css"></link>

                <link href="https://fonts.googleapis.com/css2?family=Calligraffitti&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
                <script>
                new WOW().init();
                </script>
            </body>
        </Html>
        )
    }
}

export default MyDocument