module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      gridTemplateRows:{
        'layout':'auto 1fr auto',
      }
    },
  },

  plugins: [ require('@tailwindcss/typography'),],
};
