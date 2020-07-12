const withPlugins = require("next-compose-plugins");
// const withTM = require("next-transpile-modules")(["reusecore", "common"]);
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
module.exports = withPlugins(
  [
    // [withTM],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: "default",
          quality: 90,
        },
      },
    ],
    withFonts,
    withCSS({
      cssLoaderOptions: {
        url: false,
      },
      env: {
        SERVER_URL: "http://localhost:1337/graphql",
        // AVATAR_URL:'https://api.adorable.io/avatars/285/',
        PLAIN_URL: "http://localhost:1337",
        // PLAIN_URL:"http://34.87.95.159/",
      },
    }),
  ]
  // {
  //   distDir: '../../dist/functions/next',
  // }
);
