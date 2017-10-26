// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        // to edit target browsers: use "browserlist" field in package.json
        postcss: [require('postcss-salad')({
            'browsers': [
                'ie > 8', 'last 20 versions'
            ]
        })]
    }
}