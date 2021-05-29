// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");

module.exports = {
  siteUrl: "https://jordonleach.dev",
  siteName: "Jordo's territory",
  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind],
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        /* ... */
      });
  },
};
