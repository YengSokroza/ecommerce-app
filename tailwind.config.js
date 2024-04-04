import {nextui} from '@nextui-org/theme'


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  theme: {
    extend: {
      colors: {
        'orange-100': '#ff8518',
        'yellow-100': '#fee253',
        'white-100': '#fffefe',
        'black-100': '#353534'
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
    nextui()
  ],
            
}
