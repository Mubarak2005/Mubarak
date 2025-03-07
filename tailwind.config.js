/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Brigendsexpanded: ['Brigendsexpanded', 'sans-serif'],
        Azonix: ['Azonix', 'sans-serif'],
        Hanson: ['Hanson', 'sans-serif'],
        Abuget: ['Abuget', 'sans-serif'], // Add your custom font
      },
    },
  plugins: [],
}
}

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         procerus: ['Procerus', 'sans-serif'], // Add your custom font
//       },
//     },
//   },
//   plugins: [],
// };