import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'
import autoPrefixer from 'gulp-autoprefixer'
import groupCssMediaQuiries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SCSS',
          massage: 'Error: <%= error.message%>',
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(app.plugins.ifPlugin(app.isBuild, groupCssMediaQuiries()))
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        autoPrefixer({
          grid: true,
          overrideBrowserlist: ['last 3 versions'],
          cascade: true,
        })
      )
    )
    .pipe(
      app.plugins.ifPlugin(
        app.isBuild,
        webpcss({
          webpClass: '.webp',
          noWebpClass: '.no-webp',
        })
      )
    )
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.ifPlugin(app.isBuild, cleanCss()))
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}
