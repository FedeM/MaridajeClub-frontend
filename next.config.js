const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'd1csarkz8obe9u.cloudfront.net',
      'lh3.googleusercontent.com', 
      'platform-lookaside.fbsbx.com',
      "https://picsum.photos" , 
      "https://i.pinimg.com", 
      "https://previews.123rf.com",
      "previews.123rf.com", 
      "i.pinimg.com",
      "www.espaciovino.com.ar",
      "cepadevinos.com",
      "borderio.store",
      "cdn.shopify.com",
      "d3ugyf2ht6aenh.cloudfront.net",
      "http2.mlstatic.com",
      "www.avenuedesvins.fr",
      "www.terrumvinoteca.com",
      "images.shopdutyfree.com"
    ],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true
  }
}); 
