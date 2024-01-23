// module.exports = {
//     plugins: [
//         require('tailwindcss'),
//         require('autoprefixer'),
//     ]
// }

// module.exports = {
//   plugins: [
//     require("tailwindcss")("./tailwind.config.js"),
//     require("autoprefixer"),
//   ],
// }

// oficial documentation
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }

// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}
