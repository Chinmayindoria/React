/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 20s ease-in-out infinite",
        
        
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            
          },
          "20%": {
            backgroundImage: `url(https://images.ctfassets.net/yfedqi1sean6/6DZQ3B4SnDs2SZNgwP0DVC/d68df3f184e3188b1ebbab34b7e73a4e/People_standing_on_a_mountain.jpg)`
          },
          "50%": {
            backgroundImage: `url(https://blogassets.airtel.in/wp-content/uploads/2023/05/felix-rostig-UmV2wr-Vbq8-unsplash.jpg)`
          },
          "70%": {
            backgroundImage: `url(https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/1540801500_box1_20200205140033.jpg)`
          },
          "90%": {
            backgroundImage: `url(https://i0.wp.com/www.psychreg.org/wp-content/uploads/2018/05/three-people-travelling.jpg?fit=626%2C417&ssl=1)`
          },


        },
  
        
      },
    }
      },
  plugins: [],
}