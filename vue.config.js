module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "./src/css/_variables.scss";

        `
      }
    }
  }
}
