/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      screens : {
        'sm': {'max' : '739px'},
        'md': {'min' : '740px' ,'max' : '1023px'},
        'lg': {'min' : '1023px'}
        // 'sm': {'max' : '739px'},
      }
    },
  },
  plugins: [],
}

