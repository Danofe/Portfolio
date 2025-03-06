const { truncate } = require('node:fs')

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/",
    assetPrefix: "/public/images/",
    output: "export",  // <=== enables static exports
    reactStrictMode: false,
}

module.exports = {
    eslint: {
        ignoreDuringBuilds: true
    },    
    nextConfig
}
