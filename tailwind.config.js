/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
          ],
        },
        colors: {
          primary: "#2563EB", // You can change to match your brand
          secondary: "#1E293B",
          accent: "#F59E0B",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          display: ["Poppins", "sans-serif"], // You can use other fonts too
        },
        boxShadow: {
          card: "0 4px 14px 0 rgba(0, 0, 0, 0.25)",
        },
        backgroundImage: {
          'hero-gradient': 'linear-gradient(to bottom right, #0f172a, #1e293b)',
        },
      },
    },
    darkMode: 'class', // Optional but recommended for modern design
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
      ],      
  }
  