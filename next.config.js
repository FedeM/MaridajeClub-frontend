const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com',"https://picsum.photos" , "https://i.pinimg.com", "https://previews.123rf.com","previews.123rf.com", ""],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true
  }
}); 
