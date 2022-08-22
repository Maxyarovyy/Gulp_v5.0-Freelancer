export const server = (done) => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notufy: false,
    port: 3000,
  })
}
