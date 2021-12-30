const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  presets: [
    require('./tailwind-plugins/castle-ui-tailwindcss/castle-ui-base'),
    require('./tailwind-plugins/castle-ui-tailwindcss/castle-ui-blue-theme'),
    require('./tailwind-plugins/castle-ui-tailwindcss/castle-ui-gc-theme'),
  ],
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,ts,css,scss,sass,less,styl}',
      './libs/**/*.{html,ts,css,scss,sass,less,styl}',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      backgoundColor: {
        skin: {},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  plugins: [require('./tailwind-plugins/castle-ui-tailwindcss/src')],
};
