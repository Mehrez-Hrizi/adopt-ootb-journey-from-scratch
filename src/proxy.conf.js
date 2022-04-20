module.exports = [
    {
        context: '/auth',
        target: 'https://identity.prd.sdbx.live.backbaseservices.com/',
        secure: false,
        changeOrigin: true,
    },
    {
        context: '/api',
        target: 'https://app.prd.sdbx.live.backbaseservices.com',
        secure: false,
        changeOrigin: true,
    },
];