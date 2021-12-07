module.exports = {
    pwa: {
        name: 'vuestagramByTendergirl',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        workboxOptions: {
            exclude: [/\.map$/, /manifest\.json$/, 'index.html']
        }
    }
}