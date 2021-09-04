const mix = require('laravel-mix')
require('laravel-mix-critical');

mix.critical({
    enabled: mix.inProduction(),
    urls: [
        { src: 'http://domain.com', dest: './css/home.critical.css' },
    ],
    options: {
        minify: true,
        width: 375,
        height: 667,
        inlineImages: true
    },
});
