import postcss from 'rollup-plugin-postcss';

export default {
  input: 'styles/styles.css',
  plugins: [
    postcss({
      extract: true,
      sourceMap: false,
      minimize: true,
      plugins: [],
    }),
  ],
  output: {
    file: 'dist/style.css',
  },
};
