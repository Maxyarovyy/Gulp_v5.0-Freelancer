import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: [
      `${srcFolder}/scss/style.scss`,
      `${srcFolder}/scss/normalize/normalize.css`,
    ],
    js: `${srcFolder}/js/app.js`,
    images: [
      `${srcFolder}/img/**/*.jpg`,
      `${srcFolder}/img/**/*.png`,
      `${srcFolder}/img/**/*.svg`,
      `${srcFolder}/img/**/*.webp`,
    ],
    svg: `${srcFolder}/img/**/*.svg`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: [
      `${srcFolder}/img/**/*.jpg`,
      `${srcFolder}/img/**/*.png`,
      `${srcFolder}/img/**/*.svg`,
      `${srcFolder}/img/**/*.webp`,
    ],
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
}
