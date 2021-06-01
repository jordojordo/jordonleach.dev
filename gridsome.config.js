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
