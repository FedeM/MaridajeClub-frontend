const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['d1csarkz8obe9u.cloudfront.net','lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com',"https://picsum.photos" , "https://i.pinimg.com", "https://previews.123rf.com","previews.123rf.com", "i.pinimg.com",""],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true
  }
}); 
