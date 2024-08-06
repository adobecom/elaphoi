import glob from 'glob';
import postcss from 'rollup-plugin-postcss';

export default glob.sync('styles/*.css')
  .map((file) => ({
    input: file,
    plugins: [
      postcss({
        extract: true,
        sourceMap: false,
        minimize: true,
        plugins: [],
      })],
    output: {
      file: `dist/${file.split('/')[1]}`,
    },
  }));
