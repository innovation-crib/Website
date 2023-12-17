import * as colors from 'tailwindcss/colors';
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.rose,
        tertiary: colors.amber,
        'on-primary': colors.blue,
        'on-secondary': colors.zinc,
        'on-tertiary': colors.orange,
        background: colors.white,
        'background-dark': colors.gray,
        'on-background': colors.black,
        'background-light': colors.white,
      },
    },
  },
  plugins: [],
};
